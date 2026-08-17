import { SITE_URL } from '@/lib/links';
import type { MetadataRoute } from 'next';

/** Página única com âncoras: a raiz é o que importa, o resto ajuda o sitelinks. */
const ANCHORS: Array<[string, number]> = [
  ['', 1],
  ['#sobre', .8],
  ['#servicos', .8],
  ['#atendimento', .7],
  ['#consultas', .7],
  ['#modalidades', .7],
  ['#depoimentos', .6],
  ['#faq', .6],
  ['#contato', .9],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ANCHORS.map(([anchor, priority]) => ({
    url: `${SITE_URL}/${anchor}`,
    lastModified,
    changeFrequency: anchor ? 'monthly' : 'weekly',
    priority,
  }));
}
