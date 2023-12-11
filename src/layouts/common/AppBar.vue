<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon />


    <v-responsive max-width="200">
      <v-img src="@/assets/logo_light.svg" class="pr-5" />
    </v-responsive>

    <v-spacer></v-spacer>
    <div>
      <v-switch class="pr-4" :model-value="isDark" color="" hide-details density="compact" inset
        false-icon="mdi-white-balance-sunny" true-icon="mdi-weather-night" style="opacity: 0.8"
        @update:model-value="toggleDark" />
    </div>

  </v-app-bar>
</template>

<script lang="ts" >
import { useTheme } from 'vuetify'

export default {
  data: () => ({
    isDark: false, // TODO: Get from store
    breadcrumbs: [
      { text: 'Campaigns', disabled: false, href: 'breadcrumbs_dashboard' },
      { text: 'Test 2021', disabled: false, href: 'breadcrumbs_dashboard' },
      { text: 'Facts', disabled: false, href: 'breadcrumbs_dashboard' },
    ],
  }),
  setup: () => ({
    theme: useTheme()
  }),
  methods: {
    toggleDark() {
      this.isDark = !this.isDark;
      this.theme.global.name.value = this.isDark ? 'dark' : 'light';
    },
  },
}
</script>