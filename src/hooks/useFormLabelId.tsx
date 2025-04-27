"use client";

import { usePathname } from "next/navigation";

/**フォーム作成時のIDジェネレータhooks */
const useFormLabelId = () => {
  const pathName = usePathname();
  /** フォームアイテムの名称を引数にカレントパス名を含んだidを生成する関数を返却する */
  const generateFormLabelId = (formItemLabelText: string): string => {
    return `thisFormItemIdIs${pathName}-${formItemLabelText}`;
  };

  return { generateFormLabelId };
};

export default useFormLabelId;
