import Link from "next/link";
import { FormikHelpers, Formik, Form, Field } from "formik";
import clsx from "clsx";

import { authValidationScheme } from "lib/validations";
import Container from "components/Container/Container";
import {
  login,
  loginWithGoogle,
  register,
  setSession,
} from "lib/supabaseClient";
import { EVENT_SIGN_IN } from "constants/common";
import { dashboard } from "constants/paths";

export type AuthFormProps = {
  type: "login" | "register";
};

export type FormValues = {
  email: string;
  password: string;
};

export default function AuthForm({ type = "login" }: AuthFormProps) {
  const isLogin = type === "login";
  const handleError = (msg: any) => {};

  const handleSubmit = async (
    values: FormValues,
    {
      setTouched,
      setValues,
      setFieldError,
      setErrors,
    }: FormikHelpers<FormValues>
  ) => {
    const { email, password } = values;
    let session: any;
    let error: any;

    if (type === "login") {
      const { session: loginSession, error: loginError } = await login({
        email,
        password,
      });
      session = loginSession;
      error = loginError;
    } else {
      const { session: registerSession, error: registerError } = await register(
        {
          email,
          password,
        }
      );
      session = registerSession;
      error = registerError;
    }

    if (error) {
      handleError(error);
      setFieldError("email", error.message);
      setFieldError("password", error.message);
      return false;
    }

    if (session && !error) {
      if (type === "login") {
        await setSession(EVENT_SIGN_IN, session);

        setTimeout(() => {
          window.location.assign(dashboard);
        }, 500);
      }

      setValues({
        email: "",
        password: "",
      });

      setErrors({
        email: null,
        password: null,
      });
    }

    setTouched({
      email: false,
      password: false,
    });
  };

  return (
    <div className="min-h-hero h-hero bg-gradient-to-b from-violet-200 to-violet-100 pb-10">
      <Container height="full">
        <div className="flex h-full flex-col items-center pt-10 md:justify-center md:pt-0">
          <div className="text-center">
            <h1 className="pb-2 text-3xl font-bold">
              {type === "login"
                ? "Sign in to your account"
                : "Create new account"}
            </h1>

            {isLogin && <p>Login to manage your account</p>}
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
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
                      "w-80 rounded-md ring-1 ring-violet-300 focus:ring-violet-500 lg:w-96",
                      errors.email && "ring-red-500"
                    )}
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
                    className={clsx(
                      "w-80 rounded-md ring-1 ring-violet-300 focus:ring-violet-500 lg:w-96",
                      errors.password && "ring-red-500"
                    )}
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                  {errors.password && touched.password && (
                    <p className="text-red-500">{errors.password}</p>
                  )}
                </div>
                <div className="flex flex-col justify-between gap-y-2 lg:flex-row lg:items-center">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded"
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
                    "rounded-md bg-violet-900 py-2 text-violet-50 disabled:bg-violet-400",
                    !isSubmitting ? "cursor-pointer" : "cursor-not-allowed"
                  )}
                  disabled={isSubmitting}
                >
                  {isLogin ? "Login" : "Sign Up"}
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
  );
}
