import fonts from '@/config/fonts.config';
import { cn } from '@/lib/utils';
import AosProvider from '@/providers/AosProvider';
import { AppDataProvider } from '@/providers/AppData';
import ReduxProvider from '@/providers/ReduxProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import generateMetaTags from '@/seo/generateMetaTags';
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
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId="G-L76ZPJFQS4" />
      <body className={cn(fonts.montserrat.className)} suppressHydrationWarning>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AppDataProvider>
              <AosProvider>{children}</AosProvider>
            </AppDataProvider>

            <Toaster position="top-right" richColors theme="system" />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
