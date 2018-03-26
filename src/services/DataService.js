import axios from 'axios'
import config from '../config'
import storage from './StorageService'
class DataService {
  constructor () {
    this.instance = axios.create({
      baseURL: config.apiRoot,
      timeout: 20000,
      headers: {'X-Key': config.xKey}
    })
  }
  getLocales () {
    let studyId = storage.get('studyId', 'string')
    return this.instance.get(`study/${studyId}/locales`)
      .then(response => {
        return response.data.locales
      })
      .catch(err => {
        console.error(err)
        throw err
      })
  }
  getForm (formId) {
    return this.instance.get(`form/${formId}/structure`)
      .then(function (response) {
        return response.data
      })
      .catch(function (err) {
        console.log('error', err)
        throw err
      })
  }
  getConditions (respondentId, formId, sectionId) {
    return Promise.all([
      this.instance.get(`conditions/respondent/${respondentId}`),
      this.instance.get(`conditions/form/${formId}`),
      this.instance.get(`conditions/section/${sectionId}`)
    ])
      .then(function (conditions) {
        let {respondentConditions, formConditions, sectionConditions} = conditions
        respondentConditions = respondentConditions.forEach(c => { c.type = 'respondent' })
        formConditions = formConditions.forEach(c => { c.type = 'form' })
        sectionConditions = sectionConditions.forEach(c => { c.type = 'section' })
        return respondentConditions.concat(formConditions.concat(sectionConditions))
      })
      .catch(function (err) {
        console.error(err)
        throw err
      })
  }
  getActionTypes (formId) {
    return this.instance.get('form/action-types')
      .then(function (response) {
        return response.data
      })
      .catch(function (err) {
        console.log('error', err)
        throw err
      })
  }
}

export default new DataService()
