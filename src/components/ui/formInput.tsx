import { Control, Controller, RegisterOptions } from "react-hook-form";
import { cn } from "../../lib/utils";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  control: Control;
  rules?: RegisterOptions;
  isRequired?: boolean;
}

export const FormInput = ({
  label,
  type,
  placeholder,
  className,
  name,
  rules = {},
  control,
  isRequired = false,
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
      render={({ field: { value, ...rest }, fieldState: { error } }) => (
        <div className="flex flex-col gap-2">
          <label className="text-xl sm:text-3xl font-medium text-black">
            {label}
            {isRequired ? (
              <span className="text-danger font-bold ml-2">*</span>
            ) : null}
          </label>
          {type === "textarea" ? (
            <textarea
              className={cn(
                "flex placeholder:text-muted-foreground focus-visible:outline-none bg-transparent min-h-[80px] text-lg sm:text-xl w-full p-6 rounded-[10px] border-2 border-inputBorder resize-none",
                error?.message ? "border-danger" : "border-inputBorder",
                className
              )}
              value={value || ""}
              placeholder={placeholder}
              {...rest}
            />
          ) : (
            <input
              type={type}
              value={value || ""}
              placeholder={placeholder}
              {...rest}
              className={cn(
                "flex placeholder:text-muted-foreground focus-visible:outline-none bg-transparent h-[40px] sm:h-[60px] text-lg sm:text-xl w-full p-6 rounded-[10px] border-2 border-inputBorder",
                error?.message ? "border-danger" : "border-inputBorder",
                className
              )}
            />
          )}

          {error?.message ? (
            <p className="text-danger text-sm">{error?.message}</p>
          ) : null}
        </div>
      )}
    />
  );
};
