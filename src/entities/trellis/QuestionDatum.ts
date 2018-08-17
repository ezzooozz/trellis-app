import uuid from 'uuid/v4'
import TimestampedSoftDelete from "../base/TimestampedSoftDelete";
import Datum from "./Datum";
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import {Serializable} from '../TypeOrmDecorators'
import {mapFromSnakeJSON, mapCamelToPlain} from "../../services/JSONUtil";
import SnakeSerializable from "../interfaces/SnakeSerializable";

@Entity()
export default class QuestionDatum extends TimestampedSoftDelete implements SnakeSerializable {
  @PrimaryGeneratedColumn() @Serializable
  public id: string
  @Column() @Serializable
  public questionId: string
  @Column() @Serializable
  public surveyId: string
  @Column() @Serializable
  public followUpDatumId: string
  @Column() @Serializable
  public sectionRepetition: number
  @Column({type: 'datetime'}) @Serializable
  public answeredAt: Date
  @Column({type: 'datetime'}) @Serializable
  public skippedAt: Date
  @Column() @Serializable
  public dkRf: boolean
  @Column() @Serializable
  public dkRfVal: string
  @Column() @Serializable
  public interviewId: string

  data: Datum[] = []

  /**
   * Called from the recycler
   * @param {string} id
   * @param {string} questionId
   * @param {string} surveyId
   * @param {string} followUpDatumId
   * @param {number} sectionRepetition
   * @param {Date} answeredAt
   * @param {Date} skippedAt
   * @param {string} interviewId
   * @param {boolean} dkRf
   * @param {string} dkRfVal
   * @returns {this}
   */
  fromRecycler (id: string,
                questionId: string,
                surveyId: string,
                followUpDatumId: string,
                sectionRepetition: number,
                answeredAt: Date,
                skippedAt: Date,
                interviewId: string,
                dkRf: boolean = null,
                dkRfVal: string = null) {
    this.id = id
    this.questionId = questionId
    this.surveyId = surveyId
    this.followUpDatumId = followUpDatumId
    this.sectionRepetition = sectionRepetition
    this.answeredAt = answeredAt
    this.skippedAt = skippedAt
    this.interviewId = interviewId
    this.dkRfVal = dkRfVal
    this.dkRf = dkRf
    return this
  }

  fromSnakeJSON (json) {
    mapFromSnakeJSON(this, json, {
      data: {
        constructor: Datum,
        jsonKey: 'datum'
      }
    })
    super.fromSnakeJSON(json)
    return this
  }

  toSnakeJSON () {
    let d = mapCamelToPlain(this, true)
    delete d['data']
    return d
  }
}
