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
  openGraph: {
    title: "Abhijeet Ringe - Software Engineer",
    description: "I am a dedicated and skilled professional with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight their core competencies, and further their success.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" />
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
