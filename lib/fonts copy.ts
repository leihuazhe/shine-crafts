import { Inter, Dancing_Script, Lusitana, Manrope, Comic_Neue } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const dancing_script = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400'],
});

export const sansFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

// Comic+Neue



export const comicNeue = Comic_Neue({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
})