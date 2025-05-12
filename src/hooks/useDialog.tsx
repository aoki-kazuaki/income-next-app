import { dialogAtom } from "@/store/dialogStateAtom";
import { ConfirmDialogState } from "@/types/dialogState";
import { useSetAtom } from "jotai";

export const useConfirmDialog = () => {
  const setDialog = useSetAtom(dialogAtom);

  return (config: Omit<ConfirmDialogState, "open" | "resolve">): Promise<boolean> => {
    return new Promise(resolve => {
      setDialog({
        ...config,
        open: true,
        resolve
      });
    });
  };
};
