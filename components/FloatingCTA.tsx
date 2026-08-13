"use client";

import { MessageCircle } from "lucide-react";

// Número de WhatsApp de Innova Sprint (confirmado por el fundador)
const WHATSAPP_LINK =
  "https://wa.me/525532779717?text=" +
  encodeURIComponent("Hola, quiero información sobre Innova Sprint 👋");

export default function FloatingCTA() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-3.5 text-sm font-semibold text-bg shadow-lg shadow-accent1/30 animate-pulse hover:animate-none"
      aria-label="Hablar con un especialista"
    >
      <MessageCircle size={18} />
      Hablar con un especialista
    </a>
  );
}
