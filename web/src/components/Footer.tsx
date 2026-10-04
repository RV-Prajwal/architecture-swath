"use client";

import Link from "next/link";
import { ExternalLink, ShieldCheck } from "lucide-react";

const quickLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Our Philosophy", href: "#philosophy" },
  { label: "Spatial Program", href: "#spatial-program" },
  { label: "Contact Studio", href: "#contact" },
  { label: "Privacy & DPDP Notice", href: "/privacy" },
];

const caseStudies = [
  { label: "House at California Layout", href: "#portfolio" },
  { label: "Project N170", href: "#portfolio" },
  { label: "House Neeranjanam", href: "#portfolio" },
  { label: "Abhyudaya", href: "#portfolio" },
  { label: "Into the Woods", href: "#portfolio" },
];

const publications = [
  { label: "Volume Zero", url: "https://volzero.com", badge: "Hot 100 #75" },
  { label: "ArchiDiaries", url: "https://archidiaries.com", badge: "Featured" },
  { label: "Buildofy", url: "https://buildofy.com", badge: "Published" },
  { label: "Houzz India", url: "https://houzz.in", badge: "Pro Portfolio" },
  { label: "Architizer", url: "https://architizer.com", badge: "Listed" },
];

const socials = [
  { label: "Instagram", url: "https://instagram.com/architectureswath", handle: "@architectureswath" },
  { label: "LinkedIn", url: "https://linkedin.com", handle: "Architecture + Swath" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer
      id="footer"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "4rem 0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Main footer grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
              <img
                src="/logo-symbol.png"
                alt="Architecture + Swath Emblem"
                style={{
                  height: "40px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1, gap: "2px" }}>
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    color: "var(--text-primary)",
                    textTransform: "uppercase",
                  }}
                >
                  Architecture
                </span>
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.88rem",
                    fontWeight: 800,
                    letterSpacing: "0.26em",
                    color: "var(--accent-gold-dark)",
                    textTransform: "uppercase",
                    textShadow: "0 0 10px rgba(160, 116, 42, 0.45), 0 0 20px rgba(160, 116, 42, 0.2)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      color: "#d94a38",
                      fontWeight: 700,
                      textShadow: "0 0 8px rgba(217, 74, 56, 0.5)",
                    }}
                  >
                    +
                  </span>{" "}
                  SWATH
                </span>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                maxWidth: "280px",
              }}
            >
              Bengaluru&apos;s award-winning boutique architecture studio.
              Designing bespoke courtyard residences, Vastu-informed spatial
              programs, and timeless material environments since 2018.
            </p>

            {/* Awards badges */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  background: "rgba(197, 160, 89, 0.1)",
                  border: "1px solid rgba(197, 160, 89, 0.25)",
                  borderRadius: "4px",
                  width: "fit-content",
                }}
              >
                <span style={{ fontSize: "0.7rem" }}>🏆</span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    color: "var(--accent-gold)",
                    letterSpacing: "0.08em",
                  }}
                >
                  FOAID 2022 Gold Award
                </span>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  borderRadius: "4px",
                  width: "fit-content",
                }}
              >
                <span style={{ fontSize: "0.7rem" }}>🌐</span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    color: "var(--accent-cyan)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Volume Zero Hot 100 #75
                </span>
              </div>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    id={`footer-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      padding: 0,
                      transition: "color 0.3s ease",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color =
                        "var(--accent-gold)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color =
                        "var(--text-muted)")
                    }
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Case Studies */}
          <div>
            <h4
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                marginBottom: "1.25rem",
              }}
            >
              Projects
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {caseStudies.map((cs) => (
                <li key={cs.label}>
                  <button
                    id={`footer-project-${cs.label.toLowerCase().replace(/[\s']/g, "-")}`}
                    onClick={() => handleNavClick(cs.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      padding: 0,
                      transition: "color 0.3s ease",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color =
                        "var(--accent-gold)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color =
                        "var(--text-muted)")
                    }
                  >
                    {cs.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact & Publications */}
          <div>
            <h4
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                marginBottom: "1.25rem",
              }}
            >
              Studio
            </h4>

            {/* Address */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                lineHeight: 1.75,
                marginBottom: "1rem",
              }}
            >
              Agara Village, HSR Layout<br />
              Bengaluru, Karnataka 560102<br />
              India
            </p>
            <a
              href="tel:+919944585627"
              id="footer-phone"
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                color: "var(--accent-gold)",
                textDecoration: "none",
                marginBottom: "0.4rem",
              }}
            >
              +91 99445 85627
            </a>

            {/* Socials */}
            <div style={{ marginTop: "1.5rem" }}>
              <h5
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  marginBottom: "0.75rem",
                }}
              >
                Follow
              </h5>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    id={`footer-social-${s.label.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--accent-gold)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--text-muted)")
                    }
                  >
                    <ExternalLink size={11} />
                    {s.handle}
                  </a>
                ))}
              </div>
            </div>

            {/* Publication credits */}
            <div style={{ marginTop: "1.5rem" }}>
              <h5
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  marginBottom: "0.75rem",
                }}
              >
                Press & Publications
              </h5>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {publications.map((pub) => (
                  <a
                    key={pub.label}
                    href={pub.url}
                    id={`footer-pub-${pub.label.toLowerCase().replace(/\s/g, "-")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "3px 8px",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "4px",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.62rem",
                      color: "var(--text-dim)",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent-gold)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-gold)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-subtle)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-dim)";
                    }}
                  >
                    {pub.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold" style={{ marginBottom: "1.5rem" }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            paddingBottom: "0.5rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.72rem",
                color: "var(--text-dim)",
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} Architecture + Swath. All rights reserved.
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <ShieldCheck size={12} color="var(--accent-gold)" />
              Compliant with the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> (India).
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                color: "var(--text-dim)",
              }}
            >
              Grievance Redressal Officer (DPDP): <strong>Ar. Meinathan N</strong> (
              <a
                href="mailto:prajwalrv1@gmail.com?subject=[DPDP%20Inquiry%20-%20Architecture%20%2B%20Swath]"
                style={{ color: "var(--accent-gold-dark)", textDecoration: "none" }}
              >
                prajwalrv1@gmail.com
              </a>
              )
            </span>
            <Link
              href="/privacy"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.72rem",
                color: "var(--accent-gold-dark)",
                textDecoration: "underline",
                fontWeight: 600,
              }}
            >
              Privacy &amp; DPDP Notice
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #footer > div > div:first-of-type {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          #footer > div > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
