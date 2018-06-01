import http from '../http/AxiosInstance'
export default class SurveyService {
  /**
   * Get all of the forms for a respondent in this study
   * @param {String} studyId - The study id
   * @param {String} respondentId - The respondent id
   * @returns {Promise<Array>}
   */
  static getRespondentSurveys (studyId, respondentId) {
    studyId = encodeURIComponent(studyId)
    respondentId = encodeURIComponent(respondentId)
    return http().get(`study/${studyId}/respondent/${respondentId}/surveys`).then(res => {
      if (res.data.surveys) {
        return res.data.surveys
      } else {
        throw Error('Unable to load surveys')
      }
    })
  }

  /**
   * Create a new survey
   * @param {String} studyId
   * @param {String} formId
   * @returns {*|AxiosPromise<any>}
   */
  static create (studyId, formId) {
    studyId = encodeURIComponent(studyId)
    formId = encodeURIComponent(formId)
    return http().post(`study/${studyId}/form/${formId}/survey`).then(res => {
      return res.data.survey
    })
  }
}
