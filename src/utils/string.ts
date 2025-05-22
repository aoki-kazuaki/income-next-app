//戻り値が文字列のユーティリティ関数を格納するファイル(関数名のprefixにstrを付与すること)

import { EMPTY_VALUE } from "@/constants/common";
import { SERVER_MESSAGE_CLIENT_CONVERSION_LIST } from "@/constants/conversionMessageServerForClient";

/** サーバーレスポンスのメッセージをクライアント表示する際の変換処理*/
export const strConversionMessageServerForClient = (serverMessage: string): string => {
  const applicableUiMessage = SERVER_MESSAGE_CLIENT_CONVERSION_LIST.find(message => message.serverMessage === serverMessage);
  if (!applicableUiMessage) return EMPTY_VALUE;
  return applicableUiMessage.clientMessage;
};
