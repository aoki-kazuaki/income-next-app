"use client";
import { Input } from "@/components/shadBase/input";
import { ComponentPropsWithoutRef, FC } from "react";

type Props = {} & ComponentPropsWithoutRef<"input">;

const FormCDate: FC<Props> = ({ className, ...other }) => {
  return <Input type="date" className={className} {...other} />;
};
export default FormCDate;
