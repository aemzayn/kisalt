import { NextSeo } from "next-seo";

import CommonLayout from "../components/Layout/CommonLayout";
import HomeHero from "components/Home/HomeHero";
import HomeInfo from "components/Home/HomeInfo";

export default function HomePage() {
  return (
    <CommonLayout>
      <NextSeo title="Home" />
      <div className="bg-violet-100">
        <HomeHero />
        <HomeInfo />
      </div>
    </CommonLayout>
  );
}
