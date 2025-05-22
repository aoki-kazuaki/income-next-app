// // サーバーサイド(app/api下で使用するutils関数)

import { NextResponseError } from "@/types/server";
import { isAxiosError } from "axios";
import { NextResponse } from "next/server";

export const handleServerError = (error: unknown): NextResponse<NextResponseError> => {
  if (isAxiosError(error)) {
    const status = error.response?.status || 500;
    const message = error.response?.data || "サーバーエラーが発生しました";
    return NextResponse.json({ message }, { status });
  }
  return NextResponse.json({ message: "不明なエラーが発生しました" }, { status: 500 });
};
