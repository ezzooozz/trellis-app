require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var fs = require('fs')
var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.mobile.conf')
const exec = require('child_process').exec;

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: console.log
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

app.get('/cordova.js', function (req, res) {
  if (req.hostname.includes('localhost')) {
    res.send(new Error('Not a device.'))
  } else {
    fs.readFile('platforms/android/platform_www/cordova.js', function (err, data) {
      if (err) {
        res.send(err)
        console.error(err)
      } else {
        res.send(data)
      }
    })
  }
})

app.get('/cordova_plugins.js', function (req, res) {
  fs.readFile('platforms/android/platform_www/cordova_plugins.js', function (err, data) {
    if (err) {
      res.send(err)
      console.error(err)
    } else {
      res.send(data)
    }
  })
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

app.use('/plugins', express.static('./platforms/android/platform_www/plugins'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('compiling mobile app')
  var code = exec('cordova run android', {}, () => {
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    _resolve()
  })
  function filteredLog () {
    if (arguments.length) {
      if (arguments[0].replace(/\s/g, '').length) {
        console.log.apply(console, arguments)
      }
    }
  }
  code.stdout.on('data', filteredLog);
  code.stderr.on('data', filteredLog);
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
