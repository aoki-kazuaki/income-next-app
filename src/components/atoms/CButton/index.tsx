"use client";
import { Button, buttonVariants } from "@/components/shadBase/button";
import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, FC } from "react";

type Props = ComponentPropsWithoutRef<"button"> & VariantProps<typeof buttonVariants>;

const CButton: FC<Props> = ({ variant, size, className, children, ...other }) => {
  return (
    <Button variant={variant} size={size} className={className} {...other}>
      {children}
    </Button>
  );
};
export default CButton;
