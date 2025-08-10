import { NextResponse, userAgent } from 'next/server';

export function middleware(request) {
  const url = new URL(request.url);
  const pathAndQuery = url.pathname + url.search;

  const response = NextResponse.next({
    request: {
      headers: new Headers({
        ...request.headers,
        'x-url': pathAndQuery,
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
