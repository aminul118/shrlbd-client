import DateFormat from '@/components/common/date-format';
import NotFound from '@/components/common/error/NotFound';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IEvent } from '@/types';
import Image from 'next/image';
import EventActions from './EventActions';

const PreviousEventTable = ({ events }: { events: IEvent[] }) => {
  return (
    <Table>
      <TableHeader className="bg-muted">
        <TableRow>
          <TableHead>SI</TableHead>
          <TableHead>Photo</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Date & Time</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events?.length === 0 ? (
          <>
            <TableRow className="hover:bg-primary/10">
              <TableCell colSpan={5} className="py-4 text-center">
                <NotFound />
              </TableCell>
            </TableRow>
          </>
        ) : (
          <>
            {events?.map((event, i: number) => (
              <TableRow key={event._id} className="hover:bg-primary/10">
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  {event.photos && event.photos.length > 0 ? (
                    <Image
                      src={event.photos[0]}
                      alt={event.title}
                      width={60}
                      height={60}
                      className="h-12 w-12 rounded-md object-cover"
                    />
                  ) : (
                    <span className="text-gray-400">No Photo</span>
                  )}
                </TableCell>
                <TableCell>{event.title}</TableCell>
                <TableCell>
                  <DateFormat date={event.createdAt} />
                </TableCell>
                <TableCell>
                  <EventActions event={event} />
                </TableCell>
              </TableRow>
            ))}
          </>
        )}
      </TableBody>
    </Table>
  );
};

export default PreviousEventTable;
