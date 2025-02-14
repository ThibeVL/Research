// src/plugins/vuetify.ts (of vergelijkbaar)
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Belangrijk: import * as labs om toegang te krijgen tot o.a. VCalendar
import * as labs from 'vuetify/labs/components'

export default createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
})
