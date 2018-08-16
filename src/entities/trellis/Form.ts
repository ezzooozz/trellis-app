import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import {Serializable} from '../TypeOrmDecorators'
import TimestampedSoftDelete from '../base/TimestampedSoftDelete'
import {mapFromSnakeJSON} from "../../services/JSONUtil";
import Section from "./Section";
import Skip from "./Skip";
import Translation from "./Translation";

@Entity()
export default class Form extends TimestampedSoftDelete {
  @PrimaryGeneratedColumn() @Serializable
  id: string
  @Column() @Serializable
  formMasterId: string
  @Column() @Serializable
  nameTranslationId: string
  @Column({type: 'integer'}) @Serializable
  version: number
  @Column() @Serializable
  isPublished: boolean

  sections: Array<Section>
  skips: Array<Skip>
  nameTranslation: Translation

  fromSnakeJSON(json: any) {
    mapFromSnakeJSON(this, json, {
      sections: Section,
      skips: Skip,
      nameTranslation: Translation
    })
    super.fromSnakeJSON(json)
    // Simple way to convert into an integer and then to a boolean. Possible values for this are "1", "0", 1, 0, true, false
    // and all of them are interpreted correctly by this statement
    this.isPublished = !!+this.isPublished
    return this
  }
}
