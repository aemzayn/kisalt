import Head from "next/head";
import AuthForm from "components/AuthForm";
import AuthLayout from "components/Layout/AuthLayout";
import PublicRoute from "components/Route/PublicRoute";

type Props = {};

export default function Register({}: Props) {
  return (
    <AuthLayout>
      <Head>
        <title>Sign Up to Kisalt</title>
      </Head>
      <PublicRoute>
        <AuthForm type="register" />
      </PublicRoute>
    </AuthLayout>
  );
}
