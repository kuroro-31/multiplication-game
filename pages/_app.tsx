import "@/styles/globals.scss";

import Layout from "@/components/organisms/Layout";

import type { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
