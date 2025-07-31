"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface MousePosition {
  x: number;
  y: number;
}

export const CursorMask = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if cursor is over a maskable element
      const target = e.target as HTMLElement;
      const isMaskable = target.closest('[data-mask-text]');
      setIsVisible(!!isMaskable);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, rgba(255, 107, 53, 0.1) 40%, transparent 70%)",
        backdropFilter: "invert(1) brightness(2)",
        mixBlendMode: "difference",
      }}
      animate={{
        x: mousePosition.x - 100,
        y: mousePosition.y - 100,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  );
};
