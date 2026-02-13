// src/components/dashboard/LastFiveMatches.tsx
"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type MatchResult = "win" | "draw" | "loss";

interface Match {
    opponent: string;
    score: string;
    result: MatchResult;
    competition: string;
    date: string;
}

const ResultBadge = ({ result }: { result: MatchResult }) => {
    const styles = {
        win: "bg-green-500 text-white",
        draw: "bg-yellow-500 text-white",
        loss: "bg-red-500 text-white",
    };

    const labels = {
        win: "V",
        draw: "E",
        loss: "D",
    };

    return (
        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${styles[result]} flex items-center justify-center font-bold text-sm sm:text-base`}>
            {labels[result]}
        </div>
    );
};

export function LastFiveMatches() {
    const matches: Match[] = [
        {
            opponent: "Racing Club",
            score: "2-1",
            result: "win",
            competition: "Superliga",
            date: "10/02/2026",
        },
        {
            opponent: "San Lorenzo",
            score: "1-1",
            result: "draw",
            competition: "Superliga",
            date: "05/02/2026",
        },
        {
            opponent: "Independiente",
            score: "3-0",
            result: "win",
            competition: "Copa Argentina",
            date: "01/02/2026",
        },
        {
            opponent: "Estudiantes",
            score: "0-1",
            result: "loss",
            competition: "Superliga",
            date: "28/01/2026",
        },
        {
            opponent: "Talleres",
            score: "2-2",
            result: "draw",
            competition: "Superliga",
            date: "24/01/2026",
        },
    ];

    const wins = matches.filter((m) => m.result === "win").length;
    const draws = matches.filter((m) => m.result === "draw").length;
    const losses = matches.filter((m) => m.result === "loss").length;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <Card>
                <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            <CardTitle className="text-lg sm:text-xl font-bold">Últimos 5 Jogos</CardTitle>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-green-500/10 text-green-700 border-green-500">
                                {wins}V
                            </Badge>
                            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-700 border-yellow-500">
                                {draws}E
                            </Badge>
                            <Badge variant="outline" className="bg-red-500/10 text-red-700 border-red-500">
                                {losses}D
                            </Badge>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3 sm:space-y-4">
                        {matches.map((match, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                            >
                                <ResultBadge result={match.result} />

                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-semibold text-sm sm:text-base truncate">
                                                vs {match.opponent}
                                            </h4>
                                            <Badge variant="secondary" className="text-xs hidden sm:inline-flex">
                                                {match.competition}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <span className="text-xs sm:text-sm text-muted-foreground">
                                                {match.date}
                                            </span>
                                            <span className="text-base sm:text-lg font-bold text-primary">
                                                {match.score}
                                            </span>
                                        </div>
                                    </div>
                                    <Badge variant="secondary" className="text-xs sm:hidden mt-1">
                                        {match.competition}
                                    </Badge>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="flex items-center gap-2 text-sm sm:text-base">
                            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            <span className="font-semibold text-primary">
                                Aproveitamento: {Math.round(((wins * 3 + draws) / 15) * 100)}%
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};
