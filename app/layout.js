import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'notyet.quest',
  description: 'dexcription of the group comes here...',
  openGraph: {
    title: 'notyet.quest',
    description: 'description of the group comes here...',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
