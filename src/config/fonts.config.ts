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

const spaceGrotesk = localFont({
  src: [
    {
      path: '../fonts/Space_Grotesk/SpaceGrotesk-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Space_Grotesk/SpaceGrotesk-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Space_Grotesk/SpaceGrotesk-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Space_Grotesk/SpaceGrotesk-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Space_Grotesk/SpaceGrotesk-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const fonts = {
  poppins,
  spaceGrotesk,
};

export default fonts;
