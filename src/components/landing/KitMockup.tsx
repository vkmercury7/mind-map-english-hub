import { MapPoster, type MapData } from "./MapPoster";

/**
 * Mockup do kit digital: livro principal + tablet com mapa mental +
 * páginas soltas + selos dos bônus. Tudo em CSS/HTML, seguindo a identidade do site.
 */
export function KitMockup({ map }: { map: MapData }) {
  return (
    <div
      aria-hidden
      className="relative mx-auto h-60 w-full max-w-sm select-none overflow-hidden sm:h-72 sm:max-w-md"
    >
      {/* páginas soltas atrás */}
      <div className="absolute left-[2%] top-10 h-40 w-28 -rotate-[12deg] rounded-xl border border-border bg-white p-2 shadow-card sm:h-48 sm:w-32">
        <div className="h-1.5 w-2/3 rounded-full bg-royal/30" />
        <div className="mt-2 space-y-1.5">
          <div className="h-5 rounded-md bg-mist" />
          <div className="h-5 rounded-md bg-mist" />
          <div className="h-5 rounded-md bg-mist" />
        </div>
      </div>
      <div className="absolute left-[16%] top-7 hidden h-40 w-28 -rotate-3 rounded-xl border border-border bg-white p-2 shadow-card sm:block sm:h-48 sm:w-32">
        <div className="h-1.5 w-1/2 rounded-full bg-coral/40" />
        <div className="mt-2 space-y-1.5">
          <div className="h-5 rounded-md bg-mist" />
          <div className="h-5 rounded-md bg-mist" />
        </div>
      </div>

      {/* livro digital principal */}
      <div className="absolute left-[8%] top-3 h-48 w-36 sm:left-[13%] sm:h-60 sm:w-44">
        {/* lombada / profundidade */}
        <div className="absolute inset-y-0 left-0 w-2.5 rounded-l-xl bg-navy brightness-[0.7]" />
        <div className="bg-gradient-navy ml-2 flex h-full flex-col justify-between rounded-r-xl rounded-l-sm p-4 shadow-float sm:p-5">
          <div>
            <p className="text-[7px] font-bold tracking-[0.22em] text-coral sm:text-[8px]">
              BIBLIOTECA DIGITAL
            </p>
            <p className="mt-2 font-display text-lg font-bold leading-tight text-navy-foreground sm:text-xl">
              +400 MAPAS MENTAIS
              <span className="mt-0.5 block text-sm text-royal-soft sm:text-base">DE INGLÊS</span>
            </p>
          </div>
          <div>
            <div className="mb-2 h-px w-full bg-white/15" />
            <p className="text-[8px] font-medium tracking-[0.14em] text-navy-foreground/70 sm:text-[9px]">
              Aprenda • Revise • Memorize
            </p>
          </div>
        </div>
      </div>

      {/* tablet exibindo um mapa mental */}
      <div className="absolute right-0 top-12 w-[46%] rotate-2 rounded-2xl bg-navy p-1.5 shadow-float sm:top-10 sm:w-[42%] sm:p-2">
        <div className="aspect-[3/4] overflow-hidden rounded-xl">
          <MapPoster map={map} />
        </div>
      </div>

      {/* selos dos bônus */}
      <div className="absolute bottom-1 right-[4%] flex rotate-2 gap-1.5 sm:right-[2%]">
        {["BÔNUS 01", "BÔNUS 02", "BÔNUS 03", "BÔNUS 04"].map((b) => (
          <span
            key={b}
            className="rounded-lg border border-border bg-white px-2 py-1 text-[7px] font-bold tracking-[0.1em] text-royal shadow-soft sm:text-[8px]"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
