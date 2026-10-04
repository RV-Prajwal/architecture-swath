"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl =
    "https://wa.me/919944585627?text=Hello%20Architecture%20%2B%20Swath%2C%20I%20would%20like%20to%20discuss%20an%20architectural%20project.";

  return (
    <aside
      aria-label="Direct WhatsApp Studio Consultation"
      style={{
        position: "fixed",
        bottom: "clamp(20px, 4vh, 32px)",
        right: "clamp(20px, 4vw, 32px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {/* Tooltip Badge on Hover */}
      <div
        style={{
          background: "rgba(18, 20, 24, 0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          color: "#ffffff",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.82rem",
          fontWeight: 500,
          letterSpacing: "0.02em",
          padding: "8px 16px",
          borderRadius: "50px",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.25)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(10px)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#25D366",
            boxShadow: "0 0 8px #25D366",
          }}
        />
        <span>Chat with Principal Architects</span>
      </div>

      {/* Floating Circular WhatsApp Button */}
      <a
        id="whatsapp-floating-widget"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Architecture + Swath"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: hovered
            ? "0 10px 32px rgba(37, 211, 102, 0.55), 0 4px 12px rgba(0, 0, 0, 0.2)"
            : "0 6px 24px rgba(37, 211, 102, 0.4), 0 2px 8px rgba(0, 0, 0, 0.15)",
          transform: hovered ? "scale(1.08) translateY(-2px)" : "scale(1) translateY(0)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          textDecoration: "none",
          position: "relative",
        }}
      >
        {/* Subtle Pulse Animation Ring */}
        <span
          style={{
            position: "absolute",
            inset: "-4px",
            borderRadius: "50%",
            border: "2px solid #25D366",
            opacity: hovered ? 0 : 0.4,
            animation: "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
            pointerEvents: "none",
          }}
        />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ fill: "#ffffff", stroke: "transparent" }}
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.777.978-.952 1.179-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.494-.894-.798-1.498-1.783-1.674-2.084-.175-.301-.019-.464.132-.614.135-.134.301-.351.451-.527.15-.175.2-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.232-.244-.585-.493-.505-.677-.514-.175-.009-.376-.009-.577-.009s-.527.075-.802.376c-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.11.15.2 2.121 3.239 5.14 4.542.718.309 1.278.494 1.716.633.722.23 1.378.197 1.9.119.58-.088 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351z" />
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
        </svg>
      </a>
    </aside>
  );
}
