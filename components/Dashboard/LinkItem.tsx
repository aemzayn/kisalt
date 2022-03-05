import { useState } from 'react'
import {
  ClipboardCopyIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/solid'

import { getMyDashboardApi, HOME } from 'constants/paths'
import { useAlertContext } from 'context/AlertContext'
import { Url } from 'interfaces/Url'
import { User } from 'interfaces/User'
import { copyToClipboard } from 'lib/string'
import { deleteUrl } from 'lib/supabaseClient'
import ChangeSlugForm from './ChangeSlugForm'
import { mutate } from 'swr'

export type LinkItemProps = {
  url: Url
  user: User
}

const LinkItem = ({ url, user }: LinkItemProps) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const { setAlert, closeAlert } = useAlertContext()

  const closeEditMode = () => {
    setEditMode(false)
  }

  const handleDeleteUrl = () => {
    setAlert({
      title: 'Confirmation delete',
      message:
        'Are you sure to delete this URL, deleted URL data cannot be recovered?',
      confirmText: 'Yes, delete',
      onConfirm: handleConfirmDeleteUrl,
      closeText: 'Cancel',
      onClose: () => {
        closeAlert()
      },
      type: 'warning',
    })
  }

  const handleConfirmDeleteUrl = async () => {
    try {
      const { error } = await deleteUrl({ id: url?.id, userId: user?.id })
      if (error) {
        throw new Error(error)
      } else {
        mutate(getMyDashboardApi(user?.id))
        closeAlert()
      }
    } catch (error) {
      setAlert({
        title: 'Error happened.',
        message: error,
        type: 'error',
        onClose: closeAlert,
        closeText: 'Close',
      })
    }
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
        <button
          onClick={handleDeleteUrl}
          className="ml-auto rounded-full p-1 duration-150 hover:bg-gray-200"
        >
          <TrashIcon className="h-4 w-4 text-violet-800" />
        </button>
      </div>
    </div>
  )
}

export default LinkItem
