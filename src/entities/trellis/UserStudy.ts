import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import TimestampedSoftDelete from '../base/TimestampedSoftDelete'
import {mapPropsFromJSON} from "../../services/JSONUtil";

@Entity()
export default class UserStudy extends TimestampedSoftDelete {
  @PrimaryGeneratedColumn()
  id: string
  @Column()
  userId: string
  @Column()
  studyId: string

  fromJSON(json: object) {
    mapPropsFromJSON(this, json)
    return this
 }
}
