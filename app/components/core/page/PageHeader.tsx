import clsx from "clsx";

import "./Page.css";

import type { ElementType, ReactNode } from "react";

export interface PageHeaderProps {
  children?: ReactNode;
  className?: string;
  component?: ElementType;
}

export function PageHeader({
  children,
  className,
  component = "header",
}: PageHeaderProps) {
  const Component = component;
  const baseProps = {
    className: clsx("PageHeader", className),
  };

  return <Component {...baseProps}>{children}</Component>;
}
