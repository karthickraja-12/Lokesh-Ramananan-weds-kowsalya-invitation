"use client";

import { motion, Variants } from "framer-motion";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import FloralCorner from "@/components/FloralCorner";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function InvitationSection() {
  return (
    <section
      id="invitation"
      className="section-padding"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "var(--bg-warm-white)",
      }}
    >
      <FloralCorner position="top-right" size={160} opacity={0.3} />
      <FloralCorner position="bottom-left" size={160} opacity={0.3} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card"
        style={{
          maxWidth: "600px",
          width: "100%",
          margin: "0 auto",
          padding: "3.5rem 2.5rem",
          borderRadius: "24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(197,139,91,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(197,139,91,0.05) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        {/* Top ornament */}
        <motion.div variants={itemVariants}>
          <svg
            viewBox="0 0 60 30"
            fill="none"
            style={{
              width: "60px",
              margin: "0 auto 1.5rem",
              opacity: 0.5,
            }}
          >
            <path
              d="M30 0 C20 15, 5 15, 0 30 M30 0 C40 15, 55 15, 60 30"
              stroke="#C58B5B"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="30" cy="2" r="2" fill="#C58B5B" />
          </svg>
        </motion.div>

        {/* With blessings text */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.8rem",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
            marginBottom: "1.5rem",
          }}
        >
          With the blessings of our families
        </motion.p>

        <OrnamentalDivider width={200} />

        {/* Decorative Ornament */}
        <motion.div
          variants={itemVariants}
          style={{
            margin: "2.5rem 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            {/* Left Line */}
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(197,139,91,0.6))" }} />
            
            {/* Heart Container */}
            <div
              style={{
                position: "relative",
                width: "44px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Animated soft glow */}
              <motion.div
                animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  position: "absolute",
                  width: "50px",
                  height: "50px",
                  background: "radial-gradient(circle, #C58B5B 0%, transparent 70%)",
                  borderRadius: "50%",
                  filter: "blur(10px)",
                }}
              />
              
              {/* Elegant SVG Heart */}
              <svg viewBox="0 0 24 24" style={{ width: "28px", height: "28px", zIndex: 1 }}>
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="rgba(197, 139, 91, 0.15)"
                  stroke="#C58B5B"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Right Line */}
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(270deg, transparent, rgba(197,139,91,0.6))" }} />
          </div>
        </motion.div>

        <OrnamentalDivider width={160} />

        {/* Invitation message */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1rem",
            color: "var(--text-secondary)",
            margin: "2rem 0",
            lineHeight: 1.8,
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          Together with their families, request the honour of your gracious presence at the celebration of the marriage of
        </motion.p>

        {/* Couple names */}
        <motion.div variants={itemVariants}>
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              lineHeight: 1.4,
            }}
          >
            <span className="gold-gradient-text">Lokesh Ramanan K</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.3rem",
              color: "#C58B5B",
              margin: "0.3rem 0",
            }}
          >
            &
          </p>
          <h2
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              lineHeight: 1.4,
            }}
          >
            <span className="gold-gradient-text">Kowsalya J</span>
          </h2>
        </motion.div>

        {/* Date and venue */}
        <motion.div
          variants={itemVariants}
          style={{ marginTop: "2rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.8rem",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              marginBottom: "0.5rem",
            }}
          >
            On
          </p>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.4rem",
              color: "var(--text-primary)",
              fontWeight: 600,
              letterSpacing: "2px",
            }}
          >
            Wednesday, 28 May 2026
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              marginTop: "0.5rem",
              fontWeight: 300,
            }}
          >
            at 09:00 AM onwards
          </p>
        </motion.div>

        {/* Venue */}
        <motion.div
          variants={itemVariants}
          style={{ marginTop: "1.5rem" }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.8rem",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              marginBottom: "0.5rem",
            }}
          >
            At
          </p>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.2rem",
              color: "var(--text-primary)",
              fontWeight: 600,
              letterSpacing: "1px",
            }}
          >
            VELU MAHAL
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
              marginTop: "0.3rem",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Ramalakshmi Nagar, Thadikombu Road,
            <br />
            Trichy Bypass, Dindigul,
            <br />
            Tamil Nadu – 624004
          </p>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div variants={itemVariants} style={{ marginTop: "2rem" }}>
          <svg
            viewBox="0 0 60 30"
            fill="none"
            style={{
              width: "60px",
              margin: "0 auto",
              opacity: 0.5,
              transform: "rotate(180deg)",
            }}
          >
            <path
              d="M30 0 C20 15, 5 15, 0 30 M30 0 C40 15, 55 15, 60 30"
              stroke="#C58B5B"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="30" cy="2" r="2" fill="#C58B5B" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
