import { atom } from "jotai";

//ユーザー情報取得中フラグ管理
export const currentUserLoadingAtom = atom<boolean>(false);
