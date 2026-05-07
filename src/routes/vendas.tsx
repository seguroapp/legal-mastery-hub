import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/vendas")({
  head: () => ({
    meta: [
      { title: "Investimento — Mentoria Jurídica" },
      { name: "description", content: "Detalhes da mentoria de advocacia: formato, bônus e investimento." },
    ],
  }),
  component: Vendas,
});

function Vendas() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-emerald mb-8">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <span className="font-mono text-xs uppercase tracking-widest text-brand-clay">Página de vendas</span>
        <h1 className="font-display text-5xl md:text-6xl mt-4 mb-6">Detalhes da mentoria</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Esta é a página onde você vai detalhar o programa: módulos, cronograma, bônus, depoimentos completos, garantia e o investimento. Substitua este conteúdo pelo seu pitch de vendas final.
        </p>
        <Button size="lg" className="bg-brand-emerald hover:bg-brand-ink rounded-full h-14 px-10">
          Quero me inscrever
        </Button>
      </div>
    </div>
  );
}
