## Goals

- Prevent the mobile Products section from expanding the navbar vertically.
- Give the mobile dropdown a fixed viewport-based height with its own scroll.
- Disable page scroll while any navbar dropdown/menu is visible.
- Respect navbar heights: 80px on mobile, 96px on desktop.

## Changes

- `components/layout/navbar.tsx`
  - Mobile menu container: set a fixed height and internal scroll
    - Replace `h-fit` with `h-[calc(100vh-80px)]` and ensure `overflow-y-auto overscroll-contain`.
    - Keep `style={{ top: "80px", bottom: 0 }}` (mobile only) so it fills remaining viewport.
  - Stop auto-closing mobile menu on window scroll
    - Remove the block that closes the mobile menu during `handleScroll`; users should be able to scroll inside the fixed container.
  - Page scroll lock when menu/dropdown open
    - Add a `useEffect` that toggles `document.body.style.overflow = "hidden"` when `isMobileMenuOpen || isProductsMenuOpen` is true; restore to `""` on cleanup or close.
    - Optionally add `document.body.style.touchAction = "none"` for iOS, but we can rely on `overscroll-contain` and body overflow hidden first.
  - Desktop dropdown/backdrop
    - Keep `top: "96px"` for desktop products dropdown and its backdrop.
    - Internal scroll already enabled with `max-h-[calc(100vh-96px)] overflow-y-auto overscroll-contain`.

## Verification

- Mobile
  - Open the mobile menu: navbar height remains 80px; the menu container fills `calc(100vh-80px)`.
  - Scroll inside the menu; the page behind does not scroll; the menu does not auto-close.
- Desktop
  - Open the Products dropdown: backdrop/panel aligned under the 96px navbar; the page behind does not scroll.
  - Internal scroll works within the dropdown for short heights.

## Notes

- No UI redesign; only behavior and layout constraints.
- If needed later, we can centralize navbar heights using CSS variables (e.g., `--navbar-h-mobile`, `--navbar-h-desktop`) to avoid hardcoded values.

If you approve, I will implement these updates in `components/layout/navbar.tsx` and verify in the preview.
