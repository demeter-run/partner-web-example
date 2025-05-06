import { LoaderFunction, redirect } from '@remix-run/node';
import { getWebAuthUrl } from '~/services/oauth';

export const loader: LoaderFunction = async () => {
  const authUrl = getWebAuthUrl();
  return redirect(authUrl);
};

export default function login() {
  return <div>Redirecting...</div>;
}
