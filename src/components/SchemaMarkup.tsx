'use client'

import { MedicalOrganization, Person, FAQPage, WithContext } from 'schema-dts'

export default function SchemaMarkup() {
  const medicalOrganizationSchema: WithContext<MedicalOrganization> = {
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
    medicalSpecialty: 'Pediatric',
    areaServed: {
      '@type': 'City',
      name: 'São Paulo'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Pediatria',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Consulta Pediátrica',
            description: 'Acompanhamento completo do desenvolvimento infantil'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Consulta Online',
            description: 'Atendimento remoto para maior comodidade'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Atendimento de Urgência',
            description: 'Orientação rápida para situações emergenciais'
          }
        }
      ]
    }
  }

  const doctorSchema: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dra. Gabriela Marinho',
    jobTitle: 'Pediatra',
    description: 'Médica pediatra com mais de 10 anos de experiência em acompanhamento infantil',
    url: 'https://gabrielamartinho.com.br',
    telephone: '+5511999999999',
    email: 'contato@gabrielamartinho.com.br',
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'Dra. Gabriela Marinho - Pediatra',
      url: 'https://gabrielamartinho.com.br'
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'Universidade Federal de São Paulo',
      url: 'https://unifesp.br'
    },
    knowsAbout: [
      'Pediatria',
      'Desenvolvimento Infantil',
      'Medicina Preventiva',
      'Nutrição Infantil',
      'Vacinação'
    ]
  }

  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Qual a idade ideal para a primeira consulta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Recomendo a primeira consulta entre 15-30 dias de vida do bebê. É fundamental para avaliar o desenvolvimento inicial, verificar o peso, altura e identificar possíveis problemas precocemente.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quais documentos levar na primeira consulta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cartão de vacina, caderneta de saúde, exames recentes, documentos dos pais e qualquer receita médica que o bebê esteja usando. Também é importante trazer uma lista de dúvidas.'
        }
      },
      {
        '@type': 'Question',
        name: 'Como funciona a consulta online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A consulta online é realizada por vídeo chamada. Os pais devem estar em um local tranquilo com boa iluminação. É ideal que a criança esteja presente e acordada para uma melhor avaliação.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quais são os horários de atendimento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Atendo de segunda a sexta-feira, das 8h às 18h. Consultas online podem ser agendadas com maior flexibilidade, incluindo alguns finais de semana para casos urgentes.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalOrganizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(doctorSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  )
}