import { REGISTER_FORM_DEFAULT } from "@/constants/storeDefault";
import { RegisterForm } from "@/types/registerUser";
import { atom } from "jotai";

/**新規登録フォームでのマウント時のデフォルト値 */
export const registerFormAtom = atom<RegisterForm>(REGISTER_FORM_DEFAULT);
