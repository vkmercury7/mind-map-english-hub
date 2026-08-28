import { Play } from "lucide-react";

/**
 * Placeholder para VSL (Video Sales Letter).
 *
 * Substitua este componente pelo player de vídeo real quando o arquivo
 * estiver disponível. A estrutura externa (aspect-ratio, bordas, sombra,
 * largura responsiva) deve ser preservada para não quebrar o layout do Hero.
 */
export function VslPlaceholder() {
  return (
    <div className="group relative w-full max-w-4xl overflow-hidden rounded-3xl bg-gradient-navy shadow-float">
      {/* Efeito sutil de brilho */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.52_0.19_264/0.25),transparent_60%)]" />

      {/* Container 16:9 */}
      <div className="relative aspect-video w-full">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <span className="inline-flex size-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Play className="size-7 fill-white text-white" />
          </span>
          <span className="text-[11px] font-semibold tracking-[0.18em] text-white/70">
            VÍDEO DE APRESENTAÇÃO
          </span>
        </div>
      </div>
    </div>
  );
}
