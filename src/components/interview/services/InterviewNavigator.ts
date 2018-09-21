import Emitter from '../../../classes/Emitter'
import Clock from '../../../classes/Clock'
import InterviewManagerOld from '../classes/InterviewManager'
import Form from '../../../entities/trellis/Form'
import Survey from '../../../entities/trellis/Survey'

export interface InterviewLocation {
  section: number
  sectionRepetition: number
  sectionFollowUpRepetition: number
  page: number
  sectionFollowUpDatumId?: string
  sectionId?: string
  pageId?: string
}

interface SurveyLocation {
  page: number
  section: number
  sectionRepetition: number
  sectionFollowUpDatumRepetition: number
}

export default class InterviewNavigator extends Emitter {

  public location: InterviewLocation

  private _location: InterviewLocation
  private max: SurveyLocation
  private blueprint: Form
  public clock: Clock

  constructor (private interview: InterviewManagerOld) {
    super()
    // Section, sectionFollowUpRepetition, sectionRepetition, page
    this.location = {} as InterviewLocation
    this._location = {
      section: 0,
      sectionRepetition: 0,
      sectionFollowUpDatumId: null,
      sectionFollowUpRepetition: 0,
      page: 0
    }
    this.max = {} as SurveyLocation
    this.blueprint = interview.blueprint
    this.clock = new Clock([0, 0, 0, 0])
    this.clock.on('beforeIndexChange', (index, direction) => {
      if (index === 0) {
        let max = this.getMax(this.clock.time[3], this.clock.time[0] + (direction === 'increment' ? 1 : 0), this.clock.time[1], this.clock.time[2])
        console.log('updating max', direction, this.clock.time, 'from', this.clock.clockMax, 'to', max)
        this.setMax(max)
      }
    })
    this.updateLocation()
    this.updateMax()
  }

  /**
   * Destroy all listeners on this instance
   */
  destroy () {
    this.destroyListeners()
    this.clock.destroyListeners()
  }
  get section () {
    return this._location.section
  }
  set section (val: number) {
    this._location.section = val
    this.clock.time[0] = val
  }
  get sectionRepetition () {
    return this._location.sectionRepetition
  }
  set sectionRepetition (val: number) {
    this._location.sectionRepetition = val
    this.clock.time[1] = val
  }
  get page () {
    return this._location.page
  }
  set page (val: number) {
    this._location.page = val
    this.clock.time[3] = val
  }
  get sectionFollowUpDatumId () {
    if (!this._location.sectionFollowUpDatumId) {
      let followUpQuestionId = this.blueprint.sections[this.section].followUpQuestionId
      if (followUpQuestionId) {
        this._location.sectionFollowUpDatumId = this.getFollowUpQuestionDatumIdByFollowUpRepetition(followUpQuestionId, this.sectionFollowUpDatumRepetition)
      }
    }
    return this._location.sectionFollowUpDatumId
  }
  set sectionFollowUpDatumId (newId: string) {
    this._location.sectionFollowUpDatumId = null
    let followUpQuestionId = this.blueprint.sections[this.section].followUpQuestionId
    if (newId && followUpQuestionId) {
      // TODO: Handle follow up questions from repeatedSections and follow up sections
      let data = this.interview.getFollowUpQuestionDatumData(followUpQuestionId)
      if (data && data.length) {
        let index = data.findIndex(datum => datum.id === newId)
        this._location.sectionFollowUpDatumId = newId
        this._location.sectionFollowUpRepetition = index
      }
    }
  }
  get sectionFollowUpDatumRepetition () {
    return this._location.sectionFollowUpRepetition
  }
  set sectionFollowUpDatumRepetition (val: number) {
    this._location.sectionFollowUpRepetition = val
    this._location.sectionFollowUpDatumId = null
    this.clock.time[2] = val
  }

  /**
   * Use numbers to update the location
   * @param {number} section
   * @param {number} sectionRepetition
   * @param {number} sectionFollowUpRepetition
   * @param {number} page
   */
  public setLocationNumber (section: number, sectionRepetition: number, sectionFollowUpRepetition: number, page: number): void {
    this.section = section
    this.sectionRepetition = sectionRepetition
    this.sectionFollowUpDatumRepetition = sectionFollowUpRepetition
    this.page = page
    this.updateLocation()
  }

  /**
   * Look up a datum id using the questionId and the sectionFollowUpRepetition. This is designed to break since we
   * shouldn't be trying to access datum outside of valid repetitions
   * @param {String} questionId - The question id we're looking at
   * @param {Number} followUpRepetition - The repetition we want to find data for
   * @returns {String} - The datum id for this repetition
   * @throws An error if there is no datum present that matches the followUpRepetition
   */
  getFollowUpQuestionDatumIdByFollowUpRepetition (questionId: string, followUpRepetition: number): string {
    let data = this.interview.getFollowUpQuestionDatumData(questionId)
    if (data && data.length) {
      let datum = data.find(d => d.eventOrder === followUpRepetition)
      if (!datum) {
        debugger
        throw Error('No datum present with that event order')
      }
      return datum.id
    }
    return null
  }
  updateMax () {
    let max = this.getMax(this.clock.time[3], this.clock.time[0], this.clock.time[1], this.clock.time[2])
    this.setMax(max)
  }
  setMax (max: number[]) {
    this.clock.setMaximums(max)
    this.max.section = max[0]
    this.max.sectionRepetition = max[1]
    this.max.sectionFollowUpDatumRepetition = max[2]
    this.max.page = max[3]
  }
  setToMax () {
    this.sectionRepetition = this.max.sectionRepetition
    this.sectionFollowUpDatumRepetition = this.max.sectionFollowUpDatumRepetition
    this.page = this.max.page
  }
  updateLocation () {
    this.section = this.clock.time[0]
    this.sectionRepetition = this.clock.time[1]
    this.sectionFollowUpDatumRepetition = this.clock.time[2]
    this.page = this.clock.time[3]
    this.location.section = this.section
    this.location.sectionId = this.blueprint.sections[this.section].id
    this.location.sectionRepetition = this.sectionRepetition
    this.location.sectionFollowUpDatumId = this.sectionFollowUpDatumId
    this.location.sectionFollowUpRepetition = this.sectionFollowUpDatumRepetition
    this.location.page = this.page
    this.location.pageId = this.blueprint.sections[this.section].pages[this.page].id
  }
  zero (): void {
    this.section = 0
    this.page = 0
    this.sectionRepetition = 0
    this.sectionFollowUpDatumRepetition = 0
    this.updateLocation()
    this.updateMax()
  }

  get isAtEnd (): boolean {
    return this.clock.isAtMax
  }

  get isAtStart (): boolean {
    return this.clock.isAtMin
  }
  getCurrentMax () {
    return this.getMax(this.page, this.section, this.sectionRepetition, this.sectionFollowUpDatumRepetition)
  }
  getMax (page: number, section: number, sectionRepetition: number, sectionFollowUpDatumRepetition: number): number[] {
    let max = []
    max[0] = this.blueprint.sections.length - 1
    max[1] = this.blueprint.sections[section].maxRepetitions
    max[2] = 0
    let followUpQuestionId = this.blueprint.sections[section].followUpQuestionId
    if (followUpQuestionId) {
      // TODO: Handle follow up questions from repeatedSections and follow up sections
      let data = this.interview.getFollowUpQuestionDatumData(followUpQuestionId)
      max[2] = data.length - 1
    }
    max[3] = this.blueprint.sections[section].pages.length - 1
    return max
  }

  setLocation (section: number, page: number, sectionRepetition: number, sectionFollowUpDatumId: string): void {
    this.section = section
    this.page = page
    this.sectionRepetition = sectionRepetition
    this.sectionFollowUpDatumId = sectionFollowUpDatumId
    this.updateLocation()
  }

  isValidLocation (max: SurveyLocation, page: number, section: number, sectionRepetition: number, sectionFollowUpDatumRepetition: number) {
    return page <= max.page &&
      section <= max.section &&
      sectionRepetition <= max.sectionRepetition &&
      sectionFollowUpDatumRepetition <= max.sectionFollowUpDatumRepetition
  }

  getNext (page: number, section: number, sectionRepetition: number, sectionFollowUpDatumRepetition: number): SurveyLocation {
    let m = this.getMax(page, section, sectionRepetition, sectionFollowUpDatumRepetition)
    let max = {
      section: m[0],
      sectionRepetition: m[1],
      sectionFollowUpDatumRepetition: m[2],
      page: m[3]
    }
    console.log('next', page, sectionRepetition, sectionFollowUpDatumRepetition, section)
    page++
    if (page > max.page) {
      page = 0
      sectionRepetition++
    }
    if (sectionRepetition > max.sectionRepetition) {
      sectionRepetition = 0
      sectionFollowUpDatumRepetition++
    }
    if (sectionFollowUpDatumRepetition > max.sectionFollowUpDatumRepetition) {
      sectionFollowUpDatumRepetition = 0
      section++
      m = this.getMax(page, section, sectionRepetition, sectionFollowUpDatumRepetition)
      max = {
        section: m[0],
        sectionRepetition: m[1],
        sectionFollowUpDatumRepetition: m[2],
        page: m[3]
      }
      if (section > max.section) {
        throw Error('Reached the end of the survey')
      }
      // Handle follow up sections
      if (max.sectionFollowUpDatumRepetition < 0) {
        section++
        if (section > max.section) {
          throw Error('Reached the end of the survey')
        }
      }
    }
    return {page, section, sectionRepetition, sectionFollowUpDatumRepetition}
  }

  getPrevious (page: number, section: number, sectionRepetition: number, sectionFollowUpDatumRepetition: number): SurveyLocation {
    let m = this.getMax(page, section, sectionRepetition, sectionFollowUpDatumRepetition)
    let max = {
      section: m[0],
      sectionRepetition: m[1],
      sectionFollowUpDatumRepetition: m[2],
      page: m[3]
    }
    page--
    if (page < 0) {
      page = max.page
      sectionRepetition--
    }
    if (sectionRepetition < 0) {
      sectionRepetition = max.sectionRepetition
      sectionFollowUpDatumRepetition--
    }
    if (sectionFollowUpDatumRepetition < 0) {
      sectionFollowUpDatumRepetition = max.sectionFollowUpDatumRepetition
      section--
      m = this.getMax(page, section, sectionRepetition, sectionFollowUpDatumRepetition)

      max.sectionRepetition = m[1]
      max.sectionFollowUpDatumRepetition = m[2]
      max.page = m[3]

      sectionRepetition = max.sectionRepetition
      sectionFollowUpDatumRepetition = max.sectionFollowUpDatumRepetition
      page = max.page
    }
    console.log('previous', page, sectionRepetition, sectionFollowUpDatumRepetition, section)
    if (section < 0) {
      section = 0
      page = 0
      sectionRepetition = 0
      sectionFollowUpDatumRepetition = 0
      throw Error('Reached beginning of survey')
    }
    return {page, section, sectionRepetition, sectionFollowUpDatumRepetition}
  }

  /**
   * Move forward a step
   */
  nextOld () {
    try {
      let next = this.getNext(this.page, this.section, this.sectionRepetition, this.sectionFollowUpDatumRepetition)
      this.page = next.page
      this.section = next.section
      this.sectionRepetition = next.sectionRepetition
      this.sectionFollowUpDatumRepetition = next.sectionFollowUpDatumRepetition
    } catch (err) {
      console.log(err)
      this.emit('end')
    }
    this.updateLocation()
  }

  /**
   * Move back a step
   */
  previousOld () {
    try {
      let prev = this.getPrevious(this.page, this.section, this.sectionRepetition, this.sectionFollowUpDatumRepetition)
      this.page = prev.page
      this.section = prev.section
      this.sectionRepetition = prev.sectionRepetition
      this.sectionFollowUpDatumRepetition = prev.sectionFollowUpDatumRepetition
    } catch (err) {
      console.log(err)
      this.emit('beginning')
    }
    this.updateLocation()
  }

  next () {
    this.clock.increment()
    // if (this.clock.isAtMax) {
    //   this.emit('end')
    //   return
    // }
    this.updateLocation()
    // console.log('navigator next location', JSON.stringify(this.location), 'max', JSON.stringify(this.clock.clockMax))
  }

  previous () {
    this.clock.decrement()
    // if (this.clock.isAtMin) {
    //   this.emit('beginning')
    //   return
    // }
    this.updateLocation()
    // console.log('navigator prev location', JSON.stringify(this.location), 'max', JSON.stringify(this.clock.clockMax))
  }
}
