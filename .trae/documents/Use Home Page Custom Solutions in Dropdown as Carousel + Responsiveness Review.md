## Goals

- Reuse `customSolutions` from `app/page.tsx` to render a carousel inside the desktop Products dropdown.
- Show 3 items by default and 4 items on wider screens, keeping the current dark look and compact card styling.
- Provide a responsiveness review and recommendations without altering the overall UI design.

## Data Sharing

- Extract the `customSolutions` array from `app/page.tsx` into a shared module `@/data/customSolutions.ts` (named export), so both Home and Navbar can import the same data.
- Keep the exact item shape (id, title, description, images[0]) to avoid rework.
- For item links, if there is no existing detail route per `id`, link to `/custom-solutions` or maintain current links. We can add a simple map for existing slugs (`hotel`, `hospital`, `enterprise`) and default others to `/custom-solutions`.

## Carousel Implementation (Dropdown)

- Replace the current Custom Solutions grid in `components/layout/navbar.tsx` with a horizontal carousel that:
  - Uses `overflow-x-auto`, `scroll-snap-x mandatory`, and `flex`/`min-w` responsive sizing.
  - Shows 3 items per view at large screens (`min-w-[31%]`) and 4 at extra-large (`xl:min-w-[23%]`).
  - Includes left/right arrow buttons that call `scrollBy({ left: ±container.clientWidth * 0.9 })` on the carousel container.
  - Keeps the same dark styling, subtle ring, hover glow, and small typography already used for cards.
- Animations: keep subtle `motion` opacity/translate on mount; avoid heavy transitions.

## Navbar Integration

- Import `customSolutions` from `@/data/customSolutions`.
- Map to cards using `images[0].src`, `title`, and `description`.
- Preserve “Custom Solutions” header; place the carousel below it inside the dropdown panel.

## Accessibility

- Buttons labeled with `aria-label="Previous"` / `"Next"`.
- Maintain keyboard dismissal via Esc; focus remains in the dropdown panel.
- Keep `aria-expanded` on Products trigger as-is.

## Performance

- Use `next/image` with `sizes` tuned for dropdown widths (e.g., `sizes="(min-width: 1280px) 25vw, 33vw"`).
- Avoid `priority` on carousel images; rely on lazy loading.

## Verification

- Test the dropdown at lg and xl widths, ensuring:
  - 3 items visible at lg, 4 items at xl.
  - Horizontal scroll and arrows work.
  - Cards retain current dark theme visuals and compact sizing.
- Confirm no layout overflow on short-height viewports (existing dropdown `max-h` + internal scroll remains).

## Responsiveness Review (Advice Only)

- Navbar height constant: centralize `96px` as a CSS variable (e.g., `--navbar-h`) and use `calc(100vh - var(--navbar-h))` wherever needed (dropdown, mobile menu), instead of hardcoding. Improves maintainability.
- Dropdown panel: already constrained with internal scrolling; add `scrollbar-gutter: stable` via a utility to reduce layout shift when scrollbars appear.
- Image responsiveness: add `sizes` to `next/image` instances in dropdown and hero sections (`app/page.tsx`) to optimize loads across breakpoints.
- Reduced motion: respect `prefers-reduced-motion` by disabling heavier `motion` animations for users who prefer it; minor code paths to toggle transitions.
- Viewport height units: in hero sections using `vh` (e.g., `pt-[20vh] min-h-[90vh]`), consider `dvh` fallback to handle mobile browser UI chrome changes without altering visual intent.
- Grid/typography clamps: where text might overgrow on very wide screens, `clamp()` for font sizes can keep the UI consistent without changing design.
- Mobile menu consistency: ensure all fixed elements under navbar use the same top offset strategy (variable or consistent value) and internal `overflow-auto` to handle small heights.

If you approve, I will: (1) create the shared data file, (2) implement the carousel inside the dropdown using that data, and (3) tune images and accessibility accordingly, keeping the dark UI intact.
