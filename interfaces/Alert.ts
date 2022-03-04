export type AlertType = 'success' | 'warning' | 'error'

export interface Alert {
  title: string
  message: string
  type: AlertType
  confirmText: string
  closeText: string
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}
