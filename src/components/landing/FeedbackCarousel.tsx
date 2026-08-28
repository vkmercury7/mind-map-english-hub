import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type FeedbackCarouselProps = {
  items: ReactNode[];
  interval?: number;
};

/**
 * Carrossel de feedbacks com autoplay suave, setas, indicadores (dots)
 * e pausa temporária ao interagir. Loop infinito.
 */
export function FeedbackCarousel({ items, interval = 4500 }: FeedbackCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const paused = useRef(false);
  const pauseTimeout = useRef<number | null>(null);

  const pause = useCallback(() => {
    paused.current = true;
    if (pauseTimeout.current) window.clearTimeout(pauseTimeout.current);
    // retoma o autoplay alguns segundos após a última interação
    pauseTimeout.current = window.setTimeout(() => {
      paused.current = false;
    }, 5000);
  }, []);

  const resume = useCallback(() => {
    if (pauseTimeout.current) window.clearTimeout(pauseTimeout.current);
    paused.current = false;
  }, []);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    const onPointerDown = () => pause();
    api.on("select", onSelect);
    api.on("pointerDown", onPointerDown);
    onSelect();
    const id = window.setInterval(() => {
      if (paused.current) return;
      api.scrollNext();
    }, interval);
    return () => {
      window.clearInterval(id);
      if (pauseTimeout.current) window.clearTimeout(pauseTimeout.current);
      api.off("select", onSelect);
      api.off("pointerDown", onPointerDown);
    };
  }, [api, interval, pause]);

  return (
    <div onMouseEnter={pause} onMouseLeave={resume} onTouchStart={pause}>
      <Carousel
        setApi={setApi}
        opts={{ align: "center", loop: true, dragFree: false }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {items.map((item, i) => (
            <CarouselItem
              key={i}
              className={cn(
                "pl-4 basis-[82%] transition-all duration-500 sm:basis-[52%] lg:basis-[38%]",
                i === selected ? "sm:scale-100 sm:opacity-100" : "sm:scale-[0.93] sm:opacity-70"
              )}
            >
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          aria-label="Ver feedback anterior"
          className="-left-2 hidden size-11 border-border/70 bg-card/90 text-navy shadow-soft backdrop-blur hover:bg-card md:flex"
        />
        <CarouselNext
          aria-label="Ver próximo feedback"
          className="-right-2 hidden size-11 border-border/70 bg-card/90 text-navy shadow-soft backdrop-blur hover:bg-card md:flex"
        />
      </Carousel>

      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para o feedback ${i + 1}`}
            onClick={() => {
              pause();
              api?.scrollTo(i);
            }}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === selected ? "w-6 bg-royal" : "w-2 bg-royal/25 hover:bg-royal/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
