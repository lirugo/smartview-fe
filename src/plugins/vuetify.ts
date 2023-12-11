// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark', // Set the default theme
    themes: {
      light: {
        colors: {
          background: '#EEE',
          primary: '#1867C0',
          secondary: '#5CBBF6',
          logoColor: '#4DADDB'
        },
      },
      dark: {
        colors: {
          primary: '#4DADDB', // Your selected color
          secondary: '#424242', // Any color of your choice
          accent: '#82B1FF', // Any color of your choice
          error: '#FF5252', // Any color of your choice
          info: '#2196F3', // Any color of your choice
          success: '#4CAF50', // Any color of your choice
          warning: '#FFC107', // Any color of your choice
          background: '#121212', // Any color of your choice
        }
      }
    },
  },
})
