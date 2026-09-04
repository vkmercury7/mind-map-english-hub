import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/90 p-3 backdrop-blur-md transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <Button asChild variant="cta" size="xl" className="w-full">
        <a href="https://hub.usepinpay.com/pay/5179eed9-5ec5-4fb9-a483-659fe4c042a3">QUERO OS +400 MAPAS</a>
      </Button>
    </div>
  );
}
