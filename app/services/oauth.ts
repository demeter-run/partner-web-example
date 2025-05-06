import { config } from "~/config";

export function getWebAuthUrl(): string {
  return `https://${config.auth0.domain}/authorize?response_type=code&client_id=${config.auth0.clientId}&redirect_uri=${encodeURIComponent(config.auth0.callbackUrl!)}&scope=openid%20profile%20email&audience=demeter-api`;
}

export function getLogoutUrl(): string {
  const url = new URL(`https://${config.auth0.domain}/v2/logout`);

  if (config.auth0.clientId) {
    url.searchParams.set('client_id', config.auth0.clientId);
  }

  url.searchParams.set('post_logout_redirect_uri', "http://localhost:3000");

  return url.toString()
}

export type Auth0TokenResult = {
  access_token: string;
  id_token: string;
  scope: string;
  expires_in: number;
  token_type: string;
};

export async function getToken(code: string): Promise<Auth0TokenResult> {
  const response = await fetch(`https://${config.auth0.domain}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'authorization_code',
      client_id: config.auth0.clientId,
      client_secret: config.auth0.clientSecret,
      code,
      redirect_uri: config.auth0.callbackUrl,
    }),
  });

  if (!response.ok) {
    console.error(response);
    throw new Error('Failed to fetch Auth0 token');
  }

  const data = await response.json();
  return data;
}
