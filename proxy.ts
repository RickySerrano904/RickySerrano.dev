import { NextRequest, NextResponse } from "next/server";

function createContentSecurityPolicy(nonce: string) {
  return `
    default-src 'self';
    base-uri 'self';
    connect-src 'self' https://challenges.cloudflare.com;
    font-src 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src https://challenges.cloudflare.com;
    img-src 'self' blob: data: https://ghchart.rshah.org;
    object-src 'none';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://challenges.cloudflare.com;
    script-src-attr 'none';
    style-src 'self' 'nonce-${nonce}';
    style-src-attr 'unsafe-inline';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const contentSecurityPolicy = createContentSecurityPolicy(nonce);
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", contentSecurityPolicy);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set("Content-Security-Policy", contentSecurityPolicy);

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
