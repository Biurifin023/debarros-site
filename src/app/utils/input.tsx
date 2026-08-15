import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
    return (
        <input
            className={`w-full font-sans text-text bg-bg p-2 rounded-md border border-gray-800 focus:outline-none focus:ring-2 focus:ring-accent hover:border-accent-hover transition-colors ${className ?? ""}`}
            {...props}
        />
    )
}
