// Vuetify setup voor Vue 3
import 'vuetify/styles' // Vuetify stijlen importeren
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuetify instantie aanmaken en exporteren
const vuetify = createVuetify({
  components,
  directives,
})

export default vuetify
