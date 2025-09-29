import { NextResponse, type NextRequest } from 'next/server';
import { getUserFromCookie } from './lib/auth';
import { Role } from './types';

const authRoutes = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/verify',
];

export const middleware = async (req: NextRequest) => {
  const { pathname, origin } = req.nextUrl;
  const user = await getUserFromCookie();

  //  If logged in → block access to auth pages
  if (user && authRoutes.includes(pathname)) {
    if (user.role === Role.ADMIN || user.role === Role.SUPER_ADMIN) {
      return NextResponse.redirect(new URL('/admin', origin));
    }
    if (user.role === Role.USER) {
      return NextResponse.redirect(new URL('/user', origin));
    }
  }

  //  If not logged in → protect /admin and /user routes
  if (
    !user &&
    (pathname.startsWith('/admin') || pathname.startsWith('/user'))
  ) {
    const loginUrl = new URL('/login', origin);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  //  Role-based protection
  if (pathname.startsWith('/admin') && user?.role !== Role.ADMIN) {
    return NextResponse.redirect(new URL('/dashboard', origin));
  }

  if (pathname.startsWith('/user') && user?.role !== Role.USER) {
    return NextResponse.redirect(new URL('/admin', origin));
  }

  //  Otherwise → allow
  return NextResponse.next();
};

export const config = {
  matcher: [
    '/admin/:path*',
    '/user/:path*',
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
    '/verify',
  ],
};
