import "./globals.css";
import { TChildren } from "@/lib/types/types";
import { GoogleAnalytics } from "@next/third-parties/google";
import { poppins } from "./fonts";
import { Metadata } from "next";
import AosProvider from "@/providers/AosProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

/**
 *--------->> SEO
 */

const image = "/seo/shrl-hero-ss.png";
const title =
  "Smart Healthcare and Research Ltd. | Empowering Maternal & Child Health Through Innovation";
const description =
  "Discover Smart Healthcare and Research Ltd.'s comprehensive services enhancing women's and children's health. From online consultations and medical research to professional training, patient education, and community outreach — we are transforming care with innovation, compassion, and global collaboration.";
export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Smart Healthcare and Research Ltd.",
    "Maternal health services",
    "Child healthcare Bangladesh",
    "Digital health consultation",
    "Diabetes in pregnancy care",
    "Online healthcare platform",
    "Public health research Bangladesh",
    "Healthcare professional training",
    "Maternal health education",
    "Community health outreach",
    "SHRL Bangladesh",
    "Health innovation Bangladesh",
    "SHRL BD",
    "SHRLBD",
  ],
  category: "healthcare services",
  openGraph: {
    type: "website",
    url: "https://www.shrlbd.com",
    title,
    description,
    siteName: "Smart Healthcare and Research Ltd.",
    images: [{ url: image }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shrlbd",
    creator: "@drfatemaashraf",
    images: image,
    description,
    title,
  },
  robots: { index: true, follow: true },
  applicationName: "SHRLBD",
  facebook: { appId: "580317868506376" },
  authors: [
    {
      name: "Dr. Fatema Ashraf",
      url: "http://www.shrlbd.com/team/675663806e9379ed3c2a6f99",
    },
  ],
};

/**
 *--------->> SEO END
 */

const RootLayout = ({ children }: TChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId="GTM-N3R2QQ7Q" />
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AosProvider>{children}</AosProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
