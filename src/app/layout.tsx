// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Boca Sin Verso | Análises Exclusivas do Boca Juniors",
    template: "%s | Boca Sin Verso",
  },
  description:
    "Análises exclusivas, estatísticas e conteúdo premium para torcedores do Boca Juniors. Escalações, jogos, IA e muito mais. Acesso por assinatura mensal.",
  keywords: [
    "Boca Juniors",
    "Boca Sin Verso",
    "análise Boca",
    "escalação Boca",
    "estatísticas futebol",
    "Boca Juniors assinatura",
    "La Bombonera",
    "xeneize",
    "Superliga Argentina",
  ],
  authors: [{ name: "Boca Sin Verso" }],
  creator: "Boca Sin Verso",
  publisher: "Boca Sin Verso",
  metadataBase: new URL("https://bocasinverso.com"), // Altere para o domínio real
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bocasinverso.com",
    title: "Boca Sin Verso | Análises Exclusivas do Boca Juniors",
    description:
      "Conteúdo exclusivo para torcedores do Boca Juniors: análises com IA, estatísticas detalhadas, escalações e muito mais.",
    siteName: "Boca Sin Verso",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Boca Sin Verso - Análises Exclusivas do Boca Juniors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boca Sin Verso | Análises Exclusivas do Boca Juniors",
    description:
      "Conteúdo exclusivo para torcedores do Boca Juniors: análises com IA, estatísticas detalhadas e muito mais.",
    images: ["/twitter-image.png"],
    creator: "@bocasinverso", // Altere para o @ real se tiver
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest", // Opcional: adicionar depois
  category: "sports",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Boca Sin Verso",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
