"use client";

import { useState } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import SchedulesModal from "../components/schedules-modal";

type BtnSchedulesProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export default function BtnSchedules({
  className = "",
  children = "ORÇAMENTO",
  onClick,
  type = "button",
  ...props
}: BtnSchedulesProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        {...props}
        type={type}
        className={`w-fit cursor-pointer rounded-md bg-accent px-4 py-2 text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
        onClick={(event) => {
          onClick?.(event);
          setIsOpen(true);
        }}
      >
        {children}
      </button>

      <SchedulesModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
