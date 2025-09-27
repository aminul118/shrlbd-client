// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';
import { getUserFromCookie } from './lib/auth';

export const middleware = async (req: NextRequest) => {
  const { pathname, origin } = req.nextUrl;
  console.log(origin);

  const user = await getUserFromCookie();

  // Not logged in OR not admin
  if (!user || user.role !== 'ADMIN') {
    const loginUrl = new URL('/login', origin);
    loginUrl.searchParams.set('callbackUrl', pathname); // preserve target path
    return NextResponse.redirect(loginUrl);
  }

  // If admin -> allow access
  return NextResponse.next();
};

// Apply only on admin routes
export const config = {
  matcher: ['/admin/:path*'],
};
