import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Daniel Vieira - Web Dev Full Stack",
  description:
    "Daniel Vieira - Desenvolvedor Web Full Stack. Confira meu portfólio e veja alguns de meus projetos e soluções! [JS, TS, Node, React, CSS, HTML, SQL e NoSQL]",
  icons: [{ rel: "icon", url: "/icons8-dev-96-final.png", sizes: "any" }],
  robots: "index, follow",
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
