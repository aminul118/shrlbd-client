import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import AddScrollingTextModal from '@/components/modules/Admin/scroling-text/AddScrollingTextModal';
import ScrollingTextTable from '@/components/modules/Admin/scroling-text/ScrollingTextTable';

import { getScrollingText } from '@/services/scrolling-text/scrolling-text';
import { Metadata } from 'next';

const ScrollingTextPage = async () => {
  const { data } = await getScrollingText();
  console.log(data);

  return (
    <ClientTableWrapper
      tableTitle="Scrolling Texts"
      action={<AddScrollingTextModal />}
    >
      <TableFilters />
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
