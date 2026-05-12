"use client";

interface FloralCornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
  opacity?: number;
}

export default function FloralCorner({
  position,
  size = 200,
  opacity = 0.6,
}: FloralCornerProps) {
  const transforms: Record<string, string> = {
    "top-left": "rotate(0deg)",
    "top-right": "scaleX(-1)",
    "bottom-left": "scaleY(-1)",
    "bottom-right": "scale(-1)",
  };

  const positions: Record<string, React.CSSProperties> = {
    "top-left": { top: 0, left: 0 },
    "top-right": { top: 0, right: 0 },
    "bottom-left": { bottom: 0, left: 0 },
    "bottom-right": { bottom: 0, right: 0 },
  };

  return (
    <div
      style={{
        position: "absolute",
        ...positions[position],
        width: `${size}px`,
        height: `${size}px`,
        transform: transforms[position],
        opacity,
        pointerEvents: "none",
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        {/* Main flower cluster */}
        {/* Large flower */}
        <circle cx="45" cy="45" r="18" fill="#C58B5B" opacity="0.6" />
        <circle cx="45" cy="45" r="12" fill="#E5B88A" opacity="0.5" />
        <circle cx="45" cy="45" r="5" fill="#C58B5B" opacity="0.8" />
        
        {/* Petals around main flower */}
        <ellipse cx="30" cy="30" rx="12" ry="8" fill="#D9B8A7" opacity="0.5" transform="rotate(-45 30 30)" />
        <ellipse cx="60" cy="30" rx="12" ry="8" fill="#E8C7B0" opacity="0.5" transform="rotate(45 60 30)" />
        <ellipse cx="30" cy="60" rx="12" ry="8" fill="#E8C7B0" opacity="0.4" transform="rotate(-135 30 60)" />
        <ellipse cx="60" cy="60" rx="12" ry="8" fill="#D9B8A7" opacity="0.4" transform="rotate(135 60 60)" />

        {/* Small flower 1 */}
        <circle cx="90" cy="25" r="10" fill="#E8C7B0" opacity="0.5" />
        <circle cx="90" cy="25" r="6" fill="#C58B5B" opacity="0.4" />
        <circle cx="90" cy="25" r="3" fill="#E5B88A" opacity="0.6" />

        {/* Small flower 2 */}
        <circle cx="25" cy="90" r="10" fill="#E8C7B0" opacity="0.5" />
        <circle cx="25" cy="90" r="6" fill="#D9B8A7" opacity="0.4" />
        <circle cx="25" cy="90" r="3" fill="#C58B5B" opacity="0.6" />

        {/* Buds */}
        <ellipse cx="120" cy="15" rx="5" ry="8" fill="#C58B5B" opacity="0.35" transform="rotate(30 120 15)" />
        <ellipse cx="15" cy="120" rx="5" ry="8" fill="#C58B5B" opacity="0.35" transform="rotate(-60 15 120)" />

        {/* Leaves */}
        <path d="M70 50 Q85 35 100 45 Q85 55 70 50Z" fill="#8B9E7B" opacity="0.35" />
        <path d="M50 70 Q35 85 45 100 Q55 85 50 70Z" fill="#8B9E7B" opacity="0.35" />
        <path d="M100 30 Q115 20 130 30 Q115 35 100 30Z" fill="#9AAE8A" opacity="0.25" />
        <path d="M30 100 Q20 115 30 130 Q35 115 30 100Z" fill="#9AAE8A" opacity="0.25" />

        {/* Delicate branches */}
        <path
          d="M60 60 Q90 80 130 60 Q150 50 170 55"
          stroke="#C58B5B"
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M60 60 Q80 90 60 130 Q55 150 55 170"
          stroke="#C58B5B"
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
        />

        {/* Tiny dots */}
        <circle cx="140" cy="50" r="2" fill="#C58B5B" opacity="0.3" />
        <circle cx="155" cy="42" r="1.5" fill="#D9B8A7" opacity="0.3" />
        <circle cx="50" cy="140" r="2" fill="#C58B5B" opacity="0.3" />
        <circle cx="42" cy="155" r="1.5" fill="#D9B8A7" opacity="0.3" />
        <circle cx="110" cy="38" r="1.5" fill="#E8C7B0" opacity="0.3" />
        <circle cx="38" cy="110" r="1.5" fill="#E8C7B0" opacity="0.3" />
      </svg>
    </div>
  );
}
