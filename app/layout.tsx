import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Empresa Júnior de Computação - CJR",
  description: "Site da Empresa Júnior de Computação da UnB - CJR",
  keywords: [
    "Desenvolvimento Web",
    "Consultoria",
    "Aplicativos",
    "Sistemas Web",
    "E-commerce",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
