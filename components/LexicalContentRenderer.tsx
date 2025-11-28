import React from 'react';
import { renderLexicalContent } from '@/lib/lexical-renderer';

interface LexicalContentRendererProps {
  content: { root?: { children?: unknown[] } } | null | undefined;
  className?: string;
}

/**
 * Component to render Lexical editor content
 * 
 * @example
 * ```tsx
 * <LexicalContentRenderer 
 *   content={article.content} 
 *   className="prose max-w-none"
 * />
 * ```
 */
export function LexicalContentRenderer({ content, className }: LexicalContentRendererProps) {
  if (!content) {
    return null;
  }

  return (
    <div className={className}>
      {renderLexicalContent(content)}
    </div>
  );
}
