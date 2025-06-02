// // サーバーサイド(app/api下で使用するutils関数)

import { ServerErrorResponseMessage } from "@/types/server/error";
import { ServerTokenResponse } from "@/types/server/token";
import { AxiosResponse, isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

/**共通エラーハンドリング */
export const handleServerError = (error: unknown): NextResponse<ServerErrorResponseMessage> => {
  if (isAxiosError(error)) {
    const status = error.response?.status || 500;
    const message = error.response?.data || "サーバーエラーが発生しました";
    return NextResponse.json({ message }, { status });
  }
  return NextResponse.json({ message: "不明なエラーが発生しました" }, { status: 500 });
};

/** Nextレスポンスに受け取ったアクセストークンとリフレッシュトークンを付与する*/
export const setAuthCookie = (nextResponse: NextResponse, axiosResponse: AxiosResponse) => {
  const tokens: ServerTokenResponse = axiosResponse.data;
  nextResponse.cookies.set("access_token", tokens.accessToken, {
    httpOnly: true, //JavaScriptからアクセスできないようにする
    secure: true, // HTTPS通信でしか送られなくなる
    path: "/", // Cookieが有効なパスを指定(通常は全体にしたいので "/")
    sameSite: "lax" // クロスサイト時の挙動の制御 GETやフォーム送信では送るが、クロスドメインのfetchには送らない
  });

  nextResponse.cookies.set("refresh_token", tokens.refreshToken, {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "lax"
  });

  return nextResponse;
};

/**リクエスト時のcookieからaccessTokenとrefreshTokenを取り出して再度リクエストヘッダーとする。 */
export const extractCookieTokens = (request: NextRequest) => {
  const accessToken = request.cookies.get("access_token")?.value ?? "";
  const refreshToken = request.cookies.get("refresh_token")?.value ?? "";

  const cookieHeader = `access_token=${accessToken}; refresh_token=${refreshToken}`;
  return cookieHeader;
};
