import { CurrentUser } from "@/types/currentUser";
import { ConfirmDialogState } from "@/types/dialogState";
import { EMPTY_INPUT, EMPTY_STRING } from "./common";

/**ユーザーのログイン情報を管理するデフォルト値 */
export const LOGIN_USER_AUTH_DEFAULT: CurrentUser = {
  email: EMPTY_STRING,
  name: EMPTY_STRING,
  uuid: EMPTY_STRING,
  createdAt: EMPTY_STRING,
  lastLoginAt: EMPTY_STRING,
  avatarUrl: EMPTY_STRING,
  role: "guest"
};

/**新規登録フォーム上でのデフォルト値(遷移後の状態判定で使用する) */
export const REGISTER_FORM_DEFAULT = {
  name: EMPTY_INPUT,
  birthDate: EMPTY_INPUT,
  email: EMPTY_INPUT,
  password: EMPTY_INPUT
};

/**ダイアログの初期値 */
export const DIALOG_DEFAULT: ConfirmDialogState = {
  open: false,
  title: "",
  description: "",
  nextLabel: "OK",
  cancelLabel: "キャンセル",
  resolve: undefined
};
