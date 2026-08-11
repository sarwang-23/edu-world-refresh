import { seoConfig, type SeoEntry } from './seo-config';
import type { MetaDescriptor, HtmlLinkDescriptor } from '@tanstack/react-router';

export const SITE_URL = 'https://www.globaledulab.com';
export const SITE_NAME = 'Global Education Lab';
export const DEFAULT_SOCIAL_IMAGE = '/images/programmersimage_social_share.jpeg';

export type SeoOverrides = Partial<SeoEntry> & {
  ogType?: 'website' | 'article';
};

export function buildMeta(
  keyOrEntry: string | SeoEntry,
  overrides?: SeoOverrides,
  dynamicUrlPath?: string
): any {
  let baseEntry: SeoEntry | undefined;
  let urlPath = "";

  if (typeof keyOrEntry === "string") {
    baseEntry = seoConfig[keyOrEntry];
    urlPath = keyOrEntry;
  } else {
    baseEntry = keyOrEntry;
    urlPath = dynamicUrlPath || "";
  }

  // Fallback to empty if not found
  const entry = { ...(baseEntry || { title: SITE_NAME, description: "" }), ...overrides } as SeoEntry;

  const title = entry.title || SITE_NAME;
  const description = entry.description || "";
  const socialTitle = entry.socialTitle || title;
  
  const imagePath = entry.image || DEFAULT_SOCIAL_IMAGE;
  const imageUrl = imagePath.startsWith('http') 
    ? imagePath 
    : `${SITE_URL}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
  
  // Clean up URL construction
  const cleanPath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;
  const url = cleanPath === '/' ? SITE_URL : `${SITE_URL}${cleanPath}`;
  
  const indexable = entry.indexable !== false;
  const ogType = overrides?.ogType || 'website';

  const meta = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: indexable ? "index, follow" : "noindex, nofollow" },
    { property: "og:title", content: socialTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: ogType },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: imageUrl },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: socialTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];

  const links = [
    { rel: "canonical", href: url }
  ];

  return { meta, links };
}
