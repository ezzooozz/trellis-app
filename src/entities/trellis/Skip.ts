import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import TimestampedSoftDelete from '../base/TimestampedSoftDelete'
import {mapPropsFromJSON} from "../../services/JSONUtil";

@Entity()
export default class Skip extends TimestampedSoftDelete {
  @PrimaryGeneratedColumn()
  id: string
  @Column()
  showHide: boolean
  @Column()
  anyAll: boolean
  @Column({ type: 'tinyint' })
  precedence: number

  fromSnakeJSON(json: object) {
    mapPropsFromJSON(this, json)
    return this
 }
}
