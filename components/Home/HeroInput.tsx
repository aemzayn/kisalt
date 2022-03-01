import Link from "next/link";
import { Field, Form, Formik, FormikHelpers } from "formik";
import {
  LinkIcon,
  ExclamationCircleIcon,
  LogoutIcon,
} from "@heroicons/react/solid";

import Spinner from "components/Spinner";
import { generateRandomSlug } from "lib/helpers";
import { heroInputValidationScheme } from "lib/validations";
import { createNewUrl } from "lib/supabaseClient";
import { User } from "interfaces/User";

export type HeroInputProps = {
  isLogin: boolean;
  user: User;
};

export type Values = {
  realUrl: string;
};

export default function HeroInput({ isLogin, user }: HeroInputProps) {
  const handleSubmit = async (
    { realUrl }: Values,
    { setFieldError, setSubmitting }: FormikHelpers<Values>
  ) => {
    try {
      const slug = generateRandomSlug();

      if (isLogin && user) {
        console.log({ realUrl, slug });
        // const {} = await createNewUrl({
        //   realUrl, slug
        // }, user.id)
      } else {
        setFieldError("realUrl", "You are not logged in, please log in first.");
      }
    } catch (error) {
      setFieldError("realUrl", error);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <Formik
        initialValues={{
          realUrl: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={heroInputValidationScheme}
      >
        {({ errors, isSubmitting }) => (
          <>
            <Form className="rounded-full bg-white py-2 px-3 ring-2 ring-violet-300">
              <Field
                type="url"
                name="realUrl"
                className="rounded-full border-none bg-white placeholder:text-sm placeholder:text-violet-500"
                placeholder="Paste long link"
              />
              <button
                type="submit"
                className="rounded-full bg-violet-800 px-5 py-2 text-violet-50 duration-75 hover:bg-opacity-90"
                disabled={isSubmitting}
              >
                Shorten {isSubmitting && <Spinner />}
              </button>
            </Form>
            <div className="flex flex-col gap-2">
              {errors.realUrl && (
                <>
                  <p className="-ml-[1px] flex items-center gap-2 text-sm text-red-500">
                    <ExclamationCircleIcon className="h-6 w-6" /> You are not
                    logged in, please log in first.
                  </p>
                  <Link href="/login">
                    <a className="flex items-center gap-2 text-sm text-violet-500 hover:underline">
                      <LogoutIcon className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-300 p-1 text-violet-900" />
                      Click here to login
                    </a>
                  </Link>
                </>
              )}
              {!errors.realUrl && (
                <p className="flex items-center gap-2 text-sm text-violet-500">
                  <LinkIcon className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-300 p-1 text-violet-900" />{" "}
                  Create new short url with{" "}
                  <span className="font-semibold underline underline-offset-2">
                    random slug
                  </span>
                </p>
              )}
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
