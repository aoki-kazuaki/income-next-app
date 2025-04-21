"use client";

import { THIS_APP_TITLE } from "@/config";
import useHiddenShell from "@/hooks/useHiddenShell";
import { FC } from "react";

const AppHeader: FC = () => {
  const { thisPathShouldHide } = useHiddenShell();
  return (
    <>
      {/* 特定のパスでの非表示時はFragmentを返却 */}
      {thisPathShouldHide && <></>}
      {!thisPathShouldHide && (
        <>
          <header className="fixed top-0 left-0 h-24 w-full bg-red-50">
            <div className="mx-auto flex h-full w-11/12 items-center justify-between">
              <h1 className="text-2xl font-bold">{THIS_APP_TITLE}</h1>
            </div>
          </header>
          <div className="h-6 w-full" />
        </>
      )}
    </>
  );
};
export default AppHeader;
