import { sharedInterviewInstance } from '../components/interview/classes/InterviewManager'
import { EdgeService } from './edge/EdgeService'
import { RosterService } from './roster/RosterService'
import StringInterpolationService from './StringInterpolationService'

export default class InterpolationService {
  /**
   * Returns a translation with interpolated fills based on the current interview (if any) and location in
   * the interview.
   * @param {TranslationText[]} translationText
   * @param {Object} location
   * @returns {Translation}
   */
  static async getInterpolatedTranslationText (translationText, location) {
    for (const t of translationText) {
      let varNames = StringInterpolationService.getInterpolationKeys(t.translatedText)
      for (const varName of varNames) {
        let fill = await InterpolationService.getFillByVarName(varName, sharedInterviewInstance, location)
        t.translatedText = t.translatedText.replace(`[${varName}]`, fill)
      }
    }
    return translationText
  }

  static async getFillByVarName (varName, interviewManager, location) {
    try {
      let questionDatum = interviewManager.getSingleDatumByQuestionVarName(varName, location.sectionFollowUpRepetition)
      let question = interviewManager.questionIndex.get(questionDatum.questionId)
      let datum = questionDatum.data.find(d => d.eventOrder === location.sectionFollowUpRepetition)
      switch (question.questionType.name) {
        case 'relationship':
          const edges = await EdgeService.getEdges([datum.edgeId])
          return edges[0].targetRespondent.name
        case 'roster':
          const roster = await RosterService.getRosterRows(questionDatum.data.map(d => d.rosterId))
          return roster.val
        default:
          return datum.val
      }
    } catch (err) {
      let fill = interviewManager.getRespondentFillByVarName(varName)
      if (fill) {
        return fill
      } else {
        // TODO: translate
        return 'NO FILL FOUND'
      }
    }
  }
}
