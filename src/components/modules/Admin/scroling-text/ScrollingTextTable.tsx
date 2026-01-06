'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { IScrollingText } from '@/types';
import { ScrollingTextColumns } from './ScrollingTextColumns';

interface props {
  scrollingTexts: IScrollingText[];
}

const ScrollingTextTable = ({ scrollingTexts }: props) => {
  return (
    <>
      <TableManageMent
        columns={ScrollingTextColumns}
        data={scrollingTexts}
        getRowKey={(sc) => sc._id}
        emptyMessage="No Text added yet"
      />
    </>
  );
};

export default ScrollingTextTable;
