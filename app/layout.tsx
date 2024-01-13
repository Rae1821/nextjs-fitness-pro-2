import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/shared/Header'


export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-dmSans',
})

export const metadata: Metadata = {
  title: 'Fitness Pro v2',
  description: 'Track your workouts and see your progress',
  icons: {
    icon: '/assets/images/logo.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={dmSans.variable}>
          <Header />
          {children}</body>
      </html>
    </ClerkProvider>

  )
}
