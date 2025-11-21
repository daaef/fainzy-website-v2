## Goals

- Use the provided coordinates (35.157308228381325, 136.96488391534322) for the Contact page map.
- Keep the address display and map dark mode intact.

## Changes

- In `app/contact/page.tsx`, pass `lat` and `lng` props to `MapClient` with the provided values.
- Leave MapClient geocoding logic as-is; the explicit coordinates will initialize the map and marker precisely.

## Verification

- Open Contact page and confirm the map centers and the marker pins the exact provided location.
- “Open in Google Maps” link uses the coordinates.

If approved, I will edit `app/contact/page.tsx` to pass these constants to `MapClient`.
