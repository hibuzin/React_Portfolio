import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "8526854562"; 
  const message = "Hi, can i get time to discus with you ";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        background: "#25D366",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        boxShadow: "0 10px 25px rgba(37, 211, 102, 0.35)",
        zIndex: 9999,
        textDecoration: "none",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.boxShadow = "0 14px 32px rgba(37, 211, 102, 0.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(37, 211, 102, 0.35)";
      }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}