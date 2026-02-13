// src/components/dashboard/InjuredPlayers.tsx
"use client";

import { motion } from "framer-motion";
import { AlertCircle, Bandage } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function InjuredPlayers() {
    // Dados mockados
    const injuries = [
        {
            name: "Darío Benedetto",
            position: "Atacante",
            type: "Lesionado",
            reason: "Lesão muscular na coxa",
            returnDate: "15/03/2026",
            status: "injury",
        },
        {
            name: "Marcos Rojo",
            position: "Zagueiro",
            type: "Suspenso",
            reason: "3º cartão amarelo",
            returnDate: "Próximo jogo",
            status: "suspended",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-destructive" />
                        <CardTitle className="text-xl font-bold">Desfalques</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    {injuries.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                            <Bandage className="w-12 h-12 mb-2 opacity-50" />
                            <p className="text-sm">Elenco completo disponível! 🎉</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {injuries.map((player, index) => (
                                <div key={index}>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-semibold text-foreground">{player.name}</h4>
                                                <Badge
                                                    variant={player.status === "injury" ? "destructive" : "secondary"}
                                                    className="text-xs"
                                                >
                                                    {player.type}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-1">{player.position}</p>
                                            <p className="text-sm text-muted-foreground">{player.reason}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-muted-foreground">Retorno previsto</p>
                                            <p className="text-sm font-semibold text-primary">{player.returnDate}</p>
                                        </div>
                                    </div>
                                    {index < injuries.length - 1 && <Separator className="mt-4" />}
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
