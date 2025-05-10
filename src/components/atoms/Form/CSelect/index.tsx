"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/shadBase/select";
import { cn } from "@/lib/utils";
import { OptionTextAndValue } from "@/types/formUtils";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ComponentPropsWithoutRef, FC } from "react";

type Props = {
  value: string;
  onChange: (val: string) => void;
  options: OptionTextAndValue[];
  placeholder?: string;
  labelText?: string;
  size?: "sm" | "default";
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>;

const FormCSelect: FC<Props> = ({
  value,
  onChange,
  options,
  placeholder = "選択してください",
  labelText = "",
  size,
  className,
  ...other
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger size={size} className={cn("w-full", className)} {...other}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {labelText && <SelectLabel>{labelText}</SelectLabel>}
          {options.map(option => (
            <SelectItem value={option.value} key={option.value}>
              {option.text}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default FormCSelect;
