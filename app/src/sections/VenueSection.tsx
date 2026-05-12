"use client";

import { motion } from "framer-motion";
import { MapPin, Copy, ExternalLink, Check } from "lucide-react";
import { useState } from "react";
import FloralCorner from "@/components/FloralCorner";

const ADDRESS = "VELU MAHAL, Ramalakshmi Nagar, Thadikompu Road, Trichy Bypass, Dindigul, Tamil Nadu – 624004";
const MAPS_URL = "https://www.google.com/maps/search/Velu+Mahal+Ramalakshmi+Nagar+Thadikompu+Road+Dindigul";

export default function VenueSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="venue"
      className="section-padding"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-warm-white)",
        overflow: "hidden",
      }}
    >
      <FloralCorner position="bottom-right" size={150} opacity={0.3} />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "6px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1rem", fontWeight: 300 }}>
          Join Us At
        </p>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--text-primary)", fontWeight: 300 }}>
          Venue & Location
        </h2>
        <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)", margin: "1rem auto" }} />
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%", maxWidth: "800px", padding: "0 1.5rem" }}>
        {/* Address card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card-strong"
          style={{ borderRadius: "20px", padding: "2.5rem", textAlign: "center" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <MapPin size={18} color="#C58B5B" />
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", color: "var(--text-primary)", fontWeight: 600, letterSpacing: "2px" }}>
              VELU MAHAL
            </h3>
          </div>

          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 2, fontWeight: 300 }}>
            Ramalakshmi Nagar,<br />
            Thadikompu Road, Trichy Bypass,<br />
            Dindigul, Tamil Nadu – 624004
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
            <motion.button
              id="copy-address-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCopy}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.7rem 1.5rem",
                background: copied ? "rgba(197,139,91,0.15)" : "transparent",
                border: "1px solid rgba(197,139,91,0.4)",
                borderRadius: "50px",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy Address"}
            </motion.button>

            <motion.a
              id="open-maps-btn"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.7rem 1.5rem",
                background: "linear-gradient(135deg, #C58B5B, #E5B88A)",
                border: "none",
                borderRadius: "50px",
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#FFFDFB",
                cursor: "pointer",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(197,139,91,0.25)",
              }}
            >
              <ExternalLink size={14} />
              Open in Maps
            </motion.a>
          </div>
        </motion.div>

        {/* Google Maps embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(197,139,91,0.15)", boxShadow: "0 8px 32px rgba(74,52,40,0.08)", height: "300px" }}
        >
          <iframe
            title="Velu Mahal Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0!2d77.9738!3d10.3673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmVsdSBNYWhhbCwgRGluZGlndWw!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0, display: "block", filter: "sepia(20%) saturate(80%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Wedding timing info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
        >
          {[
            { icon: "🗓️", label: "Date", value: "Wednesday, 28 May 2026" },
            { icon: "⏰", label: "Time", value: "09:00 AM onwards" },
          ].map((item) => (
            <div key={item.label} className="glass-card" style={{ flex: 1, minWidth: "180px", padding: "1.2rem 1.5rem", borderRadius: "16px", textAlign: "center" }}>
              <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "3px", textTransform: "uppercase", color: "var(--text-secondary)", margin: "0.4rem 0 0.2rem", fontWeight: 300 }}>{item.label}</p>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: 500 }}>{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
