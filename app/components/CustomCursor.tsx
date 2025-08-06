"use client";

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-500/30 rounded-full pointer-events-none z-50 transition-transform duration-300"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 0.8 : 1})`,
        }}
      />
    </>
  );
}