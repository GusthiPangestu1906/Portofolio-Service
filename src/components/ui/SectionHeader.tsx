import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/core/utils/cn';

interface SectionHeaderProps {
  badgeText: string;
  badgeIcon?: React.ReactNode;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  className?: string;
  badgeClassName?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeIcon = <Sparkles className="w-3.5 h-3.5" />,
  titlePrefix,
  titleHighlight,
  subtitle,
  className,
  badgeClassName = 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
}) => {
  return (
    <div className={cn('text-center max-w-3xl mx-auto mb-16 space-y-3', className)}>
      <div
        className={cn(
          'inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono',
          badgeClassName
        )}
      >
        {badgeIcon}
        <span>{badgeText}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        {titlePrefix}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
          {titleHighlight}
        </span>
      </h2>
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{subtitle}</p>
    </div>
  );
};
