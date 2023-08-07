import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'notyet.quest',
  description: 'notyet.quest description...',
  openGraph: {
    title: 'notyet.quest',
    description: 'notyet.quest description...',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
