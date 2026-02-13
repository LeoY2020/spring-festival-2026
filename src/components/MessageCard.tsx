import { useState, useEffect, useCallback, useRef } from 'react';
import { Copy, Check, Share2, RefreshCw } from 'lucide-react';
import type { Message } from '@/data/messages';
import { cn } from '@/lib/utils';

interface MessageCardProps {
  message: Message;
  onChange: () => void;
  className?: string;
}

export function MessageCard({ message, onChange, className }: MessageCardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement>(null);

  // 鼠标跟随效果
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    card.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 打字机效果
  useEffect(() => {
    if (!message) return;
    
    setIsTyping(true);
    setDisplayText('');
    
    let index = 0;
    const text = message.content;
    
    const typeChar = () => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
        setTimeout(typeChar, 80);
      } else {
        setIsTyping(false);
      }
    };
    
    const timer = setTimeout(typeChar, 300);
    return () => clearTimeout(timer);
  }, [message]);

  // 复制功能
  const handleCopy = useCallback(async () => {
    if (!message) return;
    
    const textToCopy = `${message.content}${message.source ? `\n——${message.source}` : ''}`;
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  }, [message]);

  // 分享功能
  const handleShare = useCallback(async () => {
    if (!message) return;
    
    const shareText = `${message.content}${message.source ? ` ——${message.source}` : ''}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: '新岁笺 - 新年寄语',
          text: shareText,
        });
      } catch (err) {
        console.log('分享取消');
      }
    } else {
      handleCopy();
    }
  }, [message, handleCopy]);

  // 更换寄语
  const handleChange = useCallback(() => {
    setIsChanging(true);
    setTimeout(() => {
      onChange();
      setIsChanging(false);
    }, 500);
  }, [onChange]);

  if (!message) return null;

  // 计算液态玻璃高光位置
  const highlightX = mousePosition.x * 100;
  const highlightY = mousePosition.y * 100;

  return (
    <div 
      ref={cardRef}
      className={cn(
        'relative w-full max-w-xl mx-auto perspective-1000',
        className
      )}
    >
      {/* 卷轴卡片 - Liquid Glass 效果 */}
      <div 
        className={cn(
          'relative rounded-xl overflow-hidden',
          'preserve-3d transition-all duration-500',
          isChanging && 'animate-roll-up',
          !isChanging && 'animate-unroll'
        )}
        style={{
          // 液态玻璃基础效果
          background: `
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.5) 0%,
              rgba(248, 245, 242, 0.3) 25%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(248, 245, 242, 0.3) 75%,
              rgba(255, 255, 255, 0.4) 100%
            )
          `,
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: `
            0 8px 32px rgba(42, 42, 42, 0.08),
            0 2px 8px rgba(42, 42, 42, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.6),
            inset 0 -1px 0 rgba(200, 159, 98, 0.1)
          `,
        }}
      >
        {/* Liquid Glass 动态高光层 */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `
              radial-gradient(
                circle at ${highlightX}% ${highlightY}%,
                rgba(255, 255, 255, 0.5) 0%,
                rgba(255, 255, 255, 0.2) 20%,
                transparent 50%
              )
            `,
          }}
        />

        {/* 玻璃光泽边框 */}
        <div 
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: `
              inset 0 0 0 1px rgba(200, 159, 98, 0.2),
              0 0 0 1px rgba(200, 159, 98, 0.1)
            `,
          }}
        />

        {/* 顶部光泽线 */}
        <div 
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 20%, rgba(255, 255, 255, 0.8) 80%, transparent 100%)',
          }}
        />

        {/* 底部微光 */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(200, 159, 98, 0.3) 30%, rgba(200, 159, 98, 0.3) 70%, transparent 100%)',
          }}
        />
        
        {/* 内容区域 */}
        <div className="relative px-8 py-10 md:px-12 md:py-14">
          {/* 分类标签 - Liquid Glass 风格 */}
          <div className="flex justify-center mb-6">
            <span 
              className="inline-flex items-center px-4 py-1.5 text-xs text-ink/70 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(200, 159, 98, 0.3)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              }}
            >
              {message.category === 'general' && '通用'}
              {message.category === 'elder' && '长辈'}
              {message.category === 'friend' && '友人'}
              {message.category === 'colleague' && '同僚'}
              {message.category === 'teacher' && '恩师'}
            </span>
          </div>
          
          {/* 寄语内容 */}
          <div className="relative min-h-[120px] flex items-center justify-center">
            <p className="text-xl md:text-2xl text-ink text-center leading-relaxed font-medium tracking-wide">
              {displayText}
              {isTyping && (
                <span className="inline-block w-0.5 h-6 bg-cinnabar/60 ml-1 animate-pulse" />
              )}
            </p>
          </div>
          
          {/* 出处 */}
          {message.source && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-ink/70 italic">
                ——{message.source}
              </p>
            </div>
          )}
          
          {/* 分隔线 - 玻璃效果 */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div 
              className="h-px w-16"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(200, 159, 98, 0.4) 100%)',
              }}
            />
            <div 
              className="w-2 h-2 rounded-full"
              style={{
                background: 'rgba(200, 159, 98, 0.5)',
                boxShadow: '0 0 4px rgba(200, 159, 98, 0.3)',
              }}
            />
            <div 
              className="h-px w-16"
              style={{
                background: 'linear-gradient(90deg, rgba(200, 159, 98, 0.4) 0%, transparent 100%)',
              }}
            />
          </div>
          
          {/* 操作按钮 - Liquid Glass 风格 */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {/* 复制按钮 */}
            <button
              onClick={handleCopy}
              className={cn(
                'group flex items-center gap-2 px-4 py-2',
                'text-sm text-ink/70 hover:text-cinnabar',
                'rounded-full transition-all duration-300',
                'active:scale-95'
              )}
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(200, 159, 98, 0.3)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 2px 8px rgba(42, 42, 42, 0.05)',
              }}
              title="复制寄语"
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span>已复制</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>复制</span>
                </>
              )}
            </button>
            
            {/* 分享按钮 */}
            <button
              onClick={handleShare}
              className={cn(
                'group flex items-center gap-2 px-4 py-2',
                'text-sm text-ink/70 hover:text-gold',
                'rounded-full transition-all duration-300',
                'active:scale-95'
              )}
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(200, 159, 98, 0.3)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 2px 8px rgba(42, 42, 42, 0.05)',
              }}
              title="分享寄语"
            >
              <Share2 className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>分享</span>
            </button>
            
            {/* 更换按钮 */}
            <button
              onClick={handleChange}
              disabled={isChanging}
              className={cn(
                'group flex items-center gap-2 px-4 py-2',
                'text-sm text-ink/70 hover:text-warm-brown',
                'rounded-full transition-all duration-300',
                'active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
              )}
              style={{
                background: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(200, 159, 98, 0.3)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 2px 8px rgba(42, 42, 42, 0.05)',
              }}
              title="更换寄语"
            >
              <RefreshCw className={cn(
                'w-4 h-4 transition-transform group-hover:scale-110',
                isChanging && 'animate-spin'
              )} />
              <span>更换</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* 卷轴装饰 - 左侧 */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-32 rounded-full"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(140, 94, 58, 0.3), rgba(140, 94, 58, 0.5), rgba(140, 94, 58, 0.3))',
          boxShadow: 'inset 1px 0 2px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1)',
        }}
      />
      
      {/* 卷轴装饰 - 右侧 */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-32 rounded-full"
        style={{ 
          background: 'linear-gradient(to bottom, rgba(140, 94, 58, 0.3), rgba(140, 94, 58, 0.5), rgba(140, 94, 58, 0.3))',
          boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.1)',
        }}
      />
    </div>
  );
}
