import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";

const inter = Poppins({ subsets: ["latin"], weight: ["200", "100", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "PBCode",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <Navbar />
        <div id="burger"></div>
        <div id="menu"></div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
