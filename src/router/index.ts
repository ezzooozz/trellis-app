import Vue from 'vue'
import Router from 'vue-router'
import { defaultLoggingService as logger } from '../services/logging/LoggingService'
import singleton from '../static/singleton'
import ValidateSync from './guards/ValidateSync'
import ValidateLogin from './guards/ValidateLogin'
import chain from './guards/ChainableGuards'

import appRoutes from './app.routes'
import { RouteQueue } from './RouteQueue'
import webRoutes from './web.routes'
import sharedRoutes from './shared.routes'
import { LoggingLevel } from '../services/logging/LoggingTypes'
// @ts-ignore
import { AddSnack } from '../components/SnackbarQueue'
import PhotoService from '../services/photo/PhotoService'

let routes = sharedRoutes
if (singleton.offline) {
  routes = routes.concat(appRoutes)
} else {
  routes = routes.concat(webRoutes)
}

console.log('Routes', routes)

Vue.use(Router)

export const router = new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export const routeQueue = new RouteQueue(router, { name: 'Home' })

// If we're in offline mode, require that the application is synced
if (singleton.offline) {
  router.beforeEach(chain(ValidateSync, ValidateLogin))
}

router.beforeEach((to, from, next) => {
  // Don't let photo requests prevent navigation from happening by cancelling outstanding requests
  PhotoService.cancelAllOutstanding()
  if (to.name !== from.name) {
    // Moving to new page, loading
    singleton.loading.indeterminate = true
    singleton.loading.active = true
  }
  console.log('before route', to.name, from.name)
  logger.log({
    component: 'router/index.js@beforeEach',
    message: `before navigating to: ${to.fullPath}`,
    severity: LoggingLevel.debug
  })
  setTimeout(next)
})

router.afterEach((to) => {
  singleton.loading.active = false
  logger.log({
    component: 'router/index.js@afterEach',
    message: `after navigating to: ${to.fullPath}`,
    severity: LoggingLevel.debug
  })
})

router.onReady(() => {
  logger.log({
    component: 'router/index.js@onReady',
    message: 'onReady',
    severity: LoggingLevel.debug
  })
})

router.onError(err => {
  err.severity = LoggingLevel.error
  err.component = err.component ? err.component : 'router/index.js@onError'
  logger.log(err)
  AddSnack('Unable to load route', {timeout: 0})
  singleton.loading.active = false
  throw err
})

/**
 * Returns a Promise that can be awaited to determine if the router is ready. This is used primarily to ensure that
 */
export function routerReady () {
  return new Promise(resolve => {
    function check () {
      console.log('checking if router ready')
      // @ts-ignore
      if (router.history.ready) {
        clearInterval(intervalId)
        clearTimeout(timeoutId)
        resolve(true)
      }
    }
    const intervalId = setInterval(check, 100)
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId)
      resolve(false)
    }, 20000)
    check()
  })
}

export default router
