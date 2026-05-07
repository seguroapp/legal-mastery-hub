import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-mentoria.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Sparkles, Trophy, Users, Quote, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mentoria Jurídica — Construa a Advocacia que Você Sempre Quis" },
      { name: "description", content: "Mentoria de advocacia para profissionais que querem advogar com propósito, autoridade e resultado. Inscreva-se e dê o próximo passo." },
      { property: "og:title", content: "Mentoria Jurídica — Advocacia com Propósito" },
      { property: "og:description", content: "Programa de mentoria para advogados que querem crescer com estratégia e identidade." },
      { property: "og:image", content: "/og.jpg" },
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
          <div className="flex items-center gap-2 font-display text-xl font-bold text-brand-ink">
            <Scale className="w-5 h-5 text-brand-emerald" />
            Lex<span className="text-brand-clay">.</span>Mentoria
          </div>
          <Button asChild variant="default" className="bg-brand-ink hover:bg-brand-emerald rounded-full px-6">
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
              <span className="font-mono text-xs uppercase tracking-widest">Turma 2026 — vagas limitadas</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-brand-ink">
              A advocacia que <em className="text-brand-clay">você sente</em>,
              <br />
              <span className="text-brand-emerald">com a estratégia</span> que ela merece.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Uma mentoria desenhada para advogados que não querem caber em fórmulas prontas. Construa autoridade, posicionamento e um escritório que se parece com você — seja qual for sua área.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="bg-brand-emerald hover:bg-brand-ink rounded-full px-8 h-14 text-base shadow-[var(--shadow-elegant)]">
                <a href="#cta">
                  Garantir minha vaga <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[0,1,2].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background" style={{background: `var(--gradient-eclectic)`, opacity: 0.7 + i*0.1}} />
                  ))}
                </div>
                +800 advogados mentorados
              </div>
            </div>
          </div>

          {/* Hero collage */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-brand-gold/40 -rotate-6" aria-hidden />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-brand-emerald/30" aria-hidden />
            <img
              src={heroImg}
              alt="Mentoria jurídica"
              width={1024}
              height={1024}
              className="relative rounded-3xl shadow-[var(--shadow-elegant)] w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-brand-ink text-brand-cream rounded-2xl p-5 shadow-[var(--shadow-soft)] max-w-[220px]">
              <div className="font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-1">Resultado real</div>
              <div className="font-display text-2xl leading-tight">+340% em honorários no 1º semestre</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="py-24 px-6 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-clay">Para quem é</span>
              <h2 className="font-display text-4xl md:text-5xl mt-2 max-w-2xl">Vários caminhos. Uma mesma travessia.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">Independente da fase — recém-formado, autônomo ou sócio de banca — a mentoria se adapta à sua advocacia.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, tag: "01", title: "Recém-formado", desc: "Encontre sua área, posicione-se e capte os primeiros clientes sem se perder no caminho." },
              { icon: Trophy, tag: "02", title: "Autônomo em transição", desc: "Saia do contencioso de subsistência e construa um escritório com identidade e previsibilidade." },
              { icon: Users, tag: "03", title: "Sócio em escala", desc: "Estruture marca, processos e equipe sem perder o que torna seu trabalho único." },
            ].map(({icon: Icon, tag, title, desc}, i) => (
              <div key={i} className="group bg-card rounded-3xl p-8 border border-border hover:border-brand-emerald transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-emerald/10 flex items-center justify-center group-hover:bg-brand-emerald group-hover:text-brand-cream transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{tag}</span>
                </div>
                <h3 className="font-display text-2xl mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square max-w-md">
            <div className="absolute inset-0 rounded-full" style={{background: 'var(--gradient-eclectic)'}} />
            <div className="absolute inset-8 rounded-full bg-background flex items-center justify-center">
              <div className="text-center px-8">
                <div className="font-mono text-xs uppercase tracking-widest text-brand-clay mb-2">Método</div>
                <div className="font-display text-5xl text-brand-ink">4 pilares</div>
                <div className="font-display text-5xl text-brand-emerald italic">12 semanas</div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl">Um método que respeita a <em className="text-brand-clay">sua voz</em>.</h2>
            {[
              { n: "01", t: "Posicionamento", d: "Defina nicho, narrativa e marca pessoal autêntica." },
              { n: "02", t: "Captação", d: "Construa um funil ético e consistente de clientes." },
              { n: "03", t: "Operação", d: "Processos, precificação e gestão para crescer com leveza." },
              { n: "04", t: "Autoridade", d: "Conteúdo, presença e rede que abrem portas certas." },
            ].map(p => (
              <div key={p.n} className="flex gap-5 pb-6 border-b border-border last:border-0">
                <div className="font-mono text-sm text-brand-clay pt-1">{p.n}</div>
                <div>
                  <h3 className="font-display text-2xl mb-1">{p.t}</h3>
                  <p className="text-muted-foreground">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 px-6 bg-brand-ink text-brand-cream relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-brand-gold/20 blur-3xl" aria-hidden />
        <div className="max-w-4xl mx-auto relative">
          <Quote className="w-12 h-12 text-brand-gold mb-8" />
          <p className="font-display text-3xl md:text-4xl leading-snug italic">
            "Eu cheguei achando que precisava ser <span className="text-brand-gold not-italic">outro advogado</span>. Saí com um escritório que finalmente parece comigo — e fatura três vezes mais."
          </p>
          <div className="mt-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full" style={{background: 'var(--gradient-eclectic)'}} />
            <div>
              <div className="font-display text-lg">Marina Veloso</div>
              <div className="font-mono text-xs text-brand-gold/80 uppercase tracking-widest">Direito de Família · Recife</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-clay">Próxima turma · Março de 2026</span>
          <h2 className="font-display text-5xl md:text-7xl mt-6 mb-8 leading-[0.95]">
            Sua próxima década na advocacia <em className="text-brand-emerald">começa aqui</em>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Faça sua inscrição agora. Você será levado para a página com todos os detalhes do investimento, bônus e formato.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-sm">
            {["12 semanas de imersão", "Mentoria em grupo + individual", "Comunidade vitalícia"].map(t => (
              <span key={t} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
                <Check className="w-4 h-4 text-brand-emerald" /> {t}
              </span>
            ))}
          </div>
          <Button asChild size="lg" className="bg-brand-emerald hover:bg-brand-ink rounded-full h-16 px-12 text-lg shadow-[var(--shadow-elegant)]">
            <Link to="/vendas">
              Ver detalhes e investir <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <p className="mt-6 font-mono text-xs text-muted-foreground uppercase tracking-widest">Vagas limitadas · Acesso por seleção</p>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
          <div>© 2026 Lex.Mentoria · Todos os direitos reservados</div>
          <div className="font-mono text-xs uppercase tracking-widest">contato@lex.mentoria</div>
        </div>
      </footer>
    </div>
  );
}
