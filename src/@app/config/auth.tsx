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
  const cookies = parseCookies({ req });
  const token = config.TOKEN_KEY;
  let user = {};
  const USER = process.browser ? Cookies.get(token) : cookies[token];

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
  if (route === "/admin" || route === "/account") {
    redirect(res, "/login");
  }
  return { user };
};

export default auth;
