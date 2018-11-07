import Recycler from '../../../../classes/Recycler'
import Datum from '../../../../entities/trellis/Datum'
import {now} from '../../../../services/DateService';
import QuestionDatum from '../../../../entities/trellis/QuestionDatum'

export interface DatumPayload {
  name?: string
  val?: string
  sort_order?: number
  choice_id?: string
  geo_id?: string
  edge_id?: string
  photo_id?: string
  roster_id?: string
  respondent_geo_id?: string
  respondent_name_id?: string
}

class DatumRecycler extends Recycler<Datum> {
  keyExtractor (d: Datum) {
    // The unique key of a datum is everything except for the id. This means that previously deleted datum could be
    // recreated if it has already been deleted from the server, but it also means that quick changes to datum that end
    // up with the same result don't send changes to the server
    return [
      d.val,
      d.name,
      d.questionDatumId,
      d.surveyId,
      d.choiceId,
      d.edgeId,
      d.geoId,
      d.photoId,
      d.rosterId,
      d.respondentGeoId,
      d.respondentNameId
    ].join('-')
  }
  objectCreator (questionDatum: QuestionDatum, payload: DatumPayload) {
    let maxEventOrder = Math.max(-1, ...questionDatum.data.map(d => d.eventOrder))
    return new Datum().fromRecycler({
      surveyId: questionDatum.surveyId,
      questionDatumId: questionDatum.id,
      eventOrder: maxEventOrder + 1,
      val: payload.val,
      sortOrder: payload.sort_order,
      name: payload.name || '',
      edgeId: payload.edge_id,
      geoId: payload.geo_id,
      photoId: payload.photo_id,
      rosterId: payload.roster_id,
      choiceId: payload.choice_id,
      respondentGeoId: payload.respondent_geo_id,
      respondentNameId: payload.respondent_name_id
    })
  }
}

export default new DatumRecycler()
