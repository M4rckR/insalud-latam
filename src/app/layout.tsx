import type { Metadata } from "next";
import { Poppins, Nunito, Inter } from "next/font/google";
import "../css/index.css";
import { Footer } from "@/components/Footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Insalud | Centro de salud",
  description: "Centro de salud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${poppins.variable} ${nunito.variable} ${inter.variable} antialiased font-poppins`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
