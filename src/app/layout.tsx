import type { Metadata } from 'next'
import './globals.css'
import Cursor       from '@/components/Cursor'
import SoundButton  from '@/components/SoundButton'
import Navigation   from '@/components/Navigation'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'The Continental — Sanctuary for Digital Excellence',
  description:
    'A premium digital products organization. Precision. Power. Permanence. Every product a sanctuary.',
  openGraph: {
    title: 'The Continental',
    description: 'Sanctuary for Digital Excellence',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <Cursor />
        <Navigation />
        <main>{children}</main>
        <SoundButton />
      </body>
    </html>
  )
}
