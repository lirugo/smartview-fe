// Utilities
import { defineStore } from 'pinia'
import { AppNotification } from './classes/AppNotification'

export const appStore = defineStore('app', {
  state: () => ({
    isLoading: false as boolean,
    isDark: true as boolean,
    isNavDrawer: true as boolean,
    isNavRail: true as boolean,
    notifications: [] as AppNotification[],
  }),
  getters: {
    getNotifications: (state) => state.notifications,
  }, 
  actions: {
    setIsLoading(isLoading: boolean) {
      this.isLoading = isLoading
    },
    toggleDark() : boolean {
      this.isDark = !this.isDark
      return this.isDark
    },
    navDrawer() {
      this.isNavRail = !this.isNavRail
    },
    // TODO add notifications to separate store
    addNotification(notification: AppNotification) {
      this.notifications.unshift(notification)
    },
    toggleAllNotification(show: boolean) {
      this.notifications = this.notifications.map((notification) => {
        notification.show = show
        return notification
      })
    },
    removeNotification(id: number) {
      this.notifications = this.notifications.filter((notification) => notification.id !== id)
    },
    removeAllNotification() {
      this.notifications = []
    },
  },
 
})
