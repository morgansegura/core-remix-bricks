import clsx from "clsx";

import "./Page.css";

import type { ElementType, ReactNode } from "react";

export interface PageFooterProps {
  children?: ReactNode;
  className?: string;
  component?: ElementType;
}

export function PageFooter({
  children,
  className,
  component = "footer",
}: PageFooterProps) {
  const Component = component;
  const baseProps = {
    className: clsx("PageFooter", className),
  };

  return <Component {...baseProps}>{children}</Component>;
}
