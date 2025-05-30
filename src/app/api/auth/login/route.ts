import { serverHttpClient } from "@/lib/serverHttpClient";
import { UserLoginRequest } from "@/types/user/login";
import { handleServerError, setAuthCookie } from "@/utils/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const requestBody: UserLoginRequest = await request.json();

  try {
    const response = await serverHttpClient.post("/api/auth/login", requestBody);

    const nextResponse = NextResponse.json({ isLoggedIn: true, user: response.data });

    return setAuthCookie(nextResponse, response);
  } catch (error) {
    return handleServerError(error);
  }
};
