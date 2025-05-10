"use client";
import { FormWithLabelDetail } from "@/types/formUtils";
import { FC } from "react";
import FormWithLabel from "../FormWithLabel";

type Props = {
  formWithLabels: FormWithLabelDetail[];
};
/**フォームアイテムを縦レイアウトで配置する行間調整用のコンポーネント */
const FormWithLabelWrapper: FC<Props> = ({ formWithLabels, ...other }) => {
  return (
    <>
      <div className="flex flex-col gap-4" {...other}>
        {formWithLabels.map(item => (
          <FormWithLabel key={item.formItemId} {...item} />
        ))}
      </div>
    </>
  );
};
export default FormWithLabelWrapper;
