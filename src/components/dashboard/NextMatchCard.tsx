// src/components/dashboard/NextMatchCard.tsx
"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function NextMatchCard() {
    // Dados mockados
    const nextMatch = {
        opponent: "River Plate",
        competition: "Superliga Argentina",
        date: new Date(2026, 1, 20, 21, 0), // 20 de Fevereiro, 21h
        venue: "La Bombonera",
        isHome: true,
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-bold text-primary">
                            Próximo Jogo
                        </CardTitle>
                        <Badge variant="secondary" className="bg-secondary text-primary font-bold">
                            {nextMatch.competition}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Confronto */}
                    <div className="flex items-center justify-center gap-4 py-6">
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-2">
                                <span className="text-3xl font-bold text-white">B</span>
                            </div>
                            <span className="text-sm font-semibold text-primary">Boca Juniors</span>
                        </div>

                        <div className="flex flex-col items-center px-6">
                            <span className="text-4xl font-bold text-muted-foreground">VS</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center mb-2">
                                <span className="text-3xl font-bold text-destructive">R</span>
                            </div>
                            <span className="text-sm font-semibold text-muted-foreground">
                                {nextMatch.opponent}
                            </span>
                        </div>
                    </div>

                    {/* Informações do jogo */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-5 h-5 text-primary" />
                            <div className="flex flex-col">
                                <span className="text-xs">Data</span>
                                <span className="text-sm font-semibold text-foreground">
                                    {format(nextMatch.date, "dd 'de' MMMM", { locale: ptBR })}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-5 h-5 text-primary" />
                            <div className="flex flex-col">
                                <span className="text-xs">Horário</span>
                                <span className="text-sm font-semibold text-foreground">
                                    {format(nextMatch.date, "HH:mm")}h
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-5 h-5 text-primary" />
                            <div className="flex flex-col">
                                <span className="text-xs">Local</span>
                                <span className="text-sm font-semibold text-foreground">
                                    {nextMatch.venue}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Badge de casa/fora */}
                    <div className="flex justify-center">
                        <Badge
                            variant={nextMatch.isHome ? "default" : "outline"}
                            className={nextMatch.isHome ? "bg-primary" : ""}
                        >
                            {nextMatch.isHome ? "🏠 Jogo em Casa" : "✈️ Jogo Fora"}
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
