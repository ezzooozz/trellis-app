import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import TimestampedSoftDelete from '../base/TimestampedSoftDelete'
import {mapFromJSON, mapPropsFromJSON} from "../../services/JSONUtil";
import Photo from "./Photo";

@Entity()
export default class RespondentPhoto extends TimestampedSoftDelete {
  @PrimaryGeneratedColumn()
  id: string
  @Column()
  respondentId: string
  @Column()
  photoId: string
  @Column({ type: 'tinyint' })
  sortOrder: number
  @Column({ type: 'text', nullable: true })
  notes: string

  photo: Photo

  fromJSON(json: object) {
    mapPropsFromJSON(this, json, ['id', 'respondent_id', 'photo_id', 'sort_order', 'notes', 'created_at', 'updated_at', 'deleted_at'])
    mapFromJSON(this, json, {
      photo: Photo
    })
    return this
 }
}
