//戻り値が真偽値のユーティリティ関数を格納するファイル(関数名のprefixにboolを付与すること)

/** オブジェクトの全ての値が null/undefined/空文字でない場合 true を返す */
export const boolAllValuesFilled = (object: Record<string, unknown>): boolean => {
  return Object.values(object).every(val => !(val === null) && !(val === undefined) && !(val === ""));
};
