import switchByModeEnv from '@/services/util'
import RespondentServiceWeb from './RespondentServiceWeb'
import RespondentServiceCordova from './RespondentServiceCordova'
import RespondentServiceMock from './RespondentServiceMock'

let Constructor = switchByModeEnv({
  WEB: {
    PROD: RespondentServiceWeb,
    TEST: RespondentServiceWeb
  },
  CORDOVA: {
    PROD: RespondentServiceCordova,
    TEST: RespondentServiceMock
  }
})

export const RespondentService = Constructor

export default RespondentService
