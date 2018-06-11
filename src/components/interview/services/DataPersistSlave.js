import PersistSlave from '../../../classes/PersistSlave'
import InterviewData from './interview-data/InterviewDataService'
import DiffService from './DiffService'

/**
 * Create a persist slave for a DataStore that uses the InterviewDataService to sync up data using delta encoding
 * @param {DataStore} dataStore - The datastore object to watch for changes
 * @param {Number} [throttleRate = 10000] - How often should we make requests to store the data (milliseconds)
 * @returns {PersistSlave}
 */
export default function dataPersistSlave (dataStore, throttleRate = 10000) {
  function dataExtractor () {
    return {
      data: dataStore.data,
      conditionTags: dataStore.conditionTags
    }
  }
  function saveData (newState, prevState) {
    function transformRespondentTag (tag) {
      tag.condition_tag_id = tag.condition_id
      delete tag.condition_id
      return tag
    }
    newState.conditionTags.respondent = newState.conditionTags.respondent.map(transformRespondentTag)
    prevState.conditionTags.respondent = prevState.conditionTags.respondent.map(transformRespondentTag)
    let diff = {
      data: DiffService.dataDiff(newState.data, prevState.data),
      conditionTags: DiffService.conditionTagsDiff(newState.conditionTags, prevState.conditionTags)
    }
    console.log('saving data', JSON.stringify(newState, null, 2))
    return InterviewData.sendDiff(diff)
  }
  function shouldSave (newState, prevState) {
    return true
  }

  return new PersistSlave(dataStore, dataExtractor, saveData, shouldSave, throttleRate)
}
