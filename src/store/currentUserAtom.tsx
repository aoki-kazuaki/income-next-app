import { CURRENT_USER_DEFAULT } from "@/constants/storeDefault";
import { UserCurrent } from "@/types/user/current";
import { atom } from "jotai";
/**ユーザーのログイン情報保持 */
export const currentUserAtom = atom<UserCurrent>(CURRENT_USER_DEFAULT);
