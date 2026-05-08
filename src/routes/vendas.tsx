import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, X, Calendar, Flame, Zap, AlertTriangle, BookOpen, Scale } from "lucide-react";

export const Route = createFileRoute("/vendas")({
  head: () => ({
    meta: [
      { title: "Clube Acelera Previdenciarista — Advocacia Previdenciária na Prática" },
      { name: "description", content: "Encontros ao vivo, casos reais, peças e estratégias da advocacia previdenciária. Participe do encontro avulso ou seja membro do Clube." },
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
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-emerald">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
          <Button asChild className="bg-brand-ink hover:bg-brand-emerald rounded-full px-6">
            <a href="#planos">Quero entrar no Clube</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute -top-20 -left-32 w-96 h-96 rounded-full bg-brand-gold/30 blur-3xl" aria-hidden />
        <div className="absolute top-40 -right-24 w-80 h-80 rounded-full bg-brand-emerald/20 blur-3xl" aria-hidden />
        <div className="max-w-5xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-emerald/30 bg-brand-cream/60 backdrop-blur text-sm mb-8">
            <Scale className="w-4 h-4 text-brand-clay" />
            <span className="font-mono text-xs uppercase tracking-widest">Clube Acelera Previdenciarista</span>
          </div>
          <h1 className="font-display text-4xl md:text-7xl leading-[1] text-brand-ink">
            Você não precisa de mais teoria. <br />
            Você precisa <em className="text-brand-clay">aprender como os casos previdenciários</em> são resolvidos <span className="text-brand-emerald">na prática</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8">
            Participe de encontros ao vivo onde você vai ver casos reais, estratégias jurídicas, peças prontas e bastidores da advocacia previdenciária que realmente geram resultado.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-brand-emerald hover:bg-brand-ink rounded-full px-10 h-14 text-base shadow-[var(--shadow-elegant)]">
              <a href="#planos">Quero participar do próximo encontro <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* QUEBRA DE CRENÇA */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-brand-clay" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-clay">Quebra de crença</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-brand-ink leading-tight mb-8">
            A maioria dos advogados previdenciaristas está <em className="text-brand-clay">travada</em> porque…
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Aprendeu teoria demais, mas não sabe aplicar no caso real",
              "Não sabe como conduzir uma perícia",
              "Não sabe estruturar uma peça estratégica",
              "Não sabe onde está errando",
              "Perde cliente e nem percebe o porquê",
            ].map((t) => (
              <div key={t} className="rounded-2xl border border-border bg-background p-6 flex gap-3">
                <span className="text-brand-clay">→</span>
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
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-clay">A virada</span>
          <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight text-brand-ink">
            O problema não é falta de conhecimento. <br />
            É falta de <em className="text-brand-emerald">visão prática</em> da advocacia previdenciária de verdade.
          </h2>
          <p className="text-lg text-muted-foreground mt-8">E é exatamente isso que você vai encontrar aqui.</p>
        </div>
      </section>

      {/* O QUE É O CLUBE */}
      <section className="py-24 px-6 bg-brand-ink text-brand-cream relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-brand-gold/10 blur-3xl" aria-hidden />
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <Flame className="w-6 h-6 text-brand-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-gold">O que é o Clube</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-12 max-w-4xl">
            Um ambiente de aprendizado <em className="text-brand-gold">técnico, direto ao ponto</em>, onde você vai…
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Ver como os casos realmente acontecem",
              "Entender o raciocínio por trás das decisões",
              "Aprender estratégias que aumentam suas chances de concessão",
              "Ter acesso a peças utilizadas na prática",
              "Acompanhar análises de casos ao vivo",
            ].map((t) => (
              <div key={t} className="rounded-2xl border border-brand-cream/10 bg-brand-cream/5 p-6 flex gap-3">
                <Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-brand-clay" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-clay">Como funciona</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-12 text-brand-ink">Todos os meses, você tem acesso a:</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { n: "01", t: "2 encontros ao vivo" },
              { n: "02", t: "Temas estratégicos da prática" },
              { n: "03", t: "Estudos de casos reais" },
              { n: "04", t: "Modelos de peças" },
              { n: "05", t: "Bastidores da advocacia" },
            ].map((it) => (
              <div key={it.n} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-mono text-xs text-brand-clay mb-3">{it.n}</div>
                <p className="font-display text-lg text-brand-ink leading-snug">{it.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VAI APRENDER */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-brand-emerald" />
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-emerald">Na prática você vai aprender</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl mb-12 text-brand-ink">As habilidades que mudam o resultado dos seus casos.</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Como orientar seu cliente para a perícia médica",
              "Como estruturar uma peça que aumenta suas chances de concessão",
              "Como identificar oportunidades escondidas nos casos",
              "Como evitar erros que fazem perder benefício",
              "Como atuar com mais segurança e clareza",
            ].map((t) => (
              <div key={t} className="rounded-2xl bg-background border border-border p-6 flex gap-3 shadow-[var(--shadow-soft)]">
                <Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXEMPLOS DE TEMA */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-clay">Exemplos de tema</span>
          <h2 className="font-display text-3xl md:text-5xl mt-4 mb-12 text-brand-ink">O nível dos encontros.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-brand-emerald/30 bg-brand-emerald/5 p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-emerald mb-3">Tema #01</div>
              <h3 className="font-display text-3xl mb-6 text-brand-ink">Perícia Médica Previdenciária</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />Como orientar seu cliente corretamente</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />O que falar (e o que não falar)</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />Erros que fazem o benefício ser negado</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />Estratégia antes, durante e depois da perícia</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-brand-clay/30 bg-brand-clay/5 p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-clay mb-3">Tema #02</div>
              <h3 className="font-display text-3xl mb-6 text-brand-ink">Auxílio-Acidente na Prática</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-clay shrink-0 mt-0.5" />Como identificar o direito</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-clay shrink-0 mt-0.5" />Como estruturar o caso</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-clay shrink-0 mt-0.5" />Modelos de peças</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-clay shrink-0 mt-0.5" />Bastidores da concessão</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-brand-clay shrink-0 mt-0.5" />Como transformar esse benefício em uma linha de atuação lucrativa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-24 px-6 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-background border border-brand-emerald/30 p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-5 h-5 text-brand-emerald" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-emerald">Para quem é</span>
            </div>
            <h3 className="font-display text-2xl mb-6">Advogados que…</h3>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Querem atuar com mais segurança",
                "Querem aprender na prática",
                "Querem parar de errar em casos simples",
                "Querem entender como os benefícios são realmente concedidos",
                "Querem evoluir tecnicamente na previdenciária",
              ].map((t) => <li key={t} className="flex gap-3"><Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />{t}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl bg-background border border-border p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2 mb-4">
              <X className="w-5 h-5 text-brand-clay" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-clay">Para quem não é</span>
            </div>
            <h3 className="font-display text-2xl mb-6">Não é para quem…</h3>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Quer teoria sem aplicação",
                "Não aplica o que aprende",
                "Espera resultado sem ação",
              ].map((t) => <li key={t} className="flex gap-3"><X className="w-5 h-5 text-brand-clay shrink-0 mt-0.5" />{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-clay">Como participar</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 text-brand-ink">Escolha o seu acesso.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* AVULSO */}
            <div className="rounded-3xl border border-border bg-card p-10 flex flex-col">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-clay mb-3">Encontro avulso</div>
              <h3 className="font-display text-3xl mb-4">Participe do próximo encontro</h3>
              <p className="text-muted-foreground mb-8">Acesso a 1 encontro ao vivo, com tema técnico e aplicado.</p>
              <div className="font-display text-5xl text-brand-ink mb-2">R$ 59,90</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-8">Pagamento único</div>
              <Button asChild size="lg" className="mt-auto bg-brand-ink hover:bg-brand-emerald rounded-full h-14 text-base">
                <a href="#" aria-disabled>Quero o encontro avulso <ArrowRight className="ml-2 w-5 h-5" /></a>
              </Button>
            </div>

            {/* CLUBE */}
            <div className="relative rounded-3xl p-10 flex flex-col text-brand-cream bg-brand-ink border-2 border-brand-gold shadow-[var(--shadow-elegant)]">
              <div className="absolute -top-4 left-10 px-3 py-1 rounded-full bg-brand-gold text-brand-ink font-mono text-[10px] uppercase tracking-widest">Mais escolhido</div>
              <div className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-3">Clube Acelera Previdenciarista</div>
              <h3 className="font-display text-3xl mb-4">Acesso contínuo, todo mês</h3>
              <ul className="space-y-3 mb-8 text-brand-cream/90">
                {[
                  "2 encontros por mês",
                  "Conteúdos técnicos aplicados",
                  "Casos reais",
                  "Peças e estratégias",
                ].map((t) => <li key={t} className="flex gap-3"><Check className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />{t}</li>)}
              </ul>
              <div className="font-display text-5xl text-brand-gold mb-2">R$ 59,90<span className="text-xl text-brand-cream/70">/mês</span></div>
              <div className="font-mono text-xs text-brand-cream/60 uppercase tracking-widest mb-8">Cancelamento a qualquer momento</div>
              <Button asChild size="lg" className="mt-auto bg-brand-gold hover:bg-brand-cream text-brand-ink rounded-full h-14 text-base">
                <a href="#" aria-disabled>Quero entrar no Clube <ArrowRight className="ml-2 w-5 h-5" /></a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QUEBRA DE OBJEÇÃO + CTA FINAL */}
      <section className="py-32 px-6 bg-brand-ink text-brand-cream relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-brand-gold/20 blur-3xl" aria-hidden />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="font-mono text-xs uppercase tracking-[0.32em] text-brand-gold">Quebra de objeção</span>
          <h2 className="font-display text-4xl md:text-6xl mt-6 mb-10 leading-[1]">
            Você pode continuar tentando aprender sozinho… <br />
            ou aprender direto com <em className="text-brand-gold">quem vive a prática todos os dias</em>.
          </h2>
          <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-cream text-brand-ink rounded-full h-16 px-12 text-lg shadow-[var(--shadow-elegant)]">
            <a href="#planos">Quero entrar no Clube Acelera Previdenciarista <ArrowRight className="ml-2 w-5 h-5" /></a>
          </Button>
          <p className="mt-14 font-display text-2xl md:text-3xl italic text-brand-gold max-w-3xl mx-auto leading-snug">
            "Você não precisa de mais informação. Você precisa saber o que fazer… quando o caso chega na sua mesa."
          </p>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
          <div>© 2026 Clube Acelera Previdenciarista</div>
          <Link to="/" className="font-mono text-xs uppercase tracking-widest hover:text-brand-emerald">Voltar para a home</Link>
        </div>
      </footer>
    </div>
  );
}
