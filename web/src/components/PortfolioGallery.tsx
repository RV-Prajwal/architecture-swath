"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, type ProjectItem } from "@/data/projectsData";
import { ArrowRight, X, ChevronLeft, ChevronRight, MapPin, Calendar, Maximize2 } from "lucide-react";

type Category = "all" | "flagship" | "compact" | "heritage" | "interior";

const filterLabels: { key: Category; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "flagship", label: "Flagship" },
  { key: "compact", label: "Compact Villa" },
  { key: "heritage", label: "Heritage" },
  { key: "interior", label: "Interior" },
];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<{
    project: ProjectItem;
    imageIndex: number;
  } | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const openLightbox = (project: ProjectItem, imageIndex = 0) => {
    setLightbox({ project, imageIndex });
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      imageIndex: (lightbox.imageIndex + 1) % lightbox.project.images.length,
    });
  };

  const prevImage = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      imageIndex:
        (lightbox.imageIndex - 1 + lightbox.project.images.length) %
        lightbox.project.images.length,
    });
  };

  return (
    <section
      id="portfolio"
      style={{
        padding: "clamp(3.5rem, 5.5vw, 5rem) 0",
        background:
          "linear-gradient(180deg, var(--bg-main) 0%, var(--bg-surface) 50%, var(--bg-main) 100%)",
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
        <div style={{ marginBottom: "clamp(1.75rem, 3vw, 2.5rem)" }}>
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
            Portfolio
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.75rem, 2.7vw, 2.35rem)",
              fontWeight: 500,
              color: "var(--text-primary)",
              letterSpacing: "0.03em",
              marginBottom: "1.25rem",
            }}
          >
            Complete Project Library
          </h2>

          {/* Filters */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            {filterLabels.map(({ key, label }) => (
              <button
                key={key}
                id={`filter-${key}`}
                onClick={() => setActiveFilter(key)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "50px",
                  border:
                    activeFilter === key
                      ? "1px solid var(--accent-gold)"
                      : "1px solid var(--border-subtle)",
                  background:
                    activeFilter === key
                      ? "rgba(197, 160, 89, 0.15)"
                      : "transparent",
                  color:
                    activeFilter === key
                      ? "var(--accent-gold-light)"
                      : "var(--text-muted)",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                transition: "all 0.4s ease",
                cursor: "pointer",
                ...(hoveredProject === project.id && {
                  border: "1px solid var(--border-gold)",
                  transform: "translateY(-6px)",
                  boxShadow: "0 24px 60px rgba(197, 160, 89, 0.1)",
                }),
              }}
            >
              {/* Cover Image */}
              <div
                style={{
                  position: "relative",
                  height: "260px",
                  overflow: "hidden",
                }}
                onClick={() => openLightbox(project, 0)}
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                    transform:
                      hoveredProject === project.id ? "scale(1.08)" : "scale(1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(9,13,20,0.7) 0%, transparent 60%)",
                  }}
                />

                {/* Image count badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    padding: "4px 10px",
                    background: "rgba(9, 13, 20, 0.75)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "50px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Maximize2 size={10} color="#e2c07a" />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.65rem",
                      color: "#f5f0eb",
                    }}
                  >
                    {project.images.length} photos
                  </span>
                </div>

                {/* Award badge */}
                {project.award && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "12px",
                      padding: "4px 10px",
                      background: "rgba(197, 160, 89, 0.2)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "50px",
                      border: "1px solid rgba(197, 160, 89, 0.4)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 600,
                        color: "var(--accent-gold-light)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      🏆 {project.award.split("—")[0].trim()}
                    </span>
                  </div>
                )}

                {/* Hover expand button */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: hoveredProject === project.id ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    background: "rgba(9, 13, 20, 0.3)",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(197, 160, 89, 0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Maximize2 size={18} color="#090d14" />
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "1.5rem" }}>
                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                    marginBottom: "0.75rem",
                  }}
                >
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "0.03em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                  }}
                >
                  {project.shortDesc}
                </p>

                {/* Meta */}
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border-subtle)",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <MapPin size={11} color="var(--text-dim)" />
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.72rem",
                        color: "var(--text-dim)",
                      }}
                    >
                      {project.location}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Calendar size={11} color="var(--text-dim)" />
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.72rem",
                        color: "var(--text-dim)",
                      }}
                    >
                      {project.year} · {project.builtUp}
                    </span>
                  </div>
                  <button
                    id={`view-project-${project.id}`}
                    onClick={() => openLightbox(project, 0)}
                    style={{
                      marginLeft: "auto",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      color: "var(--accent-gold)",
                    }}
                  >
                    View Gallery <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          id="lightbox-overlay"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(5, 8, 14, 0.97)",
            display: "flex",
            flexDirection: "column",
            animation: "fadeIn 0.25s ease",
          }}
        >
          {/* Lightbox header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 1.5rem",
              borderBottom: "1px solid var(--border-subtle)",
              flexShrink: 0,
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "0.05em",
                }}
              >
                {lightbox.project.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginTop: "2px",
                }}
              >
                {lightbox.imageIndex + 1} / {lightbox.project.images.length}
              </p>
            </div>
            <button
              id="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border-subtle)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-muted)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Main image */}
          <div
            style={{
              flex: 1,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                key={lightbox.imageIndex}
                src={lightbox.project.images[lightbox.imageIndex]}
                alt={`${lightbox.project.title} — image ${lightbox.imageIndex + 1}`}
                fill
                style={{
                  objectFit: "contain",
                  animation: "fadeIn 0.3s ease",
                }}
                priority
              />
            </div>

            {/* Prev */}
            <button
              id="lightbox-prev"
              onClick={prevImage}
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: "1rem",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(9,13,20,0.8)",
                border: "1px solid var(--border-subtle)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--accent-gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--border-subtle)")
              }
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              id="lightbox-next"
              onClick={nextImage}
              aria-label="Next image"
              style={{
                position: "absolute",
                right: "1rem",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "rgba(9,13,20,0.8)",
                border: "1px solid var(--border-subtle)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-primary)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--accent-gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--border-subtle)")
              }
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div
            style={{
              height: "80px",
              padding: "0.5rem 1.5rem",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              gap: "0.5rem",
              overflowX: "auto",
              flexShrink: 0,
              scrollbarWidth: "none",
            }}
          >
            {lightbox.project.images.map((img, i) => (
              <button
                key={i}
                id={`lightbox-thumb-${i}`}
                onClick={() =>
                  setLightbox({ ...lightbox, imageIndex: i })
                }
                aria-label={`Jump to image ${i + 1}`}
                style={{
                  position: "relative",
                  flexShrink: 0,
                  width: "60px",
                  height: "60px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  border:
                    i === lightbox.imageIndex
                      ? "2px solid var(--accent-gold)"
                      : "2px solid transparent",
                  cursor: "pointer",
                  padding: 0,
                  transition: "border-color 0.2s ease",
                  opacity: i === lightbox.imageIndex ? 1 : 0.5,
                }}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
