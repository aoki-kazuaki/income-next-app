import clsx from "clsx";
import { ComponentPropsWithoutRef, FC } from "react";

type Props = {} & ComponentPropsWithoutRef<"div">;

const Container: FC<Props> = ({ children, className, ...other }) => {
  return (
    <div className={clsx("mx-auto w-11/12 max-w-7xl", className)} {...other}>
      {children}
    </div>
  );
};
export default Container;
