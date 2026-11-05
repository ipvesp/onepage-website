import React, { useEffect, useRef } from 'react';

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number; dAlpha: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      // Adjust density based on screen size, keep it sparse and elegant
      const numStars = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.2, // Small subtle stars
          vx: (Math.random() - 0.5) * 0.1,   // Very slow movement
          vy: Math.random() * -0.15 - 0.05,  // Slow upward drift
          alpha: Math.random(),
          dAlpha: (Math.random() * 0.01 + 0.002) * (Math.random() > 0.5 ? 1 : -1) // Slow pulsing
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        // Update opacity
        star.alpha += star.dAlpha;
        if (star.alpha <= 0.1) {
          star.alpha = 0.1;
          star.dAlpha = Math.abs(star.dAlpha);
        } else if (star.alpha >= 0.7) {
          star.alpha = 0.7;
          star.dAlpha = -Math.abs(star.dAlpha);
        }

        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around smoothly
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none mix-blend-difference opacity-60"
    />
  );
};
