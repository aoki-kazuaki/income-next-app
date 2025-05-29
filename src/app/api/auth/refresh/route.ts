import { serverHttpClient } from "@/lib/serverHttpClient";
import { setAuthCookie } from "@/utils/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const refreshToken = request.cookies.get("refresh_token")?.value;
  if (!refreshToken) {
    return NextResponse.json({ isLoggedIn: false }, { status: 401 });
  }

  try {
    const response = await serverHttpClient.get("/api/auth/refresh", {
      headers: {
        Cookie: `refresh_token=${refreshToken}`
      }
    });

    const nextResponse = NextResponse.json({ isLoggedIn: true, user: response.data });
    return setAuthCookie(nextResponse, response);
  } catch {
    return NextResponse.json({ isLoggedIn: false }, { status: 401 });
  }
};
