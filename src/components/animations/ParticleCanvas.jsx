import React, { useEffect, useRef } from 'react';

const ParticleCanvas = ({ 
  particleCount = 50, // Reduced from 80 for better performance
  particleColor = '34, 197, 94', 
  connectionDistance = 100, // Reduced from 120
  className = "absolute inset-0 pointer-events-none"
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    let animationId;
    let lastTime = 0;
    const targetFPS = 30; // Limit to 30 FPS for better Windows performance
    const frameDelay = 1000 / targetFPS;

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime < frameDelay) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      lastTime = currentTime - (deltaTime % frameDelay);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        // Update particle position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`;
        ctx.fill();

        // Draw connections - only check nearby particles for performance
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          
          // Quick distance check to avoid expensive sqrt
          if (Math.abs(dx) > connectionDistance || Math.abs(dy) > connectionDistance) return;
          
          const distSq = dx * dx + dy * dy;
          const maxDistSq = connectionDistance * connectionDistance;
          
          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${particleColor}, ${0.1 * (1 - dist / connectionDistance)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [particleCount, particleColor, connectionDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    />
  );
};

export default ParticleCanvas;