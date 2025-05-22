"use client";

import { EMPTY_INPUT } from "@/constants/common";
import { ChangeEvent, useState } from "react";

const useInput = (defaultValue: string = EMPTY_INPUT) => {
  const [input, setInput] = useState(defaultValue);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return [input, setInput, onChangeInput] as const;
};

export default useInput;
