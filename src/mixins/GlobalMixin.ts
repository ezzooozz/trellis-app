import config from '../config'
import {APP_ENV} from '../static/constants'
import Vue from 'vue'
import {defaultLoggingService} from '../services/logging/LoggingService'
import Log from "../entities/trellis-config/Log";

export default Vue.mixin({
  methods: {
    log (log: any): Promise<Log> {
      if (log && !log.component) {
        log.component = this.$options.name
      }
      return defaultLoggingService.log(log)
    }
  },
  computed: {
    isWeb (): boolean {
      return config.appEnv === APP_ENV.WEB
    },
    isCordova (): boolean {
      return config.appEnv === APP_ENV.CORDOVA
    }
  }
})

declare module 'vue/types/vue' {
  interface Vue {
    log (log: any): Promise<Log>
    isWeb: boolean
    isCordova: boolean
  }
}
