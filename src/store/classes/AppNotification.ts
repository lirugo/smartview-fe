let id = 1

export interface AppNotification {
  id: number
  show: boolean
  type: 'info' | 'error' | 'success' | 'warning'
  text: string
  time: Date
}

export function createNotification(notification: Partial<AppNotification> = {}): AppNotification {
  return {
    id: notification.id || id++,
    show: notification.show || true,
    type: notification.type || 'info',
    text: notification.text || '',
    time: notification.time || new Date(),
  };
}