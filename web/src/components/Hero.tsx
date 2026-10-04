"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Play, ArrowRight } from "lucide-react";

const videos = [
  {
    src: "/assets/projects/videos/House at California Layout Architecture Swath Buildofy.mp4",
    title: "House at California Layout",
  },
  {
    src: "/assets/projects/videos/Abhyudaya Buildofy.mp4",
    title: "Abhyudaya Residence",
  },
];

export default function Hero() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // When video ends, crossfade to next
  const handleVideoEnd = () => {
    setFading(true);
    setTimeout(() => {
      setVideoLoaded(false);
      setActiveVideo((prev) => (prev + 1) % videos.length);
      setFading(false);
    }, 500);
  };

  const switchVideo = (index: number) => {
    if (index === activeVideo) return;
    setFading(true);
    setTimeout(() => {
      setVideoLoaded(false);
      setActiveVideo(index);
      setFading(false);
    }, 300);
  };

  useEffect(() => {
    setVideoLoaded(false);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => { });
    }
  }, [activeVideo]);

  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        background: "#0c0a08",
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        key={activeVideo}
        autoPlay
        muted
        playsInline
        onCanPlayThrough={() => setVideoLoaded(true)}
        onEnded={handleVideoEnd}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: videoLoaded && !fading ? 1 : 0,
          transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <source src={videos[activeVideo].src} type="video/mp4" />
      </video>

      {/* Cinematic dark overlay — crisp and clear, tight bottom fade into light page */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `
            linear-gradient(
              to bottom,
              rgba(10, 8, 6, 0.45) 0%,
              rgba(10, 8, 6, 0.20) 35%,
              rgba(10, 8, 6, 0.40) 70%,
              rgba(245, 240, 235, 0.75) 93%,
              rgba(245, 240, 235, 1) 100%
            )
          `,
        }}
      />

      {/* Subtle vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at 40% 50%, transparent 55%, rgba(10,8,6,0.45) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Main Hero Content — on desktop airy centered; on mobile positioned down towards bottom */}
      <div
        className="hero-content-container"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          padding: "clamp(88px, 13vh, 115px) 2.5rem clamp(1rem, 2vh, 1.8rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        }}
      >
        {/* Award Pill Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "5px 14px",
            background: "rgba(12, 10, 8, 0.65)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(226, 192, 122, 0.35)",
            borderRadius: "50px",
            marginBottom: "0.85rem",
            width: "fit-content",
            boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
          }}
        >
          <span style={{ fontSize: "0.68rem", color: "#e2c07a" }}>★</span>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#f5f0eb",
            }}
          >
            FOAID 2022 Gold Award · Volume Zero Hot 100 #75
          </span>
        </div>

        {/* Headline — balanced size matching 80% zoom proportion */}
        <h1
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.9rem, 3.3vw, 3.1rem)",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "0.02em",
            color: "#ffffff",
            marginBottom: "0.85rem",
            maxWidth: "680px",
            textShadow: "0 2px 16px rgba(0, 0, 0, 0.4)",
          }}
        >
          Architecture
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #f3d89d, #c49a3c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Designed Around
          </span>
          <br />
          Life &amp; Culture
        </h1>

        {/* Tagline Paragraph */}
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(0.85rem, 1.05vw, 0.98rem)",
            fontWeight: 300,
            color: "rgba(245, 240, 235, 0.9)",
            maxWidth: "480px",
            lineHeight: 1.6,
            marginBottom: "1.5rem",
            textShadow: "0 1px 8px rgba(0, 0, 0, 0.35)",
          }}
        >
          Bengaluru&apos;s award-winning boutique studio for bespoke courtyard residences,
          Kerala Vastu spatial planning, and contextual material craft.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "0.85rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <button
            id="hero-cta-portfolio"
            onClick={scrollToPortfolio}
            className="btn-primary"
            style={{
              padding: "0.7rem 1.6rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 6px 24px rgba(160, 116, 42, 0.35)",
            }}
          >
            <Play size={13} fill="currentColor" />
            Explore Portfolio
          </button>
          <button
            id="hero-cta-contact"
            onClick={scrollToContact}
            className="btn-outline"
            style={{
              padding: "0.7rem 1.6rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              background: "rgba(12, 10, 8, 0.4)",
              borderColor: "rgba(255, 255, 255, 0.35)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            Book Consultation <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* Bottom Bar: Two thin rectangular dash dots as requested + Scroll down */}
      <div
        className="hero-bottom-bar"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          padding: "0 2.5rem clamp(1rem, 2vh, 1.8rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Two rectangular thin dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {videos.map((vid, i) => (
            <button
              key={i}
              id={`hero-dot-${i}`}
              onClick={() => switchVideo(i)}
              aria-label={`Switch to ${vid.title}`}
              style={{
                width: i === activeVideo ? "36px" : "12px",
                height: "3px",
                borderRadius: "2px",
                background:
                  i === activeVideo ? "var(--accent-gold)" : "rgba(255, 255, 255, 0.4)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Scroll Prompt */}
        <button
          id="hero-scroll-down"
          onClick={scrollDown}
          aria-label="Scroll to portfolio"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 8px",
            color: "rgba(245, 240, 235, 0.75)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "rgba(245, 240, 235, 0.75)")
          }
        >
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Explore Studio
          </span>
          <ChevronDown size={13} />
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-content-container {
            justify-content: flex-end !important;
            padding-top: 140px !important;
            padding-bottom: 2rem !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          .hero-content-container h1 {
            font-size: 2.1rem !important;
            line-height: 1.15 !important;
          }
          .hero-bottom-bar {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            padding-bottom: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
