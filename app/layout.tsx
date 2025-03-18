import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AirCool Pro - HVAC Solutions Demo',
  description: 'A demo HVAC website template by Sletcher Systems',
  generator: 'Next.js - Sletcher Systems',
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
