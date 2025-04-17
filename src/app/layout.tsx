import "./globals.css";
import { TChildren } from "@/lib/types/types";
import { GoogleAnalytics } from "@next/third-parties/google";
import { poppins } from "./fonts";

const RootLayout = ({ children }: TChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId="GTM-N3R2QQ7Q" />
      <body className={poppins.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
