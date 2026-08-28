import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

// PLACEHOLDERS DE DESENVOLVIMENTO — substituir por dados reais de vendas.
// Estrutura preparada para receber: primeiro nome, produto adquirido e tempo desde a compra.
type Notification = {
  firstName: string;
  product: string;
  timeAgo: string;
};

const PLACEHOLDER_NOTIFICATIONS: Notification[] = [
  {
    firstName: "Mariana",
    product: "Mapas Mentais de Inglês",
    timeAgo: "há poucos minutos",
  },
  {
    firstName: "Carlos",
    product: "Mapas Mentais de Inglês",
    timeAgo: "há 12 minutos",
  },
  {
    firstName: "Fernanda",
    product: "Mapas Mentais de Inglês",
    timeAgo: "há 28 minutos",
  },
  {
    firstName: "Ricardo",
    product: "Mapas Mentais de Inglês",
    timeAgo: "há 1 hora",
  },
  {
    firstName: "Juliana",
    product: "Mapas Mentais de Inglês",
    timeAgo: "há 2 horas",
  },
];

export function SocialProofToast() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let timeoutId: number;

    const cycle = () => {
      setVisible(true);
      timeoutId = window.setTimeout(() => {
        setVisible(false);
        timeoutId = window.setTimeout(() => {
          setIndex((prev) => (prev + 1) % PLACEHOLDER_NOTIFICATIONS.length);
          cycle();
        }, 30000);
      }, 5000);
    };

    timeoutId = window.setTimeout(cycle, 10000);
    return () => window.clearTimeout(timeoutId);
  }, [mounted]);

  if (!mounted) return null;

  const current = PLACEHOLDER_NOTIFICATIONS[index];

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={cn(
        "fixed left-4 z-40 w-[calc(100%-2rem)] max-w-xs rounded-2xl border border-border/80 bg-card p-3.5 shadow-float transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:max-w-sm md:left-6 md:bottom-6",
        // Mobile: posicionado acima do StickyCta fixo (z-50) para evitar sobreposição.
        "bottom-20",
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : "-translate-x-4 translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-start gap-3">
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-royal/10 text-royal"
          aria-hidden="true"
        >
          <Check className="size-4" strokeWidth={3} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-royal">
            <span className="flex size-4 items-center justify-center rounded-full bg-royal/10">
              <Check className="size-2.5" strokeWidth={4} />
            </span>
            Compra verificada
          </p>
          <p className="mt-1 text-sm font-semibold leading-snug text-navy">
            <span className="text-foreground">{current.firstName}</span> adquiriu os{" "}
            <span className="text-royal">{current.product}</span>
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">{current.timeAgo}</p>
        </div>
      </div>
    </div>
  );
}
