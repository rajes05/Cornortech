import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:{
    default: "Cornor Tech Pvt. Ltd. | Where Tech Meets Solution | Tilottama, Butwal< Nepal",
    template: '%s | Cornor Tech',
  }, 
  description: "CornorTech turns ideas into powerful digital solutions. We deliver creative, reliable, and scalable tech services.",
  icons:{
    icon:"/logo.png",
    shortcut:"/logo.png",
    apple:"/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
