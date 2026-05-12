"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function getTimeLeft() {
  const wedding = new Date("2026-05-28T09:00:00").getTime();
  const now = new Date().getTime();
  const diff = wedding - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

interface TimeUnit {
  value: number;
  label: string;
}

function CountdownCard({ value, label }: TimeUnit) {
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      const t = setTimeout(() => { setFlip(false); setPrev(value); }, 400);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="animate-pulse-glow"
      style={{
        minWidth: "80px",
        padding: "1.5rem 1rem",
        borderRadius: "16px",
        background: "rgba(255,253,251,0.8)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(197,139,91,0.2)",
        textAlign: "center",
        flex: 1,
        maxWidth: "110px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 600,
          color: "var(--accent-gold)",
          lineHeight: 1,
          transition: "transform 0.3s ease",
          transform: flip ? "rotateX(90deg)" : "rotateX(0deg)",
          display: "block",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.65rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--text-secondary)",
          marginTop: "0.5rem",
          fontWeight: 400,
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units: TimeUnit[] = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <section
      id="countdown"
      className="section-padding"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #F6F1EB 0%, #FFF7F0 50%, #E8C7B0 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(197,139,91,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "6px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1rem", fontWeight: 300 }}>
          Counting down to
        </p>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--text-primary)", fontWeight: 300 }}>
          Our Special Day
        </h2>
        <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)", margin: "1rem auto" }} />
        <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", color: "var(--accent-gold)", fontStyle: "italic" }}>
          28 May 2026
        </p>
      </motion.div>

      {/* Countdown cards */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", maxWidth: "520px", width: "100%", padding: "0 1rem" }}>
        {units.map((u) => (
          <CountdownCard key={u.label} value={u.value} label={u.label} />
        ))}
      </div>

      {/* Decorative dots row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{ display: "flex", gap: "0.4rem", marginTop: "3rem" }}
      >
        {[...Array(7)].map((_, i) => (
          <div key={i} style={{ width: i === 3 ? "8px" : "4px", height: i === 3 ? "8px" : "4px", borderRadius: "50%", background: "var(--accent-gold)", opacity: i === 3 ? 0.6 : 0.25 }} />
        ))}
      </motion.div>
    </section>
  );
}
