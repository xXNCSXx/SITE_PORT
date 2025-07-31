"use client";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const containerRef = useRef<HTMLDivElement>(null);
  const isMouseInsideRef = useRef(false);

  const updateMousePosition = React.useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMouseInsideRef.current) {
        updateMousePosition(e);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [updateMousePosition]);

  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={className}
      onMouseEnter={() => {
        setIsHovered(true);
        isMouseInsideRef.current = true;
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        isMouseInsideRef.current = false;
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-repeat:no-repeat]"
        style={{
          WebkitMaskPosition: `${(mousePosition?.x ?? 0) - maskSize / 2}px ${
            (mousePosition?.y ?? 0) - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
          maskPosition: `${(mousePosition?.x ?? 0) - maskSize / 2}px ${
            (mousePosition?.y ?? 0) - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{ duration: 0.1 }}
      >
        <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
        <div
          className="max-w-4xl mx-auto text-center text-white text-4xl font-bold relative z-20"
          style={{ color: "#f26146" }}
        >
          {revealText}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center text-white z-10">
        {children}
      </div>
    </motion.div>
  );
};
