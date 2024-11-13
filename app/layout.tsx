import type { Metadata } from "next";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
