import clsx from "clsx";

import "./Alert.css";

import type { ReactNode } from "react";


export interface AlertProps {
  children?: ReactNode;
  className?: string;
}

export function Alert({ children, className }: AlertProps) {
  const baseProps = {
    className: clsx("Alert", className),
  };
  return <div {...baseProps}>{children}</div>;
}
