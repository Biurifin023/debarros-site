import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({ className = "", children, ...props }: SelectProps) {
  return (
    <div className="relative w-full">
      <select
        className={`cursor-pointer w-full appearance-none rounded-md border border-gray-800 bg-bg p-2 pr-10 font-sans text-muted transition-colors hover:border-accent-hover focus:outline-none focus:ring-2 focus:ring-accent ${className}`}
        {...props}
      >
        {children}
      </select>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted"
      >
        ▾
      </span>
    </div>
  );
}
