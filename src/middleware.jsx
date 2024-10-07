import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = new URL(request.url);
  const pathAndQuery = url.pathname + url.search;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', pathAndQuery);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  });
}
