import { NextSeo } from "next-seo";
import Layout from "components/Layout/Layout";
import AuthResetPassword from "components/Auth/AuthResetPassword";

export type ResetPasswordProps = {};

export default function ResetPassword({}: ResetPasswordProps) {
  return (
    <Layout>
      <NextSeo title="Reset Password" nofollow noindex />
      <AuthResetPassword />
    </Layout>
  );
}
