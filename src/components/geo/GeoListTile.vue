<template>
    <v-list-tile @click="$emit('click')">
      <v-list-tile-avatar :tile="true">
        <Photo :photo="primaryPhoto" :is-building="true" height="50" width="50"></Photo>
      </v-list-tile-avatar>
      <v-list-tile-action v-if="isSelectable">
        <v-btn
          icon
          @click.stop="$emit('geo-select')">
          <v-icon color="primary" v-if="selected">check_box</v-icon>
          <v-icon v-else>check_box_outline_blank</v-icon>
        </v-btn>
      </v-list-tile-action>
      <v-list-tile-content>
        {{this.translated}}
      </v-list-tile-content>
      <v-list-tile-action>
        <v-btn
          @click.stop="showGeoMap"
          icon>
          <v-icon>map</v-icon>
        </v-btn>
      </v-list-tile-action>
      <v-list-tile-action>
        <v-btn
          @click.stop="showGeoInfo"
          icon>
          <v-icon>info</v-icon>
        </v-btn>
      </v-list-tile-action>
    </v-list-tile>
</template>

<script>
  import TranslationMixin from '../../mixins/TranslationMixin'
  import { routeQueue } from '../../router'
  import Photo from '../photo/Photo'
  import Geo from '../../entities/trellis/Geo'
  import VListTileAction from 'vuetify/src/components/VList/VListTileAction'
  export default {
    name: 'geo-list-tile',
    props: {
      geo: {
        type: Geo,
        required: true
      },
      selected: {
        type: Boolean,
        'default': false
      },
      isSelectable: {
        type: Boolean,
        'default': false
      },
      showInfoView: {
        type: Boolean,
        'default': true
      }
    },
    computed: {
      primaryPhoto: function () {
        return this.geo.photos.length ? this.geo.photos[0] : {}
      },
      translation: function () {
        return this.geo.nameTranslation || null
      }
    },
    methods: {
      showGeoMap () {
        routeQueue.redirect({
          name: 'GeoSearchWithMap',
          params: {
            geoId: this.geo.id
          }
        })
      },
      showGeoInfo () {
        routeQueue.redirect({
          name: 'Geo',
          params: {
            geoId: this.geo.id
          }
        })
      }
    },
    mixins: [TranslationMixin],
    components: {
      VListTileAction,
      Photo
    }
  }
</script>

<style scoped>

</style>
