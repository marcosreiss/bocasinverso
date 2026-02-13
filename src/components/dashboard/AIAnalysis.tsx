// src/components/dashboard/AIAnalysis.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AIAnalysis() {
    const preMatchAnalysis = `O Boca chega com moral depois de vencer o Racing por 2-1 fora de casa. A escalação deve manter Benedetto como referência no ataque, apoiado por Villa e Zeballos nas pontas.

O River vem irregular, com apenas 1 vitória nos últimos 3 jogos. A ausência do meia Enzo Pérez por lesão enfraquece o meio-campo visitante.

Na Bombonera, o Boca é praticamente imbatível - são 7 jogos sem perder para o eterno rival em casa. A torcida será o 12º jogador neste Superclássico.

Taticamente, espera-se um Boca mais cauteloso no primeiro tempo, explorando a velocidade de Villa nos contra-ataques. Se abrir o placar cedo, pode administrar e buscar o segundo gol na pressão da torcida.`;

    const postMatchAnalysis = `Vitória merecida do Boca por 2-0! Benedetto abriu o placar logo aos 12 minutos após assistência de Zeballos, e Villa ampliou na etapa final.

O time dominou do início ao fim, com 62% de posse de bola e 8 finalizações no gol. A defesa não tomou sustos - Romero ficou praticamente desempregado.

Destaque para Medina no meio-campo, que comandou o jogo com passes precisos e desarmes importantes. O setor mais sólido da equipe.

Com essa vitória, o Boca assume a liderança isolada da Superliga e mostra que está pronto para buscar o título. Rendimento impecável em casa continua!`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                            <CardTitle className="text-lg sm:text-xl font-bold">
                                Análise Inteligente
                            </CardTitle>
                        </div>
                        <Badge variant="outline" className="border-secondary text-secondary gap-1">
                            <Sparkles className="w-3 h-3" />
                            IA
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="pre" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="pre" className="text-xs sm:text-sm">
                                Pré-Jogo
                            </TabsTrigger>
                            <TabsTrigger value="post" className="text-xs sm:text-sm">
                                Pós-Jogo
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="pre" className="mt-4">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span>Atualizado há 2 horas</span>
                                </div>

                                <div className="prose prose-sm max-w-none">
                                    {preMatchAnalysis.split('\n\n').map((paragraph, index) => (
                                        <motion.p
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                                            className="text-sm sm:text-base text-foreground leading-relaxed mb-4"
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="post" className="mt-4">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span>Atualizado há 30 minutos</span>
                                </div>

                                <div className="prose prose-sm max-w-none">
                                    {postMatchAnalysis.split('\n\n').map((paragraph, index) => (
                                        <motion.p
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                                            className="text-sm sm:text-base text-foreground leading-relaxed mb-4"
                                        >
                                            {paragraph}
                                        </motion.p>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </motion.div>
    );
}
