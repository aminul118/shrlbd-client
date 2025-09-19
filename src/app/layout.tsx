import fonts from '@/config/fonts.config';
import { cn } from '@/lib/utils';
import AosProvider from '@/providers/AosProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import generateMetaTags from '@/Seo/generateMetaTags';
import { IChildren } from '@/types';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from 'next';
import { Toaster } from 'sonner';
import './globals.css';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title:
    'Smart Healthcare and Research Ltd. - Empowering Maternal & Child Health',
  description:
    'Smart Healthcare and Research Ltd. offers innovative healthcare solutions for women and children, including online consultations, research, professional training, and community outreach.',
  keywords:
    "Smart Healthcare, SHRL, SHRLBD, Maternal health, Child healthcare, Digital healthcare services, Diabetes in pregnancy, Healthcare research, Public health, Professional training healthcare, Women's health, Child health, SHRL Bangladesh, Healthcare innovation",
  image: '/seo/shrl-hero-ss.png',
});
// >> SEO End

const RootLayout = ({ children }: IChildren) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(fonts.montserrat.className)}
    >
      <GoogleAnalytics gaId="G-L76ZPJFQS4" />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AosProvider>{children}</AosProvider>
          <Toaster position="top-right" richColors theme="system" />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
