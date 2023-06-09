import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Daniel Vieira",
  description:
    "Desenvolvedor Web Full Stack. Confira meu portfólio e veja alguns de meus projetos e soluções! [JS, TS, Node, React, CSS, HTML, SQL, NoSQL]",
  icons: [{ rel: "icon", url: "/icons8-dev-96-final.png", sizes: "any" }],
  robots: "index, follow",
  themeColor: { media: "(prefers-color-scheme: dark)", color: "#3A3A3A" },
  twitter: {
    site: "https://danielvieira.vercel.app/",
    title: "Daniel Vieira",
    description:
      "Desenvolvedor Web Full Stack. Confira meu portfólio e veja alguns de meus projetos e soluções! [JS, TS, Node, React, CSS, HTML, SQL, NoSQL]",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
