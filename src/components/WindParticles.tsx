"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
}

interface WindWave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export default function WindParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const wavesRef = useRef<WindWave[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const scrollVelocityRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const animationRef = useRef<number>(0);

  const colors = ["#93c5fd", "#60a5fa", "#38bdf8", "#e0f2fe", "#ffffff"];

  const createParticle = useCallback((width: number, height: number): Particle => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.8 + 1,
      speedX: Math.random() * 1.8 + 0.6,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.15,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  }, [colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const count = Math.min(Math.floor(window.innerWidth / 14), 85);
    particlesRef.current = Array.from({ length: count }, () =>
      createParticle(canvas.width, canvas.height)
    );

    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = Math.abs(currentScroll - lastScrollYRef.current);
      lastScrollYRef.current = currentScroll;
      // Boost scroll velocity based on speed of scroll
      scrollVelocityRef.current = Math.min(scrollVelocityRef.current + delta * 0.08, 14);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleClick = (e: MouseEvent) => {
      // Create expanding cool air wave
      wavesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: 180,
        opacity: 0.8,
      });

      // Burst of wind swirl particles on click
      const burstCount = 18;
      for (let i = 0; i < burstCount; i++) {
        const angle = (Math.PI * 2 * i) / burstCount + (Math.random() - 0.5) * 0.3;
        const speed = Math.random() * 4 + 2;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 2,
          speedX: Math.cos(angle) * speed + 1.5,
          speedY: Math.sin(angle) * speed,
          opacity: 0.75,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 8,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Decay scroll velocity smoothly
      scrollVelocityRef.current *= 0.94;
      const velocity = scrollVelocityRef.current;

      // Draw and update expanding wind waves from clicks
      const waves = wavesRef.current;
      for (let i = waves.length - 1; i >= 0; i--) {
        const w = waves[i];
        w.radius += 5;
        w.opacity *= 0.93;

        ctx.save();
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(147, 197, 253, ${w.opacity})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Inner secondary ripple
        if (w.radius > 30) {
          ctx.beginPath();
          ctx.arc(w.x, w.y, w.radius * 0.65, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(224, 242, 254, ${w.opacity * 0.6})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
        ctx.restore();

        if (w.opacity < 0.02 || w.radius > w.maxRadius) {
          waves.splice(i, 1);
        }
      }

      // Draw and update wind particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Move horizontally with base speed + scroll boost
        const stretchMultiplier = 1 + velocity * 0.3;
        p.x += (p.speedX + velocity * 0.8) * 1.1;
        p.y += p.speedY + Math.sin(p.x * 0.008) * 0.4;
        p.rotation += p.rotationSpeed * (1 + velocity * 0.2);

        // Repel slightly from cursor
        if (mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const force = (100 - dist) / 100;
            p.x += (dx / (dist || 1)) * force * 2.5;
            p.y += (dy / (dist || 1)) * force * 2.5;
          }
        }

        // Screen boundary wrapping
        if (p.x > canvas.width + 30 || p.y < -30 || p.y > canvas.height + 30) {
          if (particles.length > count) {
            particles.splice(i, 1);
            continue;
          }
          p.x = -25;
          p.y = Math.random() * canvas.height;
          p.opacity = Math.random() * 0.4 + 0.15;
        }

        // Fade burst particles
        if (particles.length > count && i >= count) {
          p.opacity *= 0.96;
          if (p.opacity < 0.02) {
            particles.splice(i, 1);
            continue;
          }
        }

        // Draw particle as aerodynamic wind streak
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.min(p.opacity * (1 + velocity * 0.1), 0.9);
        ctx.fillStyle = p.color;

        ctx.beginPath();
        // Elongates into a wind streak when user scrolls fast
        ctx.ellipse(
          0,
          0,
          p.size * (2.2 * stretchMultiplier),
          p.size * 0.6,
          0,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationRef.current);
    };
  }, [createParticle, colors]);

  return <canvas ref={canvasRef} className="wind-canvas" aria-hidden="true" />;
}
