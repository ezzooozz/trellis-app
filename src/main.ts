// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import './timeoutTracker'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueCordova from 'vue-cordova'
import VueHead from 'vue-head'
import i18n from './i18n/index'
import './mixins/GlobalMixin'
import 'typeface-roboto/index.css'
import 'material-design-icons-iconfont'
// @ts-ignore
import Debug from './components/Debug'
// @ts-ignore
import WebApp from './WebApp'
import router from './router'

import config from './config'
import theme from './static/theme'
import {APP_ENV} from './static/constants'
import {defaultLoggingService} from './services/logging/LoggingService'
import {LoggingLevel} from './services/logging/LoggingTypes'

if (!config.debug) {
  window.addEventListener('error', function unhandledError (e: ErrorEvent) {
    const error: Error = e.error
    const message = error.message
    defaultLoggingService.log({
      severity: LoggingLevel.error,
      message,
      component: `main.js@unhandledError`,
      error
    })
  })
  window.addEventListener('unhandledrejection', function unhandledRejection (e: PromiseRejectionEvent) {
    defaultLoggingService.log({
      severity: LoggingLevel.error,
      message: e.reason instanceof Error ? e.reason.message : e.reason,
      component: 'main.js@unhandledRejection',
      error: e.reason
    })
  })
  Vue.config.errorHandler = function (err: Error, vm: Vue, info: string) {
    defaultLoggingService.log({
      severity: LoggingLevel.error,
      message: info,
      component: `main.ts@Vue.config.errorHandler for ${vm['name']}`,
      error: err
    })
  }
}

Vue.use(Vuetify, theme)
Vue.config.productionTip = false
Vue.use(VueHead)
if (config.appEnv === APP_ENV.CORDOVA) {
  Vue.use(VueCordova)
}
Vue.component('debug', Debug)

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  i18n,
  template: '<WebApp />',
  components: {
    WebApp
  },
  // @ts-ignore
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      }
    ]
  }
})
