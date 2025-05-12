"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/shadBase/alertDialog";
import { DIALOG_DEFAULT } from "@/constants/storeDefault";
import { dialogAtom } from "@/store/dialogStateAtom";
import { useAtom } from "jotai";

const AppDialog = () => {
  const [dialog, setDialog] = useAtom(dialogAtom);

  const closeDialog = () => setDialog(DIALOG_DEFAULT);

  const handleCancel = () => {
    dialog.resolve?.(false);
    closeDialog();
  };

  const handleConfirm = () => {
    dialog.resolve?.(true);
    closeDialog();
  };

  return (
    <AlertDialog open={dialog.open} onOpenChange={closeDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{dialog.title}</AlertDialogTitle>
          <AlertDialogDescription>{dialog.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>{dialog.cancelLabel}</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>{dialog.nextLabel}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AppDialog;
