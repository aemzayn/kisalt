import Head from "next/head";
import { Formik, Form, Field, FormikHelpers } from "formik";
import Layout from "../components/Layout";
import Container from "components/Container";
import Link from "next/link";

type Props = {};

export const Dashboard = ({}: Props) => {
  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="bg-violet-100 lg:h-hero">
        <Container height="full">
          <div className="h-full flex flex-col items-center justify-center">
            <h1>Dashboard</h1>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Dashboard;
