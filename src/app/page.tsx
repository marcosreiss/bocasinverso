// src/app/page.tsx
import { NextMatchCard } from "@/components/dashboard/NextMatchCard";
import { LineupSection } from "@/components/dashboard/LineupSection";
import { InjuredPlayers } from "@/components/dashboard/InjuredPlayers";
import { LastFiveMatches } from "@/components/dashboard/LastFiveMatches";
import { MatchStats } from "@/components/dashboard/MatchStats";
import { AIAnalysis } from "@/components/dashboard/AIAnalysis";
import { BettingSuggestions } from "@/components/dashboard/BettingSuggestions";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                Boca Sin Verso
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Análises exclusivas para torcedores xeneizes
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-white">B</span>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-primary">J</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Coluna Principal (2/3) */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Próximo Jogo - Destaque */}
            <NextMatchCard />

            {/* Escalação */}
            <LineupSection />

            {/* Análise da IA */}
            <AIAnalysis />

            {/* Sugestões de Apostas */}
            <BettingSuggestions />
          </div>

          {/* Coluna Lateral (1/3) */}
          <div className="space-y-4 sm:space-y-6">
            {/* Desfalques */}
            <InjuredPlayers />

            {/* Últimos 5 Jogos */}
            <LastFiveMatches />

            {/* Estatísticas */}
            <MatchStats />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 sm:mt-16">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-semibold text-primary">Boca Sin Verso</p>
              <p className="text-xs text-muted-foreground mt-1">
                Conteúdo exclusivo para assinantes
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>© 2026 Todos os direitos reservados</span>
              <span className="hidden sm:inline">•</span>
              <span>Desenvolvido com 💙💛</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
