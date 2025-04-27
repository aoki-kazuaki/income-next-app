"use client";
import { FormWithLabelType } from "@/types/common";
import clsx from "clsx";
import { FC } from "react";

type Props = {} & FormWithLabelType;

const FormWithLabel: FC<Props> = ({
  formContent: formItem,
  validationMessage,
  label: LabelText,
  labelBold: LabelTextBold,
  labelWith: LabelWith,
  formItemId,
  ...other
}) => {
  return (
    <>
      {/* ラベル使用時(デフォルト), 入力欄, セレクトボックスなどで使用 */}
      {LabelWith && (
        <div className="flex flex-col gap-1" {...other}>
          <label htmlFor={formItemId} className={clsx(LabelTextBold && "font-bold", validationMessage && "text-red-400")}>
            {LabelText}
          </label>
          {formItem}
          {validationMessage && <p className="text-red-400">{validationMessage}</p>}
        </div>
      )}
      {/* ラベルタグ未使用時(ラジオボタン、チェックボックスなどで使用する) */}
      {!LabelWith && (
        <div className="flex flex-col gap-1" {...other}>
          <span className={clsx(LabelTextBold && "font-bold", validationMessage && "text-red-400")}>{LabelText}</span>
          {formItem}
          {validationMessage && <p className="text-red-400">{validationMessage}</p>}
        </div>
      )}
    </>
  );
};
export default FormWithLabel;
