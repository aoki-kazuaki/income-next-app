import { LOGIN_USER_AUTH_DEFAULT } from "@/constants/storeDefault";
import { CurrentUser } from "@/types/currentUser";
import { atom } from "jotai";
/**ユーザーのログイン情報保持 */
export const currentUserAtom = atom<CurrentUser>(LOGIN_USER_AUTH_DEFAULT);
