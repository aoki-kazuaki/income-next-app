import { serverHttpClient } from "@/lib/serverHttpClient";
import { UserRegisterRequest } from "@/types/userRegister";
import { handleServerError } from "@/utils/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const requestBody: UserRegisterRequest = await request.json();

  try {
    const response = await serverHttpClient.post("/api/users/register", requestBody);

    return NextResponse.json(response.data);
  } catch (error) {
    return handleServerError(error);
  }
};
