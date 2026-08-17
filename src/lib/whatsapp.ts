export const PHONE = '5531994766307';

/** Todo agendamento do site cai no mesmo WhatsApp. */
export const whatsappUrl = (what = 'uma consulta') =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(
    `Olá! Gostaria de agendar ${what} com a Pediatra Gabriela Marinho`
  )}`;
