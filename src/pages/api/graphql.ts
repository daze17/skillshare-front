import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../../graphql/schema";
import { resolvers } from "../../../graphql/resolvers";
import Cors from "micro-cors";
import jwt from "jsonwebtoken";

const cors = Cors();

const getUser = (token: string) => {
  try {
    if (token) {
      const tokenData = jwt.verify(token, "secret_password");
      return tokenData;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    return { user: getUser(token.replace("Bearer ", "")) };
  },
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
