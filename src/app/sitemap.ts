/* eslint-disable @typescript-eslint/no-explicit-any */

import getAllEventsDone from "@/lib/data/getAllEventsDone";
import getTeamMembers from "@/lib/data/getTeamMembers";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.shrlbd.com";
  const today = new Date();

  const [members, events] = await Promise.all([
    getTeamMembers(),
    getAllEventsDone(),
  ]);

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 1.0,
      images: ["/seo/shrl-hero-ss.png"],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [
        "/images/founding-team/fatema.png",
        "/images/founding-team/sharmin.png",
        "/images/founding-team/moomtahina.png",
        "/images/founding-team/furkan.png",
      ],
    },
    {
      url: `${baseUrl}/upcomming-events`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const memberUrls = members.map((member: any) => ({
    url: `${baseUrl}/team/${member._id}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const eventUrls = events.map((event: any) => ({
    url: `${baseUrl}/events/${event._id}`,
    lastModified: today,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticUrls, ...memberUrls, ...eventUrls];
}
