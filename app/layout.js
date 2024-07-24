import { Inter } from "next/font/google";
import "./globals.css";
import FooterBlock from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { Toaster } from "../components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jay Sagar",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <FooterBlock />
        <Toaster />
        </body>
    </html>
  );
}
