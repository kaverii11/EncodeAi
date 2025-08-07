import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Encode AI - Competitive Programming & AI/ML Club",
  description: "Join Encode AI, your college's premier competitive programming and AI/ML club. Participate in hackathons, competitions, and cutting-edge workshops.",
  keywords: ["competitive programming", "AI", "ML", "hackathon", "college club", "programming competition"],
  authors: [{ name: "Encode AI Club" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
