import { getContent } from '@/lib/content';

const { items } = getContent().services;

export const services = [
  'pediatric-consultation',
  'emergency-care',
  'preventive-care',
  'online-consultation',
  'specialized-follow-up',
].map((id) => ({ id, ...items[id as keyof typeof items] }));
