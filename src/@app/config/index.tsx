export const config = {
    BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:3000/api/graphql',
    TOKEN_KEY: process.env.TOKEN_KEY || 'token',
    HOST: process.env.HOST || "0.0.0.0",
    PORT: process.env.PORT || 3000,
    APP_SECRET: process.env.APP_SECRET || "secret_password",
    GRAPHQL_PATH: process.env.GRAPHQL_PATH || "/api/graphql",
    CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",
    MAIN_APP_DOMAIN: process.env.MAIN_APP_DOMAIN || "http://localhost:3000",
  };