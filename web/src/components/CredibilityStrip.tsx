"use client";

import { Award, Trophy, Video, Compass, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

const accolades = [
  {
    badge: "National Jury Gold",
    icon: Trophy,
    year: "2022",
    title: "FOAID Gold Award Winner",
    subtitle: "Festival of Architecture & Interior Designing",
    project: "House at California Layout",
    details:
      "Awarded top honors nationwide for innovative courtyard microclimate integration, exposed brick craft, and climate-responsive living.",
    highlight: "Gold Award · Residential Category",
  },
  {
    badge: "International Index",
    icon: Compass,
    year: "2022",
    title: "Volume Zero Hot 100",
    subtitle: "Ranked #75 Best Emerging Architects Worldwide",
    project: "Global Practice Recognition",
    details:
      "Selected among the top 100 emerging international studios redefining contemporary residential architecture through cultural rootedness.",
    highlight: "Global Rank #75 Worldwide",
  },
  {
    badge: "National Video Feature",
    icon: Video,
    year: "2023 - 2024",
    title: "Buildofy Feature Documentaries",
    subtitle: "India's Premier Architectural Media Platform",
    project: "Abhyudaya & California Layout",
    details:
      "Selected for two comprehensive documentary monographs celebrating spatial sequence, Kerala Vastu, and custom teakwood detailing.",
    highlight: "500,000+ Arch Film Views",
  },
  {
    badge: "Peer Citation",
    icon: Award,
    year: "2024",
    title: "MSAJAA Alumnus Citation",
    subtitle: "Excellence in Architectural Design",
    project: "Studio Leadership & Practice",
    details:
      "Honored by the MSAJAA Council for outstanding contribution to contemporary residential design, vernacular materials, and climate adaptation.",
    highlight: "Alumnus of the Year 2024",
  },
];

const publications = [
  { name: "Buildofy", type: "Film Documentaries", count: "2 Projects Featured", url: "https://buildofy.com" },
  { name: "Volume Zero", type: "International Journal", count: "Hot 100 Roster", url: "https://volzero.com" },
  { name: "ArchiDiaries", type: "Curated Showcase", count: "Editor's Pick", url: "https://archidiaries.com" },
  { name: "Architizer", type: "Global Directory", count: "Verified Studio", url: "https://architizer.com" },
  { name: "Houzz India", type: "Design Network", count: "Top Rated Practice", url: "https://houzz.in" },
];

const studioStats = [
  { value: "50+", label: "Bespoke Residences", sub: "Designed & Built" },
  { value: "02", label: "National Awards", sub: "FOAID & Volume Zero" },
  { value: "08+", label: "Years of Practice", sub: "Studio Established 2016" },
  { value: "100%", label: "Vastu & Climate Rooted", sub: "Contextual Craft" },
];

export default function CredibilityStrip() {
  return (
    <section
      id="recognition"
      style={{
        background: "var(--bg-main)",
        padding: "clamp(3.5rem, 5.5vw, 5rem) 0",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      {/* Background Architectural Accent Lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "5%",
          right: "5%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, var(--border-subtle) 30%, var(--border-gold) 50%, var(--border-subtle) 70%, transparent 100%)",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto clamp(2rem, 3.5vw, 3rem)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 14px",
              background: "rgba(160, 116, 42, 0.08)",
              border: "1px solid rgba(160, 116, 42, 0.25)",
              borderRadius: "50px",
              marginBottom: "0.85rem",
            }}
          >
            <Sparkles size={12} color="var(--accent-gold)" />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent-gold-dark)",
              }}
            >
              Recognition &amp; Press
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.75rem, 2.7vw, 2.35rem)",
              fontWeight: 600,
              lineHeight: 1.22,
              color: "var(--text-primary)",
              letterSpacing: "0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Celebrated by India’s Leading{" "}
            <span className="gradient-text-gold">Architectural Juries</span>
          </h2>

          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
              fontWeight: 400,
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            Every residence crafted by Architecture + Swath is a study in natural light,
            courtyard ventilation, and contextual materiality — recognized nationally by critics, juries, and peers.
          </p>
        </div>

        {/* Accolades Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "clamp(3rem, 6vw, 4.5rem)",
          }}
        >
          {accolades.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  padding: "2rem 1.75rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div>
                  {/* Top Bar: Badge & Year */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <span
                      style={{
                        padding: "3px 10px",
                        background: "rgba(160, 116, 42, 0.08)",
                        border: "1px solid rgba(160, 116, 42, 0.2)",
                        borderRadius: "30px",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--accent-gold)",
                      }}
                    >
                      {item.badge}
                    </span>

                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--text-dim)",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, rgba(160, 116, 42, 0.12), rgba(196, 154, 60, 0.04))",
                        border: "1px solid rgba(160, 116, 42, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={20} color="var(--accent-gold)" />
                    </div>

                    <div>
                      <h3
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          lineHeight: 1.3,
                          marginBottom: "3px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.78rem",
                          color: "var(--accent-gold-dark)",
                          fontWeight: 500,
                        }}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.86rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {item.details}
                  </p>
                </div>

                {/* Bottom Highlight Pill */}
                <div
                  style={{
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <CheckCircle2 size={13} color="var(--accent-gold)" />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Studio Impact Metrics Strip */}
        <div
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "20px",
            padding: "2rem 2.5rem",
            marginBottom: " clamp(2.5rem, 5vw, 4rem)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            {studioStats.map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  borderLeft: i > 0 ? "1px solid var(--border-subtle)" : "none",
                  paddingLeft: i > 0 ? "clamp(1rem, 2vw, 2rem)" : "0",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                    fontWeight: 700,
                    color: "var(--accent-gold-dark)",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "0.02em",
                    marginBottom: "2px",
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--text-dim)",
                  }}
                >
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Press Partners Ribbon */}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              marginBottom: "1.25rem",
            }}
          >
            Documented &amp; Featured In Premier Publications
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1.25rem",
            }}
          >
            {publications.map((pub, i) => (
              <a
                key={i}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "0.6rem 1.25rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "50px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "var(--shadow-card)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-gold)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {pub.name}
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.68rem",
                    color: "var(--accent-gold-dark)",
                    background: "rgba(160, 116, 42, 0.08)",
                    padding: "2px 8px",
                    borderRadius: "20px",
                    fontWeight: 500,
                  }}
                >
                  {pub.count}
                </span>
                <ExternalLink size={11} color="var(--text-dim)" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
