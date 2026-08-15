"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import SchedulesForm from "./schedules-form";

type SchedulesModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SchedulesModal({ isOpen, onClose }: SchedulesModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="schedules-modal-title"
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-md border border-gray-800 bg-surface p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2
            id="schedules-modal-title"
            className="font-display text-2xl text-white md:text-3xl"
          >
            Pedido de orçamento
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="font-sans text-2xl cursor-pointer leading-none text-muted transition-colors hover:text-white"
          >
            ×
          </button>
        </div>

        <SchedulesForm onSuccess={onClose} />
      </div>
    </div>,
    document.body
  );
}
