import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "./components/theme-context";
import AosInitializer from "./components/aos-init";
import LoadingIndicator from "./components/loading-indicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhijeet Ringe",
  description: "This is my portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AosInitializer />
          <LoadingIndicator />
          <Navbar />
          <main>{children}</main>
          <Analytics/>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
      
  );
}
