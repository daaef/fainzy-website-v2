import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import Link from 'next/link';

interface LexicalTextNode {
  type: 'text';
  text: string;
  format?: number;
  mode?: string;
  style?: string;
  detail?: number;
  version?: number;
}

interface LexicalElementNode {
  type: string;
  tag?: string;
  children?: LexicalNode[];
  format?: string | number;
  indent?: number;
  direction?: string | null;
  version?: number;
  value?: number;
  textFormat?: number;
  textStyle?: string;
  listType?: 'bullet' | 'number' | 'check';
  start?: number;
  fields?: {
    url?: string;
    newTab?: boolean;
    linkType?: string;
  };
  id?: string;
}

type LexicalNode = LexicalTextNode | LexicalElementNode;

interface LexicalContent {
  root: {
    type: 'root';
    children: LexicalNode[];
    [key: string]: unknown;
  };
}

const TEXT_FORMAT_BOLD = 1;
const TEXT_FORMAT_ITALIC = 2;
const TEXT_FORMAT_STRIKETHROUGH = 4;
const TEXT_FORMAT_UNDERLINE = 8;
const TEXT_FORMAT_CODE = 16;
const TEXT_FORMAT_SUBSCRIPT = 32;
const TEXT_FORMAT_SUPERSCRIPT = 64;

function hasFormat(format: number, flag: number): boolean {
  return (format & flag) !== 0;
}

function renderTextNode(node: LexicalTextNode, key: number): React.ReactNode {
  const text = node.text || '';
  const format = node.format || 0;
  
  let element: React.ReactNode = <span dangerouslySetInnerHTML={{ __html: escapeHTML(text) }} />;

  if (hasFormat(format, TEXT_FORMAT_CODE)) {
    element = <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{element}</code>;
  }
  
  if (hasFormat(format, TEXT_FORMAT_BOLD)) {
    element = <strong>{element}</strong>;
  }
  
  if (hasFormat(format, TEXT_FORMAT_ITALIC)) {
    element = <em>{element}</em>;
  }
  
  if (hasFormat(format, TEXT_FORMAT_UNDERLINE)) {
    element = <u>{element}</u>;
  }
  
  if (hasFormat(format, TEXT_FORMAT_STRIKETHROUGH)) {
    element = <s>{element}</s>;
  }
  
  if (hasFormat(format, TEXT_FORMAT_SUBSCRIPT)) {
    element = <sub>{element}</sub>;
  }
  
  if (hasFormat(format, TEXT_FORMAT_SUPERSCRIPT)) {
    element = <sup>{element}</sup>;
  }

  return <Fragment key={key}>{element}</Fragment>;
}

function renderChildren(children?: LexicalNode[]): React.ReactNode {
  if (!children || !Array.isArray(children)) {
    return null;
  }

  return children.map((node, i) => renderNode(node, i));
}

function renderNode(node: LexicalNode, key: number): React.ReactNode {
  if (!node) {
    return null;
  }

  if (node.type === 'text') {
    return renderTextNode(node as LexicalTextNode, key);
  }

  const elementNode = node as LexicalElementNode;
  
  switch (elementNode.type) {
    case 'root':
      return <div key={key}>{renderChildren(elementNode.children)}</div>;

    case 'heading':
      const HeadingTag = (elementNode.tag || 'h2') as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      const headingClasses: Record<string, string> = {
        h1: 'font-bold text-3xl md:text-4xl leading-tight text-foreground mb-6',
        h2: 'font-bold text-2xl md:text-3xl leading-tight text-foreground mb-6',
        h3: 'font-semibold text-xl md:text-2xl text-foreground mb-4',
        h4: 'font-semibold text-lg md:text-xl text-foreground mb-4',
        h5: 'font-semibold text-base md:text-lg text-foreground mb-3',
        h6: 'font-semibold text-base text-foreground mb-3',
      };
      return (
        <HeadingTag key={key} className={headingClasses[elementNode.tag || 'h2']}>
          {renderChildren(elementNode.children)}
        </HeadingTag>
      );

    case 'paragraph':
      return (
        <p key={key} className="text-base md:text-lg leading-relaxed text-foreground/90 mb-6">
          {renderChildren(elementNode.children)}
        </p>
      );

    case 'list':
      if (elementNode.tag === 'ul' || elementNode.listType === 'bullet') {
        return (
          <ul key={key} className="list-disc list-inside mb-6 space-y-2 text-foreground/90">
            {renderChildren(elementNode.children)}
          </ul>
        );
      }
      if (elementNode.tag === 'ol' || elementNode.listType === 'number') {
        return (
          <ol 
            key={key} 
            className="list-decimal list-inside mb-6 space-y-2 text-foreground/90"
            start={elementNode.start}
          >
            {renderChildren(elementNode.children)}
          </ol>
        );
      }
      if (elementNode.listType === 'check') {
        return (
          <ul key={key} className="list-none mb-6 space-y-2 text-foreground/90">
            {renderChildren(elementNode.children)}
          </ul>
        );
      }
      return (
        <ul key={key} className="list-disc list-inside mb-6 space-y-2 text-foreground/90">
          {renderChildren(elementNode.children)}
        </ul>
      );

    case 'listitem':
      return (
        <li key={key} className="ml-4">
          {renderChildren(elementNode.children)}
        </li>
      );

    case 'link':
      const url = elementNode.fields?.url || '';
      const newTab = elementNode.fields?.newTab || false;
      return (
        <Link
          href={escapeHTML(url)}
          key={key}
          className="text-primary hover:text-primary/80 underline"
          target={newTab ? '_blank' : undefined}
          rel={newTab ? 'noopener noreferrer' : undefined}
        >
          {renderChildren(elementNode.children)}
        </Link>
      );

    case 'quote':
      return (
        <blockquote key={key} className="border-l-4 border-primary pl-4 py-2 mb-6 italic text-muted-foreground">
          {renderChildren(elementNode.children)}
        </blockquote>
      );

    case 'code':
      return (
        <pre key={key} className="bg-muted rounded-lg p-4 mb-6 overflow-x-auto">
          <code className="text-sm font-mono">{renderChildren(elementNode.children)}</code>
        </pre>
      );

    case 'linebreak':
      return <br key={key} />;

    case 'horizontalrule':
      return <hr key={key} className="my-8 border-border" />;

    case 'table':
      return (
        <div key={key} className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-border">
            {renderChildren(elementNode.children)}
          </table>
        </div>
      );

    case 'tablerow':
      return (
        <tr key={key} className="border-b border-border">
          {renderChildren(elementNode.children)}
        </tr>
      );

    case 'tablecell':
      return (
        <td key={key} className="border border-border px-4 py-2">
          {renderChildren(elementNode.children)}
        </td>
      );

    case 'tableheader':
      return (
        <th key={key} className="border border-border px-4 py-2 bg-muted font-semibold">
          {renderChildren(elementNode.children)}
        </th>
      );

    default:
      return (
        <div key={key}>
          {renderChildren(elementNode.children)}
        </div>
      );
  }
}

/**
 * Renders Lexical editor JSON content to React components
 * 
 * @param content - The Lexical content object with a root node
 * @returns React components representing the rendered HTML
 * 
 * @example
 * ```tsx
 * const content = {
 *   root: {
 *     type: 'root',
 *     children: [...]
 *   }
 * };
 * 
 * return <div>{renderLexicalContent(content)}</div>;
 * ```
 */
export function renderLexicalContent(content: { root?: { children?: unknown[] } }): React.ReactNode {
  if (!content || !content.root || !content.root.children) {
    return null;
  }

  return renderChildren(content.root.children as LexicalNode[]);
}

/**
 * Converts Lexical editor JSON content to HTML string
 * 
 * @param content - The Lexical content object with a root node
 * @returns HTML string
 */
export function lexicalToHtml(content: LexicalContent | null | undefined): string {
  if (!content || !content.root || !content.root.children) {
    return '';
  }

  const renderToString = (node: LexicalNode): string => {
    if (!node) return '';

    if (node.type === 'text') {
      const textNode = node as LexicalTextNode;
      const text = escapeHTML(textNode.text || '');
      const format = textNode.format || 0;
      
      let html = text;
      
      if (hasFormat(format, TEXT_FORMAT_CODE)) {
        html = `<code>${html}</code>`;
      }
      if (hasFormat(format, TEXT_FORMAT_BOLD)) {
        html = `<strong>${html}</strong>`;
      }
      if (hasFormat(format, TEXT_FORMAT_ITALIC)) {
        html = `<em>${html}</em>`;
      }
      if (hasFormat(format, TEXT_FORMAT_UNDERLINE)) {
        html = `<u>${html}</u>`;
      }
      if (hasFormat(format, TEXT_FORMAT_STRIKETHROUGH)) {
        html = `<s>${html}</s>`;
      }
      if (hasFormat(format, TEXT_FORMAT_SUBSCRIPT)) {
        html = `<sub>${html}</sub>`;
      }
      if (hasFormat(format, TEXT_FORMAT_SUPERSCRIPT)) {
        html = `<sup>${html}</sup>`;
      }
      
      return html;
    }

    const elementNode = node as LexicalElementNode;
    const childrenHtml = (elementNode.children || []).map(renderToString).join('');

    switch (elementNode.type) {
      case 'heading':
        const tag = elementNode.tag || 'h2';
        return `<${tag}>${childrenHtml}</${tag}>`;
      
      case 'paragraph':
        return `<p>${childrenHtml}</p>`;
      
      case 'list':
        const listTag = elementNode.tag || (elementNode.listType === 'number' ? 'ol' : 'ul');
        return `<${listTag}>${childrenHtml}</${listTag}>`;
      
      case 'listitem':
        return `<li>${childrenHtml}</li>`;
      
      case 'link':
        const url = escapeHTML(elementNode.fields?.url || '');
        const target = elementNode.fields?.newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a href="${url}"${target}>${childrenHtml}</a>`;
      
      case 'quote':
        return `<blockquote>${childrenHtml}</blockquote>`;
      
      case 'code':
        return `<pre><code>${childrenHtml}</code></pre>`;
      
      case 'linebreak':
        return '<br>';
      
      case 'horizontalrule':
        return '<hr>';
      
      case 'table':
        return `<table>${childrenHtml}</table>`;
      
      case 'tablerow':
        return `<tr>${childrenHtml}</tr>`;
      
      case 'tablecell':
        return `<td>${childrenHtml}</td>`;
      
      case 'tableheader':
        return `<th>${childrenHtml}</th>`;
      
      default:
        return childrenHtml;
    }
  };

  return content.root.children.map(renderToString).join('');
}
