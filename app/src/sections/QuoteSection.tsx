"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="section-padding"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        background: "linear-gradient(180deg, var(--bg-warm-white) 0%, var(--bg-cream) 100%)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(197,139,91,0.08)", pointerEvents: "none" }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: "center", maxWidth: "600px", padding: "0 2rem", position: "relative", zIndex: 2 }}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: "var(--font-heading)", fontSize: "6rem", color: "var(--accent-gold)", lineHeight: 1, display: "block", marginBottom: "-2rem" }}
        >
          &ldquo;
        </motion.span>

        <p style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.2rem, 3vw, 1.6rem)", color: "var(--text-primary)", lineHeight: 1.8, fontWeight: 300, fontStyle: "italic" }}>
          Two souls with but a single thought,<br />two hearts that beat as one.
        </p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)", margin: "1.5rem auto" }}
        />

        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--text-secondary)", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 300 }}>
          — Friedrich Halm
        </p>
      </motion.div>
    </section>
  );
}
