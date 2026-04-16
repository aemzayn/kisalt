import { useRef } from 'react'
import { XIcon, DownloadIcon } from '@heroicons/react/outline'
import { QRCodeCanvas } from 'qrcode.react'

export type QRCodeModalProps = {
  url: string
  slug: string
  onClose: () => void
}

export default function QRCodeModal({ url, slug, onClose }: QRCodeModalProps) {
  const canvasRef = useRef<HTMLDivElement>(null)

  const handleDownload = () => {
    const canvas = canvasRef.current?.querySelector('canvas')
    if (!canvas) return
    const dataUrl = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = dataUrl
    link.download = `qrcode-${slug}.png`
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="qrcode-modal-title"
    >
      <div
        className="relative flex flex-col items-center gap-4 rounded-xl bg-white p-8 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-1 hover:bg-gray-100"
          aria-label="Close"
        >
          <XIcon className="h-5 w-5 text-gray-500" />
        </button>

        <h2
          id="qrcode-modal-title"
          className="text-lg font-semibold text-gray-800"
        >
          QR Code
        </h2>
        <p className="text-sm text-gray-500">/{slug}</p>

        <div ref={canvasRef}>
          <QRCodeCanvas value={url} size={200} />
        </div>

        <button
          onClick={handleDownload}
          className="flex items-center gap-2 rounded-md bg-violet-700 px-4 py-2 text-sm text-white hover:bg-violet-600"
        >
          <DownloadIcon className="h-4 w-4" />
          Download QR Code
        </button>
      </div>
    </div>
  )
}
