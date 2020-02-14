var path = require('path')
var utils = require('./utils')
var config = require('../config')
var FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
var webpack = require('webpack')
var SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var CopyWebpackPlugin = require('copy-webpack-plugin')

const smp = new SpeedMeasurePlugin()
const { VueLoaderPlugin } = require('vue-loader')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const useThreadLoader = true
function threaded (arr) {
  if (useThreadLoader) {
    arr.unshift({
      loader: 'thread-loader',
      options: {
        workers: 2
      }
    })
  }
  return arr
}

module.exports = smp.wrap({
  target: 'web',
  entry: {
    app: ['@babel/polyfill', './src/main.ts']
  },
  externals: {
    config: 'config'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    chunkFilename: '[id].[hash:8].js'
  },
  optimization: {
    // usedExports: true,
    // concatenateModules: true,
    // minimize: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        cordova: {
          test: /\/services\/.*Cordova/,
          name: 'cordova-services',
          chunks: 'all'
        },
        web: {
          test: /\/services\/.*Web/,
          name: 'web-services',
          chunks: 'all'
        }
      },
    },
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx', '.csv', '.sass', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [{ // Documentation and changelog
      test: /(\.txt\.js|\.md)$/,
      loader: 'raw-loader'
    }, { // Translations
      test: /\.csv$/,
      loader: 'csv-loader',
      options: {
        header: false,
        skipEmptyLines: true
      }
    }, {
      test: /\.(js|vue)$/,
      use: threaded([{
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }]),
      enforce: 'pre',
      include: [resolve('src'), resolve('test')]
    }, {
      test: /\.tsx?$/,
      use: threaded([{
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          happyPackMode: true
        }
      }])
    }, {
      test: /\.js$/,
      use: threaded([{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }]),
      include: [resolve('src'), resolve('test')]
    }, {
      test: /\.css$/,
      use: threaded(['vue-style-loader', 'css-loader'])
    }, {
      test: /\.sass$/,
      use: threaded([
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            indentedSyntax: true,
            fiber: require('fibers')
          },
        }
      ])
    }, {
      test: /\.scss$/,
      use: threaded([
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
            fiber: require('fibers')
          },
        }
      ])
    }, { // static images like trellis logo
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.vue$/,
      use: threaded([{
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      }])
    }]
  },
  plugins: [
    new FilterWarningsPlugin({
      exclude: [/Critical dependency/, /mongodb/, /mssql/, /mysql/, /mysql2/, /oracledb/, /pg/, /pg-native/, /pg-query-stream/, /redis/, /react-native-sqlite-storage/, /sqlite3/]
    }),
    new VueLoaderPlugin(),
    new webpack.NormalModuleReplacementPlugin(/typeorm$/, function (result) {
      result.request = result.request.replace(/typeorm/, "typeorm/browser");
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    }),
    // copy custom static assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.build.assetsSubDirectory,
      ignore: ['.*']
    }]),
    new VuetifyLoaderPlugin()
  ]
})

// if (useThreadLoader) {
//   const threadLoader = require('thread-loader')
//   threadLoader.warmup({
//     workers: 2
//   })
// }

