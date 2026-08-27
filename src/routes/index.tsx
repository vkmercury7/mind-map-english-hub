import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  CheckCircle2,
  Compass,
  Layers,
  MessagesSquare,
  Plane,
  Repeat2,
  ShieldCheck,
  Sparkles,
  Volume2,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AutoCarousel } from "@/components/landing/AutoCarousel";
import { Reveal } from "@/components/landing/Reveal";
import { StickyCta } from "@/components/landing/StickyCta";

import heroDevices from "@/assets/hero-devices.jpg";
import mapToBe from "@/assets/map-tobe.jpg";
import mapPresent from "@/assets/map-present.jpg";
import mapPhrasal from "@/assets/map-phrasal.jpg";
import mapTravel from "@/assets/map-travel.jpg";
import mapPrepositions from "@/assets/map-prepositions.jpg";
import mapExpressions from "@/assets/map-expressions.jpg";
import useTablet from "@/assets/use-tablet.jpg";
import usePhone from "@/assets/use-phone.jpg";
import usePrint from "@/assets/use-print.jpg";
import useCafe from "@/assets/use-cafe.jpg";
import useWall from "@/assets/use-wall.jpg";

/** Edite aqui o prazo de garantia conforme a plataforma de checkout. */
const PRAZO_GARANTIA = "7 dias";
/** Link do checkout. */
const CHECKOUT_URL = "#oferta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+400 Mapas Mentais para Aprender e Revisar Inglês" },
      {
        name: "description",
        content:
          "Biblioteca digital com mais de 400 mapas mentais de inglês: gramática, vocabulário, phrasal verbs, expressões e mais. Estude de forma visual, no celular ou impresso.",
      },
      { property: "og:title", content: "+400 Mapas Mentais para Aprender e Revisar Inglês" },
      {
        property: "og:description",
        content:
          "Gramática, vocabulário, expressões e phrasal verbs organizados de forma visual para aprender e revisar sem se perder em textos enormes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const heroPills = [
  "Do básico ao avançado",
  "Conteúdo visual e organizado",
  "Celular, tablet ou computador",
  "Ideal para aprender e revisar",
];

const mapas = [
  { src: mapToBe, tema: "Verb To Be", nivel: "A1" },
  { src: mapPresent, tema: "Simple Present", nivel: "A1" },
  { src: mapPhrasal, tema: "Phrasal Verbs", nivel: "B1" },
  { src: mapPrepositions, tema: "Prepositions", nivel: "A2" },
  { src: mapTravel, tema: "Travel English", nivel: "A2" },
  { src: mapExpressions, tema: "Everyday Expressions", nivel: "B1" },
];

const usos = [
  { src: useTablet, legenda: "Use diretamente no tablet." },
  { src: usePhone, legenda: "Revise pelo celular." },
  { src: usePrint, legenda: "Imprima seus mapas favoritos." },
  { src: useCafe, legenda: "Estude onde for mais confortável." },
  { src: useWall, legenda: "Tenha seus conteúdos sempre por perto." },
];

const categorias = [
  {
    icone: Layers,
    titulo: "GRAMÁTICA",
    texto: "Tempos verbais, preposições, pronomes, estruturas e regras essenciais.",
  },
  {
    icone: BookOpenCheck,
    titulo: "VOCABULÁRIO",
    texto: "Palavras organizadas por temas do cotidiano.",
  },
  {
    icone: MessagesSquare,
    titulo: "CONVERSAÇÃO",
    texto: "Perguntas, respostas e estruturas usadas em conversas.",
  },
  {
    icone: Zap,
    titulo: "PHRASAL VERBS",
    texto: "Phrasal verbs importantes com significado e exemplos.",
  },
  {
    icone: Sparkles,
    titulo: "EXPRESSÕES",
    texto: "Expressões comuns encontradas em inglês real.",
  },
  {
    icone: Plane,
    titulo: "INGLÊS PARA VIAGENS",
    texto: "Aeroporto, hotel, restaurante, compras e situações do dia a dia.",
  },
  {
    icone: Volume2,
    titulo: "PRONÚNCIA",
    texto: "Conteúdos para facilitar a compreensão da pronúncia.",
  },
];

const niveis = [
  { nivel: "A1", label: "Primeiros passos" },
  { nivel: "A2", label: "Base sólida" },
  { nivel: "B1", label: "Comunicação" },
  { nivel: "B2", label: "Fluidez" },
  { nivel: "C1", label: "Avançado" },
  { nivel: "C2", label: "Domínio" },
];

const passos = [
  {
    icone: Compass,
    titulo: "ESCOLHA O CONTEÚDO",
    texto: "Abra o mapa do assunto que deseja estudar.",
  },
  {
    icone: BookOpenCheck,
    titulo: "APRENDA VISUALMENTE",
    texto: "Veja regras, exemplos e informações organizadas em uma única página.",
  },
  {
    icone: Repeat2,
    titulo: "REVISE QUANDO QUISER",
    texto: "Volte aos mapas sempre que precisar reforçar algum conteúdo.",
  },
];

const bonus = [
  { n: "BÔNUS 01", titulo: "500 Frases Essenciais em Inglês" },
  { n: "BÔNUS 02", titulo: "150 Phrasal Verbs Essenciais" },
  { n: "BÔNUS 03", titulo: "Guia de Inglês para Viagens" },
  { n: "BÔNUS 04", titulo: "Plano de Estudos de 30 Dias" },
];

const faq = [
  {
    q: "Preciso saber inglês para usar os mapas?",
    a: "Não. Existem mapas desde o nível inicial, com estruturas simples e exemplos, além de conteúdos mais avançados para quem já estuda.",
  },
  {
    q: "Consigo acessar pelo celular?",
    a: "Sim. Os arquivos são digitais e abrem no celular, tablet ou computador.",
  },
  {
    q: "Posso imprimir os mapas?",
    a: "Sim. Os mapas foram pensados para leitura em tela e também para impressão.",
  },
  {
    q: "Os mapas são indicados para iniciantes?",
    a: "Sim. O material é organizado por temas e níveis, então você começa pelo ponto que faz sentido para você.",
  },
  { q: "Por quanto tempo terei acesso?", a: "O acesso é digital, conforme as condições informadas no checkout." },
  {
    q: "Como recebo o material?",
    a: "Após a confirmação da compra, você recebe as instruções de acesso no e-mail cadastrado.",
  },
  {
    q: "Os arquivos ficam disponíveis imediatamente?",
    a: "Sim. A liberação acontece assim que o pagamento é confirmado pela plataforma.",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-royal/20 bg-mist px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-royal">
      {children}
    </span>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Barra superior */}
      <div className="bg-gradient-navy px-4 py-2 text-center text-[12px] font-medium text-navy-foreground/90">
        Condição especial disponível por tempo limitado
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-xl bg-gradient-royal text-primary-foreground">
              <Layers className="size-4" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-navy">
              Mapas de Inglês
            </span>
          </a>
          <Button asChild variant="cta" className="hidden h-11 rounded-xl px-6 sm:inline-flex">
            <a href="#oferta">QUERO ACESSAR</a>
          </Button>
        </div>
      </header>

      <main id="top">
        {/* 2. Hero */}
        <section className="relative overflow-hidden bg-gradient-mist">
          <div className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-royal/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-56 -left-40 size-[30rem] rounded-full bg-coral/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-24">
            <div className="animate-rise">
              <span className="inline-flex items-center gap-2 rounded-full border border-royal/25 bg-card px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-royal shadow-soft">
                <Sparkles className="size-3.5" />
                INGLÊS DE UM JEITO MAIS VISUAL
              </span>

              <h1 className="mt-6 text-[2.1rem] font-bold leading-[1.08] text-navy sm:text-5xl lg:text-[3.4rem]">
                +400 mapas mentais para{" "}
                <span className="bg-gradient-royal bg-clip-text text-transparent">
                  aprender e revisar inglês
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Gramática, vocabulário, expressões, phrasal verbs e conteúdos essenciais organizados
                de forma visual para você estudar sem se perder em explicações enormes.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {heroPills.map((p) => (
                  <li
                    key={p}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-[13px] font-medium text-navy shadow-soft"
                  >
                    <Check className="size-3.5 text-coral" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <Button asChild variant="cta" size="hero">
                  <a href={CHECKOUT_URL}>
                    QUERO ACESSAR OS MAPAS
                    <ArrowRight className="size-5" />
                  </a>
                </Button>
                <p className="mt-3 text-[13px] text-muted-foreground">
                  Acesso digital • Liberação após a compra
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-6 top-8 h-full rounded-[2.5rem] bg-royal/10 blur-2xl" />
              <img
                src={heroDevices}
                alt="Mapas mentais de inglês abertos em notebook, tablet e celular"
                width={1408}
                height={1104}
                fetchPriority="high"
                className="relative w-full rounded-3xl"
              />
            </div>
          </div>
        </section>

        {/* 3. Problema */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionLabel>O PROBLEMA</SectionLabel>
            <h2 className="mt-5 text-2xl font-bold leading-tight text-navy sm:text-4xl">
              Estudar inglês não precisa significar encarar páginas e páginas de conteúdo.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                  JEITO TRADICIONAL
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Textos enormes",
                    "Conteúdo espalhado",
                    "Dificuldade para revisar",
                    "Não saber o que realmente importa",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted">
                        <X className="size-3" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-3xl bg-gradient-navy p-7 shadow-card">
                <h3 className="text-xs font-semibold tracking-[0.18em] text-navy-foreground/70">
                  COM MAPAS MENTAIS
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Informações resumidas",
                    "Conteúdo organizado",
                    "Exemplos visuais",
                    "Consulta rápida",
                    "Revisão mais prática",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-3 text-[15px] font-medium text-navy-foreground"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-coral/90">
                        <Check className="size-3 text-coral-foreground" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. Material por dentro */}
        <section id="material" className="bg-mist py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="mx-auto max-w-2xl text-center">
              <SectionLabel>VEJA ANTES DE COMPRAR</SectionLabel>
              <h2 className="mt-5 text-2xl font-bold text-navy sm:text-4xl">
                Veja como o material é por dentro
              </h2>
              <p className="mt-4 text-muted-foreground">
                Mapas organizados e ilustrados para tornar seus estudos e revisões muito mais
                simples.
              </p>
            </Reveal>

            <div className="mt-12">
              <AutoCarousel
                itemClassName="basis-[80%] sm:basis-1/2 lg:basis-1/3"
                items={mapas.map((m) => (
                  <figure
                    key={m.tema}
                    className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform duration-500 hover:-translate-y-1"
                  >
                    <div className="overflow-hidden bg-background">
                      <img
                        src={m.src}
                        alt={`Exemplo de mapa mental de inglês sobre ${m.tema}`}
                        width={1024}
                        height={1280}
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
                      <span className="font-display text-sm font-semibold text-navy">{m.tema}</span>
                      <span className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-semibold text-royal">
                        {m.nivel}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              />
            </div>

            <Reveal className="mt-10 text-center">
              <p className="text-sm font-medium text-navy">
                São mais de 400 mapas organizados em diferentes temas e níveis.
              </p>
              <Button asChild variant="cta" size="hero" className="mt-6 sm:w-auto">
                <a href={CHECKOUT_URL}>QUERO TER ACESSO COMPLETO</a>
              </Button>
            </Reveal>
          </div>
        </section>

        {/* 5. Biblioteca organizada */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>BIBLIOTECA</SectionLabel>
            <h2 className="mt-5 text-2xl font-bold leading-tight text-navy sm:text-4xl">
              Não são mapas soltos. É uma biblioteca organizada de inglês.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categorias.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 60}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-mist text-royal">
                    <c.icone className="size-5" />
                  </span>
                  <h3 className="mt-5 text-sm font-bold tracking-[0.1em] text-navy">{c.titulo}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{c.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-medium text-muted-foreground">
            Do básico ao avançado.
          </p>
        </section>

        {/* 6. Níveis */}
        <section className="bg-gradient-navy py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-navy-foreground sm:text-4xl">
                Comece pelo seu nível e avance no seu ritmo.
              </h2>
              <p className="mt-4 text-navy-foreground/70">
                Os conteúdos são organizados para facilitar tanto quem está começando quanto quem já
                estuda inglês e quer revisar.
              </p>
            </Reveal>

            <Reveal className="mt-14">
              <div className="relative">
                <div className="absolute left-0 right-0 top-6 hidden h-px bg-navy-foreground/20 md:block" />
                <ol className="relative grid grid-cols-3 gap-6 md:grid-cols-6">
                  {niveis.map((n) => (
                    <li key={n.nivel} className="flex flex-col items-center text-center">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-navy-foreground/10 font-display text-sm font-bold text-navy-foreground ring-1 ring-navy-foreground/20 backdrop-blur">
                        {n.nivel}
                      </span>
                      <span className="mt-3 text-[13px] text-navy-foreground/70">{n.label}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7. Como usar */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <Reveal className="text-center">
            <SectionLabel>COMO FUNCIONA</SectionLabel>
            <h2 className="mt-5 text-2xl font-bold text-navy sm:text-4xl">
              Aprenda. Consulte. Revise.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {passos.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 100}>
                <div className="relative h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <span className="font-display text-4xl font-bold text-mist">0{i + 1}</span>
                  <span className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-2xl bg-gradient-royal text-primary-foreground">
                    <p.icone className="size-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold tracking-[0.1em] text-navy">{p.titulo}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 8. Carrossel de uso */}
        <section className="bg-mist py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="mx-auto max-w-2xl text-center">
              <SectionLabel>NA PRÁTICA</SectionLabel>
              <h2 className="mt-5 text-2xl font-bold text-navy sm:text-4xl">
                Estude onde você estiver
              </h2>
            </Reveal>

            <div className="mt-12">
              <AutoCarousel
                interval={4400}
                itemClassName="basis-[70%] sm:basis-1/2 lg:basis-1/4"
                items={usos.map((u) => (
                  <figure key={u.legenda} className="h-full">
                    <div className="overflow-hidden rounded-3xl shadow-card">
                      <img
                        src={u.src}
                        alt={u.legenda}
                        width={912}
                        height={1200}
                        loading="lazy"
                        className="aspect-[3/4] w-full object-cover"
                      />
                    </div>
                    <figcaption className="mt-4 text-center text-sm font-medium text-navy">
                      {u.legenda}
                    </figcaption>
                  </figure>
                ))}
              />
            </div>
          </div>
        </section>

        {/* 9. O que você recebe */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <Reveal className="text-center">
            <SectionLabel>VALOR PERCEBIDO</SectionLabel>
            <h2 className="mt-5 text-2xl font-bold text-navy sm:text-4xl">
              Tudo que você recebe ao garantir seu acesso
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_1fr]">
            <Reveal>
              <div className="h-full rounded-3xl border border-royal/20 bg-card p-8 shadow-card">
                <span className="rounded-full bg-coral/12 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-coral">
                  PRODUTO PRINCIPAL
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-navy">
                  +400 Mapas Mentais de Inglês
                </h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Gramática",
                    "Vocabulário",
                    "Conversação",
                    "Expressões",
                    "Phrasal Verbs",
                    "Pronúncia",
                    "Inglês para viagens",
                    "Do básico ao avançado",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-[15px] text-navy">
                      <CheckCircle2 className="size-4 shrink-0 text-royal" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {bonus.map((b, i) => (
                <Reveal key={b.n} delay={i * 80}>
                  <div className="h-full rounded-3xl border border-border bg-gradient-mist p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                    <span className="text-[11px] font-bold tracking-[0.16em] text-coral">{b.n}</span>
                    <p className="mt-3 font-display text-[15px] font-semibold leading-snug text-navy">
                      {b.titulo}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Oferta */}
        <section id="oferta" className="bg-gradient-navy py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <Reveal>
              <div className="rounded-[2rem] bg-card p-8 shadow-float sm:p-12">
                <h2 className="text-center text-2xl font-bold leading-tight text-navy sm:text-3xl">
                  Comece agora a estudar inglês de forma mais visual.
                </h2>

                <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <div className="rounded-2xl bg-mist p-5 text-center">
                    <p className="font-display text-xl font-bold text-navy">+400</p>
                    <p className="mt-1 text-[13px] text-muted-foreground">Mapas mentais</p>
                  </div>
                  <span className="text-center font-display text-lg text-muted-foreground">+</span>
                  <div className="rounded-2xl bg-mist p-5 text-center">
                    <p className="font-display text-xl font-bold text-navy">4</p>
                    <p className="mt-1 text-[13px] text-muted-foreground">Bônus inclusos</p>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <p className="text-[13px] font-semibold tracking-[0.16em] text-muted-foreground">
                    HOJE POR
                  </p>
                  <p className="mt-2 font-display text-5xl font-bold text-navy sm:text-6xl">
                    R$ 19,90
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">Pagamento único</p>
                </div>

                <Button asChild variant="cta" size="hero" className="mt-8 w-full">
                  <a href={CHECKOUT_URL}>QUERO ACESSAR AGORA</a>
                </Button>
                <p className="mt-4 text-center text-[13px] text-muted-foreground">
                  Compra segura • Acesso digital
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 11. Garantia */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:flex-row sm:text-left">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-mist text-royal">
                <ShieldCheck className="size-7" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-navy sm:text-2xl">
                  Você pode conhecer o material com tranquilidade.
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  A compra conta com garantia de {PRAZO_GARANTIA} conforme as regras da plataforma de
                  checkout utilizada. Se o material não fizer sentido para você dentro desse prazo,
                  basta solicitar o reembolso.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Espaço reservado para prova social real (avaliações verificadas). */}
        </section>

        {/* 12. FAQ */}
        <section className="bg-mist py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <Reveal className="text-center">
              <SectionLabel>DÚVIDAS</SectionLabel>
              <h2 className="mt-5 text-2xl font-bold text-navy sm:text-4xl">Perguntas frequentes</h2>
            </Reveal>

            <Reveal className="mt-10">
              <Accordion type="single" collapsible className="space-y-3">
                {faq.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`item-${i}`}
                    className="rounded-2xl border border-border bg-card px-5 shadow-soft"
                  >
                    <AccordionTrigger className="text-left text-[15px] font-semibold text-navy hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* 13. CTA final */}
        <section className="relative overflow-hidden bg-gradient-navy py-20 sm:py-28">
          <div className="pointer-events-none absolute -left-32 top-10 size-96 rounded-full bg-royal/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-coral/15 blur-3xl" />
          <div className="relative mx-auto max-w-3xl px-4 text-center">
            <Reveal>
              <h2 className="text-2xl font-bold leading-tight text-navy-foreground sm:text-4xl">
                Tenha seu inglês organizado em mais de 400 mapas mentais.
              </h2>
              <p className="mt-4 text-lg text-navy-foreground/70">Abra. Aprenda. Revise.</p>
              <Button asChild variant="ctaLight" size="hero" className="mt-9">
                <a href={CHECKOUT_URL}>
                  QUERO COMEÇAR AGORA
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background px-4 py-10 pb-24 text-center md:pb-10">
        <p className="text-[13px] text-muted-foreground">
          Produto digital. Acesso liberado após a confirmação do pagamento.
        </p>
      </footer>

      <StickyCta />
    </div>
  );
}
