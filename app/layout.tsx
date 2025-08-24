import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clip & Chill - Professional Home Haircuts for Men & Boys | Switzerland',
  description: 'Experience premium barbering at your doorstep! Professional haircuts for men and boys delivered to your home across Switzerland. Expert barbers, your convenience. Book your perfect cut today!',
  keywords: [
    'home haircuts',
    'mobile barber Switzerland',
    'mens haircuts at home',
    'boys haircuts',
    'professional barber',
    'home barbering service',
    'Switzerland haircuts',
    'Bern barber',
    'Zurich haircuts',
    'Basel barber',
    'convenience haircuts',
    'door-to-door barbering',
    'premium haircuts',
    'classic cuts',
    'fade haircuts',
    'Swiss quality'
  ],
  authors: [{ name: 'Clip & Chill' }],
  creator: 'Clip & Chill',
  publisher: 'Clip & Chill',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://clipandchill.ch'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'de-CH': '/de',
      'fr-CH': '/fr',
    },
  },
  openGraph: {
    title: 'Clip & Chill - Professional Home Haircuts | Switzerland',
    description: 'Premium barbering services delivered to your doorstep across Switzerland. Expert cuts, your convenience.',
    url: 'https://clipandchill.ch',
    siteName: 'Clip & Chill',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clip & Chill - Professional Home Haircuts',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clip & Chill - Professional Home Haircuts | Switzerland',
    description: 'Premium barbering services delivered to your doorstep across Switzerland. Expert cuts, your convenience.',
    creator: '@clipandchill',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
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
