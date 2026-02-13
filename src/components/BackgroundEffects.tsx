import { useEffect, useRef } from 'react';

// 星屑粒子
const StarParticle = ({ delay, size, left, top }: { delay: number; size: number; left: string; top: string }) => (
  <div
    className="absolute rounded-full bg-gold animate-twinkle pointer-events-none"
    style={{
      width: size,
      height: size,
      left,
      top,
      animationDelay: `${delay}s`,
      opacity: 0.4,
    }}
  />
);

// 生成随机星屑
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    size: Math.random() * 2 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));
};

// 液态玻璃光斑
const LiquidGlassOrb = ({ 
  size, 
  left, 
  top, 
  delay = 0,
  duration = 20 
}: { 
  size: number; 
  left: string; 
  top: string; 
  delay?: number;
  duration?: number;
}) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: size,
      height: size,
      left,
      top,
      background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, rgba(200, 159, 98, 0.15) 30%, rgba(200, 159, 98, 0.05) 60%, transparent 70%)`,
      filter: 'blur(1px)',
      animation: `liquidFloat ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  />
);

export function BackgroundEffects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stars = generateStars(30);

  useEffect(() => {
    // 鼠标跟随的微妙光效
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;
      
      const glow = container.querySelector('.mouse-glow') as HTMLElement;
      if (glow) {
        glow.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* 宣纸纹理层 */}
      <div 
        className="absolute inset-0 opacity-40 animate-breathe"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          mixBlendMode: 'multiply',
        }}
      />
      
      {/* 云纹图案层 */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 8c-6.6 0-12 4-13.3 10.7C22 20 17.3 25.3 17.3 32c0 7.4 6 13.4 13.4 13.4h18.6c7.4 0 13.4-6 13.4-13.4 0-6.7-4.7-12-11.4-13.3C50 12 44.6 8 40 8z' fill='none' stroke='%23c89f62' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* 水墨渐变层 */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(42, 42, 42, 0.02) 50%, rgba(42, 42, 42, 0.04) 100%)',
        }}
      />

      {/* 液态玻璃光晕层 */}
      <div className="absolute inset-0">
        {/* 主光晕 - 中心偏上 */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(200, 159, 98, 0.08) 0%, rgba(248, 245, 242, 0.15) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        
        {/* 液态玻璃光斑 */}
        <LiquidGlassOrb size={300} left="10%" top="20%" delay={0} duration={25} />
        <LiquidGlassOrb size={250} left="75%" top="30%" delay={5} duration={30} />
        <LiquidGlassOrb size={200} left="60%" top="70%" delay={10} duration={22} />
        <LiquidGlassOrb size={180} left="25%" top="65%" delay={15} duration={28} />
        <LiquidGlassOrb size={150} left="85%" top="75%" delay={8} duration={20} />
        
        {/* 微光线条 */}
        <div 
          className="absolute top-1/3 left-0 w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(200, 159, 98, 0.1) 20%, rgba(255, 255, 255, 0.2) 50%, rgba(200, 159, 98, 0.1) 80%, transparent 100%)',
            filter: 'blur(2px)',
          }}
        />
        <div 
          className="absolute top-2/3 left-0 w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(200, 159, 98, 0.08) 30%, rgba(255, 255, 255, 0.15) 50%, rgba(200, 159, 98, 0.08) 70%, transparent 100%)',
            filter: 'blur(2px)',
          }}
        />
      </div>
      
      {/* 星屑层 */}
      {stars.map((star) => (
        <StarParticle
          key={star.id}
          delay={star.delay}
          size={star.size}
          left={star.left}
          top={star.top}
        />
      ))}
      
      {/* 鼠标跟随光晕 */}
      <div 
        className="mouse-glow absolute w-96 h-96 rounded-full pointer-events-none transition-transform duration-100"
        style={{
          left: '50%',
          top: '50%',
          marginLeft: '-192px',
          marginTop: '-192px',
          background: 'radial-gradient(circle, rgba(200, 159, 98, 0.12) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      
      {/* 角落装饰 - 左上角 */}
      <div 
        className="absolute top-0 left-0 w-32 h-32 opacity-20"
        style={{
          background: 'linear-gradient(135deg, rgba(200, 159, 98, 0.3) 0%, transparent 60%)',
        }}
      />
      
      {/* 角落装饰 - 右下角 */}
      <div 
        className="absolute bottom-0 right-0 w-40 h-40 opacity-15"
        style={{
          background: 'linear-gradient(315deg, rgba(164, 30, 34, 0.2) 0%, transparent 60%)',
        }}
      />
    </div>
  );
}
