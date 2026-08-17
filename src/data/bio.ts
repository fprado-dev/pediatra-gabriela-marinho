import { INSTAGRAM_URL, LATTES_URL, SITE_URL } from '@/lib/links';
import { whatsappUrl } from '@/lib/whatsapp';

/**
 * Links principais do bio.pediatragabrielamarinho.com.br, na ordem em que aparecem.
 * `internal` marca a rota do próprio site: sem target="_blank".
 */
export const BIO_LINKS = [
  { label: 'Agendar consulta', hint: 'WhatsApp · resposta rápida', href: whatsappUrl(), primary: true },
  { label: 'Acessar o site', hint: 'pediatragabrielamarinho.com.br', href: SITE_URL },
  { label: 'Instagram', hint: '@pediatragabrielamarinho', href: INSTAGRAM_URL },
  { label: 'Currículo Lattes', hint: 'Formação e produção científica', href: LATTES_URL },
  { label: 'Indicações da Gabi', hint: 'Produtos que eu recomendo no consultório', href: '/bio/indicacoes', internal: true },
];
