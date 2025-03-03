import Cursor from '@/components/following-cursor'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'

export const metadata: Metadata = {
  title: {
    template: '%s - Famesway',
    default: 'Famesway - Digital Studio',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The famesway Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">
        <SessionProvider>
          <Cursor />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
