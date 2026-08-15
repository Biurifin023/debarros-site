"use client";

import { useRef, useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import { FaPaperclip } from "react-icons/fa";

type FileInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

function mergeFiles(current: File[], incoming: FileList | null) {
  if (!incoming) return current;

  const next = new Map(current.map((file) => [`${file.name}-${file.size}-${file.lastModified}`, file]));

  for (const file of Array.from(incoming)) {
    next.set(`${file.name}-${file.size}-${file.lastModified}`, file);
  }

  return Array.from(next.values());
}

function toFileList(files: File[]) {
  const dataTransfer = new DataTransfer();
  files.forEach((file) => dataTransfer.items.add(file));
  return dataTransfer.files;
}

function labelForFiles(files: File[]) {
  if (files.length === 0) return null;
  if (files.length === 1) return files[0].name;
  return `${files.length} arquivos selecionados`;
}

export default function FileInput({
  className = "",
  multiple,
  onChange,
  ...props
}: FileInputProps) {
  const filesRef = useRef<File[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const fileLabel = labelForFiles(files);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const next = multiple
      ? mergeFiles(filesRef.current, event.target.files)
      : event.target.files?.[0]
        ? [event.target.files[0]]
        : [];

    filesRef.current = next;
    event.target.files = toFileList(next);
    setFiles(next);
    onChange?.(event);
  }

  return (
    <div
      className={`relative flex h-10.5 w-full items-center rounded-md border border-gray-800 bg-bg px-3 font-sans text-text transition-colors hover:border-accent-hover has-focus:ring-2 has-focus:ring-accent ${className}`}
    >
      {fileLabel && (
        <span className="pointer-events-none min-w-0 flex-1 truncate text-sm text-text-soft">
          {fileLabel}
        </span>
      )}
      <FaPaperclip className="pointer-events-none ml-auto size-4 shrink-0 text-accent" aria-hidden />
      <input
        type="file"
        multiple={multiple}
        aria-label={fileLabel ?? "Anexar arquivo"}
        className="absolute inset-0 cursor-pointer opacity-0"
        onChange={handleChange}
        {...props}
      />
    </div>
  );
}
