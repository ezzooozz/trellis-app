import Recycler from '@/classes/Recycler'
import uuidv4 from 'uuid/v4'
import {now} from '../../../../services/DateService'

const keyNames = ['survey_id', 'section_repetition', 'follow_up_datum_id', 'question_id']
class QuestionDatumRecycler extends Recycler {
  /**
   * Takes the same object that objectCreator returns
   * @param qd
   * @returns {string}
   */
  keyExtractor (qd) {
    // The unique key of a single question datum
    return keyNames.map(key => qd[key] === null ? 'null' : qd[key]).join('-')
  }

  /**
   * Returns a questionDatum object
   * @param interview
   * @param questionBlueprint
   * @returns {{id: *, section_repetition: number, follow_up_datum_id: number, survey_id: *, dk_rf: null, dk_rf_val: null, var_name, datum: Array}}
   */
  objectCreator (interview, questionBlueprint) {
    return {
      id: uuidv4(),
      section_repetition: interview.location.sectionRepetition,
      follow_up_datum_id: interview.location.sectionFollowUpDatumId,
      survey_id: interview.interview.survey_id,
      question_id: questionBlueprint.id,
      dk_rf: null,
      dk_rf_val: null,
      data: [],
      created_at: now(),
      updated_at: now()
    }
  }
}

let qdr = new QuestionDatumRecycler()
window.qdr = qdr
export default qdr