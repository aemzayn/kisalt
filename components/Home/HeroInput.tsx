import Link from 'next/link'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import {
  LinkIcon,
  ExclamationCircleIcon,
  LogoutIcon,
} from '@heroicons/react/solid'

import Spinner from 'components/Spinner'
import { generateRandomSlug } from 'lib/helpers'
import { heroInputValidationScheme } from 'lib/validations'
import { createNewUrl } from 'lib/supabaseClient'
import useUser from 'hooks/useUser'
import { useState } from 'react'
import { copyToClipboard } from 'lib/string'
import { HOME } from 'constants/paths'

export type Values = {
  realUrl: string
}

export type HeroInputProps = {}

export default function HeroInput({}: HeroInputProps) {
  const [msgType, setMsgType] = useState<'error' | 'success'>('error')
  const [newSlug, setNewSlug] = useState<string | null>('')
  const { data: user, isLogin } = useUser()

  const handleCopyUrl = (slug: string) => {
    const fullLink = `${HOME}${slug}`
    copyToClipboard(fullLink)
  }

  const handleSubmit = async (
    { realUrl }: Values,
    { setFieldError }: FormikHelpers<Values>
  ) => {
    try {
      const slug = generateRandomSlug()

      if (isLogin) {
        const { error } = await createNewUrl(
          {
            realUrl,
            slug,
          },
          user.id
        )

        if (error) {
          throw new Error(error)
        }

        setNewSlug(slug)
        setMsgType('success')
        setFieldError('realUrl', `Your short url is ready: /${slug}`)
      } else {
        setMsgType('error')
        setFieldError('realUrl', 'You are not logged in, please log in first.')
      }
    } catch (error) {
      setFieldError('realUrl', error || error.message)
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <Formik
        initialValues={{
          realUrl: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={heroInputValidationScheme}
      >
        {({ errors, isSubmitting }) => (
          <>
            <Form className="flex rounded-full bg-white py-2 px-3 ring-2 ring-violet-300">
              <Field
                type="url"
                name="realUrl"
                className="flex-1 rounded-full border-none bg-white placeholder:text-sm placeholder:text-violet-500"
                placeholder="Paste long link"
              />
              <button
                type="submit"
                className="rounded-full bg-violet-800 px-5 py-2 text-violet-50 duration-75 hover:bg-opacity-90"
                disabled={isSubmitting}
              >
                Shorten {isSubmitting && <Spinner />}
              </button>
            </Form>
            <div className="flex flex-col gap-2">
              {errors.realUrl && msgType === 'error' && (
                <>
                  <p className="-ml-[1px] flex items-center gap-2 text-sm text-red-500">
                    <ExclamationCircleIcon className="h-6 w-6" /> You are not
                    logged in, please log in first.
                  </p>
                  <Link href="/login">
                    <a className="flex items-center gap-2 text-sm text-violet-500 hover:underline">
                      <LogoutIcon className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-300 p-1 text-violet-900" />
                      Click here to login
                    </a>
                  </Link>
                </>
              )}
              {errors.realUrl && msgType === 'success' && (
                <p className="flex cursor-pointer items-center gap-2 text-sm text-blue-500 hover:text-opacity-80">
                  {errors.realUrl}
                  <span
                    onClick={() => handleCopyUrl(newSlug)}
                    className="font-semibold underline underline-offset-2"
                  >
                    copy
                  </span>
                </p>
              )}
              {!errors.realUrl && (
                <p className="flex items-center gap-2 text-sm text-violet-500">
                  <LinkIcon className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-300 p-1 text-violet-900" />{' '}
                  Create new short url with{' '}
                  <span className="font-semibold underline underline-offset-2">
                    random slug
                  </span>
                </p>
              )}
            </div>
          </>
        )}
      </Formik>
    </div>
  )
}
