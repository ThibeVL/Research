// src/plugins/vuetify.ts
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Let op: voor de labs-componenten (o.a. VCalendar)
import * as labs from 'vuetify/labs/components'

export default createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
})
