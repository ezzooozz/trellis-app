<template>
  <v-app light dense class="web" :dark="global.darkTheme" :class="{ 'print-mode' : global.printMode, 'cpu-optimized': global.cpuOptimized }">
    <v-dialog
      max-width="300"
      v-model="global.loading.fullscreen && global.loading.active"
      persistent>
      <v-card>
        <v-card-title primary-title>
          <h3>{{ $t('loading') }}</h3>
        </v-card-title>
        <v-card-text>
          <v-layout row justify-center>
            <TrellisLoadingCircular />
          </v-layout>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-navigation-drawer
      v-model="global.menuDrawer.open"
      app>
      <MainMenu />
    </v-navigation-drawer>
    <v-toolbar
      fixed app
      :value="serverMode === 'demo' || serverMode === 'test'"
      :color="serverMode === 'demo' ? demoBannerColor : testBannerColor">
      <v-toolbar-title>
       <span v-if="serverMode === 'demo'">
         {{ $t('demo_alert') }}
       </span>
       <span v-else-if="serverMode === 'test'">
        {{ $t('test_alert') }}
       </span>
      </v-toolbar-title>
      <v-btn
        v-if="serverMode === 'demo' && isWeb && !isLoggedIn"
        :to="{name: 'DemoSignUp'}">{{$t('sign_up')}}</v-btn>
    </v-toolbar>
    <v-toolbar
      fixed app
      :class="{'main-menu': serverMode=='production', 'main-menu-demo': serverMode=='demo' || serverMode=='test'}">
      <!-- MainMenu /-->
      <v-toolbar-side-icon
        @click.stop="global.menuDrawer.open = !global.menuDrawer.open"
        v-if="!global.menuDrawer.open"/>
      <v-toolbar-title class="logo">
        <router-link :to="{name: 'Home'}" class="deep-orange--text">
          <img src="../static/img/trellis-logo.png" alt="trellis">
        </router-link>
      </v-toolbar-title>
      <v-toolbar-title v-if="global.study" class="study">
        <v-tooltip right>
          <v-btn class="subheading" slot="activator"
                 flat
                 @click="toStudySelector">
            {{global.study.name}}
          </v-btn>
          <span>{{$t('change_study')}}</span>
        </v-tooltip>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip left>
        <v-btn class="subheading"
               slot="activator"
               flat
               icon
               @click="toLocaleSelector">
          {{global.locale ? global.locale.languageTag : ''}}
        </v-btn>
        <span>{{$t('change_locale')}}</span>
      </v-tooltip>
      <v-toolbar-side-icon
        v-if="global.secondaryDrawer.isEnabled"
        @click.stop="global.secondaryDrawer.onClick">
        <v-icon>{{global.secondaryDrawer.icon || 'search'}}</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-dialog :value="alerts && alerts.length > 0" persistent>
        <v-card>
          <v-card-text>
            <trellis-alert :current-log="alerts[alerts.length - 1]"></trellis-alert>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dismissAlert()">Dismiss</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-container
        justify-start
        fluid
        fill-height
        :class="{'px-0': $vuetify.breakpoint.xsOnly, 'ma-0 pa-0 app-container': serverMode=='production', 'app-container-demo': serverMode=='demo' || serverMode=='test' }">
        <router-view class="route-container fade-in" />
      </v-container>
    </v-content>

    <LocationFinder />
    <CensusFormChecker />
    <SnackbarQueue />
    <DocsSidebar />

  </v-app>
</template>

<script>
  import MainMenu from './components/main-menu/MainMenu'
  import CensusFormChecker from './components/CensusFormChecker'
  import VDivider from 'vuetify/src/components/VDivider/VDivider'
  import AlertService from './services/AlertService'
  import TrellisAlert from './components/TrellisAlert.vue'
  import TrellisLoadingCircular from './components/TrellisLoadingCircle'
  import LocationFinder from './components/LocationFinder'
  import router, { routeQueue } from './router'
  import singleton from './static/singleton'
  // Do not remove!
  import SingletonService from './services/SingletonService'
  import { defaultLoggingService } from './services/logging/LoggingService'
  import GeoLocationService from './services/geolocation'
  import SnackbarQueue from './components/SnackbarQueue'
  import DocsSidebar from './components/documentation/DocsSidebar'
  import UserService from './services/user/UserService'
  import config from 'config'
  import IsLoggedInMixin from './mixins/IsLoggedInMixin'

  export default {
    name: 'WebApp',
    mixins: [IsLoggedInMixin],
    data () {
      return {
        global: singleton,
        error: null,
        interviewIds: ['0011bbc8-59e7-4c68-ab48-97d64760961c', 'f8a82e2a-b6c9-42e5-9803-aacec589f796', '9457d7c8-0b37-4098-8aa4-4b928b2503e5'],
        alerts: AlertService.alerts,
        cpuOptimized: true,
        serverMode: config.serverMode,
        demoBannerColor: 'orange darken-4',
        testBannerColor: 'amber'
      }
    },
    async created () {
      /* load the singleton object (selected study, locale, theme) from local storage */
      // await SingletonService.loadFromLocalStorage()
      if (this.withinCordova) {
        document.addEventListener('pause', this.onPause, false)
        document.addEventListener('resume', this.onResume, false)
        document.addEventListener('backbutton', this.onBackButton)
        this.startGPSWatch()
      }
      try {
        const user = await UserService.loadCurrentUser()
        this.$set(this.global, 'user', user)
      } catch (err) {
        if (err && err.status !== 401) {
          console.log(err)
          this.log(err)
          this.alert('error', 'Unable to load user', {timeout: 0})
        }
      }
    },
    beforeDestroy () {
      if (this.withinCordova) {
        document.removeEventListener('pause', this.onPause)
        document.removeEventListener('resume', this.onResume, false)
        document.removeEventListener('backbutton', this.onBackButton)
        defaultLoggingService.flushQueue()
        GeoLocationService.clearWatch()
      }
    },
    components: {
      VDivider,
      MainMenu,
      TrellisAlert,
      LocationFinder,
      CensusFormChecker,
      SnackbarQueue,
      DocsSidebar,
      TrellisLoadingCircular
    },
    computed: {
      withinCordova () {
        return window.cordova && typeof cordova === 'object'
      }
    },
    methods: {
      toStudySelector () {
        routeQueue.pushAndReturnToCurrent({ name: 'StudySelector' })
      },
      toLocaleSelector () {
        routeQueue.pushAndReturnToCurrent({ name: 'LocaleSelector' })
      },
      startGPSWatch () {
        if (this.global.watchGPS) {
          GeoLocationService.watchPosition()
        }
      },
      dismissAlert () {
        AlertService.removeAlert()
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
        if (this.withinCordova) {
          GeoLocationService.clearWatch()
          defaultLoggingService.flushQueue()
        }
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(() => {
          this.startGPSWatch()
          console.log('resume')
        }, 0)
      },
      onBackButton () {
        console.log('back button pressed')
        if (router.currentRoute.name !== 'Interview' || confirm(this.$t('survey_message_exit'))) {
          router.go(-1)
        }
      },
    }
  }
</script>

<style lang="sass">
  .container
    &.fill-height
      align-items: start
  html
    overflow-y: auto
  body
    /*padding-top: constant(safe-area-inset-top)*/
    /*padding-top: env(safe-area-inset-top)*/
  .route-loading
    position: absolute
    margin: 0
    margin-top: 2px
  .navigation-drawer
    z-index: 1600
    padding: 0
  .dialog
    z-index: 1600
  .overlay
    z-index: 1500
  .app-container
    /*margin-top: 50px*/
    /*margin-bottom: 50px*/
  .app-container-demo
    padding-top: 56px
  .main-menu
    margin-top: 0 !important
  .main-menu-demo
    margin-top: 56px !important
  .demo-banner
    z-index: 1600
    position: fixed
    width: 100%
    height: 55px
    margin-top: 0
    font-weight: bold
    font-size: 20px
  @media only screen and (max-width: 900px)
    .demo-banner
      font-size: 15px
  @media only screen and (max-width: 700px)
    .demo-banner
      font-size: 11px
  .list--dense
    padding-top: 0
  .logo
    height: 55%
    img
      max-width: 100%
      max-height: 100%
  .study
    margin-left: 0
  .fade-in
    animation: fade-in .3s ease-in-out 0s 1
  @keyframes fade-in
    0%
      opacity: 0
    100%
      opacity: 1

  .cpu-optimized
    *:not(.stepper__wrapper)
      transition-property: none !important
      transition-duration: 0s !important
      /*transform: none !important*/
      animation: none !important
  .page-footer
    background-color: #808080 !important

</style>
