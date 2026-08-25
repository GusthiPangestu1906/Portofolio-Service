import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gusthi Pangestu | Visual Creator, OBS Operator & Web Developer",
  description: "Portofolio profesional Gusthi Pangestu - Mahasiswa Teknik Informatika PENS, Lead Visual Operator OBS Studio, Graphic Designer & Web Developer.",
  keywords: [
    "Gusthi Pangestu",
    "Portfolio",
    "PENS",
    "Teknik Informatika",
    "OBS Operator",
    "Visual Creator",
    "Graphic Design",
    "Next.js",
    "TypeScript",
    "Clean Architecture"
  ],
  authors: [{ name: "Gusthi Pangestu" }],
  openGraph: {
    title: "Gusthi Pangestu | Visual Creator & Web Developer",
    description: "Menggabungkan presisi teknis dengan estetika seni.",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#05070d] text-slate-100 antialiased min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
