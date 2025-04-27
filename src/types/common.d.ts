/**フォームアイテムをオブジェクト定義する際に使用する */
export type FormWithLabelType = {
  label: string;
  labelBold?: boolean;
  labelWith: boolean;
  formContent: ReactNode;
  formItemId?: string;
  validationMessage?: string;
};
