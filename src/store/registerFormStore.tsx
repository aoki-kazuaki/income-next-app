import { REGISTER_FORM_DEFAULT } from "@/constants/storeDefault";
import { atom } from "jotai";

/**新規登録フォームでのマウント時のデフォルト値 */
export const registerFormAtom = atom(REGISTER_FORM_DEFAULT);
