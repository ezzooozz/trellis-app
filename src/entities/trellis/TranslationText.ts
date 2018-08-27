import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import {Serializable} from '../TypeOrmDecorators'
import TimestampedSoftDelete from '../base/TimestampedSoftDelete'
import {mapFromSnakeJSON} from "../../services/JSONUtil";
import Locale from "./Locale";
import Translation from './Translation'

@Entity()
export default class TranslationText extends TimestampedSoftDelete {
  @PrimaryGeneratedColumn() @Serializable
  id: string
  @Column() @Serializable
  translationId: string
  @Column({ nullable: true }) @Serializable
  localeId: string
  @Column('text') @Serializable
  translatedText: string

  locale: Locale

  @ManyToOne(type => Translation, translation => translation.translationText)
  translation: Translation

  // Aliases
  get translated_text () { return this.translatedText }
  get locale_id () { return this.localeId }

  toJSON () {
    return this
  }

  fromSnakeJSON(json: object) {
    mapFromSnakeJSON(this, json, {
      locale: Locale
    })
    super.fromSnakeJSON(json)
    return this
  }
}
