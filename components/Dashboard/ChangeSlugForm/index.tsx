import { useState } from 'react'
import clsx from 'clsx'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { SaveIcon, XIcon } from '@heroicons/react/outline'

import { Url } from 'interfaces/Url'
import { changeSlugValidationScheme } from 'lib/validations'
import { patchSlug } from 'lib/supabaseClient'
import Spinner from 'components/Spinner'
import { User } from 'interfaces/User'
import { useAlertContext } from 'context/AlertContext'
import { sanitizeSlug } from 'lib/helpers'
import { mutate } from 'swr'
import { getMyDashboardApi } from 'constants/paths'

export type ChangeSlugFormProps = {
  url: Url
  user: User
  closeEditMode: () => void
}

export type ChangeSlugFormValues = {
  slug: string
}

export default function ChangeSlugForm({
  url,
  user,
  closeEditMode,
}: ChangeSlugFormProps) {
  const { setAlert, closeAlert, alert } = useAlertContext()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (
    values: ChangeSlugFormValues,
    { setFieldError }: FormikHelpers<ChangeSlugFormValues>
  ) => {
    try {
      setIsLoading(true)
      const { error } = await patchSlug({
        id: url.id,
        slug: sanitizeSlug(values.slug),
        userId: user.id,
      })
      if (error) {
        throw new Error(error)
      } else {
        mutate(getMyDashboardApi(user?.id))
      }
    } catch (error) {
      console.error(error)
      setAlert({
        title: 'Cannot change the slug.',
        message: error,
        onClose: () => {
          closeAlert()
          setIsLoading(false)
        },
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Formik
      initialValues={{
        slug: url.slug,
      }}
      onSubmit={handleSubmit}
      validationSchema={changeSlugValidationScheme}
    >
      {({ errors }) => (
        <Form className="flex gap-1">
          <div className="flex-1">
            <Field
              className={clsx(
                'w-full rounded-md text-black ring-1 ring-violet-300 placeholder:text-gray-400 focus:ring-violet-500',
                errors.slug && 'ring-red-400'
              )}
              name="slug"
              type="text"
              placeholder="New slug"
            />
          </div>
          <button
            type="submit"
            className={clsx(
              'rounded-md bg-violet-700 px-5 py-2 text-violet-50 hover:bg-opacity-80 disabled:bg-violet-400',
              isLoading && 'cursor-not-allowed'
            )}
            disabled={isLoading}
          >
            {!isLoading ? <SaveIcon className="h-5 w-5" /> : <Spinner />}
          </button>
          <button
            type="button"
            className={clsx(
              'rounded-md bg-slate-200 px-5 py-2 text-black duration-100 hover:bg-opacity-80 disabled:bg-slate-100',
              isLoading && 'cursor-not-allowed'
            )}
            disabled={isLoading}
            onClick={closeEditMode}
          >
            {!isLoading ? <XIcon className="h-5 w-5" /> : <Spinner />}
          </button>
        </Form>
      )}
    </Formik>
  )
}
