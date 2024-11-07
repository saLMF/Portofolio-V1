import React from "react";

interface Star {
  id: number;
  cx: number;
  cy: number;
  r: number;
  animationDelay: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  animationDelay: number;
}

const StarfieldBackground: React.FC = () => {
  // Generate random stars
  const generateStars = (count: number): Star[] => {
    return Array.from({length: count}, (_, i) => ({
      id: i,
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      r: Math.random() * 0.2 + 0.1,
      animationDelay: Math.random() * 3,
    }));
  };

  // Generate shooting stars
  const generateShootingStars = (count: number): ShootingStar[] => {
    return Array.from({length: count}, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      animationDelay: Math.random() * 10,
    }));
  };

  const stars = generateStars(100);
  const shootingStars = generateShootingStars(5);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

      {/* Stars */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient
            id="starGlow"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop
              offset="0%"
              stopColor="white"
              stopOpacity="1"
            />
            <stop
              offset="100%"
              stopColor="white"
              stopOpacity="0"
            />
          </radialGradient>
        </defs>

        {/* Static star layer */}
        <g>
          {stars.slice(0, 50).map((star) => (
            <circle
              key={`static-${star.id}`}
              cx={`${star.cx}%`}
              cy={`${star.cy}%`}
              r={star.r}
              fill="white"
              className="animate-twinkle"
              style={{
                animationDelay: `${star.animationDelay}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </g>

        {/* Rotating star layer */}
        <g className="animate-spin-slow origin-center">
          {stars.slice(50).map((star) => (
            <circle
              key={`rotating-${star.id}`}
              cx={`${star.cx}%`}
              cy={`${star.cy}%`}
              r={star.r}
              fill="white"
              className="animate-twinkle"
              style={{
                animationDelay: `${star.animationDelay}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </g>

        {/* Shooting stars */}
        {shootingStars.map((star) => (
          <line
            key={`shooting-${star.id}`}
            x1={`${star.startX}%`}
            y1={`${star.startY}%`}
            x2={`${star.startX + 5}%`}
            y2={`${star.startY + 5}%`}
            stroke="white"
            strokeWidth="0.1"
            className="animate-shooting-star"
            style={{
              animationDelay: `${star.animationDelay}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default StarfieldBackground;
