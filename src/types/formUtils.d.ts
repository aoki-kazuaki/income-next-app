/**フォームアイテムをオブジェクト定義する際に使用する */
export type FormWithLabelDetail = {
  label: string;
  labelBold?: boolean;
  labelWith: boolean;
  formContent: ReactNode;
  formItemId?: string;
  validationMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl>;
};

/**セレクトボックス、ラジオボタンで使用するtext valueの定数管理型情報 */
export type OptionTextAndValue = {
  text: string;
  value: string;
};
