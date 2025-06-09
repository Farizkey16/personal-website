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

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: "Farizky's portfolio",
    template: "%s | Farizky's portfolio",
  },
  description: 'Farizky is a web developer with 9+ years of experience in HR and product/project management. Now building modern web apps.',
  keywords: ["Farizky", "Web Developer", "Portfolio", "Next.js", "Indonesia"],
  openGraph: {
    title: "About Farizky – Fullstack Developer",
    description: "Experienced in HR, Product, and Web Development.",
    siteName: "Farizky Portfolio",
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/assets/favicon.ico',
  },
  manifest: '/manifest.json',
}


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
