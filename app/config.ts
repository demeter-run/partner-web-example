export const config = {
  auth0: {
    callbackUrl: process.env.AUTH0_CALLBACK_URL,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_DOMAIN,
  },
  api: {
    url: process.env.API_URL || 'https://rpc.demeter.run',
  },
  cookie: {
    secret: process.env.COOKIE_SECRET || 'secret',
  },
};
