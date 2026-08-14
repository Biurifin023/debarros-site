import Image from "next/image";
import profileImage from "@/app/assets/profile-img.jpeg";
import { Skeleton } from "../utils/skeleton";

type AboutSectionProps = {
  isLoading?: boolean;
};

export default function AboutSection({ isLoading = false }: AboutSectionProps) {
  return (
    <section id="sobre" className="w-full">
      <div className="flex w-full flex-col md:flex-row md:items-stretch">
        <div className="flex w-full flex-col justify-center gap-4 px-6 py-8 md:w-1/2 md:px-14 md:py-12">
          <h2 className="font-mono text-md uppercase text-accent md:text-xl lg:text-xl">
            Sobre
          </h2>

          <h1 className="font-display text-2xl leading-none text-white md:text-5xl lg:text-6xl">
            Conheça o Tatuador
          </h1>

          {isLoading ? (
            <div className="flex flex-col gap-2.5" aria-busy="true" aria-live="polite">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/5" />
            </div>
          ) : (
            <p className="font-sans text-lg text-muted md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quos.
            </p>
          )}
        </div>

        <div className="relative h-[min(80vw,416px)] w-full md:h-auto md:min-h-130 md:w-1/2">
          {isLoading ? (
            <Skeleton className="absolute inset-0 rounded-none" />
          ) : (
            <Image
              src={profileImage}
              alt="Sobre o tatuador"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
      </div>
    </section>
  );
}
