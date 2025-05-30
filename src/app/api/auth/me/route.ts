import { serverHttpClient } from "@/lib/serverHttpClient";
import { extractCookieTokens } from "@/utils/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const cookie = extractCookieTokens(request);

  try {
    const response = await serverHttpClient.get("/api/auth/me", {
      headers: {
        Cookie: cookie
      }
    });

    return NextResponse.json({ isLoggedIn: true, user: response.data });
  } catch {
    return NextResponse.json({ isLoggedIn: false }, { status: 401 });
  }
};
