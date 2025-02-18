import {
  Control,
  Controller,
  RegisterOptions,
  UseFormSetValue,
} from "react-hook-form";
import { cn, formatUSNumber } from "../../lib/utils";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  control: Control;
  rules?: RegisterOptions;
  isRequired?: boolean;
  setValue: UseFormSetValue<any>;
}

export const PhoneInput = ({
  label,
  type,
  placeholder,
  className,
  name,
  rules = {},
  control,
  isRequired = false,
  setValue,
}: FormInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: isRequired,
          message: `${label || name} is required`,
        },
        ...rules,
      }}
      render={({
        field: { value, onChange, ...rest },
        fieldState: { error },
      }) => {
        const onPhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event);
          const input = event.target.value;
          setValue(name, formatUSNumber(input));
        };

        return (
          <div className="flex flex-col gap-2">
            <label className="text-xl sm:text-3xl font-medium text-black">
              {label}
              {isRequired && (
                <span className="text-danger font-bold ml-2">*</span>
              )}
            </label>

            <input
              type="text"
              value={value || ""}
              onChange={onPhoneInput}
              placeholder={placeholder}
              maxLength={14}
              className={cn(
                "flex placeholder:text-muted-foreground focus-visible:outline-none bg-transparent h-[40px] sm:h-[60px] text-lg sm:text-xl w-full p-6 rounded-[10px] border-2",
                error ? "border-danger" : "border-inputBorder",
                className
              )}
              {...rest}
            />

            {error?.message && (
              <p className="text-danger text-sm">{error?.message}</p>
            )}
          </div>
        );
      }}
    />
  );
};
