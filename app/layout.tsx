import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Gooners Janta Party (GJP) | Official Website",
  description: "India's #1 satirical political party for the chronically online. We demand free WiFi, 75% reservation for singles, and professional recognition. Join the revolution.",
  verification: {
    google: 'D2Np5zTL1EEH1I-8De5M-qcsWO4GP0IxSnrBY41Kis0',
  },
  openGraph: {
    title: "Gooners Janta Party - Join the Revolution",
    description: "Party for the Sacrificers. Voice of the chronically online and unemployed.",
    url: "https://gooners-janta-party-385330076013.asia-south1.run.app",
    siteName: "Gooners Janta Party",
    images: [
      {
        url: "/gooner-symbol.png", 
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geistMono.variable} ${playfair.variable} font-mono antialiased noise-overlay`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}