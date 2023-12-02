import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter",
});

const playfair = Playfair({
  subsets: ["latin-ext"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Lukas Klockenhoff",
  description: "My Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={twMerge(
        "h-full w-full overflow-y-scroll",
        inter.variable,
        playfair.variable,
      )}
      lang="en"
    >
      <body
        className={
          "min-h-screen w-full bg-white dark:bg-background overflow-y-scroll select-text selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black"
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="grid h-full min-h-screen w-full pb-20 bg-white dark:bg-background">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
