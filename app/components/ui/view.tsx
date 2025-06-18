import type React from "react";

interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {}

export function View(props: ViewProps) {
  return <div {...props} />;
}
