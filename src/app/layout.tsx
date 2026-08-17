import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_URL } from '@/lib/links';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#A8C9F5',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Pediatra Gabriela Marinho - Consultas Online e Presenciais',
  description: 'Pediatra especializada em acompanhamento infantil. Consultas online e presenciais. Agende sua consulta com quem entende de crianças.',
  keywords: ['pediatra', 'pediatra online', 'consulta pediatra', 'gabriela marinho', 'pediatra mg', 'mg', 'ouro branco'],
  authors: [{ name: 'Pediatra Gabriela Marinho' }],
  robots: 'index, follow',
  icons: {
    icon: '/icon1.png',
    shortcut: '/icon1.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Pediatra Gabriela Marinho',
    title: 'Pediatra Gabriela Marinho - Consultas Online e Presenciais',
    description: 'Pediatra especializada em acompanhamento infantil. Consultas online e presenciais.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pediatra Gabriela Marinho',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pediatragabrielamarinho',
    title: 'Pediatra Gabriela Marinho - Consultas Online e Presenciais',
    description: 'Pediatra especializada em acompanhamento infantil. Consultas online e presenciais.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
