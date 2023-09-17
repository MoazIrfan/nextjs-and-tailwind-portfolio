"use client"
import GoogleAnalytics from './GoogleAnalytics';
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

export const metadata = {
  title: 'GA | Next.js',
  description: 'Google Analytics in Next.js 13',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-900">
      <GoogleAnalytics />
        <ThemeProvider enableSystem={false} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
