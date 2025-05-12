import { Alert, AlertDescription, AlertTitle } from "@/components/shadBase/alert";
import { Terminal } from "lucide-react";
import { ComponentPropsWithoutRef, FC } from "react";

type Props = {
  alertTitle: string;
} & ComponentPropsWithoutRef<"div">;

export const CAlert: FC<Props> = ({ alertTitle, children, ...other }) => {
  return (
    <Alert {...other}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>{alertTitle}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};
