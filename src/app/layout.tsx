import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Daniel Vieira",
  description: "A web developer portfolio",
  icons: [{ rel: "icon", url: "/icons8-dev-96-final.png", sizes: "any" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
