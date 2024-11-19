import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "SEWYCA",
  description: "SEWYCA is a non-profit charitable organization, our focus remains on assisting communities at grassroots levels to build better futures.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
