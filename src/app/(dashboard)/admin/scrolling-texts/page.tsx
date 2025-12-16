import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import ScrollingFilters from '@/components/modules/Admin/scroling-text/ScrollingFilters';
import ScrollingTextTable from '@/components/modules/Admin/scroling-text/ScrollingTextTable';
import Container from '@/components/ui/Container';
import { Metadata } from 'next';

const ScrollingTextPage = () => {
  return (
    <Container>
      <ClientTableWrapper
        tableTitle="Scrolling Texts"
        filters={<ScrollingFilters />}
      >
        <ScrollingTextTable />
      </ClientTableWrapper>
    </Container>
  );
};

export default ScrollingTextPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Scrolling Text | SHRL',
};
// >> SEO End
