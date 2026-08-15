import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`min-h-32 w-full resize-y rounded-md border border-gray-800 bg-bg p-2 font-sans text-text transition-colors hover:border-accent-hover focus:outline-none focus:ring-2 focus:ring-accent ${className}`}
      {...props}
    />
  );
}
