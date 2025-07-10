import Head from "next/head";
import { PageContainer } from "@/components/utility/container/Container";
import Home from "@/page/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="dOTMamZFyXCHILsW_4b_liGAGGEVNWcTFDbKQLxxI6M"
        />
      </Head>
      <PageContainer>
        <Home />
      </PageContainer>
    </>
  );
}
