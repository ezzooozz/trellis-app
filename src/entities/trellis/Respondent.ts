import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, JoinTable, ManyToMany} from 'typeorm'
import {Relationship, Serializable} from '../WebOrmDecorators'
import TimestampedSoftDelete from '../base/TimestampedSoftDelete'
import RespondentName from "./RespondentName";
import RespondentGeo from "./RespondentGeo";
import RespondentConditionTag from "./RespondentConditionTag";
import RespondentPhoto from "./RespondentPhoto";
import Geo from "./Geo";
import ConditionTag from "./ConditionTag";
import SnakeSerializable from "../interfaces/SnakeSerializable";
import Photo from "./Photo";


@Entity()
export default class Respondent extends TimestampedSoftDelete implements SnakeSerializable {
  @PrimaryGeneratedColumn() @Serializable
  id: string
  @Column({ nullable: true }) @Serializable
  assignedId: string
  @Column({ nullable: true }) @Serializable
  geoId: string
  @Column({ nullable: true }) @Serializable
  notes: string
  @Column({ nullable: true }) @Serializable
  geoNotes: string
  @Column() @Serializable
  name: string
  @Column({ nullable: true }) @Serializable
  associatedRespondentId: string

  @Relationship({ generator: geoGenerator })
  @OneToMany(type => RespondentGeo, respondentGeo => respondentGeo.respondent, { eager: true })
  geos: RespondentGeo[]

  @Relationship(RespondentName)
  @OneToMany(type => RespondentName, respondentName => respondentName.respondent, { eager: true })
  names: RespondentName[]

  @Relationship({ generator: rPhotoGenerator })
  @ManyToMany(type => Photo, photo => photo.respondents, { eager: true })
  @JoinTable({ name: 'respondent_photo' })
  photos: Photo[]

  @Relationship({ generator: rctGenerator })
  respondentConditionTags: RespondentConditionTag[]

}

function geoGenerator (geo) {
  let g = new RespondentGeo().fromSnakeJSON(geo.pivot)
  g.geo = new Geo().fromSnakeJSON(geo)
  return g
}

function rPhotoGenerator (p) {
  let rp = new RespondentPhoto().fromSnakeJSON(p.pivot)
  rp.photo = new Photo().fromSnakeJSON(p)
  return rp
}

function rctGenerator (tag) {
  let rc = new RespondentConditionTag().fromSnakeJSON(tag.pivot)
  rc.conditionTag = new ConditionTag().fromSnakeJSON(tag)
  return rc
}
