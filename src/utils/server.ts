// // サーバーサイド(app/api下で使用するutils関数)

import { NextResponseError, TokenResponse } from "@/types/server";
import { AxiosResponse, isAxiosError } from "axios";
import { NextResponse } from "next/server";

/**共通エラーハンドリング */
export const handleServerError = (error: unknown): NextResponse<NextResponseError> => {
  if (isAxiosError(error)) {
    const status = error.response?.status || 500;
    const message = error.response?.data || "サーバーエラーが発生しました";
    return NextResponse.json({ message }, { status });
  }
  return NextResponse.json({ message: "不明なエラーが発生しました" }, { status: 500 });
};

export const setAuthCookie = (nextResponse: NextResponse, axiosResponse: AxiosResponse) => {
  const tokens: TokenResponse = axiosResponse.data;
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
