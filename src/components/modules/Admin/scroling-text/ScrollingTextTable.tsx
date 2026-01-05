'use client';

import ManagementTable from '@/components/common/table/ManageMentTable';
import { IScrollingText } from '@/types';
import { ScrollingTextColumns } from './ScrollingTextColumns';

interface props {
  scrollingTexts: IScrollingText[];
}

const ScrollingTextTable = ({ scrollingTexts }: props) => {
  return (
    <>
      <ManagementTable
        columns={ScrollingTextColumns}
        data={scrollingTexts}
        getRowKey={(sc) => sc._id}
        emptyMessage="No Text added yet"
      />
    </>
  );
};

export default ScrollingTextTable;
