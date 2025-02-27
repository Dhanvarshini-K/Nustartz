import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Control, Controller, RegisterOptions } from "react-hook-form";

interface FormInputProps {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
  control: Control;
  rules?: RegisterOptions;
  isRequired?: boolean;
}

export const PhoneNumberInput = ({
  label,
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
      render={({
        field: { value, onChange, ...rest },
        fieldState: { error },
      }) => (
        <div className="flex flex-col sm:gap-2">
          <label className="text-md sm:text-xl font-medium text-black">
            {label}
            {isRequired && (
              <span className="text-danger font-bold ml-2">*</span>
            )}
          </label>
          <PhoneInput
            country={"us"}
            value={value || ""}
            onChange={onChange}
            placeholder={placeholder}
            {...rest}
          />
          {error?.message && (
            <p className="text-danger text-sm">{error?.message}</p>
          )}
        </div>
      )}
    />
  );
};
