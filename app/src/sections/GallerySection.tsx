"use client";

import { motion } from "framer-motion";

const images = [
  { src: "/couple.jpg", alt: "Couple 1", size: "large" },
  { src: "/gallery2.jpg", alt: "Couple 2", size: "small" },
  { src: "/gallery3.jpg", alt: "Couple 3", size: "small" },
  { src: "/gallery4.jpg", alt: "Couple 4", size: "medium" },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="section-padding"
      style={{
        position: "relative",
        background: "var(--bg-cream)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", letterSpacing: "6px", textTransform: "uppercase", color: "var(--text-secondary)", marginBottom: "1rem", fontWeight: 300 }}>
          Our Moments
        </p>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3rem)", color: "var(--text-primary)", fontWeight: 300 }}>
          Photo Gallery
        </h2>
        <div style={{ width: "50px", height: "1px", background: "linear-gradient(90deg, transparent, var(--accent-gold), transparent)", margin: "1rem auto" }} />
      </motion.div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
        gap: "1.5rem", 
        padding: "0 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              aspectRatio: img.size === "large" ? "1/1" : "3/4",
              boxShadow: "0 10px 30px rgba(74, 52, 40, 0.1)",
              background: "#eee"
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=500&auto=format&fit=crop`;
              }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(74, 52, 40, 0.2), transparent)",
              opacity: 0,
              transition: "opacity 0.3s ease"
            }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
