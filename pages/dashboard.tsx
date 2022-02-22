import Head from "next/head";
import AuthLayout from "components/Layout/AuthLayout";
import PrivateRoute from "components/Route/PrivateRoute";

import DashboardComponent from "components/Dashboard/Dashboard";

type Props = {};

export const Dashboard = ({}: Props) => {
  return (
    <AuthLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <PrivateRoute>
        <DashboardComponent />
      </PrivateRoute>
    </AuthLayout>
  );
};

export default Dashboard;
