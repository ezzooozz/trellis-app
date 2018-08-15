import {OneToOne, ManyToMany, JoinTable, JoinColumn} from 'typeorm'
import {Entity, Column, PrimaryGeneratedColumn} from '../TypeOrmDecorators'
import TimestampedSoftDelete from '../base/TimestampedSoftDelete'
import {mapPropsFromJSON} from "../../services/JSONUtil";
import Locale from "./Locale";

@Entity()
export default class Study extends TimestampedSoftDelete {
  @PrimaryGeneratedColumn()
  id: string
  @Column()
  name: string
  @Column({ type: "tinyint" })
  photoQuality: number
  @Column()
  defaultLocaleId: string

  @ManyToMany(type => Locale)
  @JoinTable()
  locales: Promise<Locale[]>

  @OneToOne(type => Locale)
  @JoinColumn()
  defaultLocale: Locale

  fromSnakeJSON(json: object) {
    mapPropsFromJSON(this, json)
    super.fromSnakeJSON(json)
    return this
 }
}
