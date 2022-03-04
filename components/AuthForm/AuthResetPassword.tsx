import { useState } from 'react'
import clsx from 'clsx'
import { FormikHelpers, Formik, Form, Field } from 'formik'

import PageContainer from 'components/Container/PageContainer'
import { sendResetEmail } from 'lib/supabaseClient'
import { resetPasswordValidationScheme } from 'lib/validations'

type Values = {
  email: string
}

export type AuthResetPasswordProps = {}

export default function AuthResetPassword({}: AuthResetPasswordProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (
    { email }: Values,
    { resetForm, setErrors }: FormikHelpers<Values>
  ) => {
    setIsSubmitting(true)
    const { error } = await sendResetEmail(email)

    if (error) {
      setErrors({
        email: error.message,
      })
    }
    setIsSubmitting(false)

    !error && resetForm()
  }

  return (
    <PageContainer height="screen">
      <main className="grid place-items-center pt-10">
        <h1 className="text-3xl">Forgot Password?</h1>
        <p className="mt-2">
          Enter your email so we can send you link to reset your password
        </p>
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={resetPasswordValidationScheme}
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
              <button
                type="submit"
                className={clsx(
                  'rounded-md bg-violet-900 py-2 text-violet-50 duration-150 hover:bg-opacity-80 disabled:bg-violet-400',
                  !isSubmitting ? 'cursor-pointer' : 'cursor-not-allowed'
                )}
                disabled={isSubmitting}
              >
                Send email
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </PageContainer>
  )
}
