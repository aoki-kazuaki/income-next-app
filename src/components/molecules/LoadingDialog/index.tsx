"use client";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { FC, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type Props = {
  loadingText?: string;
};

const LoadingDialog: FC<Props> = ({ loadingText = "Loading" }) => {
  /**Loading ... のドット文字列数のmax値 */
  const LOADING_DOTS_MAX = 3;
  /**dots非表示時空文字 */
  const LOADING_DOTS_EMPTY = "";
  /**dot追加アニメーションのミリ秒数値*/
  const DOTS_ADD_ANIMATION_MILLISECONDS = 500;

  const [dots, setDots] = useState(LOADING_DOTS_EMPTY);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(current => {
        // maxDotsにdotsの文字列数が達した場合
        const dotsIsFilled = current.length >= LOADING_DOTS_MAX;
        if (dotsIsFilled) return LOADING_DOTS_EMPTY;
        return current + ".";
      });
    }, DOTS_ADD_ANIMATION_MILLISECONDS);

    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog open>
      <DialogContent className="fixed top-0 z-50 flex h-full w-full items-center justify-center gap-4 bg-black/60">
        <DialogTitle className="sr-only">ローディング中</DialogTitle>
        <ClipLoader />
        <div className="flex gap-1">
          <p className="text-3xl font-bold text-white">
            {loadingText}
            {dots}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default LoadingDialog;
