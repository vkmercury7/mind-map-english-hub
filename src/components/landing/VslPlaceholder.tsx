import { Play } from "lucide-react";
import { useRef, useState } from "react";

/**
 * Player da VSL.
 *
 * O vídeo é quadrado (1440x1440 → 1:1) e a proporção original é preservada
 * via aspect-square + object-contain. Para trocar o vídeo, basta substituir
 * o arquivo em public/videos/vsl-ingles.mp4 e ajustar a classe de proporção, se necessário.
 */
export function VslPlaceholder() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
    } else {
      el.pause();
    }
  };

  return (
    <div className="group relative w-full max-w-xl overflow-hidden rounded-3xl bg-gradient-navy shadow-float">
      <div className="relative aspect-square w-full">
        <video
          ref={videoRef}
          src="/videos/vsl-ingles.mp4"
          className="absolute inset-0 size-full object-contain"
          playsInline
          preload="metadata"
          controls={playing}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onClick={toggle}
        />

        {!playing && (
          <button
            type="button"
            onClick={toggle}
            aria-label="Reproduzir vídeo de apresentação"
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-navy/25"
          >
            <span className="inline-flex size-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play className="size-7 fill-white text-white" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.18em] text-white/70">
              VÍDEO DE APRESENTAÇÃO
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
