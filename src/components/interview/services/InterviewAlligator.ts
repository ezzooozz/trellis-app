import InterviewManager from "../classes/InterviewManager";
import Form from "../../../entities/trellis/Form";
import Section from "../../../entities/trellis/Section";
import QuestionGroup from "../../../entities/trellis/QuestionGroup";
import DataStore from "../classes/DataStore";
import Datum from "../../../entities/trellis/Datum";
import QuestionDatum from "../../../entities/trellis/QuestionDatum";
import Question from "../../../entities/trellis/Question";
import SkipService from "../../../services/SkipService";
import {InterviewLocation} from "./InterviewNavigator";
import Action from "../../../entities/trellis/Action";
import {locToNumber} from "./LocationHelpers";

interface Location {
  pageId: string
  sectionId: string
  section: number
  page: number
  sectionRepetition: number
  followUpDatumId: string
}

export default class InterviewAlligator {
  private index = 0
  private pages: InterviewLocation[]
  public skipped: InterviewLocation[]
  private form: Form
  private data: DataStore
  private sectionIndex: Map<string, Section> = new Map()
  private pageIndex: Map<string, QuestionGroup> = new Map()
  private sectionToNumIndex: Map<string, number> = new Map()
  private pageToNumIndex: Map<string, number> = new Map()

  private hasDataChanges: boolean = true

  constructor (private manager: InterviewManager) {
    this.form = manager.blueprint
    this.data = manager.data
    this.pages = []
    this.skipped = []
    this.createIndexes()
  }

  public initialize () {
    this.data.on('change', this.markHasDataChanges, this)
    this.updatePages()
    this.goToFirstValidLocation()
  }

  public destroy () {
    this.data.off('change', this.markHasDataChanges)
  }

  private markHasDataChanges () {
    this.hasDataChanges = true
  }

  private updateIfNecessary () {
    if (this.hasDataChanges) {
      this.updatePages()
    } else {
      console.log('no data updates found')
    }
  }

  private createIndexes (): void {
    for (let s = 0; s < this.form.sections.length; s++) {
      const section = this.form.sections[s]
      this.sectionIndex.set(section.id, section)
      this.sectionToNumIndex.set(section.id, s)
      for (let p = 0; p < section.questionGroups.length; p++) {
        const page = section.questionGroups[p]
        this.pageIndex.set(page.id, page)
        this.pageToNumIndex.set(page.id, p)
      }
    }
  }

  private addLocation (pageId: string, sectionId: string, followUpDatumId?: string, eventOrder?: number, sectionRepetition?: number): void {
    const loc = {
      pageId,
      page: this.pageToNumIndex.get(pageId),
      sectionId,
      section: this.sectionToNumIndex.get(sectionId),
      sectionRepetition,
      sectionFollowUpDatumId: followUpDatumId,
      sectionFollowUpRepetition: eventOrder
    } as InterviewLocation
    if (this.shouldSkipPage(loc)) {
      // console.log('skipping', JSON.stringify(loc), JSON.stringify(this.data.conditionTags), Array.from(this.getConditionTagSet(loc.sectionRepetition, loc.sectionFollowUpDatumId)))
      this.skipped.push(loc)
    } else {
      this.pages.push(loc)
    }
  }

  private getFollowUpDatum (followUpQuestionId: string): Datum[] {
    const questionData: QuestionDatum[] = this.data.getQuestionDataByQuestionId(followUpQuestionId)
    if (!questionData) {
      return []
    }
    let qd = questionData.find((qd: QuestionDatum) => {
      return qd.questionId === followUpQuestionId
    })
    if (!qd) {
      throw new Error(`No question datum exists for question with id of ${followUpQuestionId} yet`)
    }
    return qd.data
  }

  private updatePages () {
    console.log('Updating navigation pages')
    this.pages.splice(0, this.pages.length)
    this.skipped.splice(0, this.skipped.length)
    for (let section of this.form.sections) {
      // TODO: Check if the section is repeated
      if (section.followUpQuestionId) {
        const data =  this.getFollowUpDatum(section.followUpQuestionId)
        // console.log('follow up data', data.length)
        for (let datum of data) {
          for (let page of section.questionGroups) {
            this.addLocation(page.id, section.id, datum.id, datum.eventOrder, 0)
          }
        }
      } else {
        for (let page of section.questionGroups) {
          this.addLocation(page.id, section.id, null, 0, 0)
        }
      }
    }
    this.hasDataChanges = false
  }

  private goToFirstValidLocation () {
    while (this.index < this.pages.length && this.shouldSkipPage(this.loc)) {
      this.next()
    }
  }

  getConditionTagSet (sectionRepetition: number, sectionFollowUpDatumId: string): Set<string> {
    return new Set(this.data.getLocationConditionTagNames(sectionRepetition, sectionFollowUpDatumId))
  }

  private shouldSkipPage (loc: InterviewLocation): boolean {
    const conditionTagNames = this.getConditionTagSet(loc.sectionRepetition, loc.sectionFollowUpDatumId)
    const page = this.pageIndex.get(loc.pageId)
    return SkipService.shouldSkip(page.skips, conditionTagNames)
  }

  public seekTo (loc: InterviewLocation): boolean {
    this.updateIfNecessary()
    for (let i = 0; i < this.pages.length; i++) {
      if (this.locationsAreNumericallyTheSame(loc, this.pages[i])) {
        this.index = i
        return true
      }
    }
    return false
  }

  public locationsAreNumericallyTheSame (locA: InterviewLocation, locB: InterviewLocation): boolean {
    return locA.section === locB.section &&
      locA.page === locB.page &&
      locA.sectionRepetition === locB.sectionRepetition &&
      locA.sectionFollowUpRepetition === locB.sectionFollowUpRepetition
  }

  public locationIsAheadOfCurrent (location: InterviewLocation): boolean {
    return locToNumber(location) > locToNumber(this.loc)
  }

  public getActionQuestionDatum (action: Action): QuestionDatum|null {
    if (!action.questionId) throw new Error('invalid question')
    const questionData = this.data.getQuestionDataByQuestionId(action.questionId)
    for (let qDatum of questionData) {
      if (qDatum.followUpDatumId) {
        // TODO: Lookup questionDatum by datum eventOrder
        const datum = this.data.getDatumById(qDatum.followUpDatumId)
        if (datum.eventOrder === action.sectionFollowUpRepetition) {
          return qDatum
        }
      } else if (questionData.length === 1) {
        return qDatum
      }
    }
    throw new Error(`Unable to find matching question datum for action ${action}`)
  }

  public zero (): void {
    this.index = 0
    this.markHasDataChanges()
  }

  public get loc (): InterviewLocation {
    return this.pages[this.index]
  }

  public get nextLoc (): InterviewLocation {
    return this.index < this.pages.length - 1 ? this.pages[this.index + 1] : undefined
  }

  public get isAtEnd (): boolean {
    this.updateIfNecessary()
    return this.index >= (this.pages.length - 1)
  }

  public get isAtStart (): boolean {
    return this.index === 0
  }

  public next (): void {
    this.updatePages()
    this.index++
  }

  public previous (): void {
    this.index--
    // this.updatePages()
  }

  public currentSection (): Section {
    return this.sectionIndex.get(this.loc.sectionId)
  }

  public currentPage (): QuestionGroup {
    return this.pageIndex.get(this.loc.pageId)
  }

  public currentPageId (): string {
    return this.currentPage().id
  }

  public currentQuestions (...args): Question[] {
    return this.currentPage().questions
  }
}
