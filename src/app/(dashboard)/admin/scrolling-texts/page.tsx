import ScrollingText from '@/components/modules/Admin/scrollingText/ScrollingText';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = {
  title: 'Scrolling Text | SHRL',
};
// >> SEO End

const ScrollingTextPage = () => {
  return (
    <div>
      <ScrollingText />
    </div>
  );
};

export default ScrollingTextPage;
