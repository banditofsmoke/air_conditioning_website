import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Penguin Air-conditioning and Refrigeration',
  description: 'Created by Sletcher Systems',
  generator: 'Ice Cold',
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
