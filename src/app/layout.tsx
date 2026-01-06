import { montserrat } from '@/config/google-fonts';
import ReduxProvider from '@/providers/ReduxProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import generateMetaTags from '@/seo/generateMetaTags';
import '@/styles/custom.css';
import '@/styles/globals.css';
import { Children } from '@/types';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from 'next';
import { Toaster } from 'sonner';

const RootLayout = ({ children }: Children) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <GoogleAnalytics gaId="G-L76ZPJFQS4" />
        <body className={montserrat.className} suppressHydrationWarning>
          <ReduxProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}

              <Toaster position="top-right" richColors theme="system" />
            </ThemeProvider>
          </ReduxProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;

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
