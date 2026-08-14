import Container from "../utils/container";
import Image from "next/image";
import map from "../assets/maps.png";
import { Skeleton } from "../utils/skeleton";

type LocalizationProps = {
  isLoading?: boolean;
};

export default function Localization({ isLoading = false }: LocalizationProps) {
  return (
    <div id="como-chegar" className="w-full py-12 md:py-20 lg:py-28">
      <Container>
        <h2 className="font-mono text-md uppercase text-accent md:text-xl lg:text-xl">
          Como chegar
        </h2>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-stretch md:gap-6">
          <div className="flex w-full flex-col justify-center rounded-md bg-surface p-4 md:w-1/2 md:p-6">
            <h1 className="mb-4 mt-4 font-display text-2xl leading-none text-white md:text-2xl lg:text-4xl">
              Informações sobre o local
            </h1>
            <p className="font-sans text-lg text-muted md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab
              incidunt, provident facilis harum ducimus eveniet? Omnis placeat
              voluptatem veritatis, amet, nulla cum necessitatibus praesentium
              rem, aut libero molestiae ea!
            </p>
          </div>

          {isLoading ? (
            <div
              className="relative w-full overflow-hidden rounded-md bg-surface p-4 md:w-1/2 md:p-6"
              aria-busy="true"
              aria-live="polite"
            >
              <Skeleton className="aspect-square w-full rounded-md" />
            </div>
          ) : (
            <a
              href="https://maps.app.goo.gl/KWgouxu1fWz8MStJ9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir localização no Google Maps"
              className="relative block w-full overflow-hidden rounded-md bg-surface p-4 transition-opacity hover:opacity-90 md:w-1/2 md:p-6"
            >
              <Image
                src={map}
                alt="Mapa do estúdio"
                width={750}
                height={750}
                className="h-auto w-full rounded-md object-cover"
              />
            </a>
          )}
        </div>
      </Container>
    </div>
  );
}
