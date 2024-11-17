import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";


export const metadata: Metadata = {
  title: "SEWYCA",
  description: "Society for Empowerment of Women Youth and Children for Action (SEWYCA)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <HeroSlider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
