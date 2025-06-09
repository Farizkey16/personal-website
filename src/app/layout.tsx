import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { Geist, Geist_Mono, Bebas_Neue, Inter, IBM_Plex_Sans} from "next/font/google";
import "./globals.css";
import { bebasNeue, ibmPlex } from "@/components/sections/Profile";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Farizky Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${ibmPlex.variable} antialiased min-h-screen`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
