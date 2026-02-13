// src/components/dashboard/LineupSection.tsx
"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Componente movido para FORA do render
const PlayerBadge = ({ name, number }: { name: string; number: number }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center gap-1"
    >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center border-2 border-secondary shadow-lg">
            <span className="text-xs sm:text-sm font-bold text-white">{number}</span>
        </div>
        <span className="text-[10px] sm:text-xs font-bold text-center text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
            {name}
        </span>
    </motion.div>
);

export function LineupSection() {
    // Dados mockados - Escalação 4-3-3
    const lineup = {
        formation: "4-3-3",
        goalkeeper: { name: "Romero", number: 1 },
        defenders: [
            { name: "Advíncula", number: 17 },
            { name: "Figal", number: 4 },
            { name: "Rojo", number: 6 },
            { name: "Fabra", number: 18 },
        ],
        midfielders: [
            { name: "Medina", number: 36 },
            { name: "Fernández", number: 21 },
            { name: "Romero", number: 11 },
        ],
        forwards: [
            { name: "Villa", number: 22 },
            { name: "Benedetto", number: 9 },
            { name: "Zeballos", number: 7 },
        ],
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            <Card>
                <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            <CardTitle className="text-lg sm:text-xl font-bold">Provável Escalação</CardTitle>
                        </div>
                        <Badge variant="outline" className="border-primary text-primary w-fit">
                            {lineup.formation}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div
                        className="relative w-full h-100 sm:h-125 md:h-150 rounded-lg bg-linear-to-b from-green-600 to-green-700"
                        style={{
                            backgroundImage: `
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
                            backgroundSize: '40px 40px'
                        }}
                    >
                        {/* Goleiro */}
                        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2">
                            <PlayerBadge name={lineup.goalkeeper.name} number={lineup.goalkeeper.number} />
                        </div>

                        {/* Defensores */}
                        <div className="absolute bottom-20 sm:bottom-28 left-0 right-0 flex justify-around px-2 sm:px-4">
                            {lineup.defenders.map((player) => (
                                <PlayerBadge key={player.number} name={player.name} number={player.number} />
                            ))}
                        </div>

                        {/* Meio-campo */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-around px-4 sm:px-8">
                            {lineup.midfielders.map((player) => (
                                <PlayerBadge key={player.number} name={player.name} number={player.number} />
                            ))}
                        </div>

                        {/* Atacantes */}
                        <div className="absolute top-20 sm:top-28 left-0 right-0 flex justify-around px-2 sm:px-4">
                            {lineup.forwards.map((player) => (
                                <PlayerBadge key={player.number} name={player.name} number={player.number} />
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
