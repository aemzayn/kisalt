import { ErrorIcon } from 'components/Icons'

export type ErrorMessageProps = {
  msg: string
}

export default function ErrorMessage({ msg }: ErrorMessageProps) {
  return (
    <p className="flex max-w-fit items-center gap-1 text-red-500">
      <ErrorIcon width={5} /> {msg}
    </p>
  )
}
