import copy from 'copy-to-clipboard'

export type Options = {
  debug?: boolean
  message?: string
  format?: string // MIME type
  onCopy?: (clipboardData: object) => void
}

export const copyToClipboard = (text: string, options?: Options) => {
  copy(text, { ...options })
}
