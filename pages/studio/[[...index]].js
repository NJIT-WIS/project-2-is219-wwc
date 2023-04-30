import config from '../../sanity.config';
import Head from 'next/head';
import { NextStudio } from 'next-sanity/studio';

export default function StudioPage() {
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
