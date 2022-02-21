import Head from "next/head";
import AuthForm from "components/AuthForm";

type Props = {};

export default function Login({}: Props) {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <AuthForm type="login" />
    </>
  );
}
