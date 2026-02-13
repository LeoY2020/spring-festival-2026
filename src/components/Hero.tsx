import { useEffect, useState, useRef } from 'react';
import { Seal, SquareSeal } from './Seal';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 入场动画
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 鼠标跟随3D倾斜效果
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const rotateX = ((e.clientY - centerY) / rect.height) * -3;
      const rotateY = ((e.clientX - centerX) / rect.width) * 3;
      
      setMousePosition({ x: rotateY, y: rotateX });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={cn(
        'relative w-full py-16 md:py-24',
        'flex flex-col items-center justify-center',
        className
      )}
    >
      {/* 主内容区域 - 3D倾斜效果 */}
      <div 
        className="relative perspective-1000"
        style={{
          transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* 左侧印章 */}
        <div 
          className={cn(
            'absolute -left-16 md:-left-24 top-0 transition-all duration-700',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          )}
          style={{ transitionDelay: '800ms' }}
        >
          <SquareSeal text="新岁" size={60} delay={1000} />
        </div>

        {/* 主标题 */}
        <div className="text-center">
          {/* 主标题文字 */}
          <h1 className="relative">
            <span 
              className={cn(
                'block text-5xl md:text-7xl font-bold text-ink tracking-widest',
                'transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ 
                transitionDelay: '300ms',
                fontFamily: 'Noto Serif SC, serif',
                textShadow: '0 2px 4px rgba(42, 42, 42, 0.1)',
              }}
            >
              {'新岁笺'.split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-500"
                  style={{
                    transitionDelay: `${300 + index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>

          {/* 副标题 */}
          <p 
            className={cn(
              'mt-6 text-lg md:text-xl text-ink/70 tracking-wide',
              'transition-all duration-700',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            )}
            style={{ transitionDelay: '600ms' }}
          >
            取一语祝愿，赠一岁平安
          </p>

          {/* 装饰分隔线 */}
          <div 
            className={cn(
              'mt-8 flex items-center justify-center gap-4',
              'transition-all duration-700',
              isVisible ? 'opacity-100' : 'opacity-0'
            )}
            style={{ transitionDelay: '700ms' }}
          >
            <div 
              className="h-px bg-gradient-to-r from-transparent to-gold/50"
              style={{ width: isVisible ? '60px' : '0', transition: 'width 0.8s ease-out 0.7s' }}
            />
            <div className="w-2 h-2 rounded-full bg-gold/50" />
            <div 
              className="h-px bg-gradient-to-l from-transparent to-gold/50"
              style={{ width: isVisible ? '60px' : '0', transition: 'width 0.8s ease-out 0.7s' }}
            />
          </div>
        </div>

        {/* 右侧印章 */}
        <div 
          className={cn(
            'absolute -right-12 md:-right-20 bottom-0 transition-all duration-700',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          )}
          style={{ transitionDelay: '900ms' }}
        >
          <Seal text="吉" size={50} delay={1200} />
        </div>
      </div>

      {/* 底部装饰文字 */}
      <div 
        className={cn(
          'mt-12 text-center transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
        style={{ transitionDelay: '1000ms' }}
      >
        <p className="text-sm text-gray-ink/50 tracking-widest">
          以文传情 · 以心迎新
        </p>
      </div>
    </div>
  );
}
