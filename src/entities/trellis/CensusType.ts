import {Entity, Column, PrimaryGeneratedColumn} from '../TypeOrmDecorators'
import BaseEntity from "../base/BaseEntity";

@Entity()
export default class CensusType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string
  @Column()
  name: string
}
