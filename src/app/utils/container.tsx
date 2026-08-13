import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div
      className={`flex gap-8 h-screen flex-col mx-auto w-full px-6 md:px-14 lg:px-14 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}