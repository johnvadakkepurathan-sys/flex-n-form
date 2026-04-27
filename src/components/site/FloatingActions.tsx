import { Phone, MessageCircle } from "lucide-react";

const PHONE = "+15551234567";
const WHATSAPP_NUMBER = "15551234567";
const WHATSAPP_MSG = encodeURIComponent("Hi, I want to join your gym");

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.7_0.18_145)] text-white shadow-elevated hover:scale-110 transition-transform animate-pulse-glow"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elevated hover:scale-110 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
