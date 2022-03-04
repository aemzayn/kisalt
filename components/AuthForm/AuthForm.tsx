import Link from 'next/link'
import { FormikHelpers, Formik, Form, Field } from 'formik'
import clsx from 'clsx'

import { authValidationScheme } from 'lib/validations'
import Container from 'components/Container/Container'
import {
  login,
  loginWithGoogle,
  register,
  setSession,
} from 'lib/supabaseClient'
import { EVENT_SIGN_IN } from 'constants/common'
import { dashboard, resetPassword } from 'constants/paths'
import ErrorMessage from './ErrorMessage'

export type AuthFormProps = {
  formType: 'login' | 'register'
}

export type FormValues = {
  email: string
  password: string
}

export default function AuthForm({ formType = 'login' }: AuthFormProps) {
  const isLogin = formType === 'login'
  const handleError = (msg: any) => {}

  const handleSubmit = async (
    values: FormValues,
    { resetForm, setErrors }: FormikHelpers<FormValues>
  ) => {
    const { email, password } = values
    let session: any
    let error: any

    if (formType === 'login') {
      const { session: loginSession, error: loginError } = await login({
        email,
        password,
      })
      session = loginSession
      error = loginError
    } else {
      const { session: registerSession, error: registerError } = await register(
        {
          email,
          password,
        }
      )
      session = registerSession
      error = registerError
    }

    if (error) {
      handleError(error)
      setErrors({
        email: error.message,
        password: error.message,
      })
      return false
    }

    if (session && !error) {
      if (formType === 'login') {
        await setSession(EVENT_SIGN_IN, session)

        setTimeout(() => {
          window.location.assign(dashboard)
        }, 500)
      }
    }

    resetForm()
  }

  return (
    <div className="h-hero flex items-center justify-center bg-gradient-to-b from-violet-200 to-violet-100">
      <Container height="full">
        <div className="flex h-full flex-col items-center pt-10 md:justify-center md:pt-0">
          <div className="text-center">
            <h1 className="pb-2 text-3xl font-bold">
              {formType === 'login'
                ? 'Sign in to your account'
                : 'Create new account'}
            </h1>

            {isLogin && <p>Login to manage your account</p>}
          </div>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={authValidationScheme}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="mt-10 flex flex-col gap-5 rounded-lg bg-white p-5 shadow-lg md:p-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email address</label>
                  <Field
                    className={clsx(
                      'w-80 rounded-md ring-1 ring-violet-300 focus:ring-violet-500 lg:w-96',
                      errors.email && touched.email && 'ring-red-500'
                    )}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john@example.com"
                    required
                  />
                  {errors.email && touched.email && (
                    <ErrorMessage msg={errors.email} />
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="password">Password</label>
                  <Field
                    className={clsx(
                      'w-80 rounded-md ring-1 ring-violet-300 focus:ring-violet-500 lg:w-96',
                      errors.password && touched.password && 'ring-red-500'
                    )}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete={
                      formType === 'login' ? 'current-password' : 'new-password'
                    }
                    required
                  />
                  {errors.password && touched.password && (
                    <ErrorMessage msg={errors.password} />
                  )}
                </div>

                <div className="flex flex-col justify-end gap-y-2 lg:flex-row lg:items-center">
                  <Link href={resetPassword}>
                    <a className="font-medium text-violet-700 hover:text-violet-500">
                      Forgot your password?
                    </a>
                  </Link>
                </div>

                <button
                  type="submit"
                  className={clsx(
                    'rounded-md bg-violet-900 py-2 text-violet-50 disabled:bg-violet-400',
                    !isSubmitting ? 'cursor-pointer' : 'cursor-not-allowed'
                  )}
                  disabled={isSubmitting}
                >
                  {isLogin ? 'Login' : 'Sign Up'}
                </button>

                <div className="relative -my-2 flex items-center">
                  <div className="flex-grow border-t border-gray-300" />
                  <span className="mx-4 flex-shrink text-gray-400">or</span>
                  <div className="flex-grow border-t border-gray-300" />
                </div>

                <button
                  type="button"
                  className="rounded-md border-2 bg-white py-2 text-gray-600 duration-200 hover:bg-gray-100 disabled:text-gray-300"
                  disabled={isSubmitting}
                  onClick={loginWithGoogle}
                >
                  Google
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  )
}
