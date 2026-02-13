// src/components/dashboard/BettingSuggestions.tsx
"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Suggestion {
    type: string;
    description: string;
    confidence: "high" | "medium" | "low";
    reasoning: string;
}

const ConfidenceBadge = ({ confidence }: { confidence: "high" | "medium" | "low" }) => {
    const styles = {
        high: "bg-green-500/10 text-green-700 border-green-500",
        medium: "bg-yellow-500/10 text-yellow-700 border-yellow-500",
        low: "bg-orange-500/10 text-orange-700 border-orange-500",
    };

    const labels = {
        high: "Alta Confiança",
        medium: "Média Confiança",
        low: "Baixa Confiança",
    };

    return (
        <Badge variant="outline" className={`${styles[confidence]} text-xs`}>
            {labels[confidence]}
        </Badge>
    );
};

export function BettingSuggestions() {
    const suggestions: Suggestion[] = [
        {
            type: "Vitória do Boca Juniors",
            description: "Boca vence a partida",
            confidence: "high",
            reasoning: "Invencibilidade de 7 jogos em casa contra o River + ótima fase atual com 3V nos últimos 5 jogos",
        },
        {
            type: "Mais de 2.5 gols",
            description: "Partida com 3+ gols no total",
            confidence: "medium",
            reasoning: "Últimos 3 confrontos tiveram média de 3.2 gols. Clássico costuma ter muita emoção",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
        >
            <Card className="border-2 border-secondary/30">
                <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                            <CardTitle className="text-lg sm:text-xl font-bold">
                                Rincón del que se anima
                            </CardTitle>
                        </div>
                        <Badge variant="secondary" className="bg-secondary text-primary font-semibold w-fit">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Baseado em dados
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Aviso Legal */}
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-orange-500/10 border border-orange-500/30">
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-orange-700 leading-relaxed">
                            <strong>Atenção:</strong> Estas são apenas sugestões informativas baseadas em estatísticas.
                            Não incentivamos apostas. Jogue com responsabilidade.
                        </p>
                    </div>

                    {/* Sugestões */}
                    <div className="space-y-4">
                        {suggestions.map((suggestion, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                            >
                                <div className="p-3 sm:p-4 rounded-lg bg-linear-to-br from-secondary/5 to-primary/5 border border-primary/10 hover:border-primary/30 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm sm:text-base text-primary mb-1">
                                                {suggestion.type}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-muted-foreground">
                                                {suggestion.description}
                                            </p>
                                        </div>
                                        <ConfidenceBadge confidence={suggestion.confidence} />
                                    </div>

                                    <Separator className="my-3" />

                                    <div className="flex items-start gap-2">
                                        <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-xs text-muted-foreground mb-1">Análise:</p>
                                            <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                                                {suggestion.reasoning}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {index < suggestions.length - 1 && <Separator className="my-4" />}
                            </motion.div>
                        ))}
                    </div>

                    {/* Nota de Rodapé */}
                    <div className="mt-4 pt-4 border-t">
                        <p className="text-xs text-center text-muted-foreground italic">
                            Sugestões geradas automaticamente com base em estatísticas históricas e forma recente das equipes
                        </p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
