import localFont from 'next/font/local';

const poppins = localFont({
  src: [
    {
      path: '../fonts/poppins/Poppins-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/poppins/Poppins-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/poppins/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/poppins/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/poppins/Poppins-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/poppins/Poppins-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = localFont({
  src: [
    {
      path: '../fonts/Montserrat/Montserrat-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat/Montserrat-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat/Montserrat-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat/Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat/Montserrat-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Montserrat/Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat/Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat/Montserrat-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/Montserrat/Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat/Montserrat-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/Montserrat/Montserrat-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat',
  display: 'swap',
});

const fonts = {
  poppins,
  montserrat,
};

export default fonts;
