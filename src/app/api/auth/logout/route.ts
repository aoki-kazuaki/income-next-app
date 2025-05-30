import { serverHttpClient } from "@/lib/serverHttpClient";
import { extractCookieTokens, handleServerError } from "@/utils/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  /**ログアウト処理のためPOSTだが、リクエスト自体はrefreshTokenを削除る機能のため空を送信 */
  const EMPTY_REQUEST_BODY = {};
  /**即時削除のcookieValueを返却 */
  const EMPTY_COOKIE_VALUE = "";

  const cookie = extractCookieTokens(request);

  try {
    const response = await serverHttpClient.post("/api/auth/logout", EMPTY_REQUEST_BODY, {
      headers: {
        Cookie: cookie
      }
    });

    const res = NextResponse.json({
      isLoggedOut: true,
      message: response.data
    });

    // クッキー削除（maxAge: 0 = 即時削除）
    res.cookies.set("access_token", EMPTY_COOKIE_VALUE, { path: "/", maxAge: 0 });
    res.cookies.set("refresh_token", EMPTY_COOKIE_VALUE, { path: "/", maxAge: 0 });

    return res;
  } catch (error) {
    return handleServerError(error);
  }
};
