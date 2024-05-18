import { JetBrains_Mono as FontMono, Inter as FontSans, Manrope } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const sansFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
