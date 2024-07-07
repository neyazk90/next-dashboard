import { Inter, Roboto_Mono, Lusitana } from 'next/font/google'
 
export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    weight: '500'
});
 
export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });