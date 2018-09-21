import {Relationship, Serializable} from '../decorators/WebOrmDecorators'
import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import TimestampedSoftDelete from '../base/TimestampedSoftDelete'
import SnakeSerializable from '../interfaces/SnakeSerializable'
import ConditionTag from './ConditionTag'
import {now} from '../../services/DateService'

export interface SectionConditionTagRecylerData {
  id: string
  sectionId: string
  conditionId: string
  repetition: number
  followUpDatumId: string
  interviewId: string
  surveyId: string
}

@Entity()
export default class SectionConditionTag extends TimestampedSoftDelete implements SnakeSerializable{
  @PrimaryGeneratedColumn() @Serializable
  id: string;
  @Column() @Serializable
  sectionId: string
  @Column() @Serializable
  conditionId: string
  @Column() @Serializable
  surveyId: string
  @Column({ type: 'integer' }) @Serializable
  repetition: number
  @Column() @Serializable
  followUpDatumId: string

  //Future
  // @Column() @Serializable
  // interviewId: string

  @Relationship({
    constructor: () => ConditionTag,
    jsonKey: 'condition'
  })
  @OneToOne(type => ConditionTag, { eager: true })
  @JoinColumn({ name: 'condition_id' })
  conditionTag: ConditionTag

  fromRecycler (data: SectionConditionTagRecylerData) {
    for (let key in data) {
      if (data[key] !== undefined) {
        this[key] = data[key]
      }
    }
    this.deletedAt = null
    this.createdAt = now()
    this.updatedAt = now()
    return this
  }

}
