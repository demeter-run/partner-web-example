import { LoaderFunction, redirect } from '@remix-run/node';

import { destroySession, getSession } from '~/session';

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  const headers = new Headers();

  headers.append('Set-Cookie', await destroySession(session));

  return redirect('/logout/auth0', { headers });
};

export default function Logout() {
  return <div>Logging out...</div>;
}
