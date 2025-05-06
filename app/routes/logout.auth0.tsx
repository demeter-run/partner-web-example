
import { LoaderFunction, redirect } from '@remix-run/node';
import { getLogoutUrl } from '~/services/oauth';

export const loader: LoaderFunction = async () => {
  const x = getLogoutUrl()
  console.log(x)
  return redirect(getLogoutUrl());
};

export default function Logout() {
  return <div>Logging out...</div>;
}
