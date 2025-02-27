import { Control, Controller, RegisterOptions } from "react-hook-form";
import { cn } from "../../lib/utils";

interface SelectOptionsType {
  value?: string;
  label: string;
}

interface SelectInputProps {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
  control: Control;
  isRequired?: boolean;
  options: SelectOptionsType[];
  rules?: RegisterOptions;
  defaultValue?: string;
}
export const SelectInput = ({
  control,
  name,
  label,
  options,
  isRequired,
  className,
  rules,
  defaultValue,
}: SelectInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: isRequired ?? false,
          message: `${label} is required`,
        },
        ...rules,
      }}
      defaultValue={defaultValue}
      render={({ field: { value, ...rest }, fieldState: { error } }) => (
        <div className="flex flex-col sm:gap-2">
          <label className="text-md sm:text-xl font-medium text-black">
            {label}
            {isRequired ? (
              <span className="text-danger font-bold ml-2">*</span>
            ) : null}
          </label>
          <select
            className={cn(
              `text-ParaGrey bg-transparent h-[60px] sm:text-lg w-full px-2 sm:p-3 focus-visible:outline-none rounded-[10px] border-2 border-inputBorder`,
              className
            )}
            value={value || ""}
            {...rest}
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="text-lg text-ParaGrey py-2"
              >
                {option.label}
              </option>
            ))}
          </select>

          {error?.message && (
            <p className="text-danger text-sm">{error?.message}</p>
          )}
        </div>
      )}
    />
  );
};
