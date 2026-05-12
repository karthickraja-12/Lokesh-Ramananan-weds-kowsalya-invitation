"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
  type: "petal" | "leaf" | "dot";
}

export default function FloatingElements() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const items: Petal[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 8,
      size: 8 + Math.random() * 16,
      opacity: 0.15 + Math.random() * 0.2,
      type: (["petal", "leaf", "dot"] as const)[Math.floor(Math.random() * 3)],
    }));
    setPetals(items);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 5,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            x: `${petal.x}vw`,
            y: "-5vh",
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            rotate: 360 + Math.random() * 360,
            opacity: [0, petal.opacity, petal.opacity, 0],
            x: `${petal.x + (Math.random() - 0.5) * 20}vw`,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
        >
          {petal.type === "petal" && (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8 2 4 6 4 12C4 14 6 16 8 16C10 16 12 14 12 12C12 14 14 16 16 16C18 16 20 14 20 12C20 6 16 2 12 2Z"
                fill="#C58B5B"
                opacity="0.5"
              />
            </svg>
          )}
          {petal.type === "leaf" && (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M17 8C8 10 5 18 5 18C5 18 12 17 17 8Z"
                fill="#8B9E7B"
                opacity="0.4"
              />
              <path
                d="M5 18C5 18 10 14 17 8"
                stroke="#8B9E7B"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </svg>
          )}
          {petal.type === "dot" && (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(197,139,91,0.3) 0%, transparent 70%)",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
