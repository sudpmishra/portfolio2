import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const BlurText = ({
  text = '',
  className = '',
  delay = 100,
  duration = 0.8,
  threshold = 0.1,
  rootMargin = '-50px',
  tag: Tag = 'div'
}) => {
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll('.blur-word');

    gsap.fromTo(
      words,
      {
        opacity: 0,
        filter: 'blur(10px)',
        y: 20,
        willChange: 'transform, opacity, filter'
      },
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration,
        ease: 'power2.out',
        stagger: delay / 1000,
        clearProps: 'willChange'
      }
    );
  }, [delay, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [animate, threshold, rootMargin]);

  return (
    <Tag ref={containerRef} className={className}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className="blur-word inline-block mr-2"
          style={{ opacity: 0, filter: 'blur(10px)', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
};

export default BlurText;
