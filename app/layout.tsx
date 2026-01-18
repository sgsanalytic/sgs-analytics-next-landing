import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getTranslations } from "next-intl/server";
import "./globals.css";
import { SgsNavigation } from "@/features/custom-ui/components/SgsNavigation";
import { SgsFooter } from "@/features/custom-ui/components/SgsFooter";
import { ContextProvider } from "@/features/context/components";
import {NextIntlClientProvider} from 'next-intl';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  
  return {
    title: t('title'),
    description: t('description'),
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContextProvider>
          <NextIntlClientProvider>
            <SgsNavigation />
            {children}
            <SgsFooter />
          </NextIntlClientProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
