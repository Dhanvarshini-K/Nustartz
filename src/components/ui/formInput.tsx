import { Control, Controller, RegisterOptions } from "react-hook-form";
import { cn } from "../../lib/utils";
import { HTMLInputTypeAttribute, useState } from "react";
import { Paperclip } from "lucide-react";

interface FormInputProps {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  control: Control;
  rules?: RegisterOptions;
  isRequired?: boolean;
}

export const FormInput = ({
  label,
  type = "text",
  placeholder,
  className,
  name,
  rules = {},
  control,
  isRequired = false,
}: FormInputProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

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
        field: { onChange, value = "", ...rest },
        fieldState: { error },
      }) => (
        <div className="flex flex-col md:gap-2">
          <label className="text-md sm:text-xl font-medium text-black">
            {label}
            {isRequired && (
              <span className="text-danger font-bold ml-2">*</span>
            )}
          </label>

          {type === "file" ? (
            <div>
              <label className="flex items-center justify-start gap-3 cursor-pointer border-2 border-inputBorder text-Gray py-3 px-2 sm:px-5 rounded-lg hover:bg-opacity-80 transition h-[60px] ">
                <Paperclip className="w-5 h-5" />
                <span>{fileName ? fileName : "Attach your file"}</span>
                <input
                  type="file"
                  className="hidden"
                  // value={value}
                  accept=".pdf, .ppt, .pptx, .doc, .docx"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setFileName(file ? file.name : null);
                    onChange(file);
                  }}
                  {...rest}
                />
              </label>
            </div>
          ) : type === "textarea" ? (
            <textarea
              className={cn(
                "placeholder:text-muted-foreground focus-visible:outline-none bg-transparent min-h-[120px] text-md sm:text-xl w-full p-2 rounded-[10px] border-2 border-inputBorder resize-none",
                className
              )}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              {...rest}
            />
          ) : (
            <input
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              className={cn(
                "placeholder:text-muted-foreground focus-visible:outline-none bg-transparent h-[60px] text-md sm:text-xl w-full p-3 rounded-md sm:rounded-[10px] border-2 border-inputBorder",
                className
              )}
              {...rest}
            />
          )}

          {error?.message && (
            <p className="text-danger text-sm">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};
