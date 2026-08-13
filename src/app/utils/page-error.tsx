export function PageError() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-8 bg-bg px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <div
          aria-hidden="true"
          className="flex size-12 items-center justify-center rounded-full bg-accent"
        >
          <span className="font-sans text-[1.65rem] font-light leading-none text-white">
            !
          </span>
        </div>
        <div className="space-y-2">
          <p className="font-display text-xl text-text">Algo deu errado</p>
          <p className="max-w-66 font-sans text-sm leading-relaxed text-muted">
            Não foi possível carregar a página. Verifique a conexão e tente de
            novo.
          </p>
        </div>
      </div>
      <div className="flex w-full max-w-sm flex-col items-center gap-4">
        <button
          type="button"
          className="w-full rounded-pill bg-accent px-6 py-3.5 font-sans text-sm font-bold text-white transition-colors hover:bg-accent-hover cursor-pointer"
        >
          Tentar de novo
        </button>
      </div>
    </div>
  );
}
