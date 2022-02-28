import { Formik, Form, Field, FormikHelpers } from "formik";
import { newUrlValidationScheme } from "lib/validations";
import ErrorMessage from "components/AuthForm/ErrorMessage";
import { createNewUrl } from "lib/supabaseClient";

export type Values = {
  realUrl: string;
  slug: string;
};

export type NewUrlFormProps = {
  userId: string;
};

export default function NewUrlForm({ userId }: NewUrlFormProps) {
  const handleSubmit = async (
    values: Values,
    { resetForm, setErrors }: FormikHelpers<Values>
  ) => {
    try {
      const {} = await createNewUrl(
        {
          slug: values.slug,
          realUrl: values.realUrl,
        },
        userId
      );
    } catch (error) {
    } finally {
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        realUrl: "",
        slug: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={newUrlValidationScheme}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form className="col-span-12 grid grid-cols-12 gap-6">
          <div className="col-span-6 flex flex-col gap-2">
            <div className="flex h-16 items-center justify-center rounded-md border border-gray-200 bg-white p-2">
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
          <div className="col-span-3 flex flex-col gap-2">
            <div className="flex h-16 items-center justify-center rounded-md border border-gray-200 bg-white p-2">
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
            className="col-span-3 h-16 rounded-md bg-violet-700 text-white duration-100 hover:bg-opacity-90"
          >
            Shorten
          </button>
        </Form>
      )}
    </Formik>
  );
}
