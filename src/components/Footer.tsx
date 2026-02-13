import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { id: 'about', label: '关于我们', href: '#' },
    { id: 'contact', label: '联系方式', href: '#' },
  ];

  return (
    <footer className={cn('w-full py-8 mt-auto', className)}>
      <div className="max-w-4xl mx-auto px-6">
        {/* 分隔线 */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-gold/30" />
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent via-gold/30 to-transparent" />
        </div>

        {/* 内容区域 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* 版权信息 */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-ink/60">
              © 2024 新岁笺 · 以文传情，以心迎新
            </p>
          </div>

          {/* 链接 */}
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink(null)}
                className={cn(
                  'relative text-sm text-gray-ink/60 hover:text-ink transition-colors duration-300',
                  'underline-animate'
                )}
              >
                {link.label}
                <span 
                  className={cn(
                    'absolute bottom-0 left-0 h-px bg-gold transition-all duration-300',
                    hoveredLink === link.id ? 'w-full' : 'w-0'
                  )}
                />
              </a>
            ))}
          </div>
        </div>

        {/* 底部装饰 */}
        <div className="mt-6 text-center">
          <span className="inline-block text-xs text-gray-ink/40 tracking-widest">
            甲辰龙年
          </span>
        </div>
      </div>
    </footer>
  );
}
