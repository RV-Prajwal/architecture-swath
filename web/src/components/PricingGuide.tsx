"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    id: "tier-architecture",
    name: "Full Architecture",
    subtitle: "Bespoke Luxury Residences",
    badge: "Most Comprehensive",
    badgeColor: "var(--accent-gold)",
    price: "As per COA norms",
    priceNote: "Council of Architecture schedule",
    highlighted: true,
    features: [
      "Complete architectural design & documentation",
      "Site feasibility & Vastu orientation analysis",
      "3D visualisations & walkthrough renders",
      "Material specification & procurement guidance",
      "Contractor selection & tender management",
      "Full site supervision & quality control",
      "Interior design integration",
      "Landscape & lighting coordination",
      "Post-completion snagging support",
    ],
    cta: "Begin Architecture Project",
  },
  {
    id: "tier-planning",
    name: "Planning & Vastu",
    subtitle: "Design Without Supervision",
    badge: "Popular",
    badgeColor: "var(--accent-cyan)",
    price: "Custom Quote",
    priceNote: "Based on plot area",
    highlighted: false,
    features: [
      "Vastu-compliant floor plan design",
      "Façade design & elevation studies",
      "2D working drawings package",
      "3D exterior visualisation",
      "BBMP/authority approval drawings",
      "Material mood board & palette",
      "Structural engineer liaison",
    ],
    cta: "Request Planning Quote",
  },
  {
    id: "tier-interior",
    name: "Interior Design",
    subtitle: "Bespoke Joinery & Fit-outs",
    badge: "Interior Focus",
    badgeColor: "#a78bfa",
    price: "Custom Quote",
    priceNote: "Per square foot basis",
    highlighted: false,
    features: [
      "Full interior concept & mood design",
      "Custom joinery: kitchens, wardrobes, cabinetry",
      "Lighting design & electrical coordination",
      "False ceiling & flooring selection",
      "Soft furnishing & décor curation",
      "Vendor management & procurement",
      "Site supervision during fit-out",
    ],
    cta: "Explore Interior Design",
  },
];

export default function PricingGuide() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const handleContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      style={{
        padding: "6rem 0",
        background:
          "linear-gradient(180deg, var(--bg-main) 0%, rgba(19, 28, 46, 0.5) 50%, var(--bg-main) 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
              marginBottom: "0.75rem",
            }}
          >
            Investment Guide
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 500,
              color: "var(--text-primary)",
              letterSpacing: "0.03em",
              marginBottom: "1rem",
            }}
          >
            Scope &amp; Design Tiers
          </h2>
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every project brief is unique. We offer three engagement models to
            match your project scope, timeline, and involvement preference.
          </p>
        </div>

        {/* Tiers grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          {tiers.map((tier) => {
            const isHovered = hoveredTier === tier.id;
            return (
              <div
                key={tier.id}
                id={tier.id}
                onMouseEnter={() => setHoveredTier(tier.id)}
                onMouseLeave={() => setHoveredTier(null)}
                style={{
                  borderRadius: "20px",
                  border: tier.highlighted
                    ? "1px solid rgba(197, 160, 89, 0.4)"
                    : isHovered
                    ? "1px solid rgba(197, 160, 89, 0.25)"
                    : "1px solid var(--border-subtle)",
                  background: tier.highlighted
                    ? "linear-gradient(135deg, rgba(197, 160, 89, 0.08), rgba(197, 160, 89, 0.02))"
                    : "var(--bg-card)",
                  padding: "2rem",
                  position: "relative",
                  transition: "all 0.4s ease",
                  ...(isHovered && {
                    transform: "translateY(-4px)",
                    boxShadow: tier.highlighted
                      ? "0 24px 60px rgba(197, 160, 89, 0.2)"
                      : "0 24px 60px rgba(0, 0, 0, 0.3)",
                  }),
                }}
              >
                {/* Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    padding: "4px 12px",
                    borderRadius: "50px",
                    background: `${tier.badgeColor}18`,
                    border: `1px solid ${tier.badgeColor}50`,
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: tier.badgeColor,
                    }}
                  >
                    {tier.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "0.03em",
                    marginBottom: "0.35rem",
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {tier.subtitle}
                </p>

                {/* Price */}
                <div
                  style={{
                    padding: "1rem",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "10px",
                    marginBottom: "1.5rem",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: tier.highlighted
                        ? "var(--accent-gold-light)"
                        : "var(--text-primary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {tier.price}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.72rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    {tier.priceNote}
                  </p>
                </div>

                {/* Feature list */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                    marginBottom: "2rem",
                  }}
                >
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.65rem",
                      }}
                    >
                      <div
                        style={{
                          flexShrink: 0,
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: tier.highlighted
                            ? "rgba(197, 160, 89, 0.15)"
                            : "rgba(56, 189, 248, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "1px",
                        }}
                      >
                        <Check
                          size={10}
                          color={tier.highlighted ? "var(--accent-gold)" : "var(--accent-cyan)"}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.78rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.5,
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  id={`${tier.id}-cta`}
                  onClick={handleContact}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    borderRadius: "10px",
                    border: tier.highlighted
                      ? "none"
                      : "1px solid var(--border-subtle)",
                    background: tier.highlighted
                      ? "linear-gradient(135deg, var(--accent-gold-light), var(--accent-gold))"
                      : "transparent",
                    color: tier.highlighted ? "#090d14" : "var(--text-muted)",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!tier.highlighted) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent-gold)";
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-gold)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!tier.highlighted) {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-subtle)";
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                    }
                  }}
                >
                  {tier.cta} <ArrowRight size={13} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            textAlign: "center",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.72rem",
            color: "var(--text-dim)",
            marginTop: "2.5rem",
            lineHeight: 1.6,
          }}
        >
          All fees are customised based on project scope, site area, and complexity. Fees adhere to the Council of Architecture&apos;s (COA) 2023 schedule.
          <br />
          Contact us for a complimentary discovery call and detailed proposal.
        </p>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #pricing > div > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
