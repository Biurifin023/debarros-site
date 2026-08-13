import { Skeleton } from "./skeleton";

export function PageSkeleton() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-8 bg-bg px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <div
          aria-hidden="true"
          className="size-10 animate-spin rounded-full border-[3px] border-accent/20 border-t-accent"
        />
        <div className="space-y-2">
          <p className="font-display text-xl text-text">Carregando...</p>
          <p className="font-sans text-sm text-muted">
            Buscando informações...
          </p>
        </div>
      </div>
      <div className="flex w-full max-w-sm flex-col items-center gap-2.5">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/5" />
        <Skeleton className="mt-1 h-44 w-full" />
      </div>
    </div>
  );
}
