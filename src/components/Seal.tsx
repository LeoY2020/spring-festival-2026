import { useState, useEffect } from 'react';

interface SealProps {
  text?: string;
  size?: number;
  className?: string;
  delay?: number;
}

export function Seal({ 
  text = '吉', 
  size = 80, 
  className = '',
  delay = 1000 
}: SealProps) {
  const [isStamped, setIsStamped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStamped(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: size, 
        height: size,
        opacity: isStamped ? 1 : 0,
        transform: isStamped ? 'scale(1) rotate(0deg)' : 'scale(2) rotate(-15deg)',
        transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }}
    >
      {/* 印章外框 */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(164, 30, 34, 0.3))' }}
      >
        {/* 外圆 */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="#a41e22"
          strokeWidth="3"
          opacity="0.9"
        />
        {/* 内圆 */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="#a41e22"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* 文字 */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fill="#a41e22"
          fontSize="32"
          fontWeight="bold"
          fontFamily="Noto Serif SC, serif"
          style={{ letterSpacing: '0.1em' }}
        >
          {text}
        </text>
      </svg>
      
      {/* 光晕效果 */}
      <div 
        className="absolute inset-0 rounded-full animate-glow"
        style={{
          background: 'radial-gradient(circle, rgba(164, 30, 34, 0.2) 0%, transparent 70%)',
          transform: 'scale(1.2)',
        }}
      />
    </div>
  );
}

// 方形印章
export function SquareSeal({ 
  text = '新岁', 
  size = 60, 
  className = '',
  delay = 1200 
}: SealProps) {
  const [isStamped, setIsStamped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStamped(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        width: size, 
        height: size,
        opacity: isStamped ? 1 : 0,
        transform: isStamped ? 'scale(1) rotate(0deg)' : 'scale(1.5) rotate(-10deg)',
        transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(164, 30, 34, 0.3))' }}
      >
        {/* 外框 */}
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          fill="none"
          stroke="#a41e22"
          strokeWidth="4"
          opacity="0.9"
        />
        {/* 内框 */}
        <rect
          x="12"
          y="12"
          width="76"
          height="76"
          fill="none"
          stroke="#a41e22"
          strokeWidth="1"
          opacity="0.5"
        />
        {/* 文字 */}
        <text
          x="50"
          y="42"
          textAnchor="middle"
          fill="#a41e22"
          fontSize="24"
          fontWeight="bold"
          fontFamily="Noto Serif SC, serif"
        >
          {text[0] || '新'}
        </text>
        <text
          x="50"
          y="72"
          textAnchor="middle"
          fill="#a41e22"
          fontSize="24"
          fontWeight="bold"
          fontFamily="Noto Serif SC, serif"
        >
          {text[1] || '岁'}
        </text>
      </svg>
    </div>
  );
}
