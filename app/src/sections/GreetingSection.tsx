"use client";

import { motion } from "framer-motion";
import FloralCorner from "@/components/FloralCorner";

export default function GreetingSection() {
  return (
    <section
      id="greeting"
      className="section-padding"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        background: "linear-gradient(135deg, #F6F1EB 0%, #FFF7F0 50%, #E8C7B0 100%)",
        overflow: "hidden",
      }}
    >
      <FloralCorner position="top-left" size={160} opacity={0.4} />
      <FloralCorner position="top-right" size={160} opacity={0.4} />
      <FloralCorner position="bottom-left" size={130} opacity={0.3} />
      <FloralCorner position="bottom-right" size={130} opacity={0.3} />

      {/* Floating hearts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.8 }}
          style={{
            position: "absolute",
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 20}%`,
            fontSize: "1rem",
            pointerEvents: "none",
            zIndex: 1,
          }}
          aria-hidden="true"
        >
          ♥
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
        style={{ textAlign: "center", maxWidth: "560px", padding: "0 2rem", position: "relative", zIndex: 2 }}
      >
        {/* Small heart */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ fontSize: "2rem", marginBottom: "2rem", color: "#C58B5B" }}
        >
          ♥
        </motion.div>

        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "6px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1.5rem", fontWeight: 300 }}>
          From Our Hearts
        </p>

        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "var(--text-primary)", fontWeight: 300, lineHeight: 1.6, marginBottom: "1.5rem" }}>
          Thank you for being part of<br />our special day
        </h2>

        <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)", margin: "1.5rem auto" }} />

        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.9, fontWeight: 300, marginBottom: "2.5rem" }}>
          Your presence will make our celebration complete.<br />
          We look forward to sharing this beautiful moment<br />
          with you and your loved ones.
        </p>

        <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1rem", fontStyle: "italic" }}>
          With all our love,
        </p>

        <h3 style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.4 }}>
          <span className="gold-gradient-text">Lokesh & Kowsalya</span>
        </h3>

        {/* Ring icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
          style={{ marginTop: "3rem" }}
        >
          <svg viewBox="0 0 80 40" fill="none" style={{ width: "80px", margin: "0 auto", opacity: 0.4 }}>
            <circle cx="25" cy="20" r="15" stroke="#C58B5B" strokeWidth="1.5" fill="none" />
            <circle cx="55" cy="20" r="15" stroke="#C58B5B" strokeWidth="1.5" fill="none" />
            <circle cx="25" cy="20" r="4" fill="#C58B5B" opacity="0.4" />
            <circle cx="55" cy="20" r="4" fill="#C58B5B" opacity="0.4" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
