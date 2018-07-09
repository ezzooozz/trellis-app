import http from '../http/AxiosInstance'
export default class GeoServiceWeb {

  /**
   * Get a single geo object by id
   * @param geoId
   * @returns {Promise<Object>}
   */
  static getGeoById (geoId) {
    return GeoServiceWeb.getGeosById([geoId]).then(geoIds => geoIds[0])
  }

  /**
   * Get one or more geos by their ids
   * @param {Array} geoIds - The geo ids to fetch
   */
  static getGeosById (geoIds) {
    geoIds = geoIds.map(g => encodeURIComponent(g))
    if (!geoIds.length) {
      return new Promise(resolve => resolve([]))
    }
    return http().get(`/geos/${geoIds.join(',')}`).then(res => {
      return res.data.geos
    })
  }

  /**
   * Return an array of a geos ancestors in the correct order
   * @param {String} geoId
   * @returns {Promise<Array>}
   */
  static getGeoAncestors (geoId) {
    geoId = encodeURIComponent(geoId)
    return http().get(`/geo/${geoId}/ancestors`).then(res => {
      return res.data.ancestors
    })
  }

  /**
   * Run a query by the geo service with an object of parameters
   * @param {Object} filters
   * @param {String} [filters.query] - The raw query
   * @param {String) [filters.study] - The study id
   * @param {Array} [filters.types] - Array of geo type ids that should be included.
   * @param {String} [filters.parent] - The parent id to limit the query to
   * @param {Boolean} [filters.no-parent] - If this is present it indicates we should only include geos without a parent id
   * @param {Number} [filters.limit = 25] - How many results to return. (max 100)
   * @param {Number} [filters.offset = 0] - How many results to skip. (min 0)
   */
  static search (params) {
    if (params.types) {
      params.types = params.types.join(',')
    }
    return http().get('/geo/search', {
      params: params
    }).then(res => {
      return res.data.geos
    })
  }
}
