
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Total from './componets/Total.tsx/Total'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next_Faraway',
  description: 'Awesome app created using next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Total/>
        {children}</body>
    </html>
  )
}
