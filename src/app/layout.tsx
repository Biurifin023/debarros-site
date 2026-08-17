import type { Metadata } from "next";
import { Archivo_Black, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://debarros-tattoo.vercel.app"),
  title: "De Barros Tattoo",
  description: "Tatuador com 8 anos de experiência em Volta Redonda. Estilos tradicionais americanos e japoneses. Peça seu orçamento.",
  openGraph: {
    title: "De Barros Tattoo",
    description: "Tatuador com 8 anos de experiência em Volta Redonda. Estilos tradicionais americanos e japoneses. Peça seu orçamento.",
    images: [
      { url: "/bg-hero-2.PNG"},
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivoBlack.variable} ${dmSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
