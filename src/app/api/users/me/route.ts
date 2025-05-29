import { serverHttpClient } from "@/lib/serverHttpClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const accessToken = request.cookies.get("access_token")?.value;

  if (!accessToken) {
    return NextResponse.json({ isLoggedIn: false }, { status: 401 });
  }

  try {
    const response = await serverHttpClient.get("/api/users/me", {
      headers: {
        Cookie: `access_token=${accessToken}`
      }
    });

    return NextResponse.json({ isLoggedIn: true, user: response.data });
  } catch {
    return NextResponse.json({ isLoggedIn: false }, { status: 401 });
  }
};
