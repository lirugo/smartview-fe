<script setup lang="ts">
import type { AppNotification } from '@/store/classes/AppNotification'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    timeout: number
    notification: AppNotification
    variant: boolean
  }>(),
  { modelValue: false, timeout: 5000 },
)
const emit = defineEmits(['update:modelValue', 'close'])
const isActive = true
const timeout = 100
let activeTimeout: number
// TODO make this work
// const startTimeout = () => {
//   clearTimeout(activeTimeout)

//   if (!isActive.value || timeout.value === -1) {
//     return
//   }

//   activeTimeout = window.setTimeout(() => {
//     isActive.value = false
//   }, timeout.value)
// }
// watch([isActive, timeout], startTimeout)
// if (isActive.value) {
//   startTimeout()
// }
</script>

<template>
  <v-alert v-if="notification.show" :border="variant ? 'start' : true" :variant="variant ? 'outlined' : undefined"
    :density="variant ? 'compact' : 'compact'" :elevation="variant ? 0 : 3" :type="notification.type"
    :text="`id: ${notification.id} | ${notification.text}`" :title="notification.time.toLocaleString()">
    <template #close>
      <v-btn icon="$close" @click="$emit('close')" />
    </template>
  </v-alert>
</template>

<style scoped>
:deep(.v-alert-title) {
  line-height: 1.25rem;
  font-size: 14px;
  font-weight: 300;
}
</style>