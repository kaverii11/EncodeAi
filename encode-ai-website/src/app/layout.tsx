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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className={`${inter.className} antialiased bg-dark-900 text-gray-100 min-h-screen`}>
        <div className="relative">
          {/* Background Effects */}
          <div className="fixed inset-0 -z-10">
            {/* Gradient Orbs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-200"></div>
            <div className="absolute bottom-20 left-40 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-400"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            
            {/* Radial Gradient */}
            <div className="absolute inset-0 bg-gradient-radial from-primary-900/20 via-transparent to-transparent"></div>
          </div>
          
          {children}
        </div>
      </body>
    </html>
  );
}
