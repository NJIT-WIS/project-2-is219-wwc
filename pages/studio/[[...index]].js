import { useRouter } from "next/router";
import { useEffect } from "react";
import config from "../../sanity.config";
import Head from "next/head";
import { NextStudio } from "next-sanity/studio";

export default function StudioPage() {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/studio") {
      router.replace("/studio/desk");
    }
  }, [router]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <NextStudio config={config} />
    </>
  );
}
