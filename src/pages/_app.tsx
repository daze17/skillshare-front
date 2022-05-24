import "../../styles/globals.css";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { client } from "../../lib/apollo";
import type { AppProps } from "next/app";
import Layout from "@app/layouts/renderLayout";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import cookie from "cookie";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { config } from "@app/config";
import auth from "@app/config/auth";
import Routes from "@app/routes/routers";
import { UserProvider } from "@app/config/userProvider";

function MyApp({
  Component,
  apollo,
  user,
  title,
  pageProps: { ...pageProps },
}: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="skill share" />
        <Head>
      </Head>
      </Head>
      <UserProvider user={user}>
        <ApolloProvider client={client}>
          <ChakraProvider>
            <Layout title={title}>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        </ApolloProvider>
      </UserProvider>
    </>
  );
}

MyApp.getInitialProps = async (context: any) => {
  const { Component, ctx } = context;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  const { req, res, pathname, apolloClient } = ctx;
  const title = Routes.getTitle(pathname);

  // To be removed
  if (!process.browser) {
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("strict-transport-security", "max-age=31536000");
  }
  try {
    const { user } = await auth({
      ctx,
      route: pathname,
      req,
      res,
      apolloClient,
    });
    return { pageProps, user, title, pathname };
  } catch (error) {
    console.log("_app.js-error", error);
    return { pageProps, title, pathname }; // _error-luu handhad loop
  }
};

// export default MyApp;
export default withApollo(({ initialState, headers: serverHeaders }): any => {
  const httpLink = createHttpLink({
    uri: config.BACKEND_URL,
    credentials: "include",
  });
  const userToken = process.browser
    ? cookie.parse(document.cookie || "")[config.TOKEN_KEY]
    : cookie.parse(serverHeaders?.cookie || "")[config.TOKEN_KEY];
  const adminToken = process.browser
    ? cookie.parse(document.cookie || "")[config.ADMIN_TOKEN_KEY]
    : cookie.parse(serverHeaders?.cookie || "")[config.ADMIN_TOKEN_KEY];

  const token = userToken || adminToken;
  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  }));
  const link: any = authLink.concat(httpLink);
  return new ApolloClient({
    link,
    ssrMode: true,
    cache: new InMemoryCache({}).restore(initialState || {}),
  });
})(MyApp);
