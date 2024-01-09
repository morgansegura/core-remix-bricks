import clsx from "clsx";

import { PageHeader } from "./PageHeader";
import { PageBody } from "./PageBody";
import { PageSection } from "./PageSection";
import { PageFooter } from "./PageFooter";

import "./Page.css";

import type { ElementType, ReactNode } from "react";

export interface PageProps {
  children?: ReactNode;
  className?: string;
  component?: ElementType;
}

export function Page({ children, className, component = "main" }: PageProps) {
  const Component = component;
  const baseProps = {
    className: clsx("Page", className),
  };

  return <Component {...baseProps}>{children}</Component>;
}

Page.Header = PageHeader;
Page.Body = PageBody;
Page.Section = PageSection;
Page.Footer = PageFooter;
