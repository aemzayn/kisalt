import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { FormikHelpers, Formik, Form, Field } from 'formik'

import PageContainer from 'components/Container/PageContainer'
import { setNewPassword } from 'lib/supabaseClient'
import { setNewPasswordValidationScheme } from 'lib/validations'
import { LS_FP_TOKEN } from 'constants/common'
import { useAlertContext } from 'context/AlertContext'
import { login } from 'constants/paths'

type Values = {
  email: string
  password: string
}

export type AuthSetNewPasswordProps = {}

export default function AuthSetNewPassword({}: AuthSetNewPasswordProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [accessToken, setAccessToken] = useState<string>('')
  const { setAlert } = useAlertContext()

  useEffect(() => {
    if (window && window.localStorage) {
      const token = window.localStorage.getItem(LS_FP_TOKEN)
      setAccessToken(token)
    }
  }, [])

  const handleSubmit = async (
    { password }: Values,
    {}: FormikHelpers<Values>
  ) => {
    setIsSubmitting(true)
    const { error } = await setNewPassword({ accessToken, password })

    if (error) {
      setAlert({
        title: 'Cannot update password',
        message: error,
        type: 'error',
        closeText: 'Close',
        onClose: () => {
          setIsSubmitting(false)
        },
      })
    } else {
      setAlert({
        title: 'Success',
        message: 'Your password has been changed.',
        type: 'success',
        closeText: 'Close',
        onClose: () => {
          setIsSubmitting(false)
          window.location.assign(login)
        },
      })
    }
  }

  return (
    <PageContainer height="screen">
      <main className="grid place-items-center pt-10">
        <h1 className="text-3xl">Set new password</h1>
        <p className="mt-2">
          Enter your email so we can send you link to reset your password
        </p>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={setNewPasswordValidationScheme}
        >
          {({ errors, touched }) => (
            <Form className="mt-10 flex flex-col gap-5 rounded-lg bg-white p-5 shadow-lg md:p-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email address</label>
                <Field
                  className={clsx(
                    'w-80 rounded-md ring-1 ring-violet-300 focus:ring-violet-500 lg:w-96',
                    errors.email && 'ring-red-500'
                  )}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                />
                {errors.email && touched.email && (
                  <p className="max-w-fit text-red-500">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">New password</label>
                <Field
                  className={clsx(
                    'w-80 rounded-md ring-1 ring-violet-300 focus:ring-violet-500 lg:w-96',
                    errors.password && 'ring-red-500'
                  )}
                  type="password"
                  name="password"
                  id="password"
                  required
                />
                {errors.password && touched.password && (
                  <p className="max-w-fit text-red-500">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className={clsx(
                  'rounded-md bg-violet-900 py-2 text-violet-50 duration-150 hover:bg-opacity-80 disabled:bg-violet-400',
                  !isSubmitting ? 'cursor-pointer' : 'cursor-not-allowed'
                )}
                disabled={isSubmitting}
              >
                Change password
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </PageContainer>
  )
}
