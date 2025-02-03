'use client'

import { Geist, Geist_Mono, Inter } from 'next/font/google'

const interSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

// export const metadata = {
//   title: 'Kizni',
//   description: 'Experts in open source business applications',
// }

export const viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

