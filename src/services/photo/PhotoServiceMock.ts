import MockService from '../mock/MockService'
import GeneratorService from '../mock/GeneratorService'
import PhotoServiceInterface from "./PhotoServiceInterface";

const photoProviderUrl = 'https://source.unsplash.com/random'
const WORDS = ['woman', 'man', 'cat']
const cache = {}
export default class PhotoServiceMock implements PhotoServiceInterface{
  static DELAY = 500
  static FAILURE_RATE = 0.1

  cancelAllOutstanding () {}

  getPhotoSrc (photoId) {
    return MockService.randomlyFail(resolve => {
      if (!cache[photoId]) {
        cache[photoId] = photoProviderUrl + '/400x300/?' + GeneratorService.randomSelectMinMax(WORDS, 3, 1).join(',')
      }
      return resolve(cache[photoId])
    }, PhotoServiceMock.DELAY, PhotoServiceMock.FAILURE_RATE)
  }
}