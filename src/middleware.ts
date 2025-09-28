import { NextResponse, type NextRequest } from 'next/server';
import { getUserFromCookie } from './lib/auth';
import { Role } from './types';

export const middleware = async (req: NextRequest) => {
  const { pathname, origin } = req.nextUrl;
  const user = await getUserFromCookie();

  // Not logged in → force login with callback
  if (!user) {
    const loginUrl = new URL('/login', origin);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If USER is trying to access /admin routes → deny
  if (pathname.startsWith('/admin') && user.role !== Role.ADMIN) {
    return NextResponse.redirect(new URL('/dashboard', origin));
  }

  // If ADMIN is trying to access /user routes → deny
  if (pathname.startsWith('/user') && user.role !== Role.USER) {
    return NextResponse.redirect(new URL('/admin', origin));
  }

  // Otherwise → allow
  return NextResponse.next();
};

// Apply only on protected routes
export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
};
