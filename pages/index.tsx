import Head from "next/head";
import CommonLayout from "../components/Layout/CommonLayout";
import Hero from "components/Hero";
import HomeInfo from "components/HomeInfo";

function HomePage() {
  return (
    <CommonLayout>
      <Head>
        <title>Home</title>
      </Head>
      <div className="bg-violet-100">
        <Hero />
        <HomeInfo />
      </div>
    </CommonLayout>
  );
}

export default HomePage;
