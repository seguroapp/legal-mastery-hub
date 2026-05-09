import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mentoria.png";
import logoAcelera from "@/assets/logo-acelera.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, AlertTriangle, Zap, Check, X, Quote, Gift, Flame, Target, Scale } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Perícia Médica Estratégica — Encontro ao Vivo para Advogados" },
      { name: "description", content: "Aprenda a orientar seu cliente para a perícia médica e aumente suas chances reais de concessão nos benefícios por incapacidade. Encontro ao vivo." },
      { property: "og:title", content: "Perícia Médica Estratégica — Encontro ao Vivo" },
      { property: "og:description", content: "Pare de perder benefício antes mesmo da perícia acontecer. Encontro ao vivo para advogados previdenciaristas." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAcelera} alt="Acelera Previdenciarista" className="h-10 md:h-12 w-auto rounded-md" />
          </Link>
          <Button asChild className="bg-brand-ink hover:bg-brand-emerald rounded-full px-6">
            <a href="#cta">Quero participar</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute -top-20 -left-32 w-96 h-96 rounded-full bg-brand-gold/30 blur-3xl" aria-hidden />
        <div className="absolute top-40 -right-24 w-80 h-80 rounded-full bg-brand-emerald/20 blur-3xl" aria-hidden />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-emerald/30 bg-brand-cream/60 backdrop-blur text-sm">
              <Sparkles className="w-4 h-4 text-brand-clay" />
              <span className="font-mono text-xs uppercase tracking-widest">Encontro ao vivo · Vagas limitadas</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.02] text-foreground">
              Se o seu cliente vai mal preparado para a perícia… <em className="text-brand-clay">você já perdeu o benefício</em> antes mesmo do resultado sair.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Aprenda como orientar seu cliente (e sua equipe) para a perícia médica e aumente suas chances reais de concessão nos benefícios por incapacidade.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="bg-brand-emerald hover:bg-brand-ink rounded-full px-8 h-14 text-base shadow-[var(--shadow-elegant)]">
                <a href="#cta">
                  Quero participar do encontro <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <div className="text-sm text-muted-foreground">
                Apenas <span className="font-display text-foreground text-lg">R$ 59,90</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-brand-gold/40 -rotate-6" aria-hidden />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-brand-emerald/30" aria-hidden />
            <img src={heroImg} alt="Advogada previdenciarista" width={1024} height={1024} className="relative rounded-3xl shadow-[var(--shadow-elegant)] w-full" />
            <div className="absolute -bottom-8 -left-8 bg-brand-ink text-brand-cream rounded-2xl p-5 shadow-[var(--shadow-soft)] max-w-[240px]">
              <div className="font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-1">Resultado real</div>
              <div className="font-display text-xl leading-tight">Mais concessões nos benefícios por incapacidade</div>
            </div>
          </div>
        </div>
      </section>

      {/* QUEBRA DE REALIDADE */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-brand-clay" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-clay">Quebra de realidade</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-8">
            A maioria dos advogados previdenciaristas acredita que o problema está no perito. <em className="text-brand-emerald">Mas a verdade é outra.</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "O cliente chega despreparado",
              "Fala o que não deveria",
              "Não apresenta corretamente a limitação",
              "E o benefício é negado",
            ].map((t) => (
              <div key={t} className="rounded-2xl border border-border bg-background p-6 flex gap-3">
                <span className="text-brand-clay">→</span>
                <p className="text-muted-foreground">{t}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-display text-2xl text-foreground">E o advogado… nem percebe onde errou.</p>
        </div>
      </section>

      {/* VIRADA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-10 h-10 text-brand-gold mx-auto mb-6" />
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-clay">A virada</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1] text-foreground">
            Perícia não é sorte. <br />
            Perícia é <em className="text-brand-emerald">estratégia</em>.
          </h2>
          <p className="text-lg text-muted-foreground mt-8 max-w-2xl mx-auto">
            E existe um jeito certo de orientar o cliente antes, durante e depois da perícia.
          </p>
        </div>
      </section>

      {/* O QUE VAI APRENDER */}
      <section className="py-24 px-6 bg-brand-ink text-brand-cream relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl" aria-hidden />
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <Flame className="w-6 h-6 text-brand-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-gold">O que você vai aprender</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-12 max-w-3xl">Tudo que muda o resultado da perícia — antes, durante e depois.</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Como preparar seu cliente para a perícia médica",
              "O que o cliente pode e não pode falar",
              "Como evitar erros que fazem o benefício ser negado",
              "Como conduzir o caso antes da perícia",
              "O que observar no comportamento do perito",
              "O que fazer após uma negativa",
              "Como aumentar sua taxa de concessão",
            ].map((t) => (
              <div key={t} className="flex gap-3 p-5 rounded-2xl border border-brand-cream/10 bg-brand-cream/5">
                <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-10 items-start">
          <div className="w-20 h-20 rounded-2xl bg-brand-clay/10 flex items-center justify-center">
            <Target className="w-9 h-9 text-brand-clay" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-clay">Diferencial</span>
            <h2 className="font-display text-3xl md:text-5xl mt-3 mb-6 text-foreground">Aqui você não vai ver teoria.</h2>
            <p className="text-lg text-muted-foreground mb-6">Você vai entender:</p>
            <ul className="space-y-3 text-lg">
              <li className="flex gap-3"><span className="text-brand-emerald">→</span> como isso acontece na prática</li>
              <li className="flex gap-3"><span className="text-brand-emerald">→</span> como o advogado conduz o caso</li>
              <li className="flex gap-3"><span className="text-brand-emerald">→</span> o que realmente influencia o resultado</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PARA QUEM / NÃO É */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-background border border-brand-emerald/30 p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-5 h-5 text-brand-emerald" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-emerald">Para quem é</span>
            </div>
            <h3 className="font-display text-2xl mb-6">Advogados e equipes que:</h3>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Atuam com benefícios por incapacidade",
                "Querem aumentar concessões",
                "Querem parar de perder caso por erro simples",
                "Querem atuar com mais segurança",
                "Querem melhorar a orientação ao cliente",
              ].map((t) => (
                <li key={t} className="flex gap-3"><Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-background border border-border p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2 mb-4">
              <X className="w-5 h-5 text-brand-clay" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-clay">Para quem não é</span>
            </div>
            <h3 className="font-display text-2xl mb-6">Não é para quem:</h3>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Quer teoria sem aplicação",
                "Não aplica o que aprende",
                "Acredita que perícia é sorte",
              ].map((t) => (
                <li key={t} className="flex gap-3"><X className="w-5 h-5 text-brand-clay shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-6 h-6 text-brand-clay" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-clay">O que você recebe</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-12 text-foreground">Um encontro denso e direto ao ponto.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Aula ao vivo", "Conteúdo técnico aplicado", "Estratégia prática", "Direcionamento claro"].map((t, i) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-mono text-xs text-brand-clay mb-3">0{i+1}</div>
                <p className="font-display text-xl text-foreground">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Quote className="w-6 h-6 text-brand-emerald" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-emerald">Depoimentos</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Depois que comecei a orientar meus clientes da forma correta, minhas concessões aumentaram muito. Eu percebi que estava errando antes da perícia.",
              "Eu achava que o problema era o INSS, mas entendi que a forma como o cliente chegava na perícia estava totalmente errada.",
              "Só essa orientação já mudou minha forma de atuar nos casos de auxílio-doença.",
              "Eu aplico exatamente o que aprendi e hoje me sinto muito mais segura nos atendimentos.",
            ].map((q, i) => (
              <div key={i} className="rounded-3xl bg-background border border-border p-8 shadow-[var(--shadow-soft)]">
                <Quote className="w-8 h-8 text-brand-gold mb-4" />
                <p className="font-display text-xl leading-snug text-foreground italic">"{q}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUEBRA DE OBJEÇÃO */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-clay">A escolha</span>
          <h2 className="font-display text-3xl md:text-5xl mt-4 mb-10 text-foreground">Você pode continuar…</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="rounded-2xl border border-border p-6 bg-secondary/40">
              <X className="w-6 h-6 text-brand-clay mb-3" />
              <p className="text-muted-foreground">Deixando seu cliente ir despreparado</p>
              <p className="text-muted-foreground mt-2">Perdendo benefício sem entender o motivo</p>
            </div>
            <div className="rounded-2xl border border-brand-emerald p-6 bg-brand-emerald/5">
              <Check className="w-6 h-6 text-brand-emerald mb-3" />
              <p className="text-foreground font-medium">Ou aprender como conduzir isso de forma estratégica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 px-6 relative bg-brand-ink text-brand-cream">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-brand-gold/20 blur-3xl" aria-hidden />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-gold">Encontro ao vivo · R$ 59,90</span>
          <h2 className="font-display text-4xl md:text-6xl mt-6 mb-8 leading-[1]">
            Quero garantir minha vaga <em className="text-brand-gold">no encontro</em>.
          </h2>
          <p className="text-lg text-brand-cream/80 max-w-2xl mx-auto mb-10">
            Clique abaixo e veja todos os detalhes da inscrição.
          </p>
          <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-cream text-foreground rounded-full h-16 px-12 text-lg shadow-[var(--shadow-elegant)]">
            <Link to="/vendas">
              Quero garantir minha vaga <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <p className="mt-12 font-display text-2xl md:text-3xl italic text-brand-gold max-w-3xl mx-auto leading-snug">
            "Você não perde o benefício na perícia. Você perde antes dela… quando não sabe orientar o seu cliente."
          </p>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
          <div>© 2026 Perícia Estratégica · Todos os direitos reservados</div>
          <div className="font-mono text-xs uppercase tracking-widest">contato@periciaestrategica.com</div>
        </div>
      </footer>
    </div>
  );
}
