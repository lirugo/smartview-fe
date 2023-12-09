<template>
  <v-app>
    <particles />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Particles from "./common/Particles.vue";
</script>
