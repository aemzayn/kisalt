import clsx from 'clsx'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

export type IconProps = {
  width?: number
  color?: string
}

export const ErrorIcon = ({ color, width }: IconProps) => {
  return (
    <ExclamationCircleIcon
      className={clsx(width && `w-${width} h-${width}`, color && color)}
    />
  )
}
