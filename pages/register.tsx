import Container from "components/Container";
import Layout from "components/Layout";
import { Formik, FormikHelpers, Form, Field } from "formik";
import Head from "next/head";
import Link from "next/link";

type Props = {};

interface FormValues {
  email: string;
  fullName: string;
  password: string;
}

export default function Register({}: Props) {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <div className="bg-gradient-to-b  from-violet-200 to-violet-100 lg:h-hero">
        <Container height="full">
          <div className="h-full flex flex-col items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Create new account</h1>
            </div>
            <Formik
              initialValues={{
                email: "",
                fullName: "",
                password: "",
              }}
              onSubmit={(
                values: FormValues,
                { setSubmitting }: FormikHelpers<FormValues>
              ) => {
                console.log(values);
                alert(JSON.stringify(values));
              }}
            >
              <Form className="flex flex-col p-10 rounded-lg shadow-lg gap-5 bg-white mt-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName">Full Name</label>
                  <Field
                    className="w-96 rounded-md ring-1 ring-violet-300 focus:ring-violet-500"
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="John Deo"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email address</label>
                  <Field
                    className="w-96 rounded-md ring-1 ring-violet-300 focus:ring-violet-500"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="password">Password</label>
                  <Field
                    className="w-96 rounded-md ring-1 ring-violet-300 focus:ring-violet-500"
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
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
                  className="py-2 bg-violet-900 text-violet-50 rounded-md"
                >
                  Sign Up
                </button>
                <div className="relative flex -my-2 items-center">
                  <div className="flex-grow border-t border-gray-300" />
                  <span className="flex-shrink mx-4 text-gray-400">or</span>
                  <div className="flex-grow border-t border-gray-300" />
                </div>
                <button className="py-2 border-2 hover:bg-gray-100 bg-white text-gray-600 rounded-md duration-200">
                  Google
                </button>
              </Form>
            </Formik>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
