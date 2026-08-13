import Image from "next/image";
import bgHero from "@/app/assets/bg-hero-1.JPG";
import Container from "../utils/container";
import Header from "./header";

export default function HeroSection() {
    return (
        <div className="flex w-full flex-col">
            <Container>
                <Header />
            </Container>
            <div className="relative h-[min(100vw,520px)] w-full md:h-[min(70vh,720px)]">
                <Image
                    src={bgHero}
                    alt="Hero Section"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />

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
            <div className="flex items-center justify-center bg-accent text-white text-xl font-bold py-4">
                <p className="text-center md:text-2xl lg:text-3xl">Tatuagens sólidas e duradouras
                </p>
            </div>
        </div>
    );
}
