import { Separator } from "@/components/shadBase/separator";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { ComponentPropsWithoutRef, FC } from "react";
type Props = {} & ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;

const CSeparator: FC<Props> = ({ className, orientation = "horizontal", decorative = true, ...other }) => {
  return <Separator className={className} orientation={orientation} decorative={decorative} {...other} />;
};
export default CSeparator;
