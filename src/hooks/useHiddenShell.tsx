"use client";

import { HIDE_SHELL_PATHS } from "@/config/hiddenShellPath";
import { usePathname } from "next/navigation";

/**特定のパスの場合に限りheader, footerなどのlayout表示判定のbool値を返却する */
const useHiddenShell = () => {
  const currentPath = usePathname();
  const thisPathShouldHide = HIDE_SHELL_PATHS.some(path => currentPath.startsWith(path));
  return { thisPathShouldHide };
};

export default useHiddenShell;
