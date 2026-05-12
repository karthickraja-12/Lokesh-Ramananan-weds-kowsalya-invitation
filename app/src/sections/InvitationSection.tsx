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
          }}
        >
          <div
            style={{
              position: "relative",
              width: "120px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Animated soft glow */}
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                position: "absolute",
                width: "80px",
                height: "80px",
                background: "radial-gradient(circle, #C58B5B 0%, transparent 70%)",
                borderRadius: "50%",
                filter: "blur(15px)",
              }}
            />
            
            {/* Elegant SVG Hearts */}
            <svg viewBox="0 0 100 50" style={{ width: "100px", zIndex: 1 }}>
              <path
                d="M30 40 C 10 30, 10 10, 30 10 C 40 10, 50 20, 50 20 C 50 20, 60 10, 70 10 C 90 10, 90 30, 70 40 L 50 55 L 30 40"
                fill="none"
                stroke="#C58B5B"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path
                d="M40 35 C 25 28, 25 15, 40 15 C 45 15, 50 22, 50 22 C 50 22, 55 15, 60 15 C 75 15, 75 28, 60 35 L 50 45 L 40 35"
                fill="#C58B5B"
                opacity="0.3"
              />
            </svg>
            
            {/* Side Flourishes */}
            <div style={{ position: "absolute", left: "-40px", top: "50%", width: "40px", height: "1px", background: "linear-gradient(90deg, transparent, #C58B5B)" }} />
            <div style={{ position: "absolute", right: "-40px", top: "50%", width: "40px", height: "1px", background: "linear-gradient(270deg, transparent, #C58B5B)" }} />
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
