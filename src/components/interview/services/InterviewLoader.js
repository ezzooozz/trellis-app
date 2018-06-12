import FormService from '../../../services/form/FormService'
import InterviewService from '../../../services/interview/InterviewService'
import InterviewActionsService from './interview-actions/InterviewActionsService'
import LocaleService from '../../../services/locale/LocaleService'
export default class InterviewLoader {

  /**
   * Get an object with the properties used to hydrate the interview
   * @param {Object} route - A vue-router route
   * @param {Function} progressCb - A function that is called each time progress is made
   * @returns {Promise<Object>}
   */
  static load (route, progressCb) {
    let p = []
    if (route.name === 'Interview') {
      p.push(InterviewLoader.loadInterview(route.params.interviewId, progressCb))
    } else {
      p.push(InterviewLoader.loadPreview(route.params.formId, progressCb))
    }
    p.push(InterviewLoader.loadLocale(route))
    return Promise.all(p).then(all => {
      let [results, locale] = all
      results.locale = locale
      return results
    }).then(res => {
      if (res.data) {
        for (let d of res.data.data) {
          for (let datum of d.data) {
            for (let key in datum) {
              if (datum[key] === null || datum[key] === undefined) {
                delete datum[key]
              }
            }
          }
        }
      }
      res.data = res.data.data || []
      res.conditionTags = res.data.conditionTags || {}
      res.interview = res.interview || {
        id: 'Preview ID',
        survey: {
          respondent_id: 'Preview respondent id'
        }
      }
      res.actions = res.actions || []
      res.interviewType = route.name === 'Interview' ? 'interview' : 'preview'
      return res
    })
  }

  /**
   * Load everything needed for the preview view
   * @param {String} formId - The id for the form
   * @param {Function} progressCb - Called when a single step of progress is made
   * @returns {Promise<Object>}
   */
  static loadPreview (formId, progressCb) {
    let promises = []
    let results = {}
    promises.push(FormService.getForm(formId).then(form => {
      progressCb(1)
      results.form = form
      return form
    }))

    return Promise.all(promises).then(all => {
      return results
    })
  }

  /**
   * Load all of the data needed for an interview
   * @param {String} interviewId - The id for the interview
   * @param {Function} progressCb - Callback for progress updates
   * @returns {{data: <Array>}}
   */
  static loadInterview (interviewId, progressCb) {
    let results = {}
    let steps = 5
    let currentStep = 0
    return InterviewService.getInterview(interviewId).then(interview => {
      results.interview = interview
      currentStep++
      progressCb(currentStep / steps)
      return Promise.all([
        InterviewActionsService.getActions(interviewId).then(actions => {
          results.actions = actions
          currentStep++
          progressCb(currentStep / steps)
        }).catch(() => {
          // throw new Error('Could not contact interview actions service: ' + err)
        }),
        InterviewService.getData(interviewId).then(data => {
          results.data = data
          currentStep++
          progressCb(currentStep / steps)
        }).catch(() => {
          // throw new Error('Could not contact interview data service: ' + err)
        }),
        FormService.getForm(interview.survey.form_id).then(form => {
          results.form = form
          currentStep++
          progressCb(currentStep / steps)
        })
      ]).then(() => {
        return results
      })
    })
  }

  /**
   * Load the locale if it is present in the route. Otherwise return the current locale
   * @param {Object} route - A valid vue-router route
   * @returns {Promise<Object>}
   */
  static loadLocale (route) {
    if (route.params.locale) {
      return LocaleService.getLocaleById(route.params.locale)
    } else {
      return new Promise(resolve => {
        resolve(LocaleService.getCurrentLocale())
      })
    }
  }
}
