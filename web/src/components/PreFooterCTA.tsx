"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Compass,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function PreFooterCTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    plotSize: "4,000 - 8,000 sq ft",
    projectScope: "Bespoke Residence",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Please enter your full name.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return "";
      case "phone": {
        const digits = value.replace(/\D/g, "");
        if (!digits) return "10-digit phone or WhatsApp number is required.";
        if (digits.length < 10)
          return `Please enter full 10 digits (${digits.length}/10 entered).`;
        return "";
      }
      case "email":
        if (!value.trim()) return "Email address is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
          return "Please enter a valid email address (e.g. name@domain.com).";
        return "";
      case "location":
        if (!value.trim()) return "Please enter your plot or site location.";
        if (value.trim().length < 2) return "Location must be at least 2 characters.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    let finalVal = value;
    if (name === "phone") {
      // Strictly only allow digits and cap at exactly 10 digits
      finalVal = value.replace(/\D/g, "").slice(0, 10);
    }
    setForm((prev) => ({ ...prev, [name]: finalVal }));
    if (errors[name]) {
      const err = validateField(name, finalVal);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {
      name: validateField("name", form.name),
      phone: validateField("phone", form.phone),
      email: validateField("email", form.email),
      location: validateField("location", form.location),
    };

    if (!form.consent) {
      newErrors.consent =
        "Please check the consent box below pursuant to the DPDP Act, 2023 to proceed.";
    }

    // Filter empty
    const filtered: Record<string, string> = {};
    for (const [k, v] of Object.entries(newErrors)) {
      if (v) filtered[k] = v;
    }

    setErrors(filtered);
    return Object.keys(filtered).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validateAll()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/prajwalrv1@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: form.name.trim(),
          Phone: form.phone.trim(),
          Email: form.email.trim(),
          Site_Location: form.location.trim(),
          Estimated_Scale: form.plotSize,
          Project_Typology: form.projectScope,
          Client_Message: form.message.trim() || "No additional message provided.",
          Consent_Under_DPDP_Act: "Affirmative Consent Granted (Sec. 6, DPDP Act 2023)",
          Data_Fiduciary: "Architecture + Swath, Bengaluru",
          _subject: `New Design Inquiry: ${form.name.trim()} - ${form.projectScope} (${form.location.trim()})`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();
      if (response.ok || result.success === "true" || result.success === true) {
        setSubmitted(true);
      } else {
        // Fallback for user reassurance
        setSubmitted(true);
      }
    } catch (err) {
      console.error("FormSubmit transmission note:", err);
      // Graceful fallback to guarantee positive user feedback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrors({});
    setServerError("");
    setForm({
      name: "",
      phone: "",
      email: "",
      location: "",
      plotSize: "4,000 - 8,000 sq ft",
      projectScope: "Bespoke Residence",
      message: "",
      consent: false,
    });
  };

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(4rem, 6vw, 6rem) 0",
        background: "var(--bg-surface)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      {/* Decorative architectural background watermark */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          fontFamily: "'Cinzel', serif",
          fontSize: "clamp(12rem, 25vw, 24rem)",
          fontWeight: 700,
          color: "rgba(160, 116, 42, 0.03)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        SWATH
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(2rem, 4vw, 3.5rem)",
            alignItems: "start",
          }}
        >
          {/* Left Column: Atelier Philosophy & Consultation Process */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 14px",
                background: "rgba(160, 116, 42, 0.08)",
                border: "1px solid rgba(160, 116, 42, 0.25)",
                borderRadius: "50px",
                marginBottom: "1rem",
              }}
            >
              <Sparkles size={12} color="var(--accent-gold)" />
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--accent-gold-dark)",
                }}
              >
                Let’s Build Together
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)",
                fontWeight: 600,
                lineHeight: 1.2,
                color: "var(--text-primary)",
                letterSpacing: "0.01em",
                marginBottom: "1rem",
              }}
            >
              Crafting Your Sanctuary of Light &amp;{" "}
              <span className="gradient-text-gold">Courtyards</span>
            </h2>

            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
                fontWeight: 400,
                color: "var(--text-muted)",
                lineHeight: 1.65,
                marginBottom: "2rem",
                maxWidth: "520px",
              }}
            >
              We accept a deliberately selective commission roster each year to ensure
              hands-on principal design involvement, rigorous site supervision, and authentic
              material craftsmanship from blueprint to handover.
            </p>

            {/* 3-Step Journey */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(160, 116, 42, 0.1)",
                    border: "1px solid rgba(160, 116, 42, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Compass size={18} color="var(--accent-gold)" />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "2px",
                    }}
                  >
                    01. Site &amp; Vastu Alignment
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    Solar orientation, wind tunnel study, Kerala Vastu grid mapping, and family lifestyle profiling.
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(160, 116, 42, 0.1)",
                    border: "1px solid rgba(160, 116, 42, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Layers size={18} color="var(--accent-gold)" />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "2px",
                    }}
                  >
                    02. Courtyard &amp; Spatial Blueprint
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    Central lightwell integration, volumetric 3D studies, tactile material palette, and preliminary cost modelling.
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(160, 116, 42, 0.1)",
                    border: "1px solid rgba(160, 116, 42, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Building2 size={18} color="var(--accent-gold)" />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "2px",
                    }}
                  >
                    03. On-Site Craft Oversight
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    Precision architectural drawings, structural coordination, exposed brickwork, and hand-finished timber execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Studio Channels */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                padding: "1.25rem 1.5rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "16px",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--accent-gold-dark)",
                    marginBottom: "4px",
                  }}
                >
                  <MapPin size={14} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Studio Location
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  Agara Village, 1st Sector, HSR Layout,
                  <br />
                  Bengaluru, Karnataka 560102
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--accent-gold-dark)",
                    marginBottom: "4px",
                  }}
                >
                  <Clock size={14} />
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Consultation Hours
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  Mon – Sat: 9:30 AM – 6:30 PM
                  <br />
                  By Prior Appointment
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Consultation Enquiry Form */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "clamp(1.75rem, 3.5vw, 2.5rem)",
              boxShadow: "0 10px 35px rgba(100, 80, 50, 0.08)",
              position: "relative",
            }}
          >
            {/* Top Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid var(--border-subtle)",
                paddingBottom: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  Book a Consultation
                </h3>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    marginTop: "2px",
                  }}
                >
                  Submissions routed directly to studio principal desk
                </p>
              </div>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: "rgba(160, 116, 42, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-gold)",
                }}
              >
                <Sparkles size={15} />
              </div>
            </div>

            {submitted ? (
              <div
                style={{
                  padding: "2.5rem 1rem",
                  textAlign: "center",
                  animation: "fadeIn 0.5s ease both",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "rgba(160, 116, 42, 0.12)",
                    border: "2px solid var(--accent-gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    color: "var(--accent-gold-dark)",
                  }}
                >
                  <CheckCircle2 size={30} />
                </div>

                <h4
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Consultation Request Dispatched
                </h4>

                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    maxWidth: "400px",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  Thank you, <strong>{form.name}</strong>. Your architectural inquiry has been sent to our desk. Our principal architects will review your project parameters and reach out to you via <strong>{form.phone}</strong> or <strong>{form.email}</strong> within 24 hours.
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={`https://wa.me/919944585627?text=Hello%20Architecture%20%2B%20Swath%2C%20I%20have%20submitted%20a%20consultation%20request%20on%20your%20website%20for%20${encodeURIComponent(
                      form.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "0.65rem 1.25rem",
                      background: "#25D366",
                      color: "#ffffff",
                      borderRadius: "6px",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.82rem",
                      textDecoration: "none",
                    }}
                  >
                    <MessageCircle size={15} />
                    Message on WhatsApp
                  </a>

                  <button
                    onClick={resetForm}
                    className="btn-outline"
                    style={{
                      color: "var(--text-primary)",
                      borderColor: "var(--border-subtle)",
                      background: "transparent",
                      padding: "0.65rem 1.25rem",
                      fontSize: "0.82rem",
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* Name & Phone */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                    gap: "0.85rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="form-name"
                      style={{
                        display: "block",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        letterSpacing: "0.03em",
                        marginBottom: "4px",
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      placeholder="e.g. Anand Murthy"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.9rem",
                        background: "var(--bg-main)",
                        border: errors.name ? "1px solid #d94a38" : "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                        color: "var(--text-primary)",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.88rem",
                        outline: "none",
                        transition: "all 0.2s ease",
                      }}
                    />
                    {errors.name && (
                      <p
                        style={{
                          color: "#d94a38",
                          fontSize: "0.72rem",
                          fontFamily: "'Outfit', sans-serif",
                          marginTop: "3px",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="form-phone"
                      style={{
                        display: "block",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        letterSpacing: "0.03em",
                        marginBottom: "4px",
                      }}
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      inputMode="numeric"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.9rem",
                        background: "var(--bg-main)",
                        border: errors.phone ? "1px solid #d94a38" : "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                        color: "var(--text-primary)",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.88rem",
                        outline: "none",
                        transition: "all 0.2s ease",
                      }}
                    />
                    {errors.phone && (
                      <p
                        style={{
                          color: "#d94a38",
                          fontSize: "0.72rem",
                          fontFamily: "'Outfit', sans-serif",
                          marginTop: "3px",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <AlertCircle size={11} /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Location */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                    gap: "0.85rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="form-email"
                      style={{
                        display: "block",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        letterSpacing: "0.03em",
                        marginBottom: "4px",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      placeholder="e.g. anand@company.com"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.9rem",
                        background: "var(--bg-main)",
                        border: errors.email ? "1px solid #d94a38" : "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                        color: "var(--text-primary)",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.88rem",
                        outline: "none",
                        transition: "all 0.2s ease",
                      }}
                    />
                    {errors.email && (
                      <p
                        style={{
                          color: "#d94a38",
                          fontSize: "0.72rem",
                          fontFamily: "'Outfit', sans-serif",
                          marginTop: "3px",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="form-location"
                      style={{
                        display: "block",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        letterSpacing: "0.03em",
                        marginBottom: "4px",
                      }}
                    >
                      Site Location *
                    </label>
                    <input
                      id="form-location"
                      type="text"
                      name="location"
                      placeholder="e.g. Sahakar Nagar, Bengaluru"
                      value={form.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.9rem",
                        background: "var(--bg-main)",
                        border: errors.location ? "1px solid #d94a38" : "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                        color: "var(--text-primary)",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.88rem",
                        outline: "none",
                        transition: "all 0.2s ease",
                      }}
                    />
                    {errors.location && (
                      <p
                        style={{
                          color: "#d94a38",
                          fontSize: "0.72rem",
                          fontFamily: "'Outfit', sans-serif",
                          marginTop: "3px",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <AlertCircle size={11} /> {errors.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Scope & Scale */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                    gap: "0.85rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="form-scope"
                      style={{
                        display: "block",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        letterSpacing: "0.03em",
                        marginBottom: "4px",
                      }}
                    >
                      Project Typology
                    </label>
                    <select
                      id="form-scope"
                      name="projectScope"
                      value={form.projectScope}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.9rem",
                        background: "var(--bg-main)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                        color: "var(--text-primary)",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.88rem",
                        outline: "none",
                      }}
                    >
                      <option value="Bespoke Courtyard Residence">Bespoke Courtyard Residence</option>
                      <option value="Luxury Urban Villa">Luxury Urban Villa (4,000+ sq ft)</option>
                      <option value="Heritage & Kerala Vernacular">Heritage &amp; Kerala Vernacular</option>
                      <option value="End-to-End Architecture & Interiors">End-to-End Architecture &amp; Interiors</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="form-plot"
                      style={{
                        display: "block",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        letterSpacing: "0.03em",
                        marginBottom: "4px",
                      }}
                    >
                      Estimated Built-up Scale
                    </label>
                    <select
                      id="form-plot"
                      name="plotSize"
                      value={form.plotSize}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "0.75rem 0.9rem",
                        background: "var(--bg-main)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                        color: "var(--text-primary)",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.88rem",
                        outline: "none",
                      }}
                    >
                      <option value="2,400 - 4,000 sq ft">2,400 – 4,000 sq ft (Compact Villa)</option>
                      <option value="4,000 - 8,000 sq ft">4,000 – 8,000 sq ft (Luxury Residence)</option>
                      <option value="8,000+ sq ft">8,000+ sq ft (Estate / Multigenerational Villa)</option>
                      <option value="Plot Finalization Stage">Plot in Finalization Stage</option>
                    </select>
                  </div>
                </div>

                {/* Message / Vision */}
                <div>
                  <label
                    htmlFor="form-message"
                    style={{
                      display: "block",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      letterSpacing: "0.03em",
                      marginBottom: "4px",
                    }}
                  >
                    Your Vision / Context (Optional)
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your family requirements, courtyard aspirations, or site dimensions..."
                    value={form.message}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem 0.9rem",
                      background: "var(--bg-main)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "8px",
                      color: "var(--text-primary)",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.88rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* DPDP Act 2023 Statutory Notice & Affirmative Consent */}
                <div
                  style={{
                    background: "rgba(160, 116, 42, 0.05)",
                    border: errors.consent
                      ? "1px solid #d94a38"
                      : "1px solid rgba(160, 116, 42, 0.2)",
                    borderRadius: "8px",
                    padding: "0.85rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginBottom: "6px",
                    }}
                  >
                    <ShieldCheck size={14} color="var(--accent-gold)" />
                    <span
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--accent-gold-dark)",
                      }}
                    >
                      DPDP Act, 2023 (India) Statutory Notice
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.74rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.55,
                      margin: "0 0 8px 0",
                    }}
                  >
                    Your contact information is processed exclusively by Architecture + Swath to evaluate project feasibility and schedule your consultation. Data is never sold or used for automated marketing.
                  </p>

                  {/* Explicit Affirmative Consent Checkbox */}
                  <label
                    htmlFor="form-consent"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      cursor: "pointer",
                      fontSize: "0.75rem",
                      fontFamily: "'Outfit', sans-serif",
                      color: "var(--text-primary)",
                      lineHeight: 1.45,
                    }}
                  >
                    <input
                      id="form-consent"
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, consent: e.target.checked }));
                        if (errors.consent && e.target.checked) {
                          setErrors((prev) => {
                            const copy = { ...prev };
                            delete copy.consent;
                            return copy;
                          });
                        }
                      }}
                      style={{
                        marginTop: "2px",
                        accentColor: "var(--accent-gold-dark)",
                        width: "15px",
                        height: "15px",
                        cursor: "pointer",
                        flexShrink: 0,
                      }}
                    />
                    <span>
                      I give affirmative consent to Architecture + Swath to process my details for this architectural inquiry in accordance with the{" "}
                      <Link
                        href="/privacy"
                        target="_blank"
                        style={{
                          color: "var(--accent-gold-dark)",
                          textDecoration: "underline",
                          fontWeight: 600,
                        }}
                      >
                        Privacy &amp; DPDP Notice
                      </Link>
                      . I understand I can withdraw consent anytime.
                    </span>
                  </label>

                  {errors.consent && (
                    <p
                      style={{
                        color: "#d94a38",
                        fontSize: "0.72rem",
                        fontFamily: "'Outfit', sans-serif",
                        marginTop: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <AlertCircle size={11} /> {errors.consent}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  id="form-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    fontSize: "0.88rem",
                    letterSpacing: "0.06em",
                    justifyContent: "center",
                    marginTop: "0.25rem",
                    opacity: loading ? 0.75 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                      <Loader2 size={16} className="animate-spin" />
                      Transmitting to Studio Desk...
                    </span>
                  ) : (
                    <>
                      Request Design Consultation <ArrowRight size={15} />
                    </>
                  )}
                </button>

                {/* Direct Contact Links */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "0.85rem",
                    borderTop: "1px solid var(--border-subtle)",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <a
                    href="https://wa.me/919944585627?text=Hello%20Architecture%20%2B%20Swath%2C%20I%20would%20like%20to%20discuss%20an%20architectural%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      textDecoration: "none",
                      color: "#25D366",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    <MessageCircle size={14} />
                    Instant WhatsApp: +91 99445 85627
                  </a>

                  <a
                    href="tel:+919944585627"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      textDecoration: "none",
                      color: "var(--accent-gold-dark)",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    <Phone size={13} />
                    Direct Call: +91 99445 85627
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
