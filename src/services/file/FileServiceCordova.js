import { DeviceService } from '../device/DeviceService'
import md5 from 'js-md5'

class FileServiceCordova {

  requestFileSystem (_options) {
    return new Promise((resolve, reject) => {
      let options = _options
      if (!options) {
        options = FileServiceCordova.getDefaultRequestFileSystemOptions()
      }
      DeviceService.isDeviceReady().then(
        () => {
          window.requestFileSystem(options.storageType, options.requestedBytes,
            function (fileSystem) {
              resolve(fileSystem)
            },
            function (error) {
              reject(error)
            })
        }
      )
    })
  }

  getDirectoryEntry (fileSystem, directory, _options) {
    return new Promise((resolve, reject) => {
      let options = _options
      if (!options) {
        options = FileServiceCordova.getDefaultGetDirectoryEntryOptions()
      }
      fileSystem.root.getDirectory(directory, options,
        (directoryEntry) => resolve(directoryEntry),
        (error) => reject(error)
      )
    })
  }

  getFileEntry (directoryEntry, fileName, _options) {
    return new Promise((resolve, reject) => {
      let options = _options
      if (!options) {
        options = FileServiceCordova.getDefaultGetFileEntryOptions()
      }
      directoryEntry.getFile(fileName, options,
        (fileEntry) => resolve(fileEntry),
        (error) => reject(error)
      )
    })
  }

  writeFile (directory, file, fileName, fileSize, storageType = 'PERSISTENT', create = true, exclusive = false) {
    let requestFileSystemOptions = {
      'storageType': (storageType === 'PERSISTENT') ? window.PERSISTENT : window.TEMPORARY,
      'requestedBytes': fileSize
    }
    return this.requestFileSystem(requestFileSystemOptions)
      .then((fileSystem) => this.getDirectoryEntry(fileSystem, directory))
      .then((directoryEntry) => this.getFileEntry(directoryEntry, fileName))
      .then((fileEntry) => new Promise((resolve, reject) => {
        fileEntry.createWriter(
          function (fileWriter) {
            fileWriter.onwriteend = function () {
              resolve(fileEntry)
            }
            fileWriter.onerror = function (error) {
              reject(error)
            }
            fileWriter.write(file)
          },
          function (error) {
            reject(error)
          })
      })
    )
  }

  listFiles () {
    this.requestFileSystem()
      .then((fs) => {
        fs.root.getDirectory('/')
          .readEntries((entries) => {
            entries.forEach((entry) => {
              console.log('entry', entry)
            })
          })
      })
  }

  calculateMD5Hash (fileEntry) {
    return new Promise((resolve, reject) => {
      DeviceService.isDeviceReady()
        .then(() => {
          fileEntry.file((file) => {
            let reader = new FileReader()
            reader.onloadend = function () {
              let file = this.result
              let md5Hash = md5(file)
              resolve(md5Hash)
            }
            reader.onerror = function (error) {
              reject(error)
            }
            reader.readAsArrayBuffer(file)
          })
        })
    })
  }

  static getDefaultRequestFileSystemOptions () {
    return {
      storageType: window.PERSISTENT,
      requestedBytes: (1024 * 1024 * 10)
    }
  }

  static getDefaultGetFileEntryOptions () {
    return {
      create: true,
      exclusive: false
    }
  }

  static getDefaultGetDirectoryEntryOptions () {
    return {
      create: true,
      exclusive: false
    }
  }
}

export default FileServiceCordova