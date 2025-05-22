import { LOGIN_USER_AUTH_DEFAULT } from "@/constants/storeDefault";
import { LoginUserAuth } from "@/types/userAuth";
import { atom } from "jotai";
/**ユーザーのログイン情報保持 */
export const loginUserAuthAtom = atom<LoginUserAuth>(LOGIN_USER_AUTH_DEFAULT);
