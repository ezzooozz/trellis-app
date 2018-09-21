import {AssignerFunction, RelationshipOpts} from '../entities/decorators/WebOrmDecorators'
import {copyDate} from './DateService'
import moment from 'moment'

/**
 * Convert a camel case string into snake case
 * @param {string} str
 * @returns {string}
 */
export function camelToSnake (str: string) {
  let snake = ''
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    snake += char === char.toUpperCase() ? ((i > 0) ? `_${char.toLowerCase()}` : `${char.toLowerCase()}`) : char
  }
  return snake
}

/**
 * Convert a snake case string into camel case
 * @param {string} str
 * @returns {string}
 */
export function snakeToCamel (str: string) {
  const sections = str.split('_')
  return sections.map((s, i) => {
    if (i) {
      return s[0].toUpperCase() + s.substr(1) // Make first letter uppercase
    }
    return s
  }).join('')
}

/**
 * Converts all properties to snake case and returns
 * @returns {object}
 */
export function toJSONSnake (obj: object) {
  const props = Object.getOwnPropertyNames(obj)
  let o = {}
  for (let prop of props) {
    let snake = camelToSnake(prop)
    o[snake] = obj[prop]
  }
  return JSON.stringify(o)
}


/**
 * Take a generic object and assign all properties to this object using camel case property names. If the map is an
 * object, then the key is the sourceKey and the value is the targetKey. If the map is an array, then each value is
 * assumed to be the sourceKey and the
 * @param {object} target
 * @param {object} source
 * @param {object | string[]} map
 */
export function mapPropsFromJSON (target: object, source: object, map?: object | string[]) {
  if (Array.isArray(map)) {
    for (let sourceKey of map) {
      let camel = snakeToCamel(sourceKey)
      target[camel] = source[sourceKey]
    }
  } else if (typeof map === 'object') {
    for (let sourceKey in map) {
      target[map[sourceKey]] = source[sourceKey]
    }
  } else {
    for (let sourceKey in source) {
      let camel = snakeToCamel(sourceKey)
      target[camel] = source[sourceKey]
    }
  }
}

/**
 * Take a snake key for the json source and apply it to the target (in camel case) if the property is defined. If the
 * the source is an Array, the map method will be used to map each member of the array to the appropriate class.
 * @param {object} target
 * @param {object} source
 * @param {object} keyMap
 */
export function mapFromSnakeJSON (target: object, source: object, keyMap: object) {
  for (let targetKey in keyMap) {
    let opts = keyMap[targetKey] as RelationshipOpts
    getSnakeAssignmentFunc(targetKey, opts)(target, source)
  }
}

/**
 * Create a function which will assign the relationship to the source object when it is called
 * @param {string} sourceKey
 * @param {string} targetKey
 * @param {RelationshipOpts} opts
 * @returns {AssignerFunction}
 */
export function getSnakeAssignmentFunc (targetKey: string, opts: RelationshipOpts): AssignerFunction {

  if (opts.hasOwnProperty('constructor') && !opts.constructor) {
    debugger
  }

  function assign (key: string, to: object, value: any): void {
    if (typeof opts === 'object' && opts.async) {
      Object.defineProperty(to, key, {
        get () {
          return new Promise(resolve => resolve(value))
        }
      })
    } else {
      to[key] = value
    }
  }

  return function Assigner (to, from) {
    let generator
    let sourceKey = camelToSnake(targetKey)
    if (typeof opts === 'object') {
      generator = opts.hasOwnProperty('constructor') ? s => {
        let constructor = opts.constructor()
        // @ts-ignore
        let d = new constructor()
        return d.fromSnakeJSON ? d.fromSnakeJSON(s): d
      } : opts.generator
      if (opts.jsonKey) sourceKey = opts.jsonKey
    } else if (typeof opts === 'function') {
      // @ts-ignore
      generator = s => new opts().fromSnakeJSON(s)
    }
    if (from[sourceKey] !== null && from[sourceKey] !== undefined) {
      assign(targetKey, to, Array.isArray(from[sourceKey]) ? from[sourceKey].map(generator) : generator(from[sourceKey]))
    }
  }

}

/**
 * Map an objects camel case properties to a plain object using snake case
 * @param {object} source
 * @param {string[] | object} keyMap
 * @returns {object}
 */
export function mapCamelToPlain (source: any, skipSnakeJSON = false, keyMap?: string[]|object): object {
  if (source == null) return null
  keyMap = keyMap || Array.from(Object.keys(source))
  if (Array.isArray(source)) {
    return source.map(o => mapCamelToPlain(o))
  } else if (typeof source === 'object') {
    if (!skipSnakeJSON && 'toSnakeJSON' in source) {
      return source.toSnakeJSON()
    } else if ('toJSON' in source) {
      return source.toJSON()
    } else {
      let d = {}
      if (Array.isArray(keyMap)) {
        for (let sourceKey of keyMap) {
          let targetKey = camelToSnake(sourceKey)
          d[targetKey] = mapCamelToPlain(source[sourceKey])
        }
      } else {
        for (let sourceKey in keyMap) {
          let targetKey = keyMap[sourceKey]
          d[targetKey] = mapCamelToPlain(source[sourceKey])
        }
      }
      return d
    }
  } else {
    return source
  }
}

/**
 * Recursive, deep copy of any object
 * @param obj
 * @returns {any}
 */
export function deepCopy (obj: any, copySelf: boolean = false): any {
  if (obj === null || obj === undefined) {
    return obj
  } else if (Array.isArray(obj)) {
    return obj.map(o => deepCopy(o, true))
  } else if (moment.isMoment(obj) || moment.isDate(obj)) {
    return copyDate(obj)
  } else if (typeof obj === 'object') {
    if (obj.copy && copySelf) {
      return obj.copy()
    } else if (obj.constructor) {
      let d = new obj.constructor()
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          d[key] = deepCopy(obj[key], true)
        }
      }
      return d
    } else {
      return Object.assign({}, obj)
    }
  } else {
    return obj
  }
}
