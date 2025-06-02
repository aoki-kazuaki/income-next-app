import { serverHttpClient } from "@/lib/serverHttpClient";
import { ServerErrorResponseMessage } from "@/types/server/error";
import { extractCookieTokens } from "@/utils/server";
import { AxiosError } from "axios";
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
  } catch (error) {
    const errorData = error as AxiosError;
    const errorMessage = errorData.response?.data as ServerErrorResponseMessage;

    return NextResponse.json({ isLoggedIn: false, message: errorMessage.message }, { status: 401 });
  }
};
