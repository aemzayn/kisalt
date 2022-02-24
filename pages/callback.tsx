import { NextSeo } from "next-seo";
import { useEffect } from "react";
import Container from "components/Container/Container";
import CommonLayout from "components/Layout/CommonLayout";
import { callbackHandler } from "lib/helpers";

export default function Callback() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      callbackHandler();
    }
  }, []);

  return (
    <CommonLayout>
      <NextSeo nofollow noindex />
      <div className="h-screen bg-violet-200">
        <Container height="full">
          <div className="flex flex-col gap-2 pt-4 text-center">
            <h1 className="text-5xl">Welcome to Kisalt</h1>
            <h2 className="text-xl">You will be redirected shortly...</h2>
          </div>
        </Container>
      </div>
    </CommonLayout>
  );
}
