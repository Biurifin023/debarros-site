import Image from "next/image";
import Container from "../utils/container";
import { Skeleton } from "../utils/skeleton";
import Header from "./header";
import { ImageField } from "@prismicio/client";

type HeroSectionProps = {
  isLoading?: boolean;
  image?: ImageField;
  whatsappPhone?: string;
};

export default function HeroSection({
  isLoading = false,
  image,
  whatsappPhone,
}: HeroSectionProps) {
  return (
    <div className="flex w-full flex-col">
      <Container>
        <Header whatsappPhone={whatsappPhone} />
      </Container>
      <div className="relative h-[min(100vw,520px)] w-full md:h-[min(96vh,1080px)]">
        {isLoading ? (
          <Skeleton className="absolute inset-0 rounded-none" />
        ) : (
          <Image
            src={image?.url ?? ""}
            alt={image?.alt ?? ""}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-transparent"
        />

        <div className="absolute bottom-6 left-6 z-10 md:bottom-10 md:left-14">
          <h1 className="font-display text-4xl leading-none text-white md:text-5xl lg:text-6xl">
            DEBARROS
            <br />
            TATTOO
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center bg-accent py-4 text-xl font-bold text-white">
        <p className="text-center md:text-2xl lg:text-3xl">
          Tatuagens sólidas e duradouras
        </p>
      </div>
    </div>
  );
}
