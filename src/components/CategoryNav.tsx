import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { CategoryId } from '@/data/messages';

interface Category {
  id: CategoryId;
  name: string;
  icon: React.ReactNode;
}

interface CategoryNavProps {
  selectedCategory: CategoryId | 'all';
  onCategoryChange: (category: CategoryId | 'all') => void;
  className?: string;
}

// 分类图标
const CategoryIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'scroll':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 4v16M16 4v16" strokeLinecap="round" />
        </svg>
      );
    case 'bamboo':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M12 2v20M12 6c2-1 4-1 4 2s-2 3-4 2M12 12c2-1 4-1 4 2s-2 3-4 2M12 4c-2-1-4-1-4 2s2 3 4 2" strokeLinecap="round" />
        </svg>
      );
    case 'fan':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M12 2v20M2 12h20" strokeLinecap="round" />
        </svg>
      );
    case 'mountain':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M3 20h18L16 9l-4 6-4-6-5 11z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'plum':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <circle cx="12" cy="8" r="3" />
          <path d="M12 11v9M9 14c-2 0-3 2-3 4M15 14c2 0 3 2 3 4" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
};

const categories: Category[] = [
  { id: 'general', name: '通用', icon: <CategoryIcon type="scroll" /> },
  { id: 'elder', name: '长辈', icon: <CategoryIcon type="bamboo" /> },
  { id: 'friend', name: '友人', icon: <CategoryIcon type="fan" /> },
  { id: 'colleague', name: '同僚', icon: <CategoryIcon type="mountain" /> },
  { id: 'teacher', name: '恩师', icon: <CategoryIcon type="plum" /> },
];

export function CategoryNav({ selectedCategory, onCategoryChange, className }: CategoryNavProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className={cn('w-full', className)}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* 全部选项 - Liquid Glass 风格 */}
        <button
          onClick={() => onCategoryChange('all')}
          onMouseEnter={() => setHoveredCategory('all')}
          onMouseLeave={() => setHoveredCategory(null)}
          className={cn(
            'relative flex items-center gap-2 px-4 py-2',
            'text-sm font-medium transition-all duration-300',
            'rounded-full overflow-hidden',
            selectedCategory === 'all'
              ? 'text-cinnabar'
              : 'text-ink/70 hover:text-ink'
          )}
          style={{
            background: selectedCategory === 'all'
              ? 'linear-gradient(135deg, rgba(164, 30, 34, 0.1) 0%, rgba(255, 255, 255, 0.3) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(248, 245, 242, 0.2) 100%)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: selectedCategory === 'all'
              ? '1px solid rgba(164, 30, 34, 0.3)'
              : '1px solid rgba(200, 159, 98, 0.25)',
            boxShadow: selectedCategory === 'all'
              ? 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 2px 12px rgba(164, 30, 34, 0.15)'
              : 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 2px 8px rgba(42, 42, 42, 0.04)',
          }}
        >
          <span>全部</span>
          {selectedCategory === 'all' && (
            <span 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at center, rgba(164, 30, 34, 0.1) 0%, transparent 70%)',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
          )}
        </button>

        {/* 分类选项 */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
            className={cn(
              'relative flex items-center gap-2 px-4 py-2',
              'text-sm font-medium transition-all duration-300',
              'rounded-full overflow-hidden',
              selectedCategory === category.id
                ? 'text-cinnabar'
                : 'text-ink/70 hover:text-ink'
            )}
            style={{
              background: selectedCategory === category.id
                ? 'linear-gradient(135deg, rgba(164, 30, 34, 0.1) 0%, rgba(255, 255, 255, 0.3) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(248, 245, 242, 0.2) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: selectedCategory === category.id
                ? '1px solid rgba(164, 30, 34, 0.3)'
                : '1px solid rgba(200, 159, 98, 0.25)',
              boxShadow: selectedCategory === category.id
                ? 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 2px 12px rgba(164, 30, 34, 0.15)'
                : 'inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 2px 8px rgba(42, 42, 42, 0.04)',
            }}
          >
            <span className={cn(
              'transition-colors duration-300',
              selectedCategory === category.id ? 'text-cinnabar' : 'text-gold/60'
            )}>
              {category.icon}
            </span>
            <span>{category.name}</span>
            
            {/* 悬停光晕 - Liquid Glass 效果 */}
            {hoveredCategory === category.id && selectedCategory !== category.id && (
              <span 
                className="absolute inset-0 rounded-full transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(200, 159, 98, 0.15) 0%, transparent 70%)',
                }}
              />
            )}
            
            {/* 选中脉冲 */}
            {selectedCategory === category.id && (
              <span 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at center, rgba(164, 30, 34, 0.08) 0%, transparent 70%)',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
