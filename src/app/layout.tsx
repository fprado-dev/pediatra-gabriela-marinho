import SchemaMarkup from '@/components/SchemaMarkup';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
;

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pediatra Gabriela Marinho - Consultas Online e Presenciais',
  description: 'Pediatra especializada em acompanhamento infantil. Consultas online e presenciais. Agende sua consulta com quem entende de crianças.',
  keywords: ['pediatra', 'pediatra online', 'consulta pediatra', 'gabriela marinho', 'pediatra sp'],
  authors: [{ name: 'Pediatra Gabriela Marinho' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://pediatragabrielamarinho.com.br',
    siteName: 'Pediatra Gabriela Marinho - Pediatra',
    title: 'Pediatra Gabriela Marinho - Consultas Online e Presenciais',
    description: 'Pediatra especializada em acompanhamento infantil. Consultas online e presenciais.',
    images: [
      {
        url: 'https://pediatragabrielamarinho.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pediatra Gabriela Marinho - Pediatra',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pediatragabrielamarinho',
    title: 'Pediatra Gabriela Marinho - Consultas Online e Presenciais',
    description: 'Pediatra especializada em acompanhamento infantil. Consultas online e presenciais.',
    images: ['https://pediatragabrielamarinho.com.br/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://pediatragabrielamarinho.com.br" />
      </head>
      <body className={montserrat.className}>
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}