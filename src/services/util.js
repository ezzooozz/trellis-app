import config from '../config'
import {APP_ENV, APP_MODE} from '../static/constants'
export function switchByModeEnv (args) {
  if (config.appEnv === APP_ENV.CORDOVA) {
    if (config.appMode === APP_MODE.PROD) {
      return args.CORDOVA && args.CORDOVA.PROD ? args.CORDOVA.PROD : args.CORDOVA
    } else {
      return args.CORDOVA && args.CORDOVA.TEST ? args.CORDOVA.TEST : args.CORDOVA
    }
  } else {
    if (config.appMode === APP_MODE.PROD) {
      return args.WEB && args.WEB.PROD ? args.WEB.PROD : args.WEB
    } else {
      return args.WEB && args.WEB.TEST ? args.WEB.TEST : args.WEB
    }
  }
}
export default switchByModeEnv
