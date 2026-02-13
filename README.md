# 🔵🟡 Boca Sin Verso - MVP Dashboard

![Boca Sin Verso](https://img.shields.io/badge/Boca-Sin%20Verso-103f79?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgZmlsbD0iI2YzYjIyOSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMTAzZjc5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5CPC90ZXh0Pjwvc3ZnPg==)
![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**MVP de plataforma de assinatura para torcedores do Boca Juniors** com análises exclusivas, estatísticas e conteúdo gerado por IA.

Este é um **protótipo funcional** desenvolvido para validação da ideia, demonstrando todas as funcionalidades principais do produto final.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

**Boca Sin Verso** é uma plataforma de assinatura mensal focada em entregar conteúdo exclusivo e análises detalhadas para torcedores do Boca Juniors.

### Problema que resolve:
Torcedores apaixonados querem mais do que apenas resultados - eles buscam análises profundas, estatísticas detalhadas e informações privilegiadas sobre seu time do coração.

### Solução:
Uma plataforma automatizada que integra:
- 📊 **Dados em tempo real** de APIs de futebol
- 🤖 **Análises geradas por IA** com tom provocador
- 📱 **Alertas via Telegram** antes e depois dos jogos
- 💰 **Assinatura recorrente** via Stripe

---

## ✨ Funcionalidades

### Implementadas neste MVP:

#### 🏆 Próximo Jogo
- Card destacado com informações do próximo confronto
- Data, horário e local do jogo
- Badge indicando se é jogo em casa ou fora
- Design responsivo e animado

#### ⚽ Escalação Provável
- Campo visual interativo com formação tática
- Jogadores posicionados por setor
- Números das camisas e nomes
- Hover com animações suaves

#### 🚑 Desfalques
- Lista de jogadores lesionados
- Jogadores suspensos por cartões
- Data prevista de retorno
- Motivo da ausência

#### 📈 Últimos 5 Jogos
- Timeline com resultados recentes
- Badges de vitória/empate/derrota
- Placar e adversário
- Cálculo de aproveitamento

#### 📊 Estatísticas do Confronto
- Comparação visual entre Boca e adversário
- Gráficos de progresso
- Dados históricos e recentes
- Curiosidades sobre o confronto

#### 🤖 Análise Inteligente (IA)
- Tabs de análise pré-jogo e pós-jogo
- Textos gerados automaticamente
- Tom provocador e envolvente
- Atualização em tempo real

#### 💡 Rincón del que se anima
- Sugestões baseadas em estatísticas
- Níveis de confiança (alta/média/baixa)
- Análise fundamentada
- Aviso de responsabilidade

---

## 🛠️ Tecnologias

### Core
- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utility-first
- **[Shadcn UI](https://ui.shadcn.com/)** - Componentes reutilizáveis

### Animações e UX
- **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas
- **[Lucide React](https://lucide.dev/)** - Ícones modernos

### Utilitários
- **[date-fns](https://date-fns.org/)** - Manipulação de datas
- **[clsx](https://github.com/lukeed/clsx)** - Gerenciamento de classes CSS

### Integrações Futuras
- **Supabase** - Banco de dados e autenticação
- **Stripe** - Pagamentos recorrentes
- **OpenAI API** - Geração de análises
- **API-Football** - Dados em tempo real
- **Telegram Bot API** - Alertas automáticos
- **Vercel Cron Jobs** - Automações

---
## 📁 Estrutura do Projeto

```
bocasinverso/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Página principal (dashboard)
│   │   ├── layout.tsx                  # Layout global + metadata
│   │   └── globals.css                 # Estilos globais + tema
│   │
│   └── components/
│       ├── ui/                         # Componentes Shadcn UI
│       │   ├── card.tsx
│       │   ├── badge.tsx
│       │   ├── progress.tsx
│       │   ├── tabs.tsx
│       │   ├── separator.tsx
│       │   └── avatar.tsx
│       │
│       └── dashboard/                  # Componentes do dashboard
│           ├── NextMatchCard.tsx       # Card do próximo jogo
│           ├── LineupSection.tsx       # Escalação visual
│           ├── InjuredPlayers.tsx      # Desfalques
│           ├── LastFiveMatches.tsx     # Últimos 5 jogos
│           ├── MatchStats.tsx          # Estatísticas
│           ├── AIAnalysis.tsx          # Análise IA
│           └── BettingSuggestions.tsx  # Sugestões
│
├── public/
│   ├── favicon.ico                     # Favicon
│   ├── apple-touch-icon.png            # Ícone iOS
│   ├── opengraph-image.png             # Imagem OG
│   └── twitter-image.png               # Imagem Twitter
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

## 🎨 Design System

### Componentes Reutilizáveis

Todos os componentes seguem o padrão:
- **Mobile-first:** Tamanhos base pequenos com breakpoints SM/MD/LG
- **Animações:** Entrada escalonada com Framer Motion
- **Cores:** Uso consistente de `primary` (azul) e `secondary` (dourado)
- **Tipografia:** Hierarquia clara com tamanhos responsivos

### Exemplo de uso:

\`\`\`tsx
import { NextMatchCard } from "@/components/dashboard/NextMatchCard";

export default function Page() {
  return <NextMatchCard />;
}
\`\`\`

---

## 📱 Responsividade

O projeto foi desenvolvido **mobile-first** com os seguintes breakpoints:

| Breakpoint | Tamanho | Uso |
|------------|---------|-----|
| **Base** | < 640px | Mobile (padrão) |
| **SM** | ≥ 640px | Tablets pequenos |
| **MD** | ≥ 768px | Tablets |
| **LG** | ≥ 1024px | Desktop |
| **XL** | ≥ 1280px | Desktop grande |

---
## 🤝 Contribuindo

Este é um projeto privado em desenvolvimento. Sugestões são bem-vindas!

---

## 📄 Licença

Este projeto é propriedade privada. Todos os direitos reservados.

---

## 📞 Contato

**Desenvolvedor:** Marcos Reis  
**Portfólio:** [marcosreis.vercel.app](https://marcosreis.vercel.app)  
**GitHub:** [@marcosreiss](https://github.com/marcosreiss)  
**Email:** [seu-email@exemplo.com](mailto:seu-email@exemplo.com)

---

## 💙💛 Boca Sin Verso

*Desenvolvido com paixão para os torcedores xeneizes.*

**"La mitad más uno, siempre."**

---

<div align="center">

![Boca Juniors](https://img.shields.io/badge/Boca_Juniors-103f79?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgZmlsbD0iI2YzYjIyOSIvPjwvc3ZnPg==)

**Versão 1.0.0 - MVP Mockado**

</div>
