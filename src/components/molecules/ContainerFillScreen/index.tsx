import { ComponentPropsWithoutRef, FC } from "react";

type Props = {} & ComponentPropsWithoutRef<"div">;

/**ヘッダーフッター要素を表示しないページ上で使用するコンテナ */
const ContainerFillScreen: FC<Props> = ({ children, ...other }) => {
  return (
    <div className="h-[calc(100vh-3rem-3rem)] lg:h-[calc(100vh-1.75rem-3rem)]" {...other}>
      {children}
    </div>
  );
};
export default ContainerFillScreen;
