// app/contact/MapClient.tsx
"use client";
import { useEffect, useRef } from "react";
import { useLocale } from "@/contexts/LocaleContext";

const DARK_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#111113" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#111113" }] },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#2b2b2b" }],
  },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#1c1c1c" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#bdbdbd" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0f1720" }] },
];

// Minimal shapes for map/marker instances we interact with
interface MapInstance {
  setCenter(center: { lat: number; lng: number }): void;
  setZoom(zoom: number): void; // added
}
interface MarkerInstance {
  setPosition(position: { lat: number; lng: number }): void;
  setMap(map: MapInstance | null): void;
}

// Minimal typed shape for the parts we use from the Google Maps API
// Extend with Geocoder for address lookup.
type GoogleMapsAPI = {
  maps: {
    Map: new (el: Element, opts: Record<string, unknown>) => MapInstance;
    Marker: new (opts: {
      position: { lat: number; lng: number };
      map?: MapInstance;
      title?: string;
    }) => MarkerInstance;
    Geocoder: new () => {
      geocode: (
        req: { address: string },
        cb: (
          results: Array<{ geometry: { location: { lat: () => number; lng: () => number } } }>,
          status: string
        ) => void
      ) => void;
    };
    event: { trigger(map: MapInstance | null, ev: string): void };
  };
};

function loadGoogleMaps(key: string): Promise<GoogleMapsAPI> {
  // fast-path if already available
  if (
    (window as unknown as { google?: GoogleMapsAPI }).google &&
    (window as unknown as { google?: GoogleMapsAPI }).google!.maps
  ) {
    return Promise.resolve(
      (window as unknown as { google: GoogleMapsAPI }).google as GoogleMapsAPI
    );
  }
  if (window.__fainzy_google_maps_promise) return window.__fainzy_google_maps_promise;

  window.__fainzy_google_maps_promise = new Promise<GoogleMapsAPI>((resolve, reject) => {
    const existing = document.querySelector(`script[src*="maps.googleapis.com/maps/api/js"]`);
    if (existing) {
      existing.addEventListener("load", () => {
        const g = (window as unknown as { google?: GoogleMapsAPI }).google;
        if (g) resolve(g);
        else reject(new Error("Google Maps loaded but window.google is not available"));
      });
      existing.addEventListener("error", () => reject(new Error("Failed to load Google Maps")));
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const g = (window as unknown as { google?: GoogleMapsAPI }).google;
      if (g) resolve(g);
      else reject(new Error("Google Maps loaded but window.google is not available"));
    };
    script.onerror = () => reject(new Error("Failed to load Google Maps script"));
    document.head.appendChild(script);
  });

  return window.__fainzy_google_maps_promise;
}

export default function MapClient({
  lat = 35.1538,
  lng = 136.9699,
  address,
}: {
  lat?: number;
  lng?: number;
  address?: string;
}) {
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapInstance | null>(null);
  const markerRef = useRef<MarkerInstance | null>(null);
  const pendingGeocode = useRef(false);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!key) {
      console.warn("[MapClient] NEXT_PUBLIC_GOOGLE_MAPS_API_KEY not set. Map will not load.");
      return;
    }
    let mounted = true;

    const markerTitle =
      locale === "ja"
        ? "名古屋大学 インキュベーション施設"
        : "Nagoya University Incubation Facility";
    const MAX_ZOOM = 21;
    loadGoogleMaps(key)
      .then((google) => {
        if (!mounted || !ref.current) return;
        if (!mapRef.current) {
          mapRef.current = new google.maps.Map(ref.current, {
            center: { lat, lng },
            zoom: MAX_ZOOM,
            styles: DARK_STYLE,
            disableDefaultUI: true,
            gestureHandling: "auto",
          });
        } else {
          try {
            mapRef.current.setZoom(MAX_ZOOM);
          } catch {}
        }
        if (!markerRef.current) {
          markerRef.current = new google.maps.Marker({
            position: { lat, lng },
            map: mapRef.current,
            title: markerTitle,
          });
        } else {
          try {
            markerRef.current.setPosition({ lat, lng });
            markerRef.current.setMap(mapRef.current);
          } catch (err) {
            console.warn("[MapClient] marker update failed", err);
          }
        }
        // Geocode if address provided & not yet attempted
        if (address && !pendingGeocode.current) {
          pendingGeocode.current = true;
          try {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address }, (results, status) => {
              if (!mounted) return;
              if (status === "OK" && results && results[0]) {
                const loc = results[0].geometry.location;
                const gLat = loc.lat();
                const gLng = loc.lng();
                try {
                  mapRef.current?.setCenter({ lat: gLat, lng: gLng });
                  mapRef.current?.setZoom(MAX_ZOOM);
                  markerRef.current?.setPosition({ lat: gLat, lng: gLng });
                } catch {
                  // ignore minor update errors
                }
              } else {
                console.warn("[MapClient] geocode failed", status);
              }
            });
          } catch {
            console.warn("[MapClient] geocoder init failed");
          }
        }
        setTimeout(() => {
          try {
            google.maps.event.trigger(mapRef.current, "resize");
            mapRef.current?.setCenter({ lat, lng });
            mapRef.current?.setZoom(MAX_ZOOM);
          } catch {}
        }, 0);
      })
      .catch((err) => console.warn("[MapClient] Google Maps failed to load:", err));

    return () => {
      mounted = false;
      if (markerRef.current) {
        try {
          markerRef.current.setMap(null);
        } catch {}
        markerRef.current = null;
      }
      mapRef.current = null;
    };
  }, [lat, lng, address, locale]);

  // Replace rigid fixed px height with responsive min-heights. Keeps the rounded container from the design.
  return (
    <div
      ref={ref}
      role="region"
      aria-label={locale === "ja" ? "会社所在地地図" : "Company location map"}
      className="bg-[#111113] w-full rounded-[16px] min-h-[240px] md:min-h-[420px] lg:min-h-[499px]"
    />
  );
}
