## Goals

- Create a safe backup of the current navbar file before any changes.
- Make the desktop Products dropdown responsive for short-height viewports.
- Reduce and beautify the product cards in the dropdown while preserving the dark theme.

## Backup

- Duplicate `components/layout/navbar.tsx` to `components/layout/navbar.backup.tsx` so we can revert instantly if needed.

## Key Changes

- Constrain dropdown height: add `max-h-[calc(100vh-96px)]` and `overflow-y-auto` to the fixed dropdown panel below the navbar.
- Correct offsets: change backdrop and dropdown `top` from `88px` to `96px` to match the navbar height.
- Tighten vertical rhythm: reduce paddings/gaps for better fit on short-height screens.
- Refine product cards (inside the dropdown): smaller images, reduced padding, subtle ring/border, improved hover effects, tuned typography.

## File Updates

- `components/layout/navbar.tsx`
  - Backdrop (`motion.div` near Products): update `style={{ top: "96px" }}`.
  - Dropdown panel (`motion.div`): update `style={{ top: "96px" }}` and add `max-h-[calc(100vh-96px)] overflow-y-auto overscroll-contain`.
  - Panel inner container: `py-8` → `py-6`.
  - Products grid: `gap-6` → `gap-4`.
  - Product card (each product in the dropdown):
    - Card container: `p-6` → `p-4`, `rounded-xl` → `rounded-lg`, add `ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5`.
    - Image wrapper: `h-40` → `h-28 sm:h-32`, `mb-4` → `mb-3`.
    - Title: `text-base` → `text-sm font-semibold`.
    - Description: `text-sm` → `text-xs text-neutral-400`.
    - Actions: `gap-6 text-sm` → `gap-4 text-xs`, keep underline and hover color.
  - Custom Solutions cards: mirror the same styling; reduce image wrapper `h-32` → `h-24`.
  - Optional consistency: update mobile menu `style={{ top: "88px", bottom: 0 }}` → `style={{ top: "96px", bottom: 0 }}`.

## Visual & UX

- Maintain dark theme with neutral grays and low-opacity white accents.
- Hover polish: retain gentle image scale; add subtle ring and glow for feedback.
- Internal scroll: dropdown content scrolls when exceeding `calc(100vh - 96px)`.

## Accessibility

- Preserve `aria-haspopup` and `aria-expanded` for the Products trigger.
- Esc key continues to close; `overflow-y-auto` contains scroll focus within dropdown.

## Verification

- After implementation, preview at large widths with short heights (e.g., 1440×400, 1920×500) and verify:
  - Dropdown remains aligned under the 96px navbar.
  - Content is reachable via internal scrolling.
  - Cards are smaller, clean, and visually pleasing on dark background.

If you approve, I will: (1) create `components/layout/navbar.backup.tsx`, (2) implement the changes in `components/layout/navbar.tsx`, and (3) validate in the preview.
