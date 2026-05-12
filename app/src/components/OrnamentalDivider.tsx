"use client";

import { motion } from "framer-motion";

interface OrnamentalDividerProps {
  width?: number;
  color?: string;
}

export default function OrnamentalDivider({
  width = 280,
  color = "#C58B5B",
}: OrnamentalDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: `${width}px`,
        maxWidth: "90%",
      }}
    >
      <svg
        viewBox="0 0 280 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="20"
      >
        {/* Left line */}
        <line
          x1="0"
          y1="10"
          x2="110"
          y2="10"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.5"
        />
        {/* Left curl */}
        <path
          d="M110 10 Q120 3 130 10"
          stroke={color}
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />
        {/* Center diamond */}
        <path
          d="M135 5 L140 10 L135 15 L130 10 Z"
          fill={color}
          opacity="0.5"
        />
        {/* Right curl */}
        <path
          d="M150 10 Q160 17 170 10"
          stroke={color}
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />
        {/* Right line */}
        <line
          x1="170"
          y1="10"
          x2="280"
          y2="10"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.5"
        />
        {/* Small dots */}
        <circle cx="125" cy="10" r="1.5" fill={color} opacity="0.4" />
        <circle cx="155" cy="10" r="1.5" fill={color} opacity="0.4" />
      </svg>
    </motion.div>
  );
}
