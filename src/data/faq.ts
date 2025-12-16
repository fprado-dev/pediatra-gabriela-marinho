import { getContent } from '@/lib/content';

const { faq } = getContent();

export const faqs = faq.items.map((item, index) => ({
  id: index + 1,
  question: item.question,
  answer: item.answer
}));
