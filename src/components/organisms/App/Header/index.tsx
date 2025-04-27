"use client";

import Container from "@/components/molecules/Container";
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
          <header className="bg-primary text-primary-foreground fixed top-0 left-0 h-7 w-full lg:h-12">
            <Container className="flex h-full items-center justify-between">
              <h1 className="text-sm font-bold lg:text-2xl">{THIS_APP_TITLE}</h1>
            </Container>
          </header>
          <div className="h-7 w-full lg:h-12" />
        </>
      )}
    </>
  );
};
export default AppHeader;
