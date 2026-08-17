/**
 * Indicações da Gabriela: linha por produto, tudo preenchido à mão por ela na planilha
 *   https://docs.google.com/spreadsheets/d/1SFeMNMe0zt8rw3JOMU6x4PoE2oOSD8o9hNoJqb3aUyg
 *
 * Cabeçalho da primeira linha (a ordem das colunas não importa, o nome sim):
 *   Titulo | Imagem | Descricao | Link | Preco | Categoria
 *
 * Nada é raspado das lojas: Shopee bloqueia robô (testado) e preço muda toda semana,
 * então quem manda é a planilha. E nada de cache: cada visita lê a versão atual,
 * então uma correção dela aparece no próximo refresh.
 */
const SHEET_ID = '1SFeMNMe0zt8rw3JOMU6x4PoE2oOSD8o9hNoJqb3aUyg';
const SHEET_CSV = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

export type Recommendation = {
  title: string;
  image?: string;
  description?: string;
  href: string;
  price?: string;
  /** Como ela digitou na planilha, só com a primeira letra em maiúscula. */
  category?: string;
  /** Deduzido do domínio do link — uma coluna a menos pra ela preencher. */
  store?: string;
};

const STORES: Record<string, string> = {
  'shopee.com.br': 'Shopee',
  'mercadolivre.com.br': 'Mercado Livre',
  'mercadolivre.com': 'Mercado Livre',
  'amazon.com.br': 'Amazon',
  'magazineluiza.com.br': 'Magalu',
  'americanas.com.br': 'Americanas',
};

export function storeName(href: string): string | undefined {
  try {
    const host = new URL(href).hostname.replace(/^www\./, '');
    const known = Object.keys(STORES).find((d) => host === d || host.endsWith(`.${d}`));
    return known ? STORES[known] : host;
  } catch {
    return undefined;
  }
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** CSV mínimo (aspas + aspas escapadas + CRLF). ponytail: sem lib, troque por papaparse se o formato apertar. */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [[]];
  let field = '';
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c !== '"') field += c;
      else if (text[i + 1] === '"') { field += '"'; i++; }
      else quoted = false;
    } else if (c === '"') quoted = true;
    else if (c === ',') { rows[rows.length - 1].push(field); field = ''; }
    else if (c === '\n') { rows[rows.length - 1].push(field); field = ''; rows.push([]); }
    else if (c !== '\r') field += c;
  }
  rows[rows.length - 1].push(field);

  return rows.filter((r) => r.some((f) => f.trim()));
}

const normalize = (s: string) =>
  s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export function rowsToRecommendations(rows: string[][]): Recommendation[] {
  const [header, ...body] = rows;
  if (!header) return [];

  const col = (name: string) => header.findIndex((h) => normalize(h) === name);
  const idx = {
    title: col('titulo'),
    image: col('imagem'),
    description: col('descricao'),
    href: col('link'),
    price: col('preco'),
    category: col('categoria'),
  };
  if (idx.title < 0 || idx.href < 0) return [];

  const at = (row: string[], i: number) => (i < 0 ? undefined : row[i]?.trim() || undefined);

  return body
    .map((row) => ({
      title: at(row, idx.title) ?? '',
      image: at(row, idx.image),
      description: at(row, idx.description),
      href: at(row, idx.href) ?? '',
      price: at(row, idx.price),
      category: at(row, idx.category)?.toLowerCase(),
    }))
    .filter((r) => r.title && /^https?:\/\//.test(r.href))
    .map((r) => ({
      ...r,
      category: r.category && capitalize(r.category),
      store: storeName(r.href),
    }));
}

export async function getRecommendations(): Promise<Recommendation[]> {
  try {
    // sem cache: cada carregamento da página lê a planilha como ela está agora
    const res = await fetch(SHEET_CSV, { cache: 'no-store' });
    if (!res.ok) return [];
    return rowsToRecommendations(parseCsv(await res.text()));
  } catch {
    return [];
  }
}
