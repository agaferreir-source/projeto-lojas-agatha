import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Participe do Projeto | Agatha Pinheiro",
  description:
    "Inscreva sua empresa para participar de um projeto de desenvolvimento de uma solução digital personalizada.",
  keywords: [
    "Agatha Pinheiro",
    "projeto",
    "desenvolvimento",
    "tecnologia",
    "sistema",
    "site",
    "automação",
    "solução digital",
  ],
  authors: [
    {
      name: "Agatha Pinheiro",
    },
  ],
  openGraph: {
    title: "Participe do Projeto | Agatha Pinheiro",
    description:
      "Uma oportunidade para negócios reais desenvolverem uma solução digital personalizada.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
