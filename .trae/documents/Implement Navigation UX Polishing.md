## Goals

- Stabilize desktop dropdown hover with a short close delay and keep open when hovering the panel.
- Add an explicit close button in the desktop Products dropdown.
- Improve scroll handling with CSS class-based page lock and stable scrollbars.
- Add smooth iOS scrolling on dropdowns and mobile menu.
- Add responsive `sizes` to product images in the dropdown.
- Set initial focus to the mobile menu container on open.

## Changes

- `components/layout/navbar.tsx`
  - Add `useRef` timers to delay closing of the desktop dropdown; apply `onMouseEnter`/`onMouseLeave` on both trigger and panel.
  - Insert a top-right close button inside the dropdown.
  - Replace inline body overflow lock with a `no-scroll` CSS class toggle.
  - Add `scrollbar-stable ios-smooth-scroll` classes to the dropdown panel and mobile menu container.
  - Add `sizes` to dropdown product images.
  - Focus mobile menu container on open with `ref` and `tabIndex={-1}`.
- `app/globals.css`
  - Add utility classes: `.no-scroll`, `.scrollbar-stable`, `.ios-smooth-scroll`.

## Verification

- Desktop: Hover from “Products” to panel without flicker, close button works, body scroll locks, internal scroll smooth.
- Mobile: Menu fills viewport below 80px navbar, focuses on open, smooth scrolling, page locked.

If approved, I’ll implement and validate these updates immediately.
