type MapSection = {
  titulo: string;
  itens: { en: string; pt?: string }[];
};

export type MapData = {
  titulo: string;
  explicacao: string;
  secoes: MapSection[];
  dica: string;
};

function Block({ s }: { s: MapSection }) {
  return (
    <div className="rounded-xl border border-royal/15 bg-white p-2.5">
      <p className="mb-1.5 text-[8px] font-bold tracking-[0.14em] text-royal">{s.titulo}</p>
      <ul className="space-y-1">
        {s.itens.map((it, i) => (
          <li key={i} className="leading-tight">
            <span className="block text-[9px] font-semibold text-navy">{it.en}</span>
            {it.pt && (
              <span className="block text-[8px] text-muted-foreground">{it.pt}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MapPoster({ map }: { map: MapData }) {
  const mid = Math.ceil(map.secoes.length / 2);
  const colA = map.secoes.slice(0, mid);
  const colB = map.secoes.slice(mid);

  return (
    <div className="flex h-full w-full flex-col bg-background p-3 sm:p-4">
      {/* header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[8px] font-bold tracking-[0.2em] text-coral">MAPA MENTAL</p>
          <h3 className="font-display text-base font-bold leading-tight text-navy sm:text-lg">
            {map.titulo}
          </h3>
        </div>
        <span className="mt-1 size-2 rounded-full bg-coral" />
      </div>

      {/* explicação em português */}
      <p className="mt-2 rounded-xl bg-mist px-3 py-2 text-[9px] leading-snug text-navy/80">
        {map.explicacao}
      </p>

      {/* blocos */}
      <div className="mt-2 grid flex-1 grid-cols-2 gap-2">
        <div className="flex flex-col justify-between gap-2">
          {colA.map((s) => (
            <Block key={s.titulo} s={s} />
          ))}
        </div>
        <div className="flex flex-col justify-between gap-2">
          {colB.map((s) => (
            <Block key={s.titulo} s={s} />
          ))}
        </div>
      </div>

      {/* dica */}
      <div className="mt-2 rounded-xl bg-navy px-3 py-2">
        <p className="text-[8px] font-bold tracking-[0.18em] text-coral">DICA</p>
        <p className="mt-0.5 text-[9px] leading-snug text-white/85">{map.dica}</p>
      </div>
    </div>
  );
}
