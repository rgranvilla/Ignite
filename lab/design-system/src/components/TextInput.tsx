import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
} from "react";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import { clsx } from "clsx";
import { useIMask } from "react-imask";
import { mergeRefs } from "react-merge-refs";
import { Slot } from "@radix-ui/react-slot";

// Root form container
export interface TextInputRootProps {
  children: ReactNode;
  error?: FieldError;
  mask?: string;
}

function TextInputRoot({ children, error }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full   focus-within:ring-2 ring-cyan-300",
        {
          "outline-2 outline outline-red-400 -outline-offset-2": !!error,
        }
      )}
    >
      {children}
    </div>
  );
}

// Error form container
interface TextInputErrorProps {
  error?: FieldError;
}

function TextInputError({ error }: TextInputErrorProps) {
  return (
    <>
      {!!error && (
        <span
          className={clsx(
            "flex right-0 justify-end text-red-400 -translate-x-8 -translate-y-9 text-xs absolute",
            {}
          )}
        >
          {error?.message}
        </span>
      )}
    </>
  );
}

// Input icon form container

export interface TextInputIconProps {
  children: ReactNode;
  error?: FieldError;
}

function TextInputIcon({ error, children }: TextInputIconProps) {
  return (
    <>
      <Slot
        className={clsx("w-6 h-6", {
          "text-gray-400": !error,
          "text-red-400": !!error,
        })}
      >
        {children}
      </Slot>
    </>
  );
}

export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  setDefaultValue?: string;
  mask?: string;
}

// Input form container
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputBaseProps> = (
  { name, error, setDefaultValue = "", mask = "", ...rest }: InputBaseProps,
  ref
) => {
  const { ref: iMaskRef, setValue } = useIMask({ mask });

  useEffect(() => {
    setValue(setDefaultValue);
  }, []);

  return (
    <div className="flex flex-col items-end justify-end relative">
      <input
        className="bg-transparent flex-1 text-xs placeholder:text-gray-400 outline-none"
        ref={mergeRefs([iMaskRef, ref])}
        onChange={(event) => setValue(event.target.value)}
        {...rest}
      />
    </div>
  );
};

const TextInputInput = forwardRef(InputBase);

TextInputRoot.displayName = "TextInput.Root";
TextInputError.displayName = "TextInput.Error";
TextInputInput.displayName = "TextInput.Input";
TextInputIcon.displayName = "TextInput.Icon";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
  Error: TextInputError,
};
