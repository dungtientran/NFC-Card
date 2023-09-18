import './globals.css'
import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mrs. Thanh Uyên',
  description: 'Mrs. Thanh Uyên',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
