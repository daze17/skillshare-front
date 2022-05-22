import Routes from "@app/routes/routers";
import Router from "next/router";
import cookie from "cookie";
import Cookies from "js-cookie";
import { config } from "@app/config";
import { get } from "lodash";
import { CreateApolloClient } from "@app/config/apollo";
import { ME } from "@app/utils/gql";

const parseCookies = ({ req }: any) => {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie || "");
};

const redirect = (res: any, route: string) => {
  if (process.browser) {
    Router.push(route);
  } else {
    res.writeHead(303, { Location: route });
    res.end();
  }
};

const auth = async ({ ctx, route, req, res, apolloClient }: any) => {
  const user_token = config.TOKEN_KEY;
  const admin_token = config.ADMIN_TOKEN_KEY;
  const { query } = ctx;

  const cookies = parseCookies({ req });
  let user = {};
  let admin = {};

  const USER = process.browser ? Cookies.get(user_token) : cookies[user_token];
  const ADMIN = process.browser
    ? Cookies.get(admin_token)
    : cookies[admin_token];

  const getUser = async (apolloClient: any) => {
    let response = {};
    response = await apolloClient.query({
      fetchPolicy: "no-cache",
      query: ME,
    });
    return get(response, "data.me");
  };

  // user route
  if (USER) {
    try {
      // user token baigaad /login path aar orvol user admin tsesruu usrene
      if (route === "/login" || route === "/register") {
        redirect(res, Routes.Main.Home.route);
      }
      if (Routes.isAdmin(route)) {
        redirect(res, Routes.Main.Home.route);
      }
      // get user information
      try {
        if (!process.browser) {
          apolloClient = CreateApolloClient(USER);
        }
        user = await getUser(apolloClient);
      } catch (error) {
        console.log("User error: ", error);
        return {};
      }

      return { user };
    } catch (Err) {
      console.log(Err);
      return {};
    }
  }
  if (ADMIN) {
    try {
      if (route === "/login" || route === "/register") {
        redirect(res, Routes.Admin.Home.route);
      }
      try {
        if (!process.browser) {
          apolloClient = CreateApolloClient(ADMIN);
        }
        user = await getUser(apolloClient);
      } catch (error) {
        console.log("User error: ", error);
        return {};
      }
      return { user };
    } catch (error) {
      console.log(error);
      return {};
    }
  }
  if (route === "/admin" || route === "/account") {
    redirect(res, "/login");
  }
  return { user };
};

export default auth;
