import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import {Serializable} from '../TypeOrmDecorators'
import TimestampedSoftDelete from '../base/TimestampedSoftDelete'
import {mapFromSnakeJSON} from "../../services/JSONUtil";
import Question from "./Question";
import SectionQuestionGroup from "./SectionQuestionGroup";

@Entity()
export default class QuestionGroup extends TimestampedSoftDelete {
  @PrimaryGeneratedColumn() @Serializable @Serializable
  id: string

  questions: Question[]
  sectionQuestionGroup: SectionQuestionGroup

  fromSnakeJSON(json: object) {
    mapFromSnakeJSON(this, json, {
      questions: Question,
      sectionQuestionGroup: {
        constructor: SectionQuestionGroup,
        jsonKey: 'pivot'
      }
    })
    super.fromSnakeJSON(json)
    return this
 }
}
