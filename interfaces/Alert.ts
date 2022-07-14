export type AlertType = 'success' | 'warning' | 'error'

export interface Alert {
  title: string
  message: string | Error
  type?: AlertType
  confirmText?: string
  closeText?: string
  isOpen?: boolean
  onConfirm?: () => void
  onClose?: () => void
}
