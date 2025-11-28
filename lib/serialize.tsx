import React, { Fragment } from 'react';
import escapeHTML from 'escape-html';
import Image from 'next/image';
import Link from 'next/link';

interface Node {
  type?: string;
  value?: string;
  url?: string;
  children?: Node[];
  [key: string]: unknown;
}

export function serialize(children?: Node[]): React.ReactNode {
  if (!children || !Array.isArray(children)) {
    return null;
  }

  return children.map((node, i) => {
    if (!node) {
      return null;
    }

    if (node.type === 'text') {
      let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.value || '') }} />;

      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      if (node.underline) {
        text = <u key={i}>{text}</u>;
      }

      if (node.strikethrough) {
        text = <s key={i}>{text}</s>;
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node.type) {
      return null;
    }

    switch (node.type) {
      case 'h1':
        return (
          <h1 key={i} className="font-bold text-3xl md:text-4xl leading-tight text-foreground mb-6">
            {serialize(node.children)}
          </h1>
        );
      case 'h2':
        return (
          <h2 key={i} className="font-bold text-2xl md:text-3xl leading-tight text-foreground mb-6">
            {serialize(node.children)}
          </h2>
        );
      case 'h3':
        return (
          <h3 key={i} className="font-semibold text-xl md:text-2xl text-foreground mb-4">
            {serialize(node.children)}
          </h3>
        );
      case 'h4':
        return (
          <h4 key={i} className="font-semibold text-lg md:text-xl text-foreground mb-4">
            {serialize(node.children)}
          </h4>
        );
      case 'h5':
        return (
          <h5 key={i} className="font-semibold text-base md:text-lg text-foreground mb-3">
            {serialize(node.children)}
          </h5>
        );
      case 'h6':
        return (
          <h6 key={i} className="font-semibold text-base text-foreground mb-3">
            {serialize(node.children)}
          </h6>
        );
      case 'p':
        return (
          <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/90 mb-6">
            {serialize(node.children)}
          </p>
        );
      case 'blockquote':
        return (
          <blockquote key={i} className="border-l-4 border-primary pl-4 py-2 mb-6 italic text-muted-foreground">
            {serialize(node.children)}
          </blockquote>
        );
      case 'ul':
        return (
          <ul key={i} className="list-disc list-inside mb-6 space-y-2 text-foreground/90">
            {serialize(node.children)}
          </ul>
        );
      case 'ol':
        return (
          <ol key={i} className="list-decimal list-inside mb-6 space-y-2 text-foreground/90">
            {serialize(node.children)}
          </ol>
        );
      case 'li':
        return (
          <li key={i} className="ml-4">
            {serialize(node.children)}
          </li>
        );
      case 'link':
        return (
          <Link
            href={escapeHTML(node.url || '')}
            key={i}
            className="text-primary hover:text-primary/80 underline"
          >
            {serialize(node.children)}
          </Link>
        );
      case 'code':
        return (
          <pre key={i} className="bg-muted rounded-lg p-4 mb-6 overflow-x-auto">
            <code className="text-sm">{serialize(node.children)}</code>
          </pre>
        );
      case 'upload':
        if (node.value && typeof node.value === 'object') {
          const media = node.value as { url?: string; alt?: string };
          return (
            <div key={i} className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-6">
              <Image
                src={media.url || ''}
                alt={media.alt || ''}
                fill
                className="object-cover"
              />
            </div>
          );
        }
        return null;
      default:
        return (
          <div key={i}>
            {serialize(node.children)}
          </div>
        );
    }
  });
}
