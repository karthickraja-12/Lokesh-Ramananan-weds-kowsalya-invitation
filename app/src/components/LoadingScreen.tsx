"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            background:
              "linear-gradient(135deg, #F6F1EB 0%, #FFF7F0 50%, #E8C7B0 100%)",
          }}
        >
          {/* Decorative ring */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "2px solid #C58B5B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Inner decorative ring */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "1px solid rgba(197, 139, 91, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Initials */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "2rem",
                    color: "#C58B5B",
                    letterSpacing: "2px",
                  }}
                >
                  L
                </span>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.2rem",
                    color: "#C58B5B",
                    margin: "0 4px",
                  }}
                >
                  &
                </span>
                <span
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "2rem",
                    color: "#C58B5B",
                    letterSpacing: "2px",
                  }}
                >
                  K
                </span>
              </motion.div>
            </motion.div>

            {/* Spinning ornamental dots */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: "-8px",
              }}
            >
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#C58B5B",
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${deg}deg) translateY(-68px) translate(-50%, -50%)`,
                    opacity: 0.6,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{
              marginTop: "2rem",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#4A3428",
              opacity: 0.7,
            }}
          >
            Save the Date
          </motion.p>

          {/* Shimmer line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              marginTop: "1.5rem",
              width: "60px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, #C58B5B, transparent)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite linear",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
