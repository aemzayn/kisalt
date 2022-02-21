import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  height?: "full" | "screen" | "min" | "max" | "fit" | "0";
};

export default function Container({ children, height }: Props) {
  return (
    <div
      className={clsx(
        "container mx-auto max-w-6xl px-4 xl:px-0",
        height && `h-${height}`
      )}
    >
      {children}
    </div>
  );
}
