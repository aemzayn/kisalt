import {
  ClipboardCopyIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/solid'

import { HOME } from 'constants/paths'
import { Url } from 'interfaces/Url'
import { User } from 'interfaces/User'
import { copyToClipboard } from 'lib/string'
import { useState } from 'react'
import ChangeSlugForm from './ChangeSlugForm'

export type LinkItemProps = {
  url: Url
  user: User
}

const LinkItem = ({ url, user }: LinkItemProps) => {
  const [editMode, setEditMode] = useState<boolean>(false)

  const closeEditMode = () => {
    setEditMode(false)
  }

  const handleCopy = () => {
    const fullLink = `${HOME}${url.slug}`
    copyToClipboard(fullLink)
  }

  return (
    <div className="col-span-6 flex min-h-[14rem] flex-col gap-2 rounded-md border border-gray-200 bg-white p-5 text-gray-400 md:col-span-3 lg:col-span-2">
      <p className="text-lg font-medium text-violet-800">/{url.slug}</p>

      {editMode && (
        <ChangeSlugForm url={url} user={user} closeEditMode={closeEditMode} />
      )}

      <p className="break-all">{url.real_url}</p>
      <p>
        <span className="mr-1 text-violet-800">{url.clicks}</span>
        clicks
      </p>
      <div className="mt-auto flex gap-6">
        <button
          onClick={handleCopy}
          className="rounded-full p-1 duration-150 hover:bg-gray-200 "
        >
          <ClipboardCopyIcon className="h-4 w-4 text-violet-800" />
        </button>
        <button
          onClick={() => setEditMode(true)}
          className="rounded-full p-1 duration-150 hover:bg-gray-200 "
        >
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
