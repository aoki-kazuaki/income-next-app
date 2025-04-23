"use client";
import useHiddenShell from "@/hooks/useHiddenShell";
import { FC } from "react";

const AppFooter: FC = () => {
  const { thisPathShouldHide } = useHiddenShell();
  return (
    <>
      {thisPathShouldHide && <></>}
      {!thisPathShouldHide && (
        <footer className="flex h-7 w-full items-center justify-center bg-gray-400 lg:h-12">
          <p className="text-center text-white">This is Aoki Portfolio</p>
        </footer>
      )}
    </>
  );
};
export default AppFooter;
