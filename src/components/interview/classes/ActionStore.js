import Emitter from '../../../classes/Emitter'
import uuidv4 from 'uuid/v4'
import SortedArray from '../../../classes/SortedArray'
import {now, parseDate} from '../../../services/DateService'

/**
 * Creates an ordered store that keeps the actions sorted following the order of the form. Actions are accessible via
 * the actions property.
 * @param {Object} blueprint - The form blueprint to use
 */
export default class ActionStore extends Emitter {
  constructor (blueprint) {
    super()
    this._createPageAndSectionIndexes(blueprint)
    this.sortedStore = new SortedArray((a, b) => {
      if (a.question_id && b.question_id) {
        let sectionA = this.getActionSection(a)
        let sectionB = this.getActionSection(b)
        if (sectionA === sectionB) {
          if (a.section_repetition === b.section_repetition) {
            if (a.section_follow_up_repetition === b.section_follow_up_repetition) {
              let pageA = this.getActionPage(a)
              let pageB = this.getActionPage(b)
              if (pageA === pageB) {
                return a.created_at - b.created_at
              } else {
                return pageA - pageB
              }
            } else {
              return a.section_follow_up_repetition - b.section_follow_up_repetition
            }
          } else {
            return a.section_repetition - b.section_repetition
          }
        } else {
          return sectionA - sectionB
        }
      } else {
        return (b.question_id != null) - (a.question_id != null)
      }
    })
    this.store = []
    this.questionIndex = new Map()
  }

  /**
   * Emit the initial state to any subscribers
   */
  initialize () {
    this.emit('initialState', this.store)
  }

  /**
   * Create indexes for both the form pages and sections. Improves sort performance.
   * @param {Object} blueprint - A sorted blueprint
   */
  _createPageAndSectionIndexes (blueprint) {
    this.questionToPageIndex = new Map()
    this.questionToSectionIndex = new Map()
    for (let s = 0; s < blueprint.sections.length; s++) {
      console.log('action section sort order', blueprint.sections[s].form_sections[0].sort_order)
      for (let p = 0; p < blueprint.sections[s].question_groups.length; p++) {
        console.log('action page sort order', blueprint.sections[s].question_groups[p].pivot.question_group_order)
        for (let question of blueprint.sections[s].question_groups[p].questions) {
          this.questionToPageIndex.set(question.id, p)
          this.questionToSectionIndex.set(question.id, s)
        }
      }
    }
  }

  /**
   * Return the section number of an action
   * @param {Object} action
   * @returns {Number}
   */
  getActionSection (action) {
    if (!action.question_id) return -1
    return this.questionToSectionIndex.get(action.question_id)
  }

  /**
   * Return the page number of an action
   * @param {Object} action
   * @returns {Number}
   */
  getActionPage (action) {
    if (!action.question_id) return -1
    return this.questionToPageIndex.get(action.question_id)
  }

  /**
   * Insert an action while maintaining the actions in a sorted state based on the order of the survey
   * @param {Object} action
   */
  insertIntoStore (action) {
    this.store.push(action)
    this.sortedStore.insertSorted(action)
  }

  /**
   * Convert an action into a sortable number based on the section, repetitions and pages. This conversion should work
   * as long as there are fewer than 100 sections, less than 100 repetitions per sections, less than 100 follow up
   * repetitions and less than 100 questions per page.
   * @param {Object} action
   * @returns {Number}
   */
  actionToNum (a) {
    // TODO: this has quite a few limitations, but it needs to be something that's comparable using > and < which is tough
    // with a string representation of a number since reliable behaviour of string comparison depends on the strings being
    // the same length.
    const millisSortVal = +a.created_at
    const section = this.questionToSectionIndex.get(a.question_id)
    const page = this.questionToPageIndex.get(a.question_id)
    return section * 1000000 + a.section_repetition * 10000 + a.section_follow_up_repetition * 100 + page + millisSortVal / 10000000000000
  }

  /**
   * Getter for the actions. Defaults to the ordered store
   * @returns {Array|*}
   */
  get actions () {
    return this.sortedStore
  }

  /**
   * Get the actions for any number of question ids for a specific sectionRepetition and followUpRepetition
   * @param questionIds
   * @param sectionRepetition
   * @param sectionFollowUpRepetition
   * @returns {Array}
   */
  getQuestionActions (questionIds, sectionRepetition, sectionFollowUpRepetition) {
    let actions = []
    for (let id of questionIds) {
      if (this.questionIndex.has(id)) {
        for (let action of this.questionIndex.get(id)) {
          if (action.section_repetition === sectionRepetition && action.section_follow_up_repetition === sectionFollowUpRepetition) {
            actions.push(action)
          }
        }
      }
    }
    return actions
  }

  /**
   * Load the actions into the store without triggering the persist method
   * @param {array} actions
   */
  load (actions) {
    for (let action of actions) {
      if (typeof action.payload === 'string') {
        action.payload = JSON.parse(action.payload)
      }
      if (typeof action.created_at === 'string') {
        action.created_at = parseDate(action.created_at)
      }
      this.insertIntoStore(action)
    }
  }

  /**
   * Add an action to the store. This will trigger the throttled persist method
   * @param action
   */
  add (action, location) {
    action.id = uuidv4()
    action.section_repetition = location.sectionRepetition
    action.section_follow_up_repetition = location.sectionFollowUpDatumRepetition
    action.created_at = now()
    this.insertIntoStore(action)
    this.emit('change', this.store)
  }

  /**
   * Save the action in the store and update any indexes
   * @param action
   */
  save (action) {
    this.store.push(action)
    if (action.question_id) {
      let questionActions = this.questionIndex.get(action.question_id)
      if (!questionActions) {
        questionActions = []
        this.questionIndex.set(action.question_id, questionActions)
      }
      questionActions.push(action)
    }
  }

  /**
   * Get all actions for a page
   */
  getLocationActions (location) {
    // TODO: Should handle sectionRepetition and sectionFollowUpRepetition too
    return this.store.filter(action => action.section === location.section && action.page === location.page)
  }
}