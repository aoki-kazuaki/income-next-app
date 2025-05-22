/**ダイアログ処理待ち非同期処理, store管理する型情報 */
export type ConfirmDialogState = {
  open: boolean;
  title: string;
  description?: string;
  nextLabel?: string;
  cancelLabel?: string;
  resolve?: (result: boolean) => void;
};
