<template>
  <div style="height: 4px">
    <v-progress-linear color="primary" indeterminate v-if="store.isLoading" />
  </div>
</template>

<script lang="ts" setup>
import { appStore } from '@/store/app'
const store = appStore()
</script>