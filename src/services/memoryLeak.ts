import config from '../config'
const leak: any = {}

function closure (obj: any) {
  if (!leak.objs) {
    leak.objs = []
  }
  leak.objs.push(obj)
  return function () {
    leak['' + Math.random()] = obj 
  }
}

export function makeLeak (bytes: number) {
  let i = 0
  while (i < bytes) {
    closure(document.body)
    i++
  }
}

export function clearLeak () {
  for (let key in leak) {
    delete leak[key]
  }
}

if (config.debug) {
  // @ts-ignore
  window.memoryLeaker = leak
  // @ts-ignore
  window.makeLeak = makeLeak
  // @ts-ignore
  window.clearLeak = clearLeak
}
