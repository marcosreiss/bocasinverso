// src/components/dashboard/MatchStats.tsx
"use client";

import { motion } from "framer-motion";
import { BarChart3, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Stat {
    label: string;
    boca: number;
    opponent: number;
    icon?: React.ReactNode;
}

export function MatchStats() {
    const stats: Stat[] = [
        {
            label: "Vitórias no confronto",
            boca: 89,
            opponent: 72,
            icon: <Target className="w-4 h-4" />,
        },
        {
            label: "Gols marcados (últimos 10)",
            boca: 18,
            opponent: 12,
            icon: <Zap className="w-4 h-4" />,
        },
        {
            label: "% de posse de bola (média)",
            boca: 58,
            opponent: 42,
        },
        {
            label: "Finalizações por jogo",
            boca: 14,
            opponent: 9,
        },
    ];

    const curiosity = "Boca não perde para o River na Bombonera há 7 jogos seguidos! 💪";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        <CardTitle className="text-lg sm:text-xl font-bold">
                            Estatísticas do Confronto
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                            className="space-y-2 sm:space-y-3"
                        >
                            <div className="flex items-center justify-between text-xs sm:text-sm">
                                <div className="flex items-center gap-2">
                                    {stat.icon && <span className="text-primary">{stat.icon}</span>}
                                    <span className="font-medium">{stat.label}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {/* Boca */}
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <span className="text-xs sm:text-sm font-semibold text-primary min-w-[80px] sm:min-w-[100px]">
                                        Boca Juniors
                                    </span>
                                    <div className="flex-1">
                                        <Progress
                                            value={(stat.boca / (stat.boca + stat.opponent)) * 100}
                                            className="h-2 sm:h-3"
                                        />
                                    </div>
                                    <span className="text-sm sm:text-base font-bold text-primary min-w-[30px] text-right">
                                        {stat.boca}
                                    </span>
                                </div>

                                {/* Adversário */}
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <span className="text-xs sm:text-sm font-semibold text-muted-foreground min-w-[80px] sm:min-w-[100px]">
                                        River Plate
                                    </span>
                                    <div className="flex-1">
                                        <Progress
                                            value={(stat.opponent / (stat.boca + stat.opponent)) * 100}
                                            className="h-2 sm:h-3 [&>div]:bg-muted-foreground"
                                        />
                                    </div>
                                    <span className="text-sm sm:text-base font-bold text-muted-foreground min-w-[30px] text-right">
                                        {stat.opponent}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Curiosidade */}
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg bg-secondary/10 border-2 border-secondary/30">
                        <p className="text-xs sm:text-sm font-semibold text-center text-foreground">
                            💡 {curiosity}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
