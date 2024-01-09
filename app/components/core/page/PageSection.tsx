import clsx from "clsx";

import "./Page.css";

import type { ElementType, ReactNode } from "react";
import type { TypographyLayoutProp } from "@/components";

export interface PageSectionProps {
  children?: ReactNode;
  className?: string;
  component?: ElementType;
  container?: boolean;
  appearance?: TypographyLayoutProp;
}

export function PageSection({
  appearance = "layout",
  children,
  className,
  component = "section",
  container = false,
}: PageSectionProps) {
  const Component = component;
  const baseProps = {
    "data-appearance": appearance,
    "data-container": `${container}`,
    className: clsx("PageSection", className),
  };
  return <Component {...baseProps}>{children}</Component>;
}
