'use client';

import { getContent } from '@/lib/content';
import { PHONE, whatsappUrl } from '@/lib/whatsapp';
import { MessageCircle, Phone } from 'lucide-react';

/** Barra de agendamento fixa na zona do polegar. Só no mobile. */
export default function MobileCta() {
  const { contact } = getContent();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-ground/92 backdrop-blur-md border-t border-line pb-[env(safe-area-inset-bottom,0px)]">
      <div className="flex items-center gap-2.5 px-5 py-3">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-coral text-white text-[.85rem] font-semibold active:scale-[.98] transition-transform"
        >
          <MessageCircle className="w-4.5 h-4.5" />
          {contact.actions.whatsapp}
        </a>

        <a
          href={`tel:+${PHONE}`}
          aria-label={contact.actions.phone}
          className="grid place-items-center w-11 h-11 shrink-0 rounded-full border border-line-strong text-ink active:scale-[.96] transition-transform"
        >
          <Phone className="w-4.5 h-4.5" />
        </a>
      </div>
    </div>
  );
}
