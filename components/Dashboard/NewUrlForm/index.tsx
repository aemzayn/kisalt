import { Formik, Form, Field, FormikHelpers } from 'formik'
import { newUrlValidationScheme } from 'lib/validations'
import ErrorMessage from 'components/AuthForm/ErrorMessage'
import { createNewUrl } from 'lib/supabaseClient'

export type Values = {
  realUrl: string
  slug: string
}

export type NewUrlFormProps = {
  userId: string
}

export default function NewUrlForm({ userId }: NewUrlFormProps) {
  const handleSubmit = async (
    values: Values,
    { resetForm, setErrors }: FormikHelpers<Values>
  ) => {
    try {
      await createNewUrl(
        {
          slug: values.slug,
          realUrl: values.realUrl,
        },
        userId
      )
    } catch (error) {
    } finally {
      resetForm()
    }
  }

  return (
    <Formik
      initialValues={{
        realUrl: '',
        slug: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={newUrlValidationScheme}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form className="col-span-12 grid grid-cols-12 gap-y-3 lg:gap-6">
          <hr className="col-span-12 border-violet-200 lg:hidden" />
          <h1 className="col-span-12 text-xl lg:hidden">New short url</h1>
          <div className="col-span-12 flex flex-col gap-2 lg:col-span-6">
            <div className="flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white p-2 md:h-16">
              <Field
                type="url"
                name="realUrl"
                placeholder="Long url"
                className="flex-1 border-0 ring-0"
              />
            </div>
            {errors.realUrl && touched.realUrl && (
              <ErrorMessage msg={errors.realUrl} />
            )}
          </div>
          <div className="col-span-12 flex flex-col gap-2 lg:col-span-3">
            <div className="flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white p-2 md:h-16">
              <Field
                type="text"
                name="slug"
                placeholder="Short url"
                className="flex-1 border-0 ring-0"
              />
            </div>
            {errors.slug && touched.slug && <ErrorMessage msg={errors.slug} />}
          </div>
          <button
            type="submit"
            className="col-span-12 h-12 rounded-md bg-violet-700 text-white duration-100 hover:bg-opacity-90 md:col-[7/13] md:h-16  lg:col-span-3"
          >
            Shorten
          </button>
          <hr className="col-span-12 border-violet-200 lg:hidden" />
        </Form>
      )}
    </Formik>
  )
}

// 1[]2[]3[]4[]5[]6[]7[]8[]9[]10[]11[]12[]13
