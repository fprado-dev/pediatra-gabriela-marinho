import { getContent } from '@/lib/content';
import { EMAIL, INSTAGRAM_URL, LATTES_URL, LINKEDIN_URL, SITE_URL } from '@/lib/links';
import { PHONE } from '@/lib/whatsapp';
import type { FAQPage, Person, Physician, WithContext } from 'schema-dts';

const CLINIC_NAME = 'Marinho Clínica Avançada';
const DOCTOR_NAME = 'Gabriela Marinho';
const TELEPHONE = `+${PHONE}`;

export default function SchemaMarkup() {
  const { about, services, faq, contact, specializedCare } = getContent();

  const address = {
    '@type': 'PostalAddress',
    streetAddress: 'Avenida Patriótica, 80, Sala 103',
    addressLocality: 'Ouro Branco',
    addressRegion: 'MG',
    postalCode: '36492-258',
    addressCountry: 'BR',
  } as const;

  const openingHours = [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00',
    },
  ] as const;

  const practice: WithContext<Physician> = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_URL}/#consultorio`,
    name: `${DOCTOR_NAME} — Pediatra`,
    description: getContent().meta.description,
    url: SITE_URL,
    telephone: TELEPHONE,
    email: EMAIL,
    image: `${SITE_URL}/photos/consultorio.jpg`,
    address,
    medicalSpecialty: 'Pediatric',
    parentOrganization: {
      '@type': 'MedicalClinic',
      name: CLINIC_NAME,
      address,
    },
    areaServed: [
      { '@type': 'City', name: 'Ouro Branco' },
      { '@type': 'State', name: 'Minas Gerais' },
    ],
    openingHoursSpecification: [...openingHours],
    availableService: Object.values(services.items).map((service) => ({
      '@type': 'MedicalProcedure',
      name: service.title,
      description: service.description,
    })),
  };

  const doctor: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#gabriela-marinho`,
    name: DOCTOR_NAME,
    jobTitle: 'Médica Pediatra',
    description: about.description1,
    url: SITE_URL,
    telephone: TELEPHONE,
    email: EMAIL,
    image: `${SITE_URL}/photos/sobre.jpg`,
    sameAs: [INSTAGRAM_URL, LINKEDIN_URL, LATTES_URL],
    worksFor: { '@type': 'MedicalClinic', name: CLINIC_NAME, url: SITE_URL },
    workLocation: { '@type': 'Place', address },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Centro Universitário Presidente Tancredo de Almeida Neves',
    },
    // CRM e RQE vêm do conteúdo, para não divergirem do que a página mostra
    identifier: about.credentials.map((credential) => ({
      '@type': 'PropertyValue',
      name: credential.description,
      value: credential.title,
    })),
    knowsAbout: specializedCare.differentials.map((d) => d.title),
  };

  const faqPage: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      {[practice, doctor, faqPage].map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* contact é lido para manter o endereço em um só lugar */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.placename" content={contact.address.lines[2]} />
    </>
  );
}
