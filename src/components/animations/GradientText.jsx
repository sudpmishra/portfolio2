import React from 'react';
import { motion } from 'framer-motion';

const GradientText = ({
  children,
  className = '',
  colors = ['#22c55e', '#10b981', '#34d399'],
  animationSpeed = 4, // Increased from 3 to reduce GPU usage
  showBorder = false
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(', ')}, ${colors[0]})`,
    backgroundSize: '200% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    willChange: 'background-position',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden'
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={gradientStyle}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration: animationSpeed,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      {children}
      {showBorder && (
        <span
          className="absolute bottom-0 left-0 w-full h-0.5"
          style={{
            background: `linear-gradient(90deg, ${colors.join(', ')})`
          }}
        />
      )}
    </motion.span>
  );
};

export default GradientText;
