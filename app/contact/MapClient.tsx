// app/contact/MapClient.tsx
"use client";
import { useEffect, useRef } from "react";
import { useLocale } from "@/contexts/LocaleContext";

// Simplified dark mode styles - allows POI markers and controls to show properly
const DARK_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#0a0a0a" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0a0a0a" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

// Minimal shapes for map/marker instances we interact with
interface MapInstance {
  setCenter(center: { lat: number; lng: number }): void;

  setZoom(zoom: number): void; // added
}

interface MarkerInstance {
  setPosition(position: { lat: number; lng: number }): void;

  setMap(map: MapInstance | null): void;

  setIcon(
    icon:
      | string
      | {
          url: string;
          scaledSize?: { width: number; height: number };
          labelOrigin?: { x: number; y: number };
        }
  ): void;

  setLabel(
    label: string | { text: string; color: string; fontSize: string; fontWeight: string }
  ): void;
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
      icon?:
        | string
        | {
            url: string;
            scaledSize?: { width: number; height: number };
            labelOrigin?: { x: number; y: number };
          };
      animation?: number;
      label?: string | { text: string; color: string; fontSize: string; fontWeight: string };
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
    Animation: {
      DROP: number;
      BOUNCE: number;
    };
  };
};

// Remove global Window augmentation; use module-level cache instead.
let googleMapsPromise: Promise<GoogleMapsAPI> | undefined;

function loadGoogleMaps(key: string, language: string = "en"): Promise<GoogleMapsAPI> {
  // If SSR safeguard (shouldn't run because of "use client", but defensive)
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Google Maps cannot load during SSR"));
  }
  const win = window as unknown as { google?: GoogleMapsAPI };
  // fast-path if already available
  if (win.google && win.google.maps) {
    return Promise.resolve(win.google);
  }
  if (googleMapsPromise) return googleMapsPromise;

  googleMapsPromise = new Promise<GoogleMapsAPI>((resolve, reject) => {
    const existing = document.querySelector(`script[src*="maps.googleapis.com/maps/api/js"]`);
    if (existing) {
      existing.addEventListener("load", () => {
        const g = win.google;
        if (g) resolve(g);
        else reject(new Error("Google Maps loaded but window.google is not available"));
      });
      existing.addEventListener("error", () => reject(new Error("Failed to load Google Maps")));
      return;
    }
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&language=${encodeURIComponent(language)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const g = win.google;
      if (g) resolve(g);
      else reject(new Error("Google Maps loaded but window.google is not available"));
    };
    script.onerror = () => reject(new Error("Failed to load Google Maps script"));
    document.head.appendChild(script);
  });

  return googleMapsPromise;
}

export default function MapClient({
  lat = 35.1538,
  lng = 136.9699,
  address = "FAINZY TECHNOLOGIES Co., Ltd.",
  lockToCoordinates = false,
}: {
  lat?: number;
  lng?: number;
  address?: string;
  lockToCoordinates?: boolean;
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
      locale === "ja" ? "FAINZY TECHNOLOGIES Co., Ltd." : "FAINZY TECHNOLOGIES Co., Ltd.";
    const INITIAL_ZOOM = 17; // Detailed zoom level showing nearby POIs
    const mapLanguage = locale === "ja" ? "ja" : "en";
    loadGoogleMaps(key, mapLanguage)
      .then((google) => {
        if (!mounted || !ref.current) return;
        if (!mapRef.current) {
          mapRef.current = new google.maps.Map(ref.current, {
            center: { lat, lng },
            zoom: INITIAL_ZOOM,
            styles: DARK_STYLE,
            // Enable all default controls
            disableDefaultUI: false,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            rotateControl: false,
            fullscreenControl: true,
            gestureHandling: "auto",
          });
        } else {
          try {
            mapRef.current.setZoom(INITIAL_ZOOM);
          } catch {}
        }
        if (!markerRef.current) {
          markerRef.current = new google.maps.Marker({
            position: { lat, lng },
            map: mapRef.current,
            title: markerTitle,
            animation: google.maps.Animation.DROP,
            icon: {
              url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
              scaledSize: { width: 32, height: 32 },
              labelOrigin: { x: 160, y: 10 },
            },
            label: {
              text: markerTitle,
              color: "#fd7868",
              fontSize: "16px",
              fontWeight: "600",
            },
          });
        } else {
          try {
            markerRef.current.setPosition({ lat, lng });
            markerRef.current.setIcon({
              url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
              scaledSize: { width: 32, height: 32 },
              labelOrigin: { x: 160, y: 10 },
            });
            markerRef.current.setLabel({
              text: markerTitle,
              color: "#fd7868",
              fontSize: "16px",
              fontWeight: "600",
            });
            markerRef.current.setMap(mapRef.current);
          } catch (err) {
            console.warn("[MapClient] marker update failed", err);
          }
        }
        if (address && !pendingGeocode.current && !lockToCoordinates) {
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
                  mapRef.current?.setZoom(INITIAL_ZOOM);
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
            mapRef.current?.setZoom(INITIAL_ZOOM);
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
  }, [lat, lng, address, locale, lockToCoordinates]);

  const displayAddress =
    locale === "ja"
      ? "〒464-0814 愛知県名古屋市千種区不老町 FAINZY TECHNOLOGIES Co., Ltd."
      : "FAINZY TECHNOLOGIES Co., Ltd., Furo-cho, Chikusa Ward, Nagoya, Aichi 464-0814, Japan";

  // Google Maps URL with full address to show company name
  const mapsSearchAddress =
    locale === "ja"
      ? "FAINZY TECHNOLOGIES Co., Ltd. 〒464-0814 愛知県名古屋市千種区不老町"
      : "FAINZY TECHNOLOGIES Co., Ltd., Furo-cho, Chikusa Ward, Nagoya, Aichi 464-0814, Japan";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsSearchAddress)}`;

  // Directions URL
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsSearchAddress)}`;

  return (
    <div className="relative w-full">
      {/* Address overlay - top left */}
      <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg max-w-[calc(100%-2rem)] md:max-w-md">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-sm md:text-base text-gray-900 font-semibold mb-1">
            FAINZY TECHNOLOGIES Co., Ltd.
          </h3>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{displayAddress}</p>
        </div>
        <div className="flex items-center divide-x divide-gray-200">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 text-center text-sm text-blue-600 font-medium hover:bg-blue-50 transition-colors rounded-bl-lg"
            aria-label={locale === "ja" ? "ルート案内" : "Get directions"}
          >
            {locale === "ja" ? "ルート案内" : "Directions"}
          </a>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 text-center text-sm text-blue-600 font-medium hover:bg-blue-50 transition-colors rounded-br-lg"
            aria-label={locale === "ja" ? "拡大地図を表示" : "View larger map"}
          >
            {locale === "ja" ? "拡大地図を表示" : "View larger map"}
          </a>
        </div>
      </div>

      {/* Map container - allow controls to be visible */}
      <div
        ref={ref}
        role="region"
        aria-label={locale === "ja" ? "会社所在地地図" : "Company location map"}
        className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[16px] overflow-hidden"
        style={{ background: "#111113" }}
      />
    </div>
  );
}
