"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Lock,
  UserCheck,
  Trash2,
  FileText,
  AlertCircle,
  ExternalLink,
  Languages,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [lang, setLang] = useState<"en" | "kn">("en");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg-main)",
        color: "var(--text-primary)",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      {/* Top Header / Nav */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
          padding: "1rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
          >
            <ArrowLeft size={16} /> Back to Studio Home
          </Link>

          {/* Brand & Language Selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src="/logo-symbol.png"
                alt="Architecture + Swath Emblem"
                style={{ height: "30px", width: "auto" }}
              />
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "var(--text-primary)",
                }}
              >
                ARCHITECTURE <span style={{ color: "#d94a38" }}>+</span> SWATH
              </span>
            </div>

            <button
              onClick={() => setLang(lang === "en" ? "kn" : "en")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 10px",
                borderRadius: "6px",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-surface)",
                fontSize: "0.78rem",
                color: "var(--text-primary)",
                cursor: "pointer",
              }}
            >
              <Languages size={14} color="var(--accent-gold)" />
              {lang === "en" ? "ಕನ್ನಡದಲ್ಲಿ ನೋಡಿ (Kannada)" : "Switch to English"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "3rem 1.5rem 5rem",
        }}
      >
        {/* Hero Notice Banner */}
        <div
          style={{
            padding: "2rem",
            borderRadius: "14px",
            background: "linear-gradient(135deg, rgba(160, 116, 42, 0.08) 0%, rgba(217, 74, 56, 0.04) 100%)",
            border: "1px solid rgba(160, 116, 42, 0.25)",
            marginBottom: "2.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "var(--accent-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <ShieldCheck size={20} />
            </div>
            <div>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent-gold-dark)",
                }}
              >
                Statutory Data Privacy &amp; Protection Notice
              </span>
              <h1
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                {lang === "en"
                  ? "Digital Personal Data Protection (DPDP) Notice"
                  : "ಡಿಜಿಟಲ್ ವೈಯಕ್ತಿಕ ಡೇಟಾ ಸಂರಕ್ಷಣಾ (DPDP) ಸೂಚನೆ"}
              </h1>
            </div>
          </div>

          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.6,
              color: "var(--text-secondary)",
              margin: 0,
            }}
          >
            {lang === "en" ? (
              <>
                Pursuant to <strong>Section 5</strong> of the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act, 2023)</strong>, Government of India, this notice informs prospective clients, property owners, and website visitors of the principles, purposes, and rights governing the processing of personal data by <strong>Architecture + Swath</strong>.
              </>
            ) : (
              <>
                ಭಾರತ ಸರ್ಕಾರದ <strong>ಡಿಜಿಟಲ್ ವೈಯಕ್ತಿಕ ಡೇಟಾ ಸಂರಕ್ಷಣಾ ಕಾಯ್ದೆ, 2023 (DPDP Act)</strong> ರ <strong>ವಿಭಾಗ 5</strong> ರ ಅಡಿಯಲ್ಲಿ, <strong>ಆರ್ಕಿಟೆಕ್ಚರ್ + ಸ್ವಾಥ್</strong> ಸಂಸ್ಥೆಯು ಸಂಗ್ರಹಿಸುವ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯ ಬಳಕೆ, ಉದ್ದೇಶ ಮತ್ತು ನಿಮ್ಮ ಹಕ್ಕುಗಳ ಬಗೆಗಿನ ಶಾಸನಬದ್ಧ ಸೂಚನೆ ಇಲ್ಲಿದೆ.
              </>
            )}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginTop: "1.25rem",
              paddingTop: "1rem",
              borderTop: "1px solid rgba(160, 116, 42, 0.15)",
              fontSize: "0.75rem",
              color: "var(--text-dim)",
              flexWrap: "wrap",
            }}
          >
            <span><strong>Fiduciary:</strong> Architecture + Swath</span>
            <span><strong>Jurisdiction:</strong> Bengaluru, Karnataka, India</span>
            <span><strong>Effective Date:</strong> October 2023 (Updated 2026)</span>
          </div>
        </div>

        {/* Section 1: Data Fiduciary Identity */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              borderBottom: "1px solid var(--border-subtle)",
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            1. Identity of the Data Fiduciary (Section 2(i) &amp; Section 8)
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
            The entity determining the purpose and means of processing your personal data is:
          </p>
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              padding: "1.25rem",
              marginTop: "0.75rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            <div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase" }}>Studio / Practice</div>
              <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>Architecture + Swath</div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                Principals: Ar. Meinathan N &amp; Ar. Sai Harini Karthikeyan
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase" }}>Registered Office</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                Sahakar Nagar, Bengaluru, Karnataka 560092, India
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase" }}>Official Grievance Desk</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-primary)", fontWeight: 500 }}>
                prajwalrv1@gmail.com / +91 99445 85627
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Data Collected & Purpose */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              borderBottom: "1px solid var(--border-subtle)",
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            2. Personal Data Collected &amp; Purpose of Processing (Section 4 &amp; 5)
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
            We adhere strictly to the principle of <strong>Data Minimisation (Section 8(1))</strong>. We only collect information essential for architectural feasibility and client communication:
          </p>

          <div style={{ overflowX: "auto", marginTop: "1rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.85rem",
                textAlign: "left",
              }}
            >
              <thead>
                <tr style={{ background: "var(--bg-surface)", borderBottom: "2px solid var(--border-subtle)" }}>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--text-primary)" }}>Data Category</th>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--text-primary)" }}>Specific Items</th>
                  <th style={{ padding: "0.75rem 1rem", color: "var(--text-primary)" }}>Legitimate Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "0.85rem 1rem", fontWeight: 600 }}>Identity &amp; Contact</td>
                  <td style={{ padding: "0.85rem 1rem", color: "var(--text-secondary)" }}>Full Name, Phone / WhatsApp number, Email ID</td>
                  <td style={{ padding: "0.85rem 1rem", color: "var(--text-secondary)" }}>To authenticate inquiry, schedule discovery calls, and share design portfolios.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "0.85rem 1rem", fontWeight: 600 }}>Project Context</td>
                  <td style={{ padding: "0.85rem 1rem", color: "var(--text-secondary)" }}>Site Location, Estimated Built-up Area, Architectural Typology, Client Vision</td>
                  <td style={{ padding: "0.85rem 1rem", color: "var(--text-secondary)" }}>To evaluate municipal bylaws (BBMP/BDA/Panchayat), topography, and studio availability.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "0.85rem 1rem", fontWeight: 600 }}>Technical Telemetry</td>
                  <td style={{ padding: "0.85rem 1rem", color: "var(--text-secondary)" }}>Standard HTTP headers, IP address (ephemeral)</td>
                  <td style={{ padding: "0.85rem 1rem", color: "var(--text-secondary)" }}>Server routing and DDoS defense. <em>No tracking or cross-site profiling cookies are used.</em></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Manner of Giving Consent */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              borderBottom: "1px solid var(--border-subtle)",
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            3. Explicit Affirmative Consent &amp; Withdrawal (Section 6)
          </h2>
          <div style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
            <p>
              By checking the affirmative consent box on our consultation form, you provide <strong>free, specific, informed, and unambiguous consent</strong> for Architecture + Swath to process your contact and project parameters.
            </p>
            <div
              style={{
                background: "rgba(160, 116, 42, 0.08)",
                borderLeft: "4px solid var(--accent-gold)",
                padding: "1rem 1.25rem",
                borderRadius: "4px",
                margin: "1rem 0",
              }}
            >
              <p style={{ margin: "0 0 0.5rem 0" }}>
                <strong>Right to Withdraw Consent (Section 6(4)):</strong> You have the absolute right to withdraw your consent at any time with the same ease as providing it. Upon withdrawal via email or clicking below, we will cease processing and permanently erase your personal records within <strong>7 business days</strong>.
              </p>
              <a
                href="mailto:prajwalrv1@gmail.com?subject=[DPDP%20Act%20-%20Consent%20Withdrawal%20%26%20Data%20Erasure%20Request]&body=Hello%20Architecture%20%2B%20Swath%2C%0A%0APlease%20permanently%20erase%20my%20consultation%20data%20and%20contact%20records%20under%20Section%206(4)%20and%20Section%2012%20of%20the%20DPDP%20Act%2C%202023.%0A%0AMy%20Name%3A%20%0AMy%20Phone%3A%20%0A%0AThank%20you."
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 12px",
                  background: "rgba(217, 74, 56, 0.12)",
                  border: "1px solid rgba(217, 74, 56, 0.35)",
                  borderRadius: "6px",
                  color: "#d94a38",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  marginTop: "4px",
                }}
              >
                <Trash2 size={13} /> 1-Click Request to Withdraw Consent &amp; Erase Records
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Data Processors & Cross-Border Transfer */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              borderBottom: "1px solid var(--border-subtle)",
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            4. Third-Party Data Processors &amp; Cross-Border Transfers (Section 8(2) &amp; Section 16)
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
            Architecture + Swath does not sell, lease, or broker your personal data. We utilize authorized technical processors bound by confidentiality:
          </p>
          <ul style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "var(--text-secondary)", paddingLeft: "1.5rem" }}>
            <li>
              <strong>FormSubmit Gateway:</strong> Form submissions are relayed over encrypted TLS to our studio inbox (prajwalrv1@gmail.com) via FormSubmit’s API.
            </li>
            <li>
              <strong>WhatsApp (Meta Platforms):</strong> When you click the floating WhatsApp widget, communications occur directly via end-to-end encrypted protocol on WhatsApp according to Meta’s terms.
            </li>
            <li>
              <strong>Cloud Hosting Infrastructure:</strong> Website static files are served via compliant CDN nodes with HTTPS strict transport security. No data transfers take place to countries restricted by the Central Government of India under Section 16 of the DPDP Act.
            </li>
          </ul>
        </section>

        {/* Section 5: Data Retention & Erasure */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              borderBottom: "1px solid var(--border-subtle)",
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            5. Storage Limitation &amp; Erasure Protocol (Section 8(7))
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
            In compliance with Section 8(7) of the DPDP Act, personal data is not retained beyond the period necessary to fulfill its purpose:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
              marginTop: "0.75rem",
            }}
          >
            <div
              style={{
                background: "var(--bg-surface)",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>
                Unconverted Inquiries
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                Inquiry contact records that do not proceed to a formal architectural agreement are permanently purged after <strong>180 days</strong>.
              </div>
            </div>
            <div
              style={{
                background: "var(--bg-surface)",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>
                Commissioned Projects
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                Contracted client records are maintained strictly for professional structural liability under the <em>Architects Act, 1972</em> and Indian taxation statutes.
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Rights of Data Principals */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              borderBottom: "1px solid var(--border-subtle)",
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            6. Statutory Rights of Data Principals (Sections 11, 12, 13, 14)
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
            Under Chapter III of the DPDP Act 2023, you hold the following non-derogable rights:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "1rem" }}>
            <div style={{ padding: "1rem", border: "1px solid var(--border-subtle)", borderRadius: "8px" }}>
              <div style={{ color: "var(--accent-gold-dark)", fontWeight: 700, fontSize: "0.85rem", marginBottom: "4px" }}>
                Right to Access (Sec. 11)
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>
                Request a summary of your personal data processed by us and the third parties with whom it was shared.
              </p>
            </div>
            <div style={{ padding: "1rem", border: "1px solid var(--border-subtle)", borderRadius: "8px" }}>
              <div style={{ color: "var(--accent-gold-dark)", fontWeight: 700, fontSize: "0.85rem", marginBottom: "4px" }}>
                Right to Correction (Sec. 12)
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>
                Request correction, updating, or completion of inaccurate or outdated contact/site information.
              </p>
            </div>
            <div style={{ padding: "1rem", border: "1px solid var(--border-subtle)", borderRadius: "8px" }}>
              <div style={{ color: "var(--accent-gold-dark)", fontWeight: 700, fontSize: "0.85rem", marginBottom: "4px" }}>
                Right to Erasure (Sec. 12)
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>
                Request immediate deletion of your personal data from all active studio repositories.
              </p>
            </div>
            <div style={{ padding: "1rem", border: "1px solid var(--border-subtle)", borderRadius: "8px" }}>
              <div style={{ color: "var(--accent-gold-dark)", fontWeight: 700, fontSize: "0.85rem", marginBottom: "4px" }}>
                Right to Nominate (Sec. 14)
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>
                Nominate an individual to exercise your rights in the event of death or physical/mental incapacity.
              </p>
            </div>
            <div style={{ padding: "1rem", border: "1px solid var(--border-subtle)", borderRadius: "8px" }}>
              <div style={{ color: "var(--accent-gold-dark)", fontWeight: 700, fontSize: "0.85rem", marginBottom: "4px" }}>
                Right of Grievance (Sec. 13)
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>
                File a grievance directly with our designated officer and receive resolution within 30 days.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Grievance Redressal Officer */}
        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              borderBottom: "1px solid var(--border-subtle)",
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            7. Grievance Redressal Officer (Section 8(10))
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
            In compliance with Section 8(10) of the DPDP Act, Architecture + Swath has designated the following officer for all data privacy and protection queries:
          </p>
          <div
            style={{
              background: "var(--bg-surface)",
              border: "1px solid rgba(160, 116, 42, 0.3)",
              borderRadius: "10px",
              padding: "1.5rem",
              marginTop: "0.75rem",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              <div>
                <span style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase" }}>
                  Designated Officer
                </span>
                <p style={{ margin: "2px 0 0", fontWeight: 600, color: "var(--text-primary)" }}>
                  Ar. Meinathan N
                </p>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  Principal Architect &amp; Data Grievance Lead
                </span>
              </div>
              <div>
                <span style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase" }}>
                  Grievance Redressal Email
                </span>
                <p style={{ margin: "2px 0 0", fontWeight: 600, color: "var(--text-primary)" }}>
                  <a href="mailto:prajwalrv1@gmail.com?subject=[DPDP%20Grievance%20-%20Architecture%20%2B%20Swath]" style={{ color: "var(--accent-gold-dark)", textDecoration: "none" }}>
                    prajwalrv1@gmail.com
                  </a>
                </p>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  Subject: [DPDP Grievance - Architecture + Swath]
                </span>
              </div>
              <div>
                <span style={{ fontSize: "0.72rem", color: "var(--text-dim)", textTransform: "uppercase" }}>
                  Studio Address
                </span>
                <p style={{ margin: "2px 0 0", color: "var(--text-primary)", fontSize: "0.85rem" }}>
                  Architecture + Swath, Sahakar Nagar, Bengaluru 560092
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: "1.25rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--border-subtle)",
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              <strong>SLA &amp; Escalation:</strong> We acknowledge data requests within <strong>48 hours</strong> and resolve grievances within <strong>30 calendar days</strong>. If you remain dissatisfied with our response, you hold the statutory right to escalate the matter to the <strong>Data Protection Board of India (DPBI)</strong>.
            </div>
          </div>
        </section>

        {/* Section 8: Children's Data */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              borderBottom: "1px solid var(--border-subtle)",
              paddingBottom: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            8. Protection of Children’s Personal Data (Section 9)
          </h2>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-secondary)" }}>
            Our architectural design services are intended solely for individuals capable of entering legally binding contracts under Indian law (aged 18 and above). We do not knowingly solicit, collect, or process personal data belonging to children under 18 years of age.
          </p>
        </section>

        {/* Footer Navigation */}
        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              background: "var(--accent-gold)",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            <ArrowLeft size={15} /> Return to Studio Homepage
          </Link>

          <span style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>
            © {new Date().getFullYear()} Architecture + Swath · DPDP Act, 2023 Compliant Notice
          </span>
        </div>
      </main>
    </div>
  );
}
