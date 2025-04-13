import "./globals.css";
import { TChildren } from "@/lib/types/types";
import { poppins, tangerine } from "./fonts";
import { GoogleAnalytics } from "@next/third-parties/google";

const RootLayout = ({ children }: TChildren) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${tangerine.variable} ${poppins.variable}`}
    >
      <GoogleAnalytics gaId="GTM-N3R2QQ7Q" />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
