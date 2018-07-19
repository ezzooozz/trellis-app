import { DeviceService } from '@/services/device/DeviceService'
import { syncInstance as http } from '../../../services/http/AxiosInstance'

'@/services/http/AxiosInstance'
class SyncService {
  constructor () {
    this.synced = false
    this.deviceId = DeviceService.getUUID()
  }
  getHeartbeat (source) {
    let options = {}
    if (source) { options.cancelToken = source.token }
    return http.get(`heartbeat`, options)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.error(err)
        throw err
      })
  }
  authenticate (source, deviceId) {
    let options = {}
    if (source) { options.cancelToken = source.token }
    return http.get(`device/${deviceId}/syncv2/authenticate`, options)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.error(err)
        throw err
      })
  }
  getLatestSnapshot (source) {
    return new Promise((resolve, reject) => {
      DeviceService.getUUID()
        .then((deviceId) => {
          let options = {}
          if (source) { options.cancelToken = source.token }
          http.get(`device/${deviceId}/syncv2/snapshot`, options)
            .then(response => {
              resolve(response.data)
            })
            .catch((error) => {
              reject(error)
            })
        })
    })
  }
  getSnapshotFileSize (source, snapshotId) {
    let options = {}
    if (source) { options.cancelToken = source.token }
    return http.get(`snapshot/${snapshotId}/file_size`, options)
      .then(response => {
        console.log('response', response)
        return response.data
      })
      .catch(err => {
        console.error(err)
        throw err
      })
  }
  getImageFileList (source) {
    let options = {}
    if (source) { options.cancelToken = source.token }
    return new Promise((resolve, reject) => {
      DeviceService.getUUID()
        .then((deviceId) => {
          http.get(`device/${deviceId}/image`, options)
            .then(response => {
              console.log('response', response)
              resolve(response.data)
            })
        })
        .catch(err => {
          console.error(err)
          reject(err)
        })
    })
  }
  downloadSnapshot (source, onDownloadProgress, snapshotId) {
    let options = {
      timeout: 0,
      responseType: 'blob'
    }
    if (source) { options.cancelToken = source.token }
    if (onDownloadProgress) { options.onDownloadProgress = onDownloadProgress }
    return http.get(`snapshot/${snapshotId}/download`, options)
      .then(response => {
        console.log('response', response)
        return response
      })
      .catch(err => {
        console.error(err)
        throw err
      })
  }
  hasSynced () {
    return this.synced
  }
}

export default new SyncService()
