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
        'absolute top-[15vh] left-[50%] z-50 w-[90vw] max-w-[90vw] -translate-y-10 -translate-x-[50%] flex-col gap-4 bg-white p-5 opacity-80 shadow-lg outline duration-150 ease-in  lg:top-[10vh] lg:max-w-[50vw] lg:gap-2 xl:max-w-[40vw]',
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
      <p className="text-slate-800">{alert.message}</p>
      <div className="flex flex-col justify-center gap-2 md:flex-row lg:items-center lg:justify-evenly">
        {alert.closeText && (
          <button
            onClick={alert.onClose}
            className="flex-1 rounded-md bg-violet-200 py-2 text-violet-900 disabled:bg-violet-400"
          >
            {alert.closeText}
          </button>
        )}

        {alert.confirmText && (
          <button
            onClick={alert.onConfirm}
            className={clsx(
              'flex-1 rounded-md bg-violet-900 py-2 text-violet-50 disabled:bg-violet-400',
              alert.type === 'warning' && 'bg-yellow-500 text-black',
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
