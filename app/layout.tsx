import type { Metadata } from "next";
import { Archivo_Narrow, Nunito_Sans, Palanquin } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { SidebarProvider } from "@/src/components/ui/sidebar";
import { AppSidebar } from "@/src/components/AppSidebar";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/src/components/ui/sonner";
import { TopBar } from "@/src/components/Topbar";
config.autoAddCss = false;

export const archivo_narrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
});

export const nunito_sans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const palanquin = Palanquin({
  weight: "400",
  variable: "--font-palanquin",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "NUNES Joao-Rafael - Portfolio",
  description: "Développeur Full Stack Freelance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${palanquin.variable} ${archivo_narrow.variable} ${nunito_sans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={false}>
            <AppSidebar />
            <TopBar />
            <main>{children}</main>
          </SidebarProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
