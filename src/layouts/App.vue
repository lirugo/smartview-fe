<template>
  <v-app>
    <particles />

    <navigation-drawer />
    <app-bar />

    <v-main>
      <loader />
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Loader from './common/Loader.vue'
import AppBar from './common/AppBar.vue'
import NavigationDrawer from './common/NavigationDrawer.vue'
import Particles from "./common/Particles.vue";
</script>

<style>
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>