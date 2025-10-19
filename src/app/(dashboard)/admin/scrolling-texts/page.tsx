import ScrollingTextTable from '@/components/modules/scrollingText/ScrollingTextTable';
import { Metadata } from 'next';

const ScrollingTextPage = () => {
  return <ScrollingTextTable />;
};

export default ScrollingTextPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Scrolling Text | SHRL',
};
// >> SEO End
