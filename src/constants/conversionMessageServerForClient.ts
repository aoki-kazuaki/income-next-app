/**
 * 通信処理後にサーバーからのエラーメッセージをUI上のメッセージを一元管理する(取り出しの関数はutils内に定義)
 *  -> utils/string.ts/strConversionMessageServerForClient
 */
export const SERVER_MESSAGE_CLIENT_CONVERSION_LIST = [
  {
    serverMessage: "This email is already in use.",
    clientMessage: "このメールアドレスはすでに登録済みです"
  },
  {
    serverMessage: "Invalid email or password.",
    clientMessage: "メールアドレスかパスワードが不正です"
  },
  {
    serverMessage: "JWT has expired.",
    clientMessage: "JWT認証切れです"
  }
];
