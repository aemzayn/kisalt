import Head from "next/head";
import Layout from "../components/Layout";

type Props = {};

export const Dashboard = ({}: Props) => {
  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
    </Layout>
  );
};

export default Dashboard;
