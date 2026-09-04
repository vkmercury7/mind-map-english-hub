/**
 * Player da VSL.
 *
 * O vídeo é quadrado (1:1) e a proporção original é preservada via
 * aspect-square + object-contain. Para trocar o vídeo, basta substituir
 * o arquivo em public/videos/vsl-ingles.mp4 e ajustar a classe de proporção,
 * se necessário.
 *
 * Inicia automaticamente sem som (autoplay + muted + playsInline) para
 * funcionar em iOS/Safari e Android/Chrome. Controles nativos permitem
 * pausar, reiniciar e ativar o áudio.
 */
export function VslPlaceholder() {
  return (
    <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-gradient-navy shadow-float">
      <div className="relative aspect-square w-full">
        <video
          src="/videos/vsl-ingles.mp4"
          className="absolute inset-0 size-full object-contain"
          autoPlay
          muted
          loop={false}
          playsInline
          controls
          preload="auto"
        />
      </div>
    </div>
  );
}
