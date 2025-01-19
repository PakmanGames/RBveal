import React, { useEffect, useState, useCallback } from "react";

const Confetti = () => {
  const [particles, setParticles] = useState([]);

  const colors = ["#ffd700", "#ff0000", "#00ff00", "#0000ff", "#ff00ff"];
  const shapes = ["square", "circle"];

  const createParticle = useCallback(() => {
    return {
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -20,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      size: Math.random() * 8 + 4,
      speedX: (Math.random() - 0.5) * 8,
      speedY: Math.random() * 3 + 2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();
    const particleCount = 100;

    // Initial particles
    const initialParticles = Array.from(
      { length: particleCount },
      createParticle
    );
    setParticles(initialParticles);

    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 16; // Normalize to ~60fps
      lastTime = currentTime;

      setParticles((prevParticles) => {
        return prevParticles
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.speedX * deltaTime,
            y: particle.y + particle.speedY * deltaTime,
            rotation: particle.rotation + particle.rotationSpeed * deltaTime,
          }))
          .filter((particle) => particle.y < window.innerHeight)
          .concat(
            // Add new particles as old ones disappear
            Array.from(
              { length: Math.max(0, particleCount - prevParticles.length) },
              createParticle
            )
          );
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [createParticle]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            borderRadius: particle.shape === "circle" ? "50%" : "0",
            transform: `rotate(${particle.rotation}deg)`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
