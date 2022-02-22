import Head from "next/head";
import AuthForm from "components/AuthForm";
import PublicRoute from "components/Route/PublicRoute";
import AuthLayout from "components/Layout/AuthLayout";

type Props = {};

export default function Login({}: Props) {
  return (
    <AuthLayout>
      <Head>
        <title>Login</title>
      </Head>
      <PublicRoute>
        <AuthForm type="login" />
      </PublicRoute>
    </AuthLayout>
  );
}
