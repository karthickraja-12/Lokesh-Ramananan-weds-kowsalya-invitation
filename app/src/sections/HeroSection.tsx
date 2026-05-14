"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import FloralCorner from "@/components/FloralCorner";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToInvitation = () => {
    const el = document.getElementById("invitation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #F6F1EB 0%, #FFF7F0 40%, #E8C7B0 100%)",
      }}
    >
      {/* Floral corners */}
      <FloralCorner position="top-left" size={180} opacity={0.5} />
      <FloralCorner position="top-right" size={180} opacity={0.5} />
      <FloralCorner position="bottom-left" size={140} opacity={0.35} />
      <FloralCorner position="bottom-right" size={140} opacity={0.35} />

      {/* Background parallax glow */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          scale: backgroundScale,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(197,139,91,0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "2rem",
            maxWidth: "700px",
          }}
        >
          {/* Luxury Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] as any }}
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              marginBottom: "3rem",
              background: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(197, 139, 91, 0.2)",
              boxShadow: "0 20px 40px rgba(74, 52, 40, 0.08)",
            }}
          >
            {/* Decorative outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: "-10px",
                border: "1px dashed rgba(197, 139, 91, 0.3)",
                borderRadius: "50%",
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: "-20px",
                border: "0.5px solid rgba(197, 139, 91, 0.15)",
                borderRadius: "50%",
              }}
            />
            
            {/* Monogram Text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                lineHeight: 0.8,
              }}
            >
              <span
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "4.5rem",
                  color: "#C58B5B",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.05)",
                  marginTop: "10px"
                }}
              >
                L
              </span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.2rem",
                  color: "#4A3428",
                  letterSpacing: "4px",
                  margin: "5px 0"
                }}
              >
                &
              </span>
              <span
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "4.5rem",
                  color: "#C58B5B",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.05)",
                  marginBottom: "10px"
                }}
              >
                K
              </span>
            </div>

            {/* Sparkles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
                style={{
                  position: "absolute",
                  width: "4px",
                  height: "4px",
                  background: "#C58B5B",
                  borderRadius: "50%",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: "blur(1px)",
                  boxShadow: "0 0 10px #C58B5B",
                }}
              />
            ))}
          </motion.div>

          {/* Save the date label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.85rem",
              letterSpacing: "8px",
              textTransform: "uppercase",
              color: "#4A3428",
              marginBottom: "1.5rem",
              fontWeight: 500,
            }}
          >
            Save the Date
          </motion.p>

          {/* Sub heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "#6B5347",
              marginBottom: "1.5rem",
              fontWeight: 300,
              letterSpacing: "1px",
            }}
          >
            You are invited to our wedding
          </motion.p>

          {/* Couple names */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h1
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
                lineHeight: 1.3,
                marginBottom: "0.5rem",
              }}
            >
              <span className="gold-gradient-text">Lokesh Ramanan</span>
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                margin: "0.5rem 0",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, #C58B5B)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.5rem",
                  color: "#C58B5B",
                }}
              >
                &
              </span>
              <div
                style={{
                  width: "60px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, #C58B5B, transparent)",
                }}
              />
            </div>
            <h1
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
                lineHeight: 1.3,
              }}
            >
              <span className="gold-gradient-text">Kowsalya J</span>
            </h1>
          </motion.div>

          {/* Wedding date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, #C58B5B)",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                  color: "#4A3428",
                  fontWeight: 600,
                  letterSpacing: "3px",
                }}
              >
                28 May, 2026
              </p>
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, #C58B5B, transparent)",
                }}
              />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 45px rgba(197, 139, 91, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToInvitation}
            id="open-invitation-btn"
            style={{
              marginTop: "3rem",
              padding: "1rem 3rem",
              background:
                "linear-gradient(135deg, #C58B5B, #E5B88A, #C58B5B)",
              backgroundSize: "200% 200%",
              color: "#FFFDFB",
              border: "none",
              borderRadius: "50px",
              fontFamily: "var(--font-heading)",
              fontSize: "0.95rem",
              letterSpacing: "4px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
              boxShadow: "0 10px 30px rgba(197, 139, 91, 0.2)",
            }}
          >
            Explore the Celebration
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.8rem",
          cursor: "pointer"
        }}
        onClick={scrollToInvitation}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.7rem",
            color: "#C58B5B",
            letterSpacing: "4px",
            textTransform: "uppercase",
            opacity: 0.6
          }}
        >
          Scroll to discover
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} color="#C58B5B" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
