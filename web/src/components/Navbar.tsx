"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Our Work", href: "#philosophy" },
  { label: "Recognition", href: "#recognition" },
  { label: "Spatial Plan", href: "#spatial-program" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        background: scrolled
          ? "rgba(245, 240, 235, 0.94)"
          : "linear-gradient(to bottom, rgba(10, 8, 6, 0.8) 0%, rgba(10, 8, 6, 0.3) 70%, transparent 100%)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(160, 116, 42, 0.18)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(100, 80, 50, 0.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: scrolled ? "68px" : "84px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "height 0.3s ease",
        }}
      >
        {/* Official Real Logo Mark + Text */}
        <a
          href="#"
          id="nav-logo"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            src={scrolled ? "/logo-symbol.png" : "/logo-symbol-dark.png"}
            alt="Architecture + Swath Emblem"
            style={{
              height: scrolled ? "36px" : "40px",
              width: "auto",
              objectFit: "contain",
              transition: "all 0.3s ease",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
              gap: "2px",
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.98rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                color: scrolled ? "var(--text-primary)" : "#ffffff",
                textTransform: "uppercase",
                transition: "color 0.3s ease",
              }}
            >
              Architecture
            </span>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.86rem",
                fontWeight: 800,
                letterSpacing: "0.26em",
                color: scrolled ? "#a0742a" : "#f8e1a8",
                textTransform: "uppercase",
                textShadow: scrolled
                  ? "0 0 10px rgba(160, 116, 42, 0.5), 0 0 20px rgba(160, 116, 42, 0.25)"
                  : "0 0 14px rgba(248, 225, 168, 0.9), 0 0 28px rgba(212, 168, 74, 0.7), 0 0 45px rgba(196, 154, 60, 0.4)",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span
                style={{
                  color: "#d94a38",
                  fontWeight: 700,
                  textShadow: "0 0 8px rgba(217, 74, 56, 0.7)",
                }}
              >
                +
              </span>{" "}
              SWATH
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              id={`nav-${link.label.toLowerCase()}`}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: scrolled ? "var(--text-muted)" : "rgba(235,215,185,0.85)",
                transition: "color 0.3s ease",
                padding: "4px 0",
                position: "relative",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.color = "var(--accent-gold)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.color = scrolled ? "var(--text-muted)" : "rgba(235,215,185,0.85)")
              }
            >
              {link.label}
            </button>
          ))}

          <button
            id="nav-cta"
            onClick={() => handleNavClick("#contact")}
            style={{
              padding: "0.6rem 1.5rem",
              background: "linear-gradient(135deg, var(--accent-gold-light), var(--accent-gold))",
              color: "#090d14",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 30px rgba(197, 160, 89, 0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            Book Consultation
            <ChevronRight size={13} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          id="nav-mobile-menu"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            background: "none",
            border: scrolled ? "1px solid var(--border-subtle)" : "1px solid rgba(255,255,255,0.3)",
            borderRadius: "8px",
            padding: "8px",
            cursor: "pointer",
            color: scrolled ? "var(--text-primary)" : "#f5f0eb",
            display: "none",
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="mobile-nav"
        style={{
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          background: "rgba(245, 240, 235, 0.98)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(160, 116, 42, 0.18)",
          padding: "1rem 2rem 1.5rem",
          gap: "0.5rem",
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavClick(link.href)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              padding: "0.75rem 0",
              textAlign: "left",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => handleNavClick("#contact")}
          style={{
            marginTop: "0.75rem",
            padding: "0.75rem",
            background: "linear-gradient(135deg, var(--accent-gold-light), var(--accent-gold))",
            color: "#090d14",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Book Consultation →
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
