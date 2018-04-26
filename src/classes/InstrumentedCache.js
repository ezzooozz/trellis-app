export default class SizeLimitedMap {
  /**
   * An instrumented map which keeps track of the approximate size of our map and evicts the last used values first. It
   * has pretty much the same interface as the ECMAScript 6 Map
   * @param maxByteSize
   */
  constructor (maxByteSize = 10000) {
    this.map = new Map()
    this.meta = {}
    this.size = 0
    this.length = 0
    this.byteSize = 0
    this.maxByteSize = maxByteSize
    this.has = this.map.has.bind(this.map)
    this.entries = this.map.has.bind(this.map)
    this.forEach = this.map.forEach.bind(this.map)
    this.keys = this.map.keys.bind(this.map)
  }

  get (key) {
    this.meta[key].touched = Date.now()
    return this.map.get(key)
  }

  set (key, val) {
    this.map.set(key, val)
    let size = SizeLimitedMap.roughSizeOfObject(key) + SizeLimitedMap.roughSizeOfObject(val)
    this.meta[key] = {
      touched: Date.now(),
      size: size
    }
    this.byteSize += size
    if (this.byteSize > this.maxByteSize) {
      this._evict()
    }
  }

  delete (key) {
    let meta = this.meta[key]
    this.map.delete(key)
    delete this.meta[key]
    this.byteSize -= meta.size
  }

  _evict () {
    let keyOrder = Object.keys(this.meta).map(key => ({
      key: key,
      date: this.meta[key].touched
    })).sort(function (a, b) {
      return b.date - a.date
    })
    while ((this.byteSize - (this.maxByteSize / 10)) > this.maxByteSize) {
      let next = keyOrder.pop()
      this.delete(next.key)
    }
  }

}

SizeLimitedMap.roughSizeOfObject = function (object) {
  let objectList = []
  let stack = [object]
  let bytes = 0

  while (stack.length) {
    let value = stack.pop()

    if (typeof value === 'boolean') {
      bytes += 4
    } else if (typeof value === 'string') {
      bytes += value.length * 2
    } else if (typeof value === 'number') {
      bytes += 8
    } else if (typeof value === 'object' && objectList.indexOf(value) === -1) {
      objectList.push(value)
      for (let i in value) {
        stack.push(value[i])
      }
    }
  }
  return bytes
}
