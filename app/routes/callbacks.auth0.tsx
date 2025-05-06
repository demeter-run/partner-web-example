import { LoaderFunction, redirect } from '@remix-run/node';

import { getToken } from '~/services/oauth';
import { commitSession, getSession } from '~/session';


export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    throw new Error('No code found in URL');
  }

  const { access_token: token } = await getToken(code);

  const headerCookie = request.headers.get('Cookie');

  const session = await getSession(headerCookie);

  session.set('token', token);

  request.headers.append('Set-Cookie', await commitSession(session));

  return redirect("/", {
    headers: {
      'Set-Cookie': request.headers.get('Set-Cookie')!,
    },
  });
};

export default function Auth0Callback() {
  return <div>Redirecting...</div>;
}
