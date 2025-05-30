import { serverHttpClient } from "@/lib/serverHttpClient";
import { extractCookieTokens, setAuthCookie } from "@/utils/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const cookie = extractCookieTokens(request);

  try {
    const response = await serverHttpClient.get("/api/auth/refresh", {
      headers: {
        Cookie: cookie
      }
    });

    const nextResponse = NextResponse.json({ isLoggedIn: true, user: response.data });
    return setAuthCookie(nextResponse, response);
  } catch {
    return NextResponse.json({ isLoggedIn: false }, { status: 401 });
  }
};
