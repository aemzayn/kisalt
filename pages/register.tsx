import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";
import { Formik, FormikHelpers, Form, Field } from "formik";

import Container from "components/Container";
import Layout from "components/Layout";
import { register, loginWithGoogle } from "lib/supabaseClient";
import registerValidationScheme from "lib/validations/registerValidationScheme";

type Props = {};

interface FormValues {
  email: string;
  fullName: string;
  password: string;
}

export default function Register({}: Props) {
  const handleGoogleLogin = async () => {
    const { user, session, error } = await loginWithGoogle();
    if (error) {
      console.log(error);
      return false;
    }

    console.log(user, session);
  };

  const handleSubmit = async (
    values: FormValues,
    { setTouched, setSubmitting, setValues }: FormikHelpers<FormValues>
  ) => {
    const { email, password } = values;

    const { session, error } = await register({
      email,
      password,
    });

    if (error != null) {
      console.error(error);
      return false;
    }

    if (session) {
      console.log(session);
      setValues({
        email: "",
        password: "",
        fullName: "",
      });
    }

    setTouched({
      fullName: false,
      email: false,
      password: false,
    });
  };

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <div className="bg-gradient-to-b from-violet-200 to-violet-100 min-h-hero h-hero pb-10">
        <Container height="full">
          <div className="h-full flex flex-col items-center md:justify-center pt-10 md:pt-0">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Create new account</h1>
            </div>
            <Formik
              initialValues={{
                email: "",
                fullName: "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={registerValidationScheme}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="flex flex-col p-5 md:p-10 rounded-lg shadow-lg gap-5 bg-white mt-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="fullName">Full Name</label>
                    <Field
                      className="w-80 lg:w-96 rounded-md ring-1 ring-violet-300 focus:ring-violet-500"
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="John Deo"
                      required
                    />
                    {errors.fullName && touched.fullName && (
                      <p className="text-red-500">{errors.fullName}</p>
                    )}
                  </div>
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
                      <p className="text-red-500 max-w-fit">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:items-center justify-between">
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
                    Sign Up
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
                    onClick={handleGoogleLogin}
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
