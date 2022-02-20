import Hero from "components/Hero";
import Head from "next/head";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
    </Layout>
  );
}

export default HomePage;
