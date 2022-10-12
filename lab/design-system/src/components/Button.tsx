import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <>
      <Comp
        className={clsx(
          "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white disabled:cursor-not-allowed disabled:opacity-25"
        )}
        {...rest}
      >
        {children}
      </Comp>
    </>
  );
}
