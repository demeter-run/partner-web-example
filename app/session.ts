
import { createCookieSessionStorage } from '@remix-run/node';

export type SessionData = {
  token: string;
  userId?: string;
};

export type SessionFlashData = {
  error: string;
  success: string;
};

const { getSession, commitSession, destroySession }
  = createCookieSessionStorage<SessionData, SessionFlashData>(
    {
      cookie: {
        name: '_session-v2',
        path: '/',
        sameSite: 'lax',
        httpOnly: true,
        secrets: ["YOUR_SECRET"],
        secure: process.env.NODE_ENV === 'production',
        maxAge: 86_400, // 24 hours
      },
    },
  );

export { getSession, commitSession, destroySession };
