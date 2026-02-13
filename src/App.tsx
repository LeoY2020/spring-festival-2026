import { useState, useCallback, useMemo, useEffect } from 'react';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { Hero } from '@/components/Hero';
import { MessageCard } from '@/components/MessageCard';
import { CategoryNav } from '@/components/CategoryNav';
import { Footer } from '@/components/Footer';
import { messages, type CategoryId } from '@/data/messages';
import { Sparkles } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 根据分类筛选寄语
  const filteredMessages = useMemo(() => {
    if (selectedCategory === 'all') {
      return messages;
    }
    return messages.filter((msg) => msg.category === selectedCategory);
  }, [selectedCategory]);

  // 当前显示的寄语
  const currentMessage = filteredMessages[currentMessageIndex] || filteredMessages[0];

  // 更换寄语
  const handleChangeMessage = useCallback(() => {
    if (isAnimating || filteredMessages.length <= 1) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentMessageIndex((prev) => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * filteredMessages.length);
        } while (nextIndex === prev && filteredMessages.length > 1);
        return nextIndex;
      });
      setIsAnimating(false);
    }, 500);
  }, [filteredMessages.length, isAnimating]);

  // 分类改变时重置索引
  useEffect(() => {
    setCurrentMessageIndex(0);
  }, [selectedCategory]);

  // 初始随机选择一条寄语
  useEffect(() => {
    if (filteredMessages.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredMessages.length);
      setCurrentMessageIndex(randomIndex);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-paper overflow-hidden">
      {/* 背景效果 */}
      <BackgroundEffects />

      {/* 主内容 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero区域 */}
        <Hero className="pt-8 md:pt-12" />

        {/* 分类导航 */}
        <div className="px-4 py-6">
          <CategoryNav
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* 寄语卡片区域 */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12">
          {/* 提示文字 */}
          <div className="mb-8 text-center">
            <p className="text-sm text-gray-ink/50 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-gold/60" />
              <span>点击下方按钮，抽取专属新年寄语</span>
              <Sparkles className="w-4 h-4 text-gold/60" />
            </p>
          </div>

          {/* 寄语卡片 */}
          {currentMessage && (
            <MessageCard
              key={currentMessage.id}
              message={currentMessage}
              onChange={handleChangeMessage}
              className="w-full max-w-2xl"
            />
          )}

          {/* 统计信息 */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-ink/40">
              当前分类共 {filteredMessages.length} 条寄语
            </p>
          </div>
        </main>

        {/* 页脚 */}
        <Footer className="pb-4" />
      </div>

      {/* 边缘装饰 - 左侧竖线 */}
      <div 
        className="fixed left-4 top-1/2 -translate-y-1/2 w-px h-32 hidden lg:block"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(200, 159, 98, 0.3), transparent)',
        }}
      />

      {/* 边缘装饰 - 右侧竖线 */}
      <div 
        className="fixed right-4 top-1/2 -translate-y-1/2 w-px h-32 hidden lg:block"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(200, 159, 98, 0.3), transparent)',
        }}
      />
    </div>
  );
}

export default App;
