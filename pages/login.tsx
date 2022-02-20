import Layout from "components/Layout";
import Head from "next/head";
import { Formik, Field, Form, FormikHelpers } from "formik";

type Props = {};

interface Values {
  name: string;
  email: string;
}

export default function Login({}: Props) {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <h1 className="text-xl">Login</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={(values: Values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Your name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="john@doe.com"
            />
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </Layout>
  );
}
