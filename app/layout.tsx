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
    "twitter-image": "https://learnovate.vercel.app/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fea8f234e-06bf-4c38-8b1c-2c12bee47280-kp3e16.jpg&w=1920&q=75",
    "twitter-card": "summary_large_image",
    "og:url": "jsmasterypro-web.vercel.app",
    "og:image": "https://learnovate.vercel.app/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fea8f234e-06bf-4c38-8b1c-2c12bee47280-kp3e16.jpg&w=1920&q=75",
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
