// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark', 
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#D32F2F',
          info: '#2196F3',
          success: '#388E3C',
          warning: '#FFA000',
          background: '#EEE',
        },
      },
      dark: {
        colors: {
          primary: '#4DADDB',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          background: '#121212',
        }
      }
    },
  },
})
