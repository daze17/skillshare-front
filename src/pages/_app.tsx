import "../../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "@app/layouts/renderLayout";
// import AdminLayout from "@app/layouts/admin";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>here is title</title>
        <meta name="description" content="skill share" />
        {/* <link rel="icon" href="/stackoverflowicon.png" /> */}
      </Head>
      <ChakraProvider>
        <Layout title="garchig">
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
