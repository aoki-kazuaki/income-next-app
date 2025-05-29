import { serverHttpClient } from "@/lib/serverHttpClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const accessToken = request.cookies.get("access_token")?.value ?? "";
  const refreshToken = request.cookies.get("refresh_token")?.value ?? "";

  const cookieHeader = `access_token=${accessToken}; refresh_token=${refreshToken}`;

  if (!accessToken) {
    return NextResponse.json({ isLoggedIn: false }, { status: 401 });
  }

  try {
    const response = await serverHttpClient.get("/api/auth/me", {
      headers: {
        Cookie: cookieHeader
      }
    });

    return NextResponse.json({ isLoggedIn: true, user: response.data });
  } catch (error) {
    console.error("auth/me failed:", error);
    return NextResponse.json({ isLoggedIn: false }, { status: 401 });
  }
};
