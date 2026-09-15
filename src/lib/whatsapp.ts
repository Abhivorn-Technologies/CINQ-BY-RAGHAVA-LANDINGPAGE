import { PROJECT_INFO } from "@/data/project";

export function getWhatsAppNumber(): string {
  const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (envNumber && envNumber.trim()) {
    return envNumber.replace(/[^0-9]/g, "");
  }
  // Fallback to project primary contact phone formatted for WhatsApp click-to-chat
  return PROJECT_INFO.contact.phonePrimary.replace(/[^0-9]/g, "");
}

export function openWhatsAppEnquiry(data: {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}): void {
  const number = getWhatsAppNumber();
  const name = data.name.trim();
  const phone = data.phone.trim();
  const email = data.email?.trim() || "Not provided";
  const message = data.message?.trim() || "General Project & Pricing Enquiry";

  const messageText = `CINQ BY RAGHAVA — NEW ENQUIRY\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}\nSource: Website`;

  const url = `https://wa.me/${number}?text=${encodeURIComponent(messageText)}`;
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
