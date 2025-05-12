import React, { type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
