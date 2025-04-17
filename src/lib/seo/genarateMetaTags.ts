// utils/metadata.ts
import { Metadata } from "next";
import { MetaProps } from "../types/types";

export const generateMetaTags = ({
  title,
  description,
  keywords,
  image = "/seo/shrl-hero-ss.png",
  url = "https://www.shrlbd.com",
}: MetaProps): Metadata => {
  return {
    title,
    description,
    keywords,
    category: "Healthcare Services",
    openGraph: {
      type: "website",
      url: url,
      title: title,
      description: description,
      siteName: "Smart Healthcare and Research Ltd.",
      images: [{ url: image }],
    },
    robots: { index: true, follow: true },
    twitter: {
      card: "summary_large_image",
      site: "@shrlbd",
      creator: "@drfatemaashraf",
      images: image,
      title,
      description,
    },
    applicationName: "SHRLBD",
  };
};
