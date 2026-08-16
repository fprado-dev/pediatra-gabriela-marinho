'use client';

import { getContent } from '@/lib/content';
import { LATTES_URL } from '@/lib/links';

const { footer, navigation } = getContent();

const links = [
  { href: '#inicio', label: navigation.items.home },
  { href: '#sobre', label: navigation.items.about },
  { href: '#servicos', label: navigation.items.services },
  { href: '#faq', label: navigation.items.faq },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-on-ink/55 border-t border-on-ink/15">
      <div className="max-w-[1240px] w-full mx-auto px-5 sm:px-8 lg:px-20 py-8 flex flex-wrap items-center justify-between gap-6">
        <small className="text-[.74rem]">{footer.credentials}</small>

        <nav className="flex flex-wrap gap-6 text-[.78rem]">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-on-ink transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href={LATTES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-ink transition-colors"
          >
            {footer.lattes}
          </a>
        </nav>
      </div>
    </footer>
  );
}
