import { ReactNode } from "react";

export default function Layout(props: { children: ReactNode }) {
  const { children } = props;

  return <div>{children}</div>;
}
