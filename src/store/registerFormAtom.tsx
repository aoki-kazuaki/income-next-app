import { REGISTER_FORM_DEFAULT } from "@/constants/storeDefault";
import { FirstStepRegisterForm } from "@/types/userRegister";
import { atom } from "jotai";

/**新規登録フォームでのマウント時のデフォルト値 */
export const registerFormAtom = atom<FirstStepRegisterForm>(REGISTER_FORM_DEFAULT);
