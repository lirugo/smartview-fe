<script setup lang="ts">
import { appStore } from '@/store/app';
import { ref } from 'vue';
import AppNotificationItem from './AppNotificationItem.vue';

const showAll = ref(false)
const timeout = ref(5000)

const toggleAllNotification = () => {
  showAll.value = !showAll.value
  if (appStore().notifications.length > 0) {
    appStore().toggleAllNotification(showAll.value)
  }
}

const removeNotification = (id: number) => {
  appStore().removeNotification(id)
}

const removeAllNotification = (id: number) => {
  appStore().removeAllNotification()
}

</script>

<template>
  <v-tooltip location="top">
    <template #activator="{ props }">
      <v-btn :icon="appStore().notifications.length ? 'mdi-bell-badge-outline' : 'mdi-bell-outline'"
        :color="appStore().notifications.length ? 'primary' : 'grey lighten-1'" v-bind="props"
        @click="toggleAllNotification">
      </v-btn>
    </template>
    <span>Notification</span>
  </v-tooltip>

  <teleport to="body">
    <v-card elevation="6" width="400" class="d-flex flex-column notification-card"
      :class="{ 'notification-card--open': showAll }">
      <v-toolbar flat density="compact">
        <v-toolbar-title class="font-weight-light text-body-1"
          :text="appStore().notifications.length ? 'Notification' : 'No New Notifications'">
        </v-toolbar-title>
        <v-btn size="small" icon="mdi-bell-remove" title="Clear All Notifications" @click="removeAllNotification" />
        <v-btn class="mr-0" size="small" icon="$expand" title="Hide Notifications" @click="toggleAllNotification" />
      </v-toolbar>
      <v-slide-y-reverse-transition tag="div" class="d-flex flex-column notification-box" group hide-on-leave>
        <div v-for="notification in appStore().notifications" :key="notification.id" class="notification-item-wrapper">
          <app-notification-item v-model="notification.show" :variant="showAll" :notification="notification"
            :timeout="timeout" class="notification-item" @close="removeNotification(notification.id)" />
        </div>
      </v-slide-y-reverse-transition>
    </v-card>
  </teleport>
</template>

<style scoped>
.notification-item {
  width: 100%;
  border: 0;
}

.notification-card {
  z-index: 1;
  position: fixed;
  right: 10px;
  bottom: 10px;
  max-height: 100vh;
  overflow: visible;
  visibility: hidden;

  &.notification-card--open {
    visibility: visible;
    overflow: hidden;
    max-height: calc(100vh - 200px);

    .notification-box {
      overflow-y: overlay;
      pointer-events: auto;

      .notification-item-wrapper {
        transition: none !important;

        .notification-item {
          margin-bottom: 0;
          border-radius: 0;
          border-top: 1px solid #5656563d !important;
        }
      }
    }
  }
}

.notification-box {
  overflow-y: visible;
  visibility: visible;
  pointer-events: none;

  .notification-item {
    pointer-events: initial;
    user-select: initial;
    margin-bottom: 10px;
  }
}
</style>