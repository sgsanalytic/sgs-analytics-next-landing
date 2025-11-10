import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SgsNavigation } from "@/features/custom-ui/components/SgsNavigation";
import { SgsFooter } from "@/features/custom-ui/components/SgsFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Automatiza - SGS ANALYTICS",
  description: "Automatiza tu negocio con SGS ANALYTICS",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Automatiza - SGS ANALYTICS",
    description: "Automatiza tu negocio con SGS ANALYTICS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatiza - SGS ANALYTICS",
    description: "Automatiza tu negocio con SGS ANALYTICS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SgsNavigation />
        {children}
        <SgsFooter />
      </body>
    </html>
  );
}
