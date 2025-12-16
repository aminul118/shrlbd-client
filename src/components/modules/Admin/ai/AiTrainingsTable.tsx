'use client';

import DateFormat from '@/components/common/date-format';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IAiTraining } from '@/types';
import AiTrainingActions from './AiTrainingActions';

const AiTrainingsTable = ({ ais }: { ais: IAiTraining[] }) => {
  return (
    <Table>
      <TableHeader className="bg-muted">
        <TableRow>
          <TableHead>SI</TableHead>
          <TableHead>Question</TableHead>
          <TableHead>Answer</TableHead>
          <TableHead>Training Date & Time</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ais?.length === 0 ? (
          <>
            <TableRow>
              <TableCell colSpan={5} className="py-6 text-center">
                No Data Found
              </TableCell>
            </TableRow>
          </>
        ) : (
          <>
            {ais?.map((item, i: number) => (
              <TableRow key={item._id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{item.question}</TableCell>
                <TableCell>{item.answer}</TableCell>
                <TableCell>
                  <DateFormat date={item.createdAt} />
                </TableCell>
                <TableCell>
                  <AiTrainingActions payload={item} />
                </TableCell>
              </TableRow>
            ))}
          </>
        )}
      </TableBody>
    </Table>
  );
};

export default AiTrainingsTable;
