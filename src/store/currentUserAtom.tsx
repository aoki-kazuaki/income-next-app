import { LOGIN_USER_AUTH_DEFAULT } from "@/constants/storeDefault";
import { UserCurrent } from "@/types/user/current";
import { atom } from "jotai";
/**ユーザーのログイン情報保持 */
export const currentUserAtom = atom<UserCurrent>(LOGIN_USER_AUTH_DEFAULT);
