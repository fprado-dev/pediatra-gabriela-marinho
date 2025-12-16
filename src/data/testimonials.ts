import { getContent } from '@/lib/content';

const { testimonials: testimonialsContent } = getContent();

export const testimonials = testimonialsContent.items.map((item, index) => ({
  id: index + 1,
  name: item.name,
  role: item.role,
  content: item.content,
  rating: 5 // Default rating as per original file
}));
