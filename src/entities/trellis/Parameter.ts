import {Entity, Column, PrimaryGeneratedColumn} from '../TypeOrmDecorators'
import TimestampedSoftDelete from '../base/TimestampedSoftDelete'

@Entity()
export default class Parameter extends TimestampedSoftDelete {
  @PrimaryGeneratedColumn()
  id: string
  @Column()
  name: string
}
