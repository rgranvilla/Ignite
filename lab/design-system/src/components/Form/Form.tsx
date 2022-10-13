import {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { FieldError } from "react-hook-form";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Text } from "../Text";
import { TextInput } from "../TextInput";
import { clsx } from "clsx";

// Form Root
export interface FormRootProps {
  children: ReactNode;
}

function FormRoot({ children }: FormRootProps) {
  return <div>{children}</div>;
}

//Form Control
export interface FormControlProps extends FormHTMLAttributes<HTMLFormElement> {
  error?: FieldError;
  children: ReactNode;
}

function FormControl({ children, error, ...rest }: FormControlProps) {
  return (
    <form className="flex flex-col gap-4" {...rest}>
      {children}
    </form>
  );
}

// Form field with label, input icon, input error and input
interface FormTextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  label?: string;
  error?: FieldError;
  mask?: string;
}

function FormTextField({
  icon,
  label,
  error,
  mask,
  ...rest
}: FormTextFieldProps) {
  return (
    <div className="flex flex-col gap-3 text-gray-100">
      <div className="font-bold">
        <Text size="md">{label}</Text>
      </div>

      <div
        className={clsx("flex flex-col gap-3", {
          "text-red-400": !!error,
          "text-gray-100": !error,
        })}
      >
        <TextInput.Root error={error}>
          <TextInput.Error error={error} />
          <TextInput.Icon error={error}>{icon}</TextInput.Icon>
          <TextInput.Input error={error} mask={mask} {...rest} />
        </TextInput.Root>
      </div>
    </div>
  );
}

//Form checkbox field with label
interface FormCheckboxFieldProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  ariaLabel: string;
  isChecked: (value: boolean) => void;
}

function FormCheckboxField({
  name,
  label,
  isChecked,
  ariaLabel,
  ...rest
}: FormCheckboxFieldProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    isChecked(checked);
  }, [checked]);

  return (
    <div className="flex gap-2 items-center text-gray-200">
      <Checkbox
        ariaLabel={ariaLabel}
        {...rest}
        isChecked={(res) => setChecked(res)}
      />
      <Text size="sm">{label}</Text>
    </div>
  );
}

// Form submit button
interface FormSubmitButtonProps {
  label?: string;
  disabled?: boolean;
}

function FormSubmitButton({ label, disabled }: FormSubmitButtonProps) {
  return (
    <div className="my-4">
      <Button type="submit" disabled={disabled}>
        {label}
      </Button>
    </div>
  );
}

FormRoot.displayName = "Form.Root";
FormControl.displayName = "Form.Control";
FormTextField.displayName = "Form.TextField";
FormCheckboxField.displayName = "Form.CheckboxField";
FormSubmitButton.displayName = "Form.SubmitButton";

export const Form = {
  Root: FormRoot,
  Control: FormControl,
  TextField: FormTextField,
  CheckboxField: FormCheckboxField,
  SubmitButton: FormSubmitButton,
};
