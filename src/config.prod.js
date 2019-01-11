import constants from './static/constants'

const config = {
  appEnv: (typeof cordova === 'object') ? constants.APP_ENV.CORDOVA : constants.APP_ENV.WEB,
  appMode: constants.APP_MODE.PROD,
  xKey: '***REMOVED***',
  apiRoot: 'https://api.***REMOVED***',
  database: {
    logging: ['warning', 'error']
  }
}

export default config