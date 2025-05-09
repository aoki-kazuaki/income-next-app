"use client";

import { Button } from "@/components/shadBase/button";
import { Calendar } from "@/components/shadBase/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shadBase/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { ComponentPropsWithoutRef, FC } from "react";

type Props = {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  fromDate?: Date;
  toDate?: Date;
  className?: string;
} & Omit<ComponentPropsWithoutRef<typeof Button>, "value" | "onChange">;

const FormCDatePicker: FC<Props> = ({ value, onChange, className, fromDate, toDate, ...other }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("w-[280px] justify-start text-left font-normal", !value && "text-muted-foreground", className)}
          {...other}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "yyyy/MM/dd") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
          fromDate={fromDate}
          toDate={toDate}
          locale={ja}
        />
      </PopoverContent>
    </Popover>
  );
};

export default FormCDatePicker;
