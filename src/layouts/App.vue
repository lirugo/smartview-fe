<template>
  <v-app>
    <particles />

    <navigation-drawer />
    <app-bar />

    <main>
      <main-view />
    </main>
  </v-app>
</template>

<script lang="ts" setup>
import AppBar from './AppBar.vue'
import NavigationDrawer from './NavigationDrawer.vue'
import MainView from './View.vue'
import Particles from "../components/common/Particles.vue";
</script>
