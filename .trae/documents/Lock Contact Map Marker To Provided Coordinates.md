## Goal

Ensure the Contact page map marker stays on the Nagoya University Incubation Facility by preventing address geocoding from overriding explicit coordinates.

## Changes

- Add `lockToCoordinates` prop to `MapClient` and default it to `false`.
- When `lockToCoordinates` is `true`, skip geocoding and keep the map centered/marker at the provided `lat`/`lng`.
- Set `lockToCoordinates` to `true` in `app/contact/page.tsx` where we pass your coordinates.

## Verification

- Contact map centers on `35.157308228381325, 136.96488391534322` and the marker remains there.
- “View in Google Maps” still opens with the exact coordinates.
- Dark mode styling remains unchanged.

I will implement these updates now and verify.
