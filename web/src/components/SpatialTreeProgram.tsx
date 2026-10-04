"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const floors = [
  {
    id: "floor-ground",
    label: "Ground Floor",
    icon: "🏛️",
    subtitle: "Arrival & Public Realm",
    spaces: [
      {
        name: "Grand Foyer & Entry Court",
        desc: "Double-height arrival threshold with stone-clad walls and overhead lantern light.",
      },
      {
        name: "Private Office Cabin",
        desc: "Quiet corner study with direct garden outlook, designed for focused professional work.",
      },
      {
        name: "Library & Reading Alcove",
        desc: "Teak-paneled library with built-in shelving and soft ambient lighting.",
      },
      {
        name: "Home Theatre",
        desc: "Acoustic-treated entertainment room with motorized screen and tiered seating.",
      },
      {
        name: "Game Room",
        desc: "Flexible zone adjacent to the rear court for family recreation.",
      },
    ],
  },
  {
    id: "floor-first",
    label: "First Floor",
    icon: "💧",
    subtitle: "Heart of the Home",
    spaces: [
      {
        name: "Double-Height Living Room",
        desc: "The central social heart — soaring 6m ceilings with full-height glazed openings to the sky court.",
      },
      {
        name: "Teak Passage Gallery",
        desc: "A contemplative corridor of warm teak floors and curated artwork linking private and public zones.",
      },
      {
        name: "Dining & Family Lounge",
        desc: "Open-plan dining connected to the kitchen island, flooded with northern natural light.",
      },
      {
        name: "Central Water Body",
        desc: "A symbolic reflecting pool at the geometric centre of the plan — the spiritual and thermal anchor of the home.",
      },
    ],
  },
  {
    id: "floor-upper",
    label: "Upper Floors",
    icon: "🛏️",
    subtitle: "Private Sanctuaries",
    spaces: [
      {
        name: "Eastern Bedroom Suite",
        desc: "Morning-lit master suite with private balcony overlooking the garden courtyard.",
      },
      {
        name: "Western Bedroom Suite",
        desc: "Evening-oriented guest or children&apos;s suite with sunken lounge and sunset views.",
      },
      {
        name: "Sunken Lounge Nooks",
        desc: "Intimate conversation alcoves carved into the floor plate between bedroom wings.",
      },
      {
        name: "Private Balcony Decks",
        desc: "Personal outdoor terraces extending from each bedroom for private morning rituals.",
      },
    ],
  },
  {
    id: "floor-terrace",
    label: "Terrace Deck",
    icon: "☀️",
    subtitle: "Sky & Landscape",
    spaces: [
      {
        name: "Open-Air Entertainment Zone",
        desc: "Generous terrace with pergola structure, outdoor kitchen, and panoramic city views.",
      },
      {
        name: "Landscape Courts",
        desc: "Sculpted planted zones with locally-sourced laterite stone edging and indigenous species.",
      },
      {
        name: "Sky Pool (Optional)",
        desc: "Cantilevered plunge pool at the terrace edge for select projects — a defining luxury element.",
      },
    ],
  },
];

export default function SpatialTreeProgram() {
  const [openFloor, setOpenFloor] = useState<string | null>("floor-first");

  return (
    <section
      id="spatial-program"
      style={{
        padding: "clamp(3.5rem, 5.5vw, 5rem) 0",
        background: "var(--bg-main)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2.5rem, 4vw, 4rem)",
            alignItems: "start",
          }}
        >
          {/* Left — intro */}
          <div>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                marginBottom: "0.6rem",
              }}
            >
              Spatial Philosophy
            </p>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.75rem, 2.7vw, 2.35rem)",
                fontWeight: 500,
                color: "var(--text-primary)",
                letterSpacing: "0.03em",
                lineHeight: 1.25,
                marginBottom: "1rem",
              }}
            >
              Floor-by-Floor
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #e2c07a, #c5a059)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Spatial Program
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Every Architecture + Swath residence is conceived as a vertical
              journey — from the grounded public realm of the ground floor,
              rising through the social heart, ascending to private sanctuaries,
              and culminating in a sky connection to landscape.
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 300,
                color: "var(--text-dim)",
                lineHeight: 1.8,
              }}
            >
              The spatial program respects Kerala Vastu principles of
              orientation, threshold sequencing, and elemental water placement,
              while delivering a contemporary luxury experience calibrated for
              21st-century family living in Bengaluru.
            </p>

            {/* Philosophy pillars */}
            <div
              style={{
                marginTop: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {[
                { label: "Vastu-Compliant Orientation", icon: "◈" },
                { label: "Water as a Spatial Element", icon: "◈" },
                { label: "Material Continuity Floor-to-Floor", icon: "◈" },
                { label: "Private→Semi-Public→Public Hierarchy", icon: "◈" },
              ].map((p) => (
                <div
                  key={p.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent-gold)",
                      fontSize: "0.8rem",
                    }}
                  >
                    {p.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — tree accordion */}
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {floors.map((floor) => {
                const isOpen = openFloor === floor.id;
                return (
                  <div
                    key={floor.id}
                    id={floor.id}
                    style={{
                      borderRadius: "14px",
                      border: isOpen
                        ? "1px solid rgba(197, 160, 89, 0.3)"
                        : "1px solid var(--border-subtle)",
                      overflow: "hidden",
                      background: isOpen
                        ? "rgba(197, 160, 89, 0.04)"
                        : "var(--bg-card)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {/* Floor header */}
                    <button
                      onClick={() =>
                        setOpenFloor(isOpen ? null : floor.id)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`${floor.id}-content`}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "1.25rem 1.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        textAlign: "left",
                      }}
                    >
                      <span style={{ fontSize: "1.4rem" }}>{floor.icon}</span>
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: isOpen
                              ? "var(--accent-gold-light)"
                              : "var(--text-primary)",
                            letterSpacing: "0.05em",
                            marginBottom: "2px",
                          }}
                        >
                          {floor.label}
                        </p>
                        <p
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "0.72rem",
                            color: "var(--text-dim)",
                          }}
                        >
                          {floor.subtitle} · {floor.spaces.length} spaces
                        </p>
                      </div>
                      <div
                        style={{
                          transition: "transform 0.3s ease",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          color: isOpen
                            ? "var(--accent-gold)"
                            : "var(--text-dim)",
                        }}
                      >
                        <ChevronDown size={16} />
                      </div>
                    </button>

                    {/* Spaces list */}
                    <div
                      id={`${floor.id}-content`}
                      style={{
                        maxHeight: isOpen ? "600px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <div
                        style={{
                          padding: "0 1.5rem 1.25rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.75rem",
                        }}
                      >
                        {floor.spaces.map((space, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              gap: "0.75rem",
                              paddingLeft: "0.5rem",
                              borderLeft: "2px solid rgba(197, 160, 89, 0.2)",
                            }}
                          >
                            <ChevronRight
                              size={12}
                              color="var(--accent-gold)"
                              style={{ flexShrink: 0, marginTop: "3px" }}
                            />
                            <div>
                              <p
                                style={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: "0.82rem",
                                  fontWeight: 600,
                                  color: "var(--text-primary)",
                                  marginBottom: "2px",
                                }}
                              >
                                {space.name}
                              </p>
                              <p
                                style={{
                                  fontFamily: "'Outfit', sans-serif",
                                  fontSize: "0.75rem",
                                  color: "var(--text-dim)",
                                  lineHeight: 1.6,
                                }}
                                dangerouslySetInnerHTML={{ __html: space.desc }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #spatial-program > div > div {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
