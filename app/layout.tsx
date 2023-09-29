import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Watch Shop',
  description: 'Created by Jay Z',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="watch__shop__ui">{children}</body>
    </html>
  )
}
