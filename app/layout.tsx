import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Js Mastery',
  description: 'Js Mastery',
  other: {
    'theme-color': "#00d1117",
    'color-scheme': "dark only",
    "twitter-image": "https://jsmasterypro-web.vercel.app/jsm-logo.svg",
    "twitter-card": "summary_large_image",
    "og:url": "jsmasterypro-web.vercel.app",
    "og:image": "https://jsmasterypro-web.vercel.app/jsm-logo.svg",
    "og:type": "website"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-black-100 font-poppins", inter.className)}>{children}</body>
    </html>
  )
}
