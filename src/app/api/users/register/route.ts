import { serverHttpClient } from "@/lib/serverHttpClient";
import { UserRegisterRequest } from "@/types/userRegister";
import { handleServerError, setAuthCookie } from "@/utils/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const requestBody: UserRegisterRequest = await request.json();

  try {
    const response = await serverHttpClient.post("/api/users/register", requestBody);

    const nextResponse = NextResponse.json({ message: "登録が完了しました" });

    return setAuthCookie(nextResponse, response);
  } catch (error) {
    return handleServerError(error);
  }
};
