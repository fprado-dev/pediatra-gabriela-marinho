import { NextResponse } from 'next/server'

export async function GET() {
  const seoData = {
    title: 'Dra. Gabriela Marinho - Pediatra | Consultas Online e Presenciais',
    description: 'Pediatra especializada em acompanhamento infantil. Consultas online e presenciais. Agende sua consulta com quem entende de crianças.',
    keywords: ['pediatra', 'pediatra online', 'consulta pediatra', 'gabriela marinho', 'pediatra sp'],
    author: 'Dra. Gabriela Marinho',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: 'https://gabrielamartinho.com.br',
      siteName: 'Dra. Gabriela Marinho - Pediatra',
      title: 'Dra. Gabriela Marinho - Pediatra | Consultas Online e Presenciais',
      description: 'Pediatra especializada em acompanhamento infantil. Consultas online e presenciais.',
      images: [
        {
          url: 'https://gabrielamartinho.com.br/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Dra. Gabriela Marinho - Pediatra',
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@gabrielamartinho',
      title: 'Dra. Gabriela Marinho - Pediatra | Consultas Online e Presenciais',
      description: 'Pediatra especializada em acompanhamento infantil. Consultas online e presenciais.',
      images: ['https://gabrielamartinho.com.br/og-image.jpg'],
    },
    structuredData: {
      medicalOrganization: {
        '@context': 'https://schema.org',
        '@type': 'MedicalOrganization',
        name: 'Dra. Gabriela Marinho - Pediatra',
        description: 'Pediatra especializada em acompanhamento infantil. Consultas online e presenciais em São Paulo.',
        url: 'https://gabrielamartinho.com.br',
        telephone: '+5511999999999',
        email: 'contato@gabrielamartinho.com.br',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rua das Flores, 123',
          addressLocality: 'São Paulo',
          addressRegion: 'SP',
          postalCode: '01415-000',
          addressCountry: 'BR'
        },
        medicalSpecialty: 'Pediatrics',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00'
        }
      },
      person: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Dra. Gabriela Marinho',
        jobTitle: 'Pediatra',
        description: 'Médica pediatra com mais de 10 anos de experiência em acompanhamento infantil',
        url: 'https://gabrielamartinho.com.br',
        telephone: '+5511999999999',
        email: 'contato@gabrielamartinho.com.br',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '127'
        }
      }
    }
  }

  return NextResponse.json(seoData)
}