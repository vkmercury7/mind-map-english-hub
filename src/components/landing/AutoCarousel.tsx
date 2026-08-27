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

type AutoCarouselProps = {
  items: ReactNode[];
  itemClassName?: string;
  interval?: number;
};

export function AutoCarousel({
  items,
  itemClassName = "basis-[78%] sm:basis-1/2 lg:basis-1/3",
  interval = 3800,
}: AutoCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const paused = useRef(false);

  const pause = useCallback(() => {
    paused.current = true;
  }, []);
  const resume = useCallback(() => {
    paused.current = false;
  }, []);

  useEffect(() => {
    if (!api) return;
    const onPointerDown = () => pause();
    api.on("pointerDown", onPointerDown);
    const id = window.setInterval(() => {
      if (paused.current) return;
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, interval);
    return () => {
      window.clearInterval(id);
      api.off("pointerDown", onPointerDown);
    };
  }, [api, interval, pause]);

  return (
    <div onMouseEnter={pause} onMouseLeave={resume} onTouchStart={pause}>
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true, dragFree: false }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {items.map((item, i) => (
            <CarouselItem key={i} className={cn("pl-4", itemClassName)}>
              {item}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2 hidden size-11 border-border/70 bg-card/90 text-navy shadow-soft backdrop-blur hover:bg-card md:flex" />
        <CarouselNext className="-right-2 hidden size-11 border-border/70 bg-card/90 text-navy shadow-soft backdrop-blur hover:bg-card md:flex" />
      </Carousel>
    </div>
  );
}
