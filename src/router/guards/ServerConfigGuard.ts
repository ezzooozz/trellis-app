import DatabaseService from '../../services/database/DatabaseService'
import { GuardConfig } from '../GuardQueue'

export default {
  name: 'ServerConfigGuard',
  async condition (to) {
    const ipAddress = await DatabaseService.getServerIPAddress()
    return ipAddress && ipAddress.length
  },
  redirect () {
    return { name: 'ConfigureServer' }
  }
} as GuardConfig
