# Lexical Content Renderer

Utility to render Lexical editor JSON content to React components or HTML strings.

## Features

- ✅ Handles all Lexical node types (headings, paragraphs, lists, links, etc.)
- ✅ Supports text formatting (bold, italic, underline, strikethrough, code, subscript, superscript)
- ✅ Nested lists support (bullet and numbered)
- ✅ Link rendering with external link support
- ✅ Table support
- ✅ Tailwind CSS styling out of the box
- ✅ Type-safe with TypeScript
- ✅ Two rendering modes: React components or HTML string

## Installation

The utilities are located in:
- `/lib/lexical-renderer.tsx` - Core rendering logic
- `/components/LexicalContentRenderer.tsx` - React component wrapper

## Usage

### 1. Using the React Component (Recommended)

```tsx
import { LexicalContentRenderer } from '@/components/LexicalContentRenderer';

function ArticlePage({ article }) {
  return (
    <article>
      <h1>{article.title}</h1>
      <LexicalContentRenderer 
        content={article.content} 
        className="prose max-w-none"
      />
    </article>
  );
}
```

### 2. Using the Render Function Directly

```tsx
import { renderLexicalContent } from '@/lib/lexical-renderer';

function BlogPost({ post }) {
  return (
    <div className="article-content">
      {renderLexicalContent(post.content)}
    </div>
  );
}
```

### 3. Converting to HTML String

```tsx
import { lexicalToHtml } from '@/lib/lexical-renderer';

function generateMetaDescription(content) {
  const html = lexicalToHtml(content);
  // Strip HTML tags and truncate
  const text = html.replace(/<[^>]*>/g, '');
  return text.substring(0, 160);
}
```

## Supported Node Types

### Text Formatting
- **Bold** (`format: 1`)
- *Italic* (`format: 2`)
- ~~Strikethrough~~ (`format: 4`)
- <u>Underline</u> (`format: 8`)
- `Code` (`format: 16`)
- Subscript (`format: 32`)
- Superscript (`format: 64`)

### Block Elements
- Headings (h1-h6)
- Paragraphs
- Blockquotes
- Code blocks
- Horizontal rules
- Line breaks

### Lists
- Bullet lists (`listType: 'bullet'`)
- Numbered lists (`listType: 'number'`)
- Checklist (`listType: 'check'`)

### Links
- Internal links
- External links (with `newTab` support)
- Email links

### Tables
- Table headers
- Table rows
- Table cells

## Example Input

```json
{
  "content": {
    "root": {
      "type": "root",
      "children": [
        {
          "tag": "h1",
          "type": "heading",
          "children": [
            {
              "type": "text",
              "text": "Article Title",
              "format": 0
            }
          ]
        },
        {
          "type": "paragraph",
          "children": [
            {
              "type": "text",
              "text": "This is a ",
              "format": 0
            },
            {
              "type": "text",
              "text": "bold",
              "format": 1
            },
            {
              "type": "text",
              "text": " word.",
              "format": 0
            }
          ]
        },
        {
          "tag": "ul",
          "type": "list",
          "listType": "bullet",
          "children": [
            {
              "type": "listitem",
              "children": [
                {
                  "type": "text",
                  "text": "First item",
                  "format": 0
                }
              ]
            },
            {
              "type": "listitem",
              "children": [
                {
                  "type": "text",
                  "text": "Second item",
                  "format": 0
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

## Styling

The renderer uses Tailwind CSS classes. Default styles include:

- **H1**: `font-bold text-3xl md:text-4xl mb-6`
- **H2**: `font-bold text-2xl md:text-3xl mb-6`
- **Paragraph**: `text-base md:text-lg leading-relaxed mb-6`
- **Lists**: `list-disc list-inside mb-6 space-y-2`
- **Links**: `text-primary hover:text-primary/80 underline`
- **Code blocks**: `bg-muted rounded-lg p-4 mb-6`

To customize styling, you can:
1. Modify the classes in `/lib/lexical-renderer.tsx`
2. Override with custom CSS classes on the wrapper element
3. Use Tailwind's `@apply` directive

## API Reference

### `renderLexicalContent(content)`

Renders Lexical content to React components.

**Parameters:**
- `content: LexicalContent | null | undefined` - The Lexical content object

**Returns:** `React.ReactNode`

### `lexicalToHtml(content)`

Converts Lexical content to an HTML string.

**Parameters:**
- `content: LexicalContent | null | undefined` - The Lexical content object

**Returns:** `string` - HTML string

### `LexicalContentRenderer`

React component wrapper for rendering Lexical content.

**Props:**
- `content: any` - The Lexical content object
- `className?: string` - Optional CSS classes for the wrapper div

## Error Handling

The renderer handles:
- Null/undefined content gracefully
- Missing children arrays
- Unknown node types (renders children in a div)
- Missing text/format values

## Performance

- Uses React Fragments to minimize DOM nodes
- Escapes HTML to prevent XSS attacks
- Efficient rendering with key-based reconciliation
