import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const shapes = { square: "rounded-none", round: "rounded-lg" } as const;
const variants = {
  outline: {
    gray_600_3f: "border-2 border-gray-600_3f border-solid text-gray-600",
    blue_gray_50: "border-b border-blue_gray-50 border-solid text-gray-600",
    teal_400: "border-b-2 border-solid border-teal-400",
  },
  fill: {
    white_A700_01: "bg-white-A700_01 text-gray-600",
    white_A700: "bg-white-A700 text-gray-600",
  },
} as const;
const sizes = {
  xs: "pb-3 pt-[3px]",
  sm: "pb-[34px] pt-2 px-2",
  md: "pb-[9px] pt-2.5 px-[9px]",
  lg: "pb-3.5 pt-[17px] px-3.5",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]?.[color]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

export { Input };
