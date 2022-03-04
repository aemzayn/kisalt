import {
  ClipboardCopyIcon,
  ShareIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/solid'
import { HOME } from 'constants/paths'
import { copyToClipboard } from 'lib/string'

export type LinkItemProps = {
  shortUrl: string
  longUrl: string
  clicks: number
}

const LinkItem = ({ shortUrl, longUrl, clicks }: LinkItemProps) => {
  const handleCopy = () => {
    const fullLink = `${HOME}${shortUrl}`
    copyToClipboard(fullLink)
  }

  return (
    <div className="flex min-h-[14rem] flex-col gap-2 rounded-md border border-gray-200 bg-white p-5 text-gray-400">
      <p className="text-lg font-medium text-violet-800">/{shortUrl}</p>
      <p className="">{longUrl}</p>
      <p>
        <span className="mr-1 text-violet-800">{clicks}</span>
        clicks
      </p>
      <div className="mt-auto flex gap-6">
        <button
          onClick={handleCopy}
          className="rounded-full p-1 duration-150 hover:bg-gray-200 "
        >
          <ClipboardCopyIcon className="h-4 w-4 text-violet-800" />
        </button>
        <button className="rounded-full p-1 duration-150 hover:bg-gray-200 ">
          <ShareIcon className="h-4 w-4 text-violet-800" />
        </button>
        <button className="rounded-full p-1 duration-150 hover:bg-gray-200 ">
          <PencilIcon className="h-4 w-4 text-violet-800" />
        </button>
        <button className="ml-auto rounded-full p-1 duration-150 hover:bg-gray-200">
          <TrashIcon className="h-4 w-4 text-violet-800" />
        </button>
      </div>
    </div>
  )
}

export default LinkItem
