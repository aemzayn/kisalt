import clsx from 'clsx'
import { Alert as IAlert } from 'interfaces/Alert'
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  ExclamationIcon,
} from '@heroicons/react/solid'

export type AlertProps = {
  alert: IAlert
  closeAlert: () => void
}

export default function Alert({ alert, closeAlert }: AlertProps) {
  return (
    <div
      className={clsx(
        'fixed top-[50%] left-[50%] z-50 w-[90vw] max-w-[90vw] -translate-y-[50%] -translate-x-[50%] flex-col gap-4 rounded-md bg-white p-5 opacity-80 shadow-lg outline duration-150  ease-in lg:max-w-[50vw] lg:gap-2 xl:max-w-[40vw]',
        alert.isOpen ? 'flex translate-y-0 opacity-100' : 'hidden',
        alert.type === 'warning' && 'outline-yellow-400',
        alert.type === 'error' && 'outline-red-400'
      )}
    >
      <h1 className="flex items-center gap-2 text-xl">
        {alert.title}
        {alert.type === 'success' && (
          <CheckCircleIcon className="h-5 w-5 text-violet-500" />
        )}
        {alert.type === 'warning' && (
          <ExclamationIcon className="h-5 w-5 text-yellow-500" />
        )}
        {alert.type === 'error' && (
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
        )}
      </h1>
      <p className="text-slate-800">
        {typeof alert.message === 'object'
          ? alert.message?.message
          : alert.message}
      </p>
      <div className="flex flex-col justify-center gap-2 md:flex-row lg:items-center lg:justify-evenly">
        {alert.closeText && (
          <button
            onClick={alert.onClose}
            className={clsx(
              'flex-1 rounded-md bg-violet-200 py-2 text-violet-900 disabled:bg-violet-400',
              alert.type === 'warning' &&
                'border border-yellow-500 bg-white text-black'
            )}
          >
            {alert.closeText}
          </button>
        )}

        {alert.confirmText && (
          <button
            onClick={alert.onConfirm}
            className={clsx(
              'flex-1 rounded-md bg-violet-900 py-2 text-violet-50 duration-100 hover:bg-opacity-80 disabled:bg-violet-500',
              alert.type === 'warning' && 'bg-yellow-400 text-black',
              alert.type === 'error' && 'bg-red-600'
            )}
          >
            {alert.confirmText}
          </button>
        )}
      </div>
    </div>
  )
}
