import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { Serializable } from '../decorators/WebOrmDecorators'
import SparseTimestampedSoftDelete from '../base/SparseTimestampedSoftDelete'
import QuestionGroup from './QuestionGroup'

@Entity()
export default class SectionQuestionGroup extends SparseTimestampedSoftDelete {
  @PrimaryGeneratedColumn() @Serializable
  id: string
  @Column({ select: false }) @Serializable
  sectionId: string
  @Column({ select: false }) @Serializable
  questionGroupId: string
  @Column({ type: 'integer' }) @Serializable
  questionGroupOrder: number

  @OneToOne(type => QuestionGroup, qg => qg.sectionQuestionGroup)
  @JoinColumn()
  questionGroup: QuestionGroup

  fromSnakeJSON (json: any) {
    super.fromSnakeJSON(json)
    this.questionGroupOrder = +this.questionGroupOrder
    return this
  }
}
