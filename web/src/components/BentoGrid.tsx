"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Compass, Layers, ArrowRight } from "lucide-react";

const bentoCards = [
  {
    id: "bento-california",
    size: "large",
    title: "House at California Layout",
    subtitle: "FOAID 2022 · Gold Award",
    tag: "Flagship Project",
    tagColor: "var(--accent-gold)",
    description:
      "The Gold Award-winning courtyard residence organized around a Kerala Vastu axis with a double-height water body at its heart.",
    image:
      "/assets/projects/architecture_swath_project_assets_sources/01_House_at_California_Layout/downloaded_images/003_house_at_california_layout.jpg",
    icon: <Award size={16} />,
    href: "#portfolio",
    accent: "var(--accent-gold)",
  },
  {
    id: "bento-neeranjanam",
    size: "medium",
    title: "House Neeranjanam",
    subtitle: "Volume Zero Hot 100 · #75",
    tag: "Kerala Vastu",
    tagColor: "var(--accent-cyan)",
    description:
      "Water as architecture — every floor woven with thermal channels and meditative water features.",
    image:
      "/assets/projects/architecture_swath_project_assets_sources/03_House_Neeranjanam/downloaded_images/002_house_neeranjanam.jpg",
    icon: <Compass size={16} />,
    href: "#portfolio",
    accent: "var(--accent-cyan)",
  },
  {
    id: "bento-abhyudaya",
    size: "medium",
    title: "Abhyudaya",
    subtitle: "Corten Steel · Jaali Façade",
    tag: "Buildofy Featured",
    tagColor: "#a78bfa",
    description:
      "A pooja-centric residence defined by a dramatic weathered-steel screen that filters light into ever-changing patterns.",
    image:
      "/assets/projects/architecture_swath_project_assets_sources/04_Abhyudaya/downloaded_images/005_abhyudaya.jpg",
    icon: <Layers size={16} />,
    href: "#portfolio",
    accent: "#a78bfa",
  },
  {
    id: "bento-stats",
    size: "stats",
    title: "Studio Highlights",
    subtitle: "",
    tag: "",
    tagColor: "",
    description: "",
    image: "",
    icon: null,
    href: "",
    accent: "var(--accent-gold)",
  },
];

const stats = [
  { value: "8+", label: "Years Practice" },
  { value: "137+", label: "Project Images" },
  { value: "7", label: "Projects" },
  { value: "2", label: "National Awards" },
];

export default function BentoGrid() {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="philosophy"
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
        {/* Section header */}
        <div style={{ marginBottom: "clamp(2rem, 3.5vw, 2.75rem)" }}>
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
            Our Work
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.75rem, 2.7vw, 2.35rem)",
                fontWeight: 500,
                color: "var(--text-primary)",
                lineHeight: 1.2,
                letterSpacing: "0.03em",
              }}
            >
              Spaces That
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #e2c07a, #c5a059)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Define Legacy
              </span>
            </h2>
            <button
              onClick={() => handleNavClick("#portfolio")}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "var(--accent-gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)")
              }
            >
              View All Projects <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "auto",
            gap: "1rem",
          }}
        >
          {/* Large card — California Layout */}
          <div
            id="bento-california"
            onMouseEnter={() => setHovered("bento-california")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavClick("#portfolio")}
            style={{
              gridColumn: "span 7",
              gridRow: "span 2",
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              cursor: "pointer",
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              transition: "all 0.4s ease",
              minHeight: "420px",
              ...(hovered === "bento-california" && {
                border: "1px solid rgba(197, 160, 89, 0.4)",
                transform: "translateY(-4px)",
                boxShadow: "0 24px 60px rgba(197, 160, 89, 0.15)",
              }),
            }}
          >
            <Image
              src="/assets/projects/architecture_swath_project_assets_sources/01_House_at_California_Layout/downloaded_images/003_house_at_california_layout.jpg"
              alt="House at California Layout — FOAID 2022 Gold Award"
              fill
              style={{
                objectFit: "cover",
                transition: "transform 0.6s ease",
                transform: hovered === "bento-california" ? "scale(1.05)" : "scale(1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(9,13,20,0.95) 0%, rgba(9,13,20,0.4) 50%, transparent 80%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                right: "1.5rem",
              }}
            >
              <span className="tag" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                🏆 FOAID 2022 Gold Award
              </span>
              <h3
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  letterSpacing: "0.03em",
                  marginBottom: "0.5rem",
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                House at California Layout
              </h3>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  lineHeight: 1.6,
                }}
              >
                Kerala Vastu axis · Double-height courtyard · Corten steel screens
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(197, 160, 89, 0.15)",
                border: "1px solid rgba(197, 160, 89, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-gold)",
                opacity: hovered === "bento-california" ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Medium card — Neeranjanam */}
          <div
            id="bento-neeranjanam"
            onMouseEnter={() => setHovered("bento-neeranjanam")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavClick("#portfolio")}
            style={{
              gridColumn: "span 5",
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              cursor: "pointer",
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              transition: "all 0.4s ease",
              minHeight: "200px",
              ...(hovered === "bento-neeranjanam" && {
                border: "1px solid rgba(56, 189, 248, 0.4)",
                transform: "translateY(-4px)",
                boxShadow: "0 24px 60px rgba(56, 189, 248, 0.1)",
              }),
            }}
          >
            <Image
              src="/assets/projects/architecture_swath_project_assets_sources/03_House_Neeranjanam/downloaded_images/002_house_neeranjanam.jpg"
              alt="House Neeranjanam — Volume Zero Hot 100"
              fill
              style={{
                objectFit: "cover",
                transition: "transform 0.6s ease",
                transform: hovered === "bento-neeranjanam" ? "scale(1.05)" : "scale(1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(9,13,20,0.92) 0%, rgba(9,13,20,0.3) 60%, transparent 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "1.25rem",
                right: "1.25rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent-cyan)",
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                Volume Zero Hot 100 · #75
              </span>
              <h3
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  letterSpacing: "0.03em",
                }}
              >
                House Neeranjanam
              </h3>
            </div>
          </div>

          {/* Medium card — Abhyudaya */}
          <div
            id="bento-abhyudaya"
            onMouseEnter={() => setHovered("bento-abhyudaya")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleNavClick("#portfolio")}
            style={{
              gridColumn: "span 3",
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              cursor: "pointer",
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              transition: "all 0.4s ease",
              minHeight: "200px",
              ...(hovered === "bento-abhyudaya" && {
                border: "1px solid rgba(167, 139, 250, 0.4)",
                transform: "translateY(-4px)",
                boxShadow: "0 24px 60px rgba(167, 139, 250, 0.1)",
              }),
            }}
          >
            <Image
              src="/assets/projects/architecture_swath_project_assets_sources/04_Abhyudaya/downloaded_images/005_abhyudaya.jpg"
              alt="Abhyudaya — Corten Steel Residence"
              fill
              style={{
                objectFit: "cover",
                transition: "transform 0.6s ease",
                transform: hovered === "bento-abhyudaya" ? "scale(1.05)" : "scale(1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(9,13,20,0.95) 0%, rgba(9,13,20,0.2) 60%, transparent 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "1.25rem",
                right: "1.25rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  letterSpacing: "0.03em",
                  marginBottom: "0.25rem",
                }}
              >
                Abhyudaya
              </h3>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.72rem",
                  color: "#a78bfa",
                }}
              >
                Corten Steel · Jaali
              </p>
            </div>
          </div>

          {/* Stats card */}
          <div
            id="bento-stats-card"
            style={{
              gridColumn: "span 2",
              borderRadius: "20px",
              background: "linear-gradient(135deg, rgba(197, 160, 89, 0.08), rgba(197, 160, 89, 0.03))",
              border: "1px solid rgba(197, 160, 89, 0.2)",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "var(--accent-gold-light)",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.68rem",
                    color: "var(--text-dim)",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio founders */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                marginBottom: "0.5rem",
              }}
            >
              Founded by
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              <div>
                <p
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  Ar. Meinathan N
                </p>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--accent-gold)",
                  }}
                >
                  FOAID 2022 Gold · MSAJAA Alumnus 2024
                </p>
              </div>
              <div
                style={{
                  width: "1px",
                  background: "var(--border-subtle)",
                  alignSelf: "stretch",
                }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  Ar. Sai Harini Karthikeyan
                </p>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Co-founder · Interior Design Lead
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "0.75rem 1.5rem",
              background: "rgba(197, 160, 89, 0.08)",
              border: "1px solid rgba(197, 160, 89, 0.25)",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                marginBottom: "0.25rem",
              }}
            >
              Studio Location
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "var(--text-muted)",
              }}
            >
              Agara Village, HSR Layout
              <br />
              Bengaluru, Karnataka 560102
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #bento-california { grid-column: span 12 !important; }
          #bento-neeranjanam { grid-column: span 12 !important; }
          #bento-abhyudaya { grid-column: span 8 !important; }
          #bento-stats-card { grid-column: span 4 !important; }
        }
        @media (max-width: 600px) {
          #bento-abhyudaya { grid-column: span 12 !important; }
          #bento-stats-card { grid-column: span 12 !important; grid-template-columns: repeat(4, 1fr) !important; flex-direction: row !important; }
        }
      `}</style>
    </section>
  );
}
