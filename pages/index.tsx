import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "components/Hero";
import HomeInfo from "components/HomeInfo";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div className="bg-violet-100">
        <Hero />
        <HomeInfo />
      </div>
    </Layout>
  );
}

export default HomePage;
