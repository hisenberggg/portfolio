import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer"

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
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
      
  );
}
