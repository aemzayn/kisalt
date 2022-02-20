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
      <div className="min-h-screen bg-violet-100"></div>
    </Layout>
  );
}

export default HomePage;
