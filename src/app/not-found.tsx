import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main className="flex min-h-full flex-1 flex-col items-center justify-center gap-8 bg-bg px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="font-display text-6xl leading-none text-accent md:text-7xl">
          404
        </p>
        <div className="space-y-2">
          <h1 className="font-display text-xl text-text">Página não encontrada</h1>
          <p className="max-w-66 font-sans text-sm leading-relaxed text-muted">
            O endereço que você acessou não existe ou foi movido.
          </p>
        </div>
      </div>
      <Link
        href="/"
        className="w-full max-w-sm rounded-pill bg-accent px-6 py-3.5 text-center font-sans text-sm font-bold text-white transition-colors hover:bg-accent-hover"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
