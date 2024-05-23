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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K36HJPK5')`,
          }}
        />
      </head>
      <body className={inter.className}>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K36HJPK5"
          height="0"
          width="0"
        ></iframe>
        {children}
      </body>
    </html>
  );
}
