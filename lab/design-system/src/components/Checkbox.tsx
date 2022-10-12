import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { ButtonHTMLAttributes, useState } from "react";

export interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isChecked: (value: boolean) => void;
}

export function Checkbox({ isChecked, ...rest }: CheckboxProps) {
  function handleChangeCheck(event: CheckboxPrimitive.CheckedState) {
    isChecked(event === true ? true : false);
  }
  return (
    <>
      <CheckboxPrimitive.Root
        className="w-6 h-6 p-[2px] bg-gray-800 rounded"
        onCheckedChange={handleChangeCheck}
        {...rest}
      >
        <CheckboxPrimitive.Indicator asChild>
          <Check weight="bold" className="h-5 w-5 text-cyan-500" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </>
  );
}
