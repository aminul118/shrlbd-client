import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import ScrollingFilters from '@/components/modules/Admin/scroling-text/ScrollingFilters';
import ScrollingTextTable from '@/components/modules/Admin/scroling-text/ScrollingTextTable';

import { getScrollingText } from '@/services/scrolling-text/scrolling-text';
import { Metadata } from 'next';

const ScrollingTextPage = async () => {
  const { data } = await getScrollingText();
  return (
    <ClientTableWrapper
      tableTitle="Scrolling Texts"
      filters={<ScrollingFilters />}
    >
      <ScrollingTextTable scrollingTexts={data} />
    </ClientTableWrapper>
  );
};

export default ScrollingTextPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Scrolling Text | SHRL',
};
// >> SEO End
