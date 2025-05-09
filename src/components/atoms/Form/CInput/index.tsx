"use client";
import { Input } from "@/components/shadBase/input";
import { ComponentPropsWithoutRef, FC } from "react";

type Props = {} & ComponentPropsWithoutRef<"input">;

const FormCInput: FC<Props> = ({ type, className, ...other }) => {
  return <Input type={type} className={className} {...other} />;
};
export default FormCInput;
