import '../styles/globals.css'
import { DM_Sans } from 'next/font/google'
import Navigation from '../components/Navigation'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'Ciao Vello Studio',
  description: 'Depilación láser con alma en Madrid.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body className="bg-[#FFF8F2] text-[#2C2C2C] font-sans">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
