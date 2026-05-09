import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logoAcelera from "@/assets/logo-acelera.jpeg";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  Flame,
  Zap,
  AlertTriangle,
  Quote,
  Target,
  Gift,
  Scale,
} from "lucide-react";

export const Route = createFileRoute("/vendas")({
  head: () => ({
    meta: [
      { title: "Encontro ao Vivo — Perícia Médica Previdenciária | Acelera Previdenciarista" },
      {
        name: "description",
        content:
          "Aprenda a orientar seu cliente para a perícia médica e aumente suas chances de concessão nos benefícios por incapacidade. Encontro ao vivo por R$ 59,90.",
      },
    ],
  }),
  component: Vendas,
});

function Vendas() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoAcelera}
                alt="Acelera Previdenciarista"
                className="h-10 md:h-12 w-auto rounded-md"
              />
            </Link>
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-brand-emerald"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar
            </Link>
          </div>
          <Button asChild className="bg-brand-gold hover:bg-brand-cream text-foreground rounded-full px-6">
            <a href="#oferta">Quero participar do encontro</a>
          </Button>
        </div>
      </header>

      {/* HERO — HEADLINE */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute -top-20 -left-32 w-96 h-96 rounded-full bg-brand-gold/30 blur-3xl" aria-hidden />
        <div className="absolute top-40 -right-24 w-80 h-80 rounded-full bg-brand-emerald/20 blur-3xl" aria-hidden />
        <div className="max-w-5xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-emerald/30 bg-brand-gold/10 backdrop-blur text-sm mb-8">
            <Scale className="w-4 h-4 text-brand-gold" />
            <span className="font-mono text-xs uppercase tracking-widest">Encontro ao vivo</span>
          </div>
          <h1 className="font-display text-4xl md:text-7xl leading-[1] text-foreground">
            Se o seu cliente vai mal preparado para a perícia… <br />
            <em className="text-brand-gold">você já perdeu o benefício</em> antes mesmo do resultado sair.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8">
            Aprenda como orientar seu cliente (e sua equipe) para a perícia médica e aumente suas chances reais de concessão nos benefícios por incapacidade.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-brand-gold hover:bg-brand-cream text-foreground rounded-full px-10 h-14 text-base shadow-[var(--shadow-elegant)]"
            >
              <a href="#oferta">
                Quero participar do encontro <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* QUEBRA DE REALIDADE */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-brand-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-gold">
              Quebra de realidade
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-8">
            A maioria dos advogados acredita que o problema está no perito. <br />
            <em className="text-brand-gold">Mas a verdade é outra.</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "O cliente chega despreparado",
              "Fala o que não deveria",
              "Não apresenta corretamente a limitação",
              "E o benefício é negado",
              "E o advogado… nem percebe onde errou",
            ].map((t) => (
              <div key={t} className="rounded-2xl border border-border bg-background p-6 flex gap-3">
                <span className="text-brand-gold">→</span>
                <p className="text-muted-foreground">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIRADA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-10 h-10 text-brand-gold mx-auto mb-6" />
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-gold">A virada</span>
          <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight text-foreground">
            Perícia não é sorte. <br />
            Perícia é <em className="text-brand-gold">estratégia</em>.
          </h2>
          <p className="text-lg text-muted-foreground mt-8">
            E existe um jeito certo de orientar o cliente antes, durante e depois da perícia.
          </p>
        </div>
      </section>

      {/* O QUE VOCÊ VAI APRENDER */}
      <section className="py-24 px-6 bg-brand-ink text-brand-cream relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl" aria-hidden />
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <Flame className="w-6 h-6 text-brand-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-gold">
              O que você vai aprender
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-12 max-w-4xl">
            Tudo que faz a <em className="text-brand-gold">diferença real</em> entre concessão e negativa.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Como preparar seu cliente para a perícia médica",
              "O que o cliente pode e não pode falar",
              "Como evitar erros que fazem o benefício ser negado",
              "Como conduzir o caso antes da perícia",
              "O que observar no comportamento do perito",
              "O que fazer após uma negativa",
              "Como aumentar sua taxa de concessão",
            ].map((t) => (
              <div
                key={t}
                className="rounded-2xl border border-brand-cream/10 bg-brand-cream/5 p-6 flex gap-3"
              >
                <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-gold">Diferencial</span>
          <h2 className="font-display text-3xl md:text-5xl mt-4 mb-12 text-foreground">
            Aqui você não vai ver teoria. <br />
            Você vai entender <em className="text-brand-gold">como funciona na prática</em>.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Como isso acontece na prática",
              "Como o advogado conduz o caso",
              "O que realmente influencia o resultado",
            ].map((t, i) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-mono text-xs text-brand-gold mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-display text-lg text-foreground leading-snug">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-background border border-brand-emerald/30 p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-5 h-5 text-brand-emerald" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-emerald">
                Para quem é
              </span>
            </div>
            <h3 className="font-display text-2xl mb-6">Advogados e equipes que…</h3>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Atuam com benefícios por incapacidade",
                "Querem aumentar concessões",
                "Querem parar de perder caso por erro simples",
                "Querem atuar com mais segurança",
                "Querem melhorar a orientação ao cliente",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-background border border-border p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2 mb-4">
              <X className="w-5 h-5 text-brand-clay" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-clay">
                Para quem não é
              </span>
            </div>
            <h3 className="font-display text-2xl mb-6">Não é para quem…</h3>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Quer teoria sem aplicação",
                "Não aplica o que aprende",
                "Acredita que perícia é sorte",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <X className="w-5 h-5 text-brand-clay shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <Target className="w-10 h-10 text-brand-gold mx-auto mb-4" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-gold">Oferta</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 text-foreground">
              Encontro ao vivo.
            </h2>
          </div>

          <div className="relative rounded-3xl p-10 flex flex-col text-brand-cream bg-brand-ink border-2 border-brand-gold shadow-[var(--shadow-elegant)]">
            <div className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-3">
              Acesso ao encontro
            </div>
            <h3 className="font-display text-3xl mb-6 flex items-center gap-2">
              <Gift className="w-6 h-6 text-brand-gold" /> O que você recebe
            </h3>
            <ul className="space-y-3 mb-8 text-brand-cream/90">
              {[
                "Aula ao vivo",
                "Conteúdo técnico aplicado",
                "Estratégia prática",
                "Direcionamento claro",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="font-display text-5xl text-brand-gold mb-2">R$ 59,90</div>
            <div className="font-mono text-xs text-brand-cream/60 uppercase tracking-widest mb-8">
              Pagamento único · vaga garantida
            </div>
            <Button
              asChild
              size="lg"
              className="mt-auto bg-brand-gold hover:bg-brand-cream text-foreground rounded-full h-14 text-base"
            >
              <a href="#" aria-disabled>
                Quero garantir minha vaga <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Quote className="w-6 h-6 text-brand-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-gold">
              Prova social
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-12 text-foreground">
            Depoimentos de advogados.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Depois que comecei a orientar meus clientes da forma correta, minhas concessões aumentaram muito. Eu percebi que estava errando antes da perícia.",
              "Eu achava que o problema era o INSS, mas entendi que a forma como o cliente chegava na perícia estava totalmente errada.",
              "Só essa orientação já mudou minha forma de atuar nos casos de auxílio-doença.",
              "Eu aplico exatamente o que aprendi e hoje me sinto muito mais segura nos atendimentos.",
            ].map((t) => (
              <div
                key={t}
                className="rounded-3xl border border-border bg-background p-8 shadow-[var(--shadow-soft)]"
              >
                <Quote className="w-6 h-6 text-brand-gold mb-4" />
                <p className="text-muted-foreground italic leading-relaxed">"{t}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUEBRA DE OBJEÇÃO + CTA FINAL */}
      <section className="py-32 px-6 bg-brand-ink text-brand-cream relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-brand-gold/20 blur-3xl" aria-hidden />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-gold">
            Quebra de objeção
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-6 mb-10 leading-[1]">
            Você pode continuar deixando seu cliente ir despreparado e perdendo benefício sem entender o motivo… <br />
            ou aprender a conduzir isso de forma <em className="text-brand-gold">estratégica</em>.
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-brand-gold hover:bg-brand-cream text-foreground rounded-full h-16 px-12 text-lg shadow-[var(--shadow-elegant)]"
          >
            <a href="#oferta">
              Quero garantir minha vaga <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <p className="mt-14 font-display text-2xl md:text-3xl italic text-brand-gold max-w-3xl mx-auto leading-snug">
            "Você não perde o benefício na perícia. Você perde antes dela… quando não sabe orientar o seu cliente."
          </p>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
          <div>© 2026 Acelera Previdenciarista</div>
          <Link to="/" className="font-mono text-xs uppercase tracking-widest hover:text-brand-emerald">
            Voltar para a home
          </Link>
        </div>
      </footer>
    </div>
  );
}