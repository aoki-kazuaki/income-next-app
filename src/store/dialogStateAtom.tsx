import { DIALOG_DEFAULT } from "@/constants/storeDefault";
import { ConfirmDialogState } from "@/types/dialogState";
import { atom } from "jotai";

/**ダイアログ出力管理 */
export const dialogAtom = atom<ConfirmDialogState>(DIALOG_DEFAULT);
