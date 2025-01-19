import React, { useEffect, useState, useCallback } from "react";

const Rain = ({
  intensity = 100, // Number of raindrops
  speed = 15, // Fall speed
  color = "#DEF3F6", // Raindrop color
  thickness = 1.5, // Raindrop thickness
  height = 20, // Raindrop height
}) => {
  const [drops, setDrops] = useState([]);

  const createDrop = useCallback(() => {
    return {
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -20,
      speedY: speed + Math.random() * speed * 0.5,
      thickness: thickness + Math.random() * thickness * 0.2,
      height: height + Math.random() * height * 0.3,
      opacity: 0.1 + Math.random() * 0.4,
    };
  }, [speed, thickness, height]);

  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();

    // Initial raindrops
    const initialDrops = Array.from({ length: intensity }, createDrop);
    setDrops(initialDrops);

    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 16;
      lastTime = currentTime;

      setDrops((prevDrops) => {
        return prevDrops
          .map((drop) => ({
            ...drop,
            y: drop.y + drop.speedY * deltaTime,
          }))
          .filter((drop) => drop.y < window.innerHeight + 20)
          .concat(
            Array.from(
              { length: Math.max(0, intensity - prevDrops.length) },
              createDrop
            )
          );
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      setDrops((prevDrops) => {
        return prevDrops.map((drop) => ({
          ...drop,
          x: Math.random() * window.innerWidth,
        }));
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [createDrop, intensity]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute"
          style={{
            left: `${drop.x}px`,
            top: `${drop.y}px`,
            width: `${drop.thickness}px`,
            height: `${drop.height}px`,
            backgroundColor: color,
            opacity: drop.opacity,
            filter: "blur(0.5px)",
            transform: "rotate(15deg)",
            boxShadow: `0 0 2px ${color}`,
          }}
        />
      ))}
      {/* Add a semi-transparent overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default Rain;
