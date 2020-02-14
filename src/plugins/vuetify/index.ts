
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    theme: {
      primary: '#E64A19',
      secondary: '#FFCCBC',
      accent: '#93C0A4'
      // accent: '#607D8B'
      // error: '#DD2C00',
      // warning: '#F2C078',
      // info: '#3E7CB1',
      // success: '#AFD2E9'
    },
    options: {
      themeVariations: ['primary', 'secondary']
    }
  }
})