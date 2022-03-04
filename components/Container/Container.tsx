import React from 'react'
import clsx from 'clsx'

export type Height = 'full' | 'screen' | 'min' | 'max' | 'fit' | '0'

export type ContainerProps = {
  children: React.ReactNode
  height?: Height
}

export default function Container({ children, height }: ContainerProps) {
  return (
    <div
      className={clsx(
        'container mx-auto max-w-6xl px-4 xl:px-0',
        height && `min-h-${height}`
      )}
    >
      {children}
    </div>
  )
}
