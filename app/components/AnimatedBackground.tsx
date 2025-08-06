"use client";

import { useEffect, useRef, useState } from 'react';

export default function FlyingBirdsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const birdsRef = useRef<Bird[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  interface Bird {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    wingPhase: number;
    wingSpeed: number;
    color: string;
    opacity: number;
    avoidanceRadius: number;
    flockRadius: number;
    separationRadius: number;
    maxSpeed: number;
    maxForce: number;
    trail: { x: number; y: number; opacity: number }[];
    angle: number;
    scared: boolean;
    scaredTimer: number;
  }

  const birdColors = [
    '30, 41, 59',      // Slate
    '51, 65, 85',      // Slate 600
    '71, 85, 105',     // Slate 500
    '100, 116, 139',   // Slate 400
    '148, 163, 184',   // Slate 300
    '203, 213, 225',   // Slate 200
  ];

  const createBird = (width: number, height: number): Bird => {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const speed = Math.random() * 2 + 1;
    const angle = Math.random() * Math.PI * 2;
    
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 8 + 4,
      wingPhase: Math.random() * Math.PI * 2,
      wingSpeed: Math.random() * 0.3 + 0.2,
      color: birdColors[Math.floor(Math.random() * birdColors.length)],
      opacity: Math.random() * 0.6 + 0.4,
      avoidanceRadius: Math.random() * 80 + 100,
      flockRadius: Math.random() * 50 + 80,
      separationRadius: Math.random() * 20 + 25,
      maxSpeed: Math.random() * 2 + 2.5,
      maxForce: Math.random() * 0.05 + 0.03,
      trail: [],
      angle: angle,
      scared: false,
      scaredTimer: 0,
    };
  };

  const drawBird = (ctx: CanvasRenderingContext2D, bird: Bird, time: number) => {
    ctx.save();
    ctx.translate(bird.x, bird.y);
    ctx.rotate(bird.angle);

    // Draw trail
    if (bird.trail.length > 1) {
      ctx.strokeStyle = `rgba(${bird.color}, 0.1)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(bird.trail[0].x - bird.x, bird.trail[0].y - bird.y);
      
      for (let i = 1; i < bird.trail.length; i++) {
        ctx.lineTo(bird.trail[i].x - bird.x, bird.trail[i].y - bird.y);
      }
      ctx.stroke();
    }

    // Calculate wing flap
    const wingFlap = Math.sin(time * bird.wingSpeed + bird.wingPhase) * 0.5;
    const scaredMultiplier = bird.scared ? 2 : 1;
    
    // Bird body
    ctx.fillStyle = `rgba(${bird.color}, ${bird.opacity})`;
    ctx.beginPath();
    ctx.ellipse(0, 0, bird.size * 0.8, bird.size * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Bird wings
    ctx.fillStyle = `rgba(${bird.color}, ${bird.opacity * 0.8})`;
    
    // Left wing
    ctx.beginPath();
    ctx.ellipse(
      -bird.size * 0.3, 
      -bird.size * 0.2 + wingFlap * bird.size * 0.3 * scaredMultiplier,
      bird.size * 0.6, 
      bird.size * 0.2, 
      -0.3 + wingFlap * 0.5 * scaredMultiplier, 
      0, 
      Math.PI * 2
    );
    ctx.fill();

    // Right wing
    ctx.beginPath();
    ctx.ellipse(
      -bird.size * 0.3, 
      bird.size * 0.2 - wingFlap * bird.size * 0.3 * scaredMultiplier,
      bird.size * 0.6, 
      bird.size * 0.2, 
      0.3 - wingFlap * 0.5 * scaredMultiplier, 
      0, 
      Math.PI * 2
    );
    ctx.fill();

    // Bird head
    ctx.fillStyle = `rgba(${bird.color}, ${bird.opacity})`;
    ctx.beginPath();
    ctx.ellipse(bird.size * 0.5, 0, bird.size * 0.3, bird.size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();

    // Beak
    ctx.fillStyle = `rgba(${bird.color}, ${bird.opacity * 0.6})`;
    ctx.beginPath();
    ctx.ellipse(bird.size * 0.8, 0, bird.size * 0.15, bird.size * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  };

  const limit = (vector: { x: number; y: number }, max: number) => {
    const magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    if (magnitude > max) {
      vector.x = (vector.x / magnitude) * max;
      vector.y = (vector.y / magnitude) * max;
    }
    return vector;
  };

  const separate = (bird: Bird, birds: Bird[]) => {
    const steer = { x: 0, y: 0 };
    let count = 0;

    birds.forEach(other => {
      const dx = bird.x - other.x;
      const dy = bird.y - other.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0 && distance < bird.separationRadius) {
        steer.x += dx / distance;
        steer.y += dy / distance;
        count++;
      }
    });

    if (count > 0) {
      steer.x /= count;
      steer.y /= count;
      
      const magnitude = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
      if (magnitude > 0) {
        steer.x = (steer.x / magnitude) * bird.maxSpeed;
        steer.y = (steer.y / magnitude) * bird.maxSpeed;
        
        steer.x -= bird.vx;
        steer.y -= bird.vy;
        
        return limit(steer, bird.maxForce);
      }
    }

    return steer;
  };

  const align = (bird: Bird, birds: Bird[]) => {
    const steer = { x: 0, y: 0 };
    let count = 0;

    birds.forEach(other => {
      const dx = bird.x - other.x;
      const dy = bird.y - other.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0 && distance < bird.flockRadius) {
        steer.x += other.vx;
        steer.y += other.vy;
        count++;
      }
    });

    if (count > 0) {
      steer.x /= count;
      steer.y /= count;
      
      const magnitude = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
      if (magnitude > 0) {
        steer.x = (steer.x / magnitude) * bird.maxSpeed;
        steer.y = (steer.y / magnitude) * bird.maxSpeed;
        
        steer.x -= bird.vx;
        steer.y -= bird.vy;
        
        return limit(steer, bird.maxForce);
      }
    }

    return steer;
  };

  const cohesion = (bird: Bird, birds: Bird[]) => {
    const steer = { x: 0, y: 0 };
    let count = 0;

    birds.forEach(other => {
      const dx = bird.x - other.x;
      const dy = bird.y - other.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0 && distance < bird.flockRadius) {
        steer.x += other.x;
        steer.y += other.y;
        count++;
      }
    });

    if (count > 0) {
      steer.x /= count;
      steer.y /= count;
      
      steer.x -= bird.x;
      steer.y -= bird.y;
      
      const magnitude = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
      if (magnitude > 0) {
        steer.x = (steer.x / magnitude) * bird.maxSpeed;
        steer.y = (steer.y / magnitude) * bird.maxSpeed;
        
        steer.x -= bird.vx;
        steer.y -= bird.vy;
        
        return limit(steer, bird.maxForce);
      }
    }

    return steer;
  };

  const avoidMouse = (bird: Bird, mouse: { x: number; y: number; isActive: boolean }) => {
    if (!mouse.isActive) return { x: 0, y: 0 };

    const dx = bird.x - mouse.x;
    const dy = bird.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < bird.avoidanceRadius) {
      bird.scared = true;
      bird.scaredTimer = 60; // Stay scared for 60 frames
      
      const steer = {
        x: dx / distance,
        y: dy / distance
      };

      // Stronger avoidance when closer
      const force = (bird.avoidanceRadius - distance) / bird.avoidanceRadius;
      steer.x *= bird.maxSpeed * force * 3;
      steer.y *= bird.maxSpeed * force * 3;

      steer.x -= bird.vx;
      steer.y -= bird.vy;

      return limit(steer, bird.maxForce * 5);
    }

    return { x: 0, y: 0 };
  };

  const updateBirds = (birds: Bird[], mouse: { x: number; y: number; isActive: boolean }) => {
    birds.forEach(bird => {
      // Update scared timer
      if (bird.scaredTimer > 0) {
        bird.scaredTimer--;
      } else {
        bird.scared = false;
      }

      // Apply flocking forces
      const separation = separate(bird, birds);
      const alignment = align(bird, birds);
      const cohesionForce = cohesion(bird, birds);
      const avoidance = avoidMouse(bird, mouse);

      // Weight the forces
      const separationWeight = bird.scared ? 3 : 1.5;
      const alignmentWeight = bird.scared ? 0.5 : 1;
      const cohesionWeight = bird.scared ? 0.3 : 1;
      const avoidanceWeight = 4;

      // Apply forces
      bird.vx += separation.x * separationWeight;
      bird.vy += separation.y * separationWeight;
      bird.vx += alignment.x * alignmentWeight;
      bird.vy += alignment.y * alignmentWeight;
      bird.vx += cohesionForce.x * cohesionWeight;
      bird.vy += cohesionForce.y * cohesionWeight;
      bird.vx += avoidance.x * avoidanceWeight;
      bird.vy += avoidance.y * avoidanceWeight;

      // Add some randomness
      bird.vx += (Math.random() - 0.5) * 0.1;
      bird.vy += (Math.random() - 0.5) * 0.1;

      // Limit velocity
      const velocity = { x: bird.vx, y: bird.vy };
      const maxSpeed = bird.scared ? bird.maxSpeed * 2 : bird.maxSpeed;
      limit(velocity, maxSpeed);
      bird.vx = velocity.x;
      bird.vy = velocity.y;

      // Update position
      bird.x += bird.vx;
      bird.y += bird.vy;

      // Update angle based on velocity
      bird.angle = Math.atan2(bird.vy, bird.vx);

      // Update trail
      bird.trail.push({ x: bird.x, y: bird.y, opacity: bird.opacity });
      if (bird.trail.length > 8) {
        bird.trail.shift();
      }

      // Update wing phase
      bird.wingPhase += bird.wingSpeed;

      // Wrap around screen edges
      if (bird.x < -50) bird.x = dimensions.width + 50;
      if (bird.x > dimensions.width + 50) bird.x = -50;
      if (bird.y < -50) bird.y = dimensions.height + 50;
      if (bird.y > dimensions.height + 50) bird.y = -50;
    });
  };

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, isActive: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { ...mouseRef.current, isActive: false };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Initialize birds
    birdsRef.current = Array.from({ length: 25 }, () => createBird(dimensions.width, dimensions.height));

    const animate = (time: number) => {
      // Clear canvas with slight fade for trail effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Update birds
      updateBirds(birdsRef.current, mouseRef.current);

      // Draw birds
      birdsRef.current.forEach(bird => {
        drawBird(ctx, bird, time);
      });

      // Draw mouse cursor influence area (debug - remove in production)
      if (mouseRef.current.isActive) {
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 100, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        }}
      />
      
      {/* Sky gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-slate-800/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-blue-900/20" />
      
      {/* Subtle cloud-like patterns */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(ellipse 800px 200px at 20% 20%, rgba(148, 163, 184, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 600px 150px at 80% 40%, rgba(203, 213, 225, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 400px 100px at 40% 80%, rgba(148, 163, 184, 0.06) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Atmospheric perspective */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.3) 100%)',
        }}
      />
    </div>
  );
}