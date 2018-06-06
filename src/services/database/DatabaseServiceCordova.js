import { DeviceService } from '@/services/device/DeviceService'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import ConfigEntity from './entities/trellis-config/ConfigTable'
import MessageEntity from './entities/trellis-config/Message'
import SyncEntity from './entities/trellis-config/SyncTable'
import UpdatedRecordsEntity from './entities/trellis-config/UpdatedRecords'
import Papa from 'papaparse'

export default class DatabaseServiceCordova {
  constructor () {
    this.configDatabaseConnection = null
    this.configIsReady = false
    this.databaseConnection = null
    this.isReady = false
    DeviceService.isDeviceReady().then(
      () => {
        this.initConfigDatabase()
        this.initDatabase()
      }
    )
  }

  getDatabase () {
    return new Promise(resolve => {
      const checkReady = () => {
        if (this.isReady) {
          resolve(this.databaseConnection)
        } else {
          setTimeout(checkReady)
        }
      }
      checkReady()
    })
  }

  getConfigDatabase () {
    return new Promise(resolve => {
      const checkReady = () => {
        if (this.configIsReady) {
          resolve(this.configDatabaseConnection)
        } else {
          setTimeout(checkReady)
        }
      }
      checkReady()
    })
  }

  removeDatabase () {
    // In Cordova we'll delete the sqlite file and create a new database
    return new Promise((resolve, reject) => {
      this.getDatabase()
        .then((connection) => {
          console.log('removeDatabase', connection)
          connection.createQueryRunner()
            .dropDatabase('trellis', true)
          resolve()
        })
    })
  }

  importDatabase (extractedSnapshot, trackProgress) {
    return new Promise((resolve, reject) => {
      if (!extractedSnapshot) {
        reject('No extracted snapshot provided')
      }
      this.getDatabase()
        .then((connection) => {
          console.log('importDatabase', connection)
          extractedSnapshot.file((file) => {
            console.log('file', file)
            let bytesParsed = 0
            Papa.parse(file, {
              delimiter: ';',
              escapeChar: '#',
              worker: true,
              skipEmptyLines: true,
              step: function (results) {
                console.log('results', results)
                bytesParsed += results.length
                trackProgress({inserted: bytesParsed, total: file.size})
              },
              complete: function () {
                console.log('complete')
                resolve()
              },
              error: function (error) {
                console.error(error)
                reject(error)
              }
            })
          })
        })
    })
  }

  removeTable (tableName, tx) {
    return new Promise((resolve, reject) => {
      console.log(`Dropping table ${tableName}`)
      tx.executeSql(`drop table ${tableName}`, [], () => {
        console.log(`Table ${tableName} dropped`)
        resolve()
      },
      (error) => {
        reject(error)
      })
    })
  }

  initConfigDatabase () {
    createConnection({
      type: 'cordova',
      database: 'trellis-config',
      location: 'default',
      entities: [
        ConfigEntity,
        MessageEntity,
        SyncEntity,
        UpdatedRecordsEntity
      ],
      logging: true,
      synchronize: true
    }).then(async connection => {
      console.log(connection)
      this.configDatabaseConnection = connection
      this.configIsReady = true
    })
  }

  initDatabase () {
    createConnection({
      type: 'cordova',
      database: 'trellis',
      location: 'default',
      entities: [
      ],
      logging: true,
      synchronize: true
    }).then(async connection => {
      console.log(connection)
      this.databaseConnection = connection
      this.isReady = true
    })
  }

  getLatestDownload () {
    return new Promise((resolve, reject) => {
      this.getConfigDatabase().then((connection) =>
        connection.getRepository('Sync')
          .createQueryBuilder('sync')
          .where('type = :type', { type: 'download' })
          .where('status = :status', { status: 'success' })
          .orderBy('sync.createdAt', 'DESC')
          .limit(1)
          .getOne()
          .then(
            (lastDownload) => resolve(lastDownload),
            (error) => reject(error)
          )
      )
    })
  }

  getLatestUpload () {
    return new Promise((resolve, reject) => {
      this.getConfigDatabase().then((connection) =>
        connection.getRepository('Sync')
          .createQueryBuilder('sync')
          .where('type = :type', { type: 'upload' })
          .where('status = :status', { status: 'success' })
          .orderBy('sync.created_at', 'DESC')
          .limit(1)
          .getOne()
          .then(
            (lastUpload) => resolve(lastUpload),
            (error) => reject(error)
          )
      )
    })
  }

  getUpdatedRecordsCount () {
    return new Promise((resolve, reject) => {
      this.getConfigDatabase().then((connection) => {
        connection.getRepository('UpdatedRecords')
          .createQueryBuilder('updated_records')
          .select('count(*)', 'count')
          .getRawOne()
          .then((result) => {
            console.log('getUpdatedRecordsCount', result.count)
            resolve(result.count)
          }, (error) => reject(error))
      })
    })
  }
}
