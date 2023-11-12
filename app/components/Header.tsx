import type { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return <h1>{children}</h1>;
}
