import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const siteUrl = 'https://inoue-classic.vercel.app'

export const metadata: Metadata = {
  title: 'Inoue.Co.ltd | Crafting Space. Defining Beauty.',
  description: 'エクステリア・外構工事・モルタル造形・MORTEX施工。北陸の高級外構デザインを手がけるInoue.Co.ltd。空間を創り、美しさを定義する。',
  generator: 'v0.app',
  keywords: ['エクステリア', '外構工事', 'モルタル造形', 'MORTEX', '北陸', '石川県', '加賀市'],
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Inoue.Co.ltd',
    title: 'Inoue.Co.ltd | Crafting Space. Defining Beauty.',
    description: 'エクステリア・外構工事・モルタル造形・MORTEX施工。北陸の高級外構デザインを手がけるInoue.Co.ltd。空間を創り、美しさを定義する。',
    images: [
      {
        url: '/ogp.jpg',
        width: 1024,
        height: 1536,
        alt: 'Inoue.Co.ltd | Crafting Space. Defining Beauty.',
      },
    ],
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inoue.Co.ltd | Crafting Space. Defining Beauty.',
    description: 'エクステリア・外構工事・モルタル造形・MORTEX施工。北陸の高級外構デザインを手がけるInoue.Co.ltd。空間を創り、美しさを定義する。',
    images: ['/ogp.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
