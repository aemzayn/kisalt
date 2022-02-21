import Head from "next/head";
import AuthForm from "components/AuthForm";

type Props = {};

export default function Register({}: Props) {
  return (
    <>
      <Head>
        <title>Sign Up to Kisalt</title>
      </Head>
      <AuthForm type="register" />
    </>
  );
}
