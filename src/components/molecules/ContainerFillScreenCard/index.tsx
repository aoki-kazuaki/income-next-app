import CButton from "@/components/atoms/CButton";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

type Props = {
  cardTitle: string;
  hiddenLinkToTop?: boolean;
} & PropsWithChildren;

const ContainerFillScreenCard: FC<Props> = ({ cardTitle, hiddenLinkToTop: hiddenLinkToTop = false, children, ...other }) => {
  return (
    <div className="flex h-full items-center justify-center" {...other}>
      <div className="w-full rounded-2xl border-4 border-cyan-300 bg-white py-4 lg:max-w-6/12">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-center text-2xl font-bold">{cardTitle}</h1>
          {children}
          {hiddenLinkToTop && (
            <Link href="/">
              <CButton variant="outline">トップへ戻る</CButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default ContainerFillScreenCard;
