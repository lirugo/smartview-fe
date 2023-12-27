<template>
  <v-app-bar flat>

    <v-app-bar-nav-icon @click="navDrawer" />

    <v-responsive max-width="200">
      <v-img src="@/assets/logo_light.svg" class="pr-5" />
    </v-responsive>

    <v-spacer></v-spacer>

    <v-btn icon class="mr-2" @click="addNotification">
      <v-icon>mdi-ab-testing</v-icon>
    </v-btn>

    <notification />

    <v-btn icon class="mr-2" @click="proccess">
      <v-icon>mdi-timer</v-icon>
    </v-btn>

    <div>
      <v-switch class="pr-4" :model-value="isDark" color="" hide-details density="compact" inset
        false-icon="mdi-white-balance-sunny" true-icon="mdi-weather-night" style="opacity: 0.8"
        @update:model-value="toggleDark" />

    </div>

  </v-app-bar>
</template>

<script lang="ts">
import { useTheme } from 'vuetify'
import { appStore } from '@/store/app'
import { createNotification } from '@/store/classes/AppNotification'
import Notification from './Notification.vue';

export default {
  components: {
    Notification
  },
  data: () => ({
    isDark: appStore().isDark,
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
    navDrawer() {
      appStore().navDrawer()
    },
    addNotification() {
      const types = ['info', 'error', 'success', 'warning'];
      const type = types[Math.floor(Math.random() * types.length)] as "info" | "error" | "success" | "warning";

      appStore().addNotification(createNotification({
        type: type,
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      }));
    },
    proccess() {
      appStore().setIsLoading(!appStore().isLoading)
    },
    toggleDark() {
      this.isDark = appStore().toggleDark()
      this.theme.global.name.value = this.isDark ? 'dark' : 'light';
    },
  },
}
</script>