import "./Page.css";

import type { ReactNode } from "react";

export interface PageBodyProps {
  children?: ReactNode;
}

export function PageBody({ children }: PageBodyProps) {
  return <main className="PageBody">{children}</main>;
}
