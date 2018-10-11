<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-layout>
          <v-alert v-show="error">
            {{error}}
          </v-alert>
          <v-flex>
            <v-text-field
              :label="$t('name')"
              v-model="name.name"/>
          </v-flex>
          <v-flex>
            <v-checkbox
              v-model="name.isDisplayName"
              :label="$t('set_primary')"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex>
            <v-select
              :label="`${$t('locale')} (${$t('optional')})`"
              :items="locales"
              :loading="localesAreLoading"
              item-text="language_native"
              item-value="id"
              v-model="name.localeId" />
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <v-btn @click="save()">
              <v-progress-circular v-if="isSaving"/>
              <span v-else>
                {{ $t('save') }}
              </span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
  import LocaleService from '../../services/locale/LocaleService'
  import RespondentService from '../../services/respondent/RespondentService'
  import CensusFormService from '../../services/census/index'
  import censusTypes from '../../static/census.types'
  import singleton from '../../static/singleton'
  import { pushRouteAndQueueCurrent } from '../../router'
  import Respondent from '../../entities/trellis/Respondent'
  import RespondentName from '../../entities/trellis/RespondentName'
  import Vue from 'vue'
  export default Vue.extend({
    name: 'respondent-name',
    props: {
      respondent: Respondent,
      name: {
        type: RespondentName,
        default: () => new RespondentName()
      }
    },
    data () {
      return {
        global: singleton,
        isSaving: false,
        locales: [],
        localesAreLoading: false,
        error: null
      }
    },
    created: function () {
      this.loadLocales()
    },
    methods: {
      loadLocales () {
        this.localesAreLoading = true
        LocaleService.getStudyLocales(this.global.study.id).then(locales => {
          this.localesAreLoading = false
          this.locales = locales
          console.log('locales', locales)
        }).catch(err => {
          this.error = err
          this.localesAreLoading = false
        })
      },
      async save () {
        if (this.isSaving) return
        this.isSaving = true
        try {
          let name
          let isEditingName = this.name.id !== null && this.name.id !== undefined
          if (isEditingName) {
            let isDisplayName = !!this.name.isDisplayName
            name = await  RespondentService.editName(
              this.respondent.id,
              this.name.id,
              this.name.name,
              isDisplayName,
              this.name.locale_id
            )
          } else {
            name = await RespondentService.addName(this.respondent.id, this.name.name, this.name.isDisplayName, this.name.localeId)
          }
          let hasCensus = await CensusFormService.hasCensusForm(this.global.study.id, censusTypes.rename_respondent)
          if (hasCensus) {
            pushRouteAndQueueCurrent({
              name: 'StartCensusForm',
              params: {
                studyId: this.global.study.id,
                censusTypeId: censusTypes.rename_respondent
              },
              query: {
                respondentId: this.respondent.id
              }
            })
          } else {
            console.log('no census form found')
            this.$emit('close', name)
          }
        } catch (err) {
          this.error = err
          this.$emit('error', err)
        } finally {
          this.isSaving = false
        }
        this.isSaving = true
      }
    }
  })
</script>

<style scoped>

</style>