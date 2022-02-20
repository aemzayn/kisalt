import Head from "next/head";
import Link from "next/link";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Container from "components/Container";
import Layout from "components/Layout";
import { object, string } from "yup";
import clsx from "clsx";

type Props = {};

interface FormValues {
  email: string;
  password: string;
}

const loginValidationScheme = object().shape({
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(6, "Must be at least 6 characters")
    .required("Password cannot be empty."),
});

// TODO: Implement login
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Login({}: Props) {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <div className="bg-gradient-to-b from-violet-200 to-violet-100 h-hero">
        <Container height="full">
          <div className="h-full flex flex-col items-center md:justify-center pt-10 md:pt-0">
            <div className="text-center">
              <h1 className="text-3xl font-bold pb-2">
                Sign in to your account
              </h1>
              <p>Login to manage your account</p>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(
                values: FormValues,
                {
                  setTouched,
                  setSubmitting,
                  setValues,
                }: FormikHelpers<FormValues>
              ) => {
                sleep(500)
                  .then(() => {
                    alert(JSON.stringify(values));
                    setValues({
                      email: "",
                      password: "",
                    });
                    setTouched({
                      email: false,
                      password: false,
                    });
                  })
                  .finally(() => {
                    setSubmitting(false);
                  });
              }}
              validationSchema={loginValidationScheme}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="flex flex-col p-5 md:p-10 rounded-lg shadow-lg gap-5 bg-white mt-10">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email address</label>
                    <Field
                      className="w-80 lg:w-96 rounded-md ring-1 ring-violet-300 focus:ring-violet-500"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john@example.com"
                      required
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <Field
                      className="w-80 lg:w-96 rounded-md ring-1 ring-violet-300 focus:ring-violet-500"
                      type="password"
                      name="password"
                      id="password"
                      required
                    />
                    {errors.password && touched.password && (
                      <p className="text-red-500">{errors.password}</p>
                    )}
                  </div>
                  <div className="flex flex-col lg:flex-row gap-y-2 lg:items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded form-checkbox"
                        name="remember"
                        id="remember"
                      />
                      <label htmlFor="remember">Remember me</label>
                    </div>
                    <Link href="/">
                      <a className="font-medium text-violet-700 hover:text-violet-500">
                        Forgot your password?
                      </a>
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className={clsx(
                      "py-2 bg-violet-900 text-violet-50 rounded-md disabled:bg-violet-400",
                      !isSubmitting ? "cursor-pointer" : "cursor-not-allowed"
                    )}
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                  <div className="relative flex -my-2 items-center">
                    <div className="flex-grow border-t border-gray-300" />
                    <span className="flex-shrink mx-4 text-gray-400">or</span>
                    <div className="flex-grow border-t border-gray-300" />
                  </div>
                  <button
                    type="button"
                    className="py-2 border-2 hover:bg-gray-100 bg-white text-gray-600 rounded-md duration-200 disabled:text-gray-300"
                    disabled={isSubmitting}
                  >
                    Google
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
