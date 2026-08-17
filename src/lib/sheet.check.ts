/** Roda com: node src/lib/sheet.check.ts */
import assert from 'node:assert';
import { parseCsv, rowsToRecommendations } from './sheet.ts';

const csv = [
  'Título,Imagem,Descrição,Link,Preço,Categoria',
  '"Meias antiderrapantes",https://img/1.jpg,"Kit com 5, o que uso em casa",https://s.shopee.com.br/x-i.1.2,"R$ 39,90",BEBÊS',
  'Termômetro digital,,,https://www.mercadolivre.com.br/y,,',
  ',,,,,',
  'Sem link,,,nao-e-url,,',
].join('\r\n');

const rows = parseCsv(csv);
assert.equal(rows.length, 4, 'linha vazia deve sumir');
assert.equal(rows[1][2], 'Kit com 5, o que uso em casa', 'vírgula dentro de aspas');
assert.equal(rows[1][4], 'R$ 39,90', 'preço com vírgula não pode virar duas colunas');

const items = rowsToRecommendations(rows);
assert.equal(items.length, 2, 'linha sem link válido deve sumir');
assert.deepEqual(items[0], {
  title: 'Meias antiderrapantes',
  image: 'https://img/1.jpg',
  description: 'Kit com 5, o que uso em casa',
  href: 'https://s.shopee.com.br/x-i.1.2',
  price: 'R$ 39,90',
  category: 'Bebês', // ela digita como quiser, o chip normaliza
  store: 'Shopee', // subdomínio do link curto ainda casa
});
// cabeçalho com acento tem que casar igual, e coluna vazia vira undefined
assert.deepEqual(items[1], {
  title: 'Termômetro digital',
  image: undefined,
  description: undefined,
  href: 'https://www.mercadolivre.com.br/y',
  price: undefined,
  category: undefined,
  store: 'Mercado Livre',
});

console.log('ok');
