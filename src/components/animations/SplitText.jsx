import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';

const SplitText = ({
  text = '',
  className = '',
  delay = 50,
  duration = 0.8,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-50px',
  onComplete,
  tag: Tag = 'div'
}) => {
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  const splitContent = useMemo(() => {
    if (splitType === 'chars') {
      return text.split('').map((char, i) => (
        <span
          key={i}
          className="split-char inline-block"
          style={{ opacity: 0, transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    } else {
      return text.split(' ').map((word, i) => (
        <span
          key={i}
          className="split-word inline-block mr-2"
          style={{ opacity: 0, transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        >
          {word}
        </span>
      ));
    }
  }, [text, splitType]);

  const animate = useCallback(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(
      splitType === 'chars' ? '.split-char' : '.split-word'
    );

    // Reset elements to initial state
    gsap.set(elements, { ...from, willChange: 'transform, opacity' });

    gsap.fromTo(
      elements,
      { ...from, willChange: 'transform, opacity' },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete,
        clearProps: 'willChange'
      }
    );
  }, [delay, duration, ease, from, to, splitType, onComplete]);

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
      {splitContent}
    </Tag>
  );
};

export default SplitText;
