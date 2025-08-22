import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = new URL(request.url);
  const pathAndQuery = url.pathname + url.search;

  const userAgent = request.headers.get('user-agent') || '';

  let deviceType = 'desktop';
  if (/mobile/i.test(userAgent)) {
    deviceType = 'mobile';
  } else if (/tablet|ipad/i.test(userAgent)) {
    deviceType = 'tablet';
  }

  const response = NextResponse.next({
    request: {
      headers: new Headers({
        ...request.headers,
        'x-url': pathAndQuery,
        'x-device-type': deviceType,
      }),
    },
  });

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icons|fonts|images).*)',
  ],
}
