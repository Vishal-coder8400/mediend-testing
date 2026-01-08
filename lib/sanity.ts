import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const sanity = createClient({
  projectId: "7rljkuk3",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
  token: "",
});

export const sanityAds = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ADS_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_ADS_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_ADS_API_VERSION,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_ADS_API_TOKEN,
});

export const sanityblogs = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_BLOGS_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_BLOGS_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_BLOGS_API_VERSION,
  useCdn: false,
});

const builder = imageUrlBuilder(sanity);
export function urlFor(source: any) {
  return builder.image(source);
}

const adsBuilder = imageUrlBuilder(sanityAds);
export function urlForAds(source: any) {
  return adsBuilder.image(source);
}

const blogsBuilder = imageUrlBuilder(sanityblogs);
export function urlForBlogs(source: any) {
  return blogsBuilder.image(source);
}
