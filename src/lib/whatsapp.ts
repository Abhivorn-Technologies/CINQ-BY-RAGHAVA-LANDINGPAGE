import { PROJECT_INFO } from "@/data/project";

export type EnquiryType = "brochure" | "pricing" | "general";

export function getWhatsAppNumber(): string {
  const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (envNumber && envNumber.trim()) {
    return envNumber.replace(/[^0-9]/g, "");
  }
  // Fallback to project primary contact phone formatted for WhatsApp click-to-chat
  return PROJECT_INFO.contact.phonePrimary.replace(/[^0-9]/g, "");
}

export function openWhatsAppEnquiry(data: {
  type?: EnquiryType;
  name: string;
  phone: string;
  email?: string;
  message?: string;
}): void {
  const number = getWhatsAppNumber();
  const name = data.name.trim();
  const phone = data.phone.trim();
  const email = data.email?.trim() || "Not provided";
  const message = data.message?.trim() || "Not provided";
  const type = data.type || "general";

  let title = "CINQ BY RAGHAVA — CONTACT ENQUIRY";
  let requestLabel = "General Contact / Callback";

  if (type === "brochure") {
    title = "CINQ BY RAGHAVA — BROCHURE REQUEST";
    requestLabel = "Brochure";
  } else if (type === "pricing") {
    title = "CINQ BY RAGHAVA — PRICING ENQUIRY";
    requestLabel = "Pricing Details";
  }

  const messageText = `${title}\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}\n\nRequest: ${requestLabel}\n\nSource: Website`;

  const url = `https://wa.me/${number}?text=${encodeURIComponent(messageText)}`;
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
