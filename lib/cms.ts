export type ImageAsset = {
  id: number | string
  alt: string
  cloudinaryId?: string
  cloudinaryUrl?: string
  url?: string
  width?: number
  height?: number
}

export type HeroSlide = {
  id: string
  type: "zibot" | "glide" | "consultancy"
  title: string
  subtitle?: string
  cursiveText?: string
  image: ImageAsset
  ctaText?: string
  ctaLink?: string
}

export type AboutBlock = {
  label?: string
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
  image?: ImageAsset
  highlights?: Array<{ id: string; title: string; subtitle?: string }>
}

export type ProductFeature = { id: string; title: string; subtitle?: string; icon?: string }
export type ProductItem = {
  id: string
  title: string
  description: string
  image: ImageAsset
  link?: string
  reverse?: boolean
  features?: ProductFeature[]
}

export type CustomSolution = {
  id: string
  category?: string
  title: string
  description?: string
  images?: Array<{ id: string; image: ImageAsset }>
  features?: Array<{ id: string; title: string; subtitle?: string }>
}

export type Metric = { id: string; value: number | string; label: string; icon?: string }
export type FAQ = { id: string; question: string; answer: string; locale?: string; order?: number }

export type HomePageData = {
  id: number
  title: string
  locale: string
  heroSlides: HeroSlide[]
  videoSection?: { enabled?: boolean; videoUrl?: string; posterImage?: ImageAsset | null }
  aboutSection?: {
    foundation?: AboutBlock
    purpose?: AboutBlock
    vision?: AboutBlock
    mission?: AboutBlock
  }
  products?: ProductItem[]
  customSolutions?: CustomSolution[]
  metricsSection?: { title?: string; subtitle?: string; animatedStats?: Metric[]; staticStats?: Metric[] }
  faqs?: FAQ[]
}

export function normalizeUrl(url?: string | null) {
  if (!url) return url || undefined
  return url.replace(/[`\s]+/g, "").trim()
}

export async function fetchHomePage(locale = "en"): Promise<HomePageData | null> {
  const base = process.env.CMS_URL
  if (!base) return null
  const res = await fetch(`${base}/pages/home?locale=${locale}`, { cache: "no-store" })
  if (!res.ok) return null
  const data = (await res.json()) as HomePageData

  // normalize image URLs deeply
  const fixImage = (img?: ImageAsset) => {
    if (!img) return img
    return { ...img, cloudinaryUrl: normalizeUrl(img.cloudinaryUrl), url: normalizeUrl(img.url) }
  }
  data.heroSlides = (data.heroSlides || []).map((s) => ({ ...s, image: fixImage(s.image)! }))
  if (data.videoSection?.posterImage) data.videoSection.posterImage = fixImage(data.videoSection.posterImage)
  const ab = data.aboutSection
  if (ab) {
    if (ab.foundation) ab.foundation.image = fixImage(ab.foundation.image);
    if (ab.purpose) ab.purpose.image = fixImage(ab.purpose.image);
    if (ab.vision) ab.vision.image = fixImage(ab.vision.image);
    if (ab.mission) ab.mission.image = fixImage(ab.mission.image);
  }
  data.products = (data.products || []).map((p) => ({ ...p, image: fixImage(p.image)! }))
  data.customSolutions = (data.customSolutions || []).map((c) => ({
    ...c,
    images: (c.images || []).map((ci) => ({ ...ci, image: fixImage(ci.image)! })),
  }))
  return data
}

