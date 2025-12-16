import content from '@/content/pt-br.json';

export type Content = typeof content;

export const getContent = () => {
  return content;
};
