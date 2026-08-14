"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Container from "../utils/container";
import BtnSeeMore from "../utils/btn-see-more";
import { Skeleton } from "../utils/skeleton";
import img1 from "../assets/img-1.jpeg";
import img2 from "../assets/img-2.jpeg";
import img3 from "../assets/img-3.jpeg";
import img4 from "../assets/img-4.JPG";
import img5 from "../assets/img-5.jpg";
import img6 from "../assets/img-6.jpg";
import img7 from "../assets/img-7.jpg";
import img8 from "../assets/img-8.jpeg";

const portfolioImages: (StaticImageData | string)[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

const AUTO_PLAY_MS = 3500;
const SKELETON_COUNT = 5;

type PortfollioProps = {
  isLoading?: boolean;
};

export default function Portfollio({ isLoading = false }: PortfollioProps) {
  const total = portfolioImages.length;
  const slides = [...portfolioImages, ...portfolioImages];

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [step, setStep] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;

    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const firstCard = track.children[0] as HTMLElement | undefined;
      if (!firstCard) return;

      const styles = getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
      setStep(firstCard.offsetWidth + gap);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);

    return () => observer.disconnect();
  }, [isLoading]);

  useEffect(() => {
    if (isLoading || paused) return;

    const timer = setInterval(() => {
      setWithTransition(true);
      setActiveIndex((current) => current + 1);
    }, AUTO_PLAY_MS);

    return () => clearInterval(timer);
  }, [paused, isLoading]);

  const handleTransitionEnd = useCallback(() => {
    if (activeIndex < total) return;

    setWithTransition(false);
    setActiveIndex(0);
  }, [activeIndex, total]);

  useEffect(() => {
    if (withTransition || activeIndex !== 0) return;

    const id = requestAnimationFrame(() => setWithTransition(true));
    return () => cancelAnimationFrame(id);
  }, [withTransition, activeIndex]);

  const goTo = (index: number) => {
    setWithTransition(true);
    setActiveIndex(index);
  };

  const currentDot = activeIndex % total;

  return (
    <section id="portfolio" className="w-full bg-surface py-12 md:py-20 lg:py-28">
      <Container>
        <h2 className="font-mono text-md uppercase text-accent md:text-xl lg:text-xl">
          Portfólio
        </h2>

        <h1 className="mt-10 font-display text-2xl leading-none text-white md:text-5xl lg:text-6xl">
          Veja alguns trabalhos
        </h1>

        {isLoading ? (
          <div className="mt-8" aria-busy="true" aria-live="polite">
            <div className="flex gap-3 overflow-hidden md:gap-4">
              {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="aspect-3/4 w-[calc((100%-0.75rem)/2)] shrink-0 rounded-md md:w-[calc((100%-2rem)/3)] md:rounded-lg lg:w-[calc((100%-4rem)/5)]"
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                <Skeleton key={index} className="size-2.5 rounded-pill" />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div
              className="mt-8 overflow-hidden"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                ref={trackRef}
                onTransitionEnd={handleTransitionEnd}
                className={`flex gap-3 md:gap-4 ${
                  withTransition
                    ? "transition-transform duration-700 ease-in-out"
                    : ""
                }`}
                style={{
                  transform: step
                    ? `translateX(-${activeIndex * step}px)`
                    : undefined,
                }}
              >
                {slides.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-3/4 w-[calc((100%-0.75rem)/2)] shrink-0 overflow-hidden rounded-md md:w-[calc((100%-2rem)/3)] md:rounded-lg lg:w-[calc((100%-4rem)/5)]"
                  >
                    <Image
                      src={image}
                      alt={`Trabalho do portfólio ${(index % total) + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {portfolioImages.map((_, index) => {
                const isActive = index === currentDot;

                return (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Ir para imagem ${index + 1}`}
                    aria-current={isActive}
                    onClick={() => goTo(index)}
                    className={`h-2.5 cursor-pointer rounded-pill transition-all duration-300 ${
                      isActive
                        ? "w-8 bg-accent"
                        : "w-2.5 bg-white/25 hover:bg-white/40"
                    }`}
                  />
                );
              })}
            </div>
          </>
        )}

        <div className="mt-10 flex justify-center">
          <BtnSeeMore />
        </div>
      </Container>
    </section>
  );
}
