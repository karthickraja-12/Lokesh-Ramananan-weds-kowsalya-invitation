"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, VolumeX } from "lucide-react";

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    // Using a royalty-free 'lite' acoustic track
    audioRef.current = new Audio("https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  if (!mounted) return null;

  return (
    <motion.button
      id="music-toggle-btn"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      title={playing ? "Pause music" : "Play music"}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "1.5rem",
        zIndex: 100,
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        border: "1px solid rgba(197,139,91,0.35)",
        background: "rgba(255,253,251,0.85)",
        backdropFilter: "blur(12px)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(74,52,40,0.1)",
      }}
    >
      <AnimatePresence mode="wait">
        {playing ? (
          <motion.div key="on" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Music size={18} color="#C58B5B" />
          </motion.div>
        ) : (
          <motion.div key="off" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <VolumeX size={18} color="#C58B5B" opacity={0.5} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
