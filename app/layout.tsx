import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clip & Chill - Home Haircuts for Men & Boys | Switzerland',
  description: 'Professional haircuts for men and boys delivered to your home in Switzerland. Your cut, your space, your convenience. Book today!',
  keywords: 'home haircuts, mobile barber, mens haircuts, boys haircuts, Switzerland, Bern, convenience, professional barber',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
