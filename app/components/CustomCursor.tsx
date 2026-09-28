"use client";

import { useEffect, useRef, useState } from 'react';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only replace the cursor on devices with a precise, hover-capable pointer (not touch)
    setEnabled(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!enabled || !cursor) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ease = reduceMotion ? 1 : 0.3;
    const target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };
    let frame = 0;
    let hasMoved = false;

    document.documentElement.classList.add('has-custom-cursor');

    const render = () => {
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const handleMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!hasMoved) {
        // Jump to the first position instead of gliding in from the corner
        current.x = target.x;
        current.y = target.y;
        hasMoved = true;
      }
      cursor.classList.add('is-visible');
    };

    const handleOver = (e: MouseEvent) => {
      const el = e.target as Element | null;
      cursor.classList.toggle('is-hovering', !!el?.closest?.(INTERACTIVE));
    };

    const handleLeave = () => cursor.classList.remove('is-visible');

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.documentElement.addEventListener('mouseleave', handleLeave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={cursorRef} aria-hidden className="custom-cursor">
      {/* Arrow tip sits at (3, 3), so offset by that to line up with the real pointer */}
      <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginLeft: -3, marginTop: -3 }}>
        <path
          d="M3 3 L20.5 10.6 L12.4 12.6 L9.6 20.8 Z"
          fill="#0d0718"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
