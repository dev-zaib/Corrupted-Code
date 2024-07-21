import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-lg",
  square: "rounded-none",
} as const;
const variants = {
  outline: {
    blue_A400: "border-b border-blue-A400 border-solid text-blue-A400",
    amber_A700: "border-amber-A700 border-b border-solid",
    gray_700: "border border-gray-700 border-solid text-gray-600",
    gray_900_01: "border-b border-gray-900_01 border-solid text-gray-900_01",
    gray_900_02: "border-b border-gray-900_02 border-solid text-gray-900_02",
  },
  fill: {
    blue_A400: "bg-blue-A400 text-white-A700_01",
    gray_900_04: "bg-gray-900_04",
    gray_900_02: "bg-gray-900_02 text-white-A700",
    teal_400: "bg-teal-400 text-gray-900_02",
    white_A700: "bg-white-A700 shadow-bs",
    blue_gray_200_01: "bg-blue_gray-200_01",
    white_A700_01: "bg-white-A700_01",
  },
} as const;
const sizes = {
  xs: "py-[3px]",
  sm: "p-1",
  md: "p-2",
  lg: "p-[13px]",
  xl: "p-4",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
