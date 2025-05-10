/**フォームアイテムをオブジェクト定義する際に使用する */
export type FormWithLabelDetail = {
  label: string;
  labelBold?: boolean;
  labelWith: boolean;
  formContent: ReactNode;
  formItemId?: string;
  validationMessage?: string | FieldError | Merge<FieldError, FieldErrorsImpl>;
};

export type OptionTextAndValue = {
  text: string;
  value: string;
};
