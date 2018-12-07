import http from '../http/AxiosInstance'
import GeoServiceAbstract from './GeoServiceAbstract'
import Geo from '../../entities/trellis/Geo'
import GeoType from '../../entities/trellis/GeoType'
import Photo from "../../entities/trellis/Photo";
import PhotoWithPivotTable from '../../types/PhotoWithPivotTable'

export default class GeoServiceWeb extends GeoServiceAbstract {

  async addPhoto (geoId: string, photo: Photo): Promise<PhotoWithPivotTable> {
    // TODO: Add geo photo on web side
    throw new Error("Can't add photos on web side yet")
  }

  getGeoById (geoId) {
    return this.getGeosById([geoId]).then(geoIds => geoIds[0])
  }

  getGeosById (geoIds) {
    geoIds = geoIds.map(g => encodeURIComponent(g))
    if (!geoIds.length) {
      return new Promise(resolve => resolve([]))
    }
    return http().get(`/geos/${geoIds.join(',')}`).then(res => {
      return res.data.geos.map(g => new Geo().fromSnakeJSON(g))
    })
  }

  async getGeosByParentId (parentId) {
    return http().get(`/geos/parent/${parentId}`).then(res => {
      return res.data.geos.map(g => new Geo().fromSnakeJSON(g))
    })
  }

  async createGeo (geo: Geo): Promise<any> {
    return http().put('/geo', {
      geo: geo
    })
  }

  async getGeoTypesByStudy (studyId: string, getUserAddable: boolean): Promise<GeoType[]> {
    let res = await http().get(`/geo-types`, {
      params: {
        study_id: studyId,
        get_user_addable: getUserAddable
      }
    })
    return res.data.geoTypes.map((geoType) => {
      return new GeoType().fromSnakeJSON(geoType)
    })
  }

  async removeGeo (geoId) {
    return http().delete(`/geo/${geoId}`)
  }

  async moveGeo (geoId, latitude, longitude, moveChildren) {
    return http().post(`/geo/${geoId}/move`, {
      latitude: latitude,
      longitude: longitude,
      moveChildren: moveChildren
    })
  }

  getGeoAncestors (geoId) {
    geoId = encodeURIComponent(geoId)
    return http().get(`/geo/${geoId}/ancestors`).then(res => {
      return res.data.ancestors.map(g => new Geo().fromSnakeJSON(g))
    })
  }

  search (params) {
    if (params.types) {
      params.types = params.types.join(',')
    }
    return http().get('/geo/search', {
      params: params
    }).then(res => {
      return res.data.geos.map(g => new Geo().fromSnakeJSON(g))
    })
  }
}
