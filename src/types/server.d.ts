/**エラーメッセージを返却する際の型情報 */
export type NextResponseError = {
  message: string;
};

/**レスポンスヘッダーに格納されるトークン */
export type TokenResponse = {
  accessToken: string;
  refreshToken: string;
};
