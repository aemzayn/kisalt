import { Formik, Form, Field, FormikHelpers } from "formik";
import { newUrlValidationScheme } from "lib/validations";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

export type Values = {
  longUrl: string;
  shortUrl: string;
};

export const ErrorIcon = () => <ExclamationCircleIcon className="h-5 w-5" />;

export type ErrorMessageProps = {
  msg: string;
};

export const ErrorMessage = ({ msg }: ErrorMessageProps) => {
  return (
    <p className="flex items-center gap-1 text-red-500">
      <ErrorIcon /> {msg}
    </p>
  );
};

export type NewUrlFormProps = {};

export default function NewUrlForm({}: NewUrlFormProps) {
  const handleSubmit = async (
    values: Values,
    { resetForm, setErrors }: FormikHelpers<Values>
  ) => {
    alert(JSON.stringify(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        longUrl: "",
        shortUrl: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={newUrlValidationScheme}
    >
      {({ errors, touched }) => (
        <Form className="col-span-12 grid grid-cols-12 gap-6">
          <div className="col-span-6 flex flex-col gap-2">
            <div className="flex h-16 items-center justify-center rounded-md border border-gray-200 bg-white p-2">
              <Field
                type="url"
                name="longUrl"
                placeholder="Long url"
                className="flex-1 border-0 ring-0"
              />
            </div>
            {errors.longUrl && touched.longUrl && (
              <ErrorMessage msg={errors.longUrl} />
            )}
          </div>
          <div className="col-span-3 flex flex-col gap-2">
            <div className="flex h-16 items-center justify-center rounded-md border border-gray-200 bg-white p-2">
              <Field
                type="text"
                name="shortUrl"
                placeholder="Short url"
                className="flex-1 border-0 ring-0"
              />
            </div>
            {errors.shortUrl && touched.shortUrl && (
              <ErrorMessage msg={errors.shortUrl} />
            )}
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
