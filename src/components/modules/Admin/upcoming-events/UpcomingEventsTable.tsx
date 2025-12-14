import DateFormat from '@/components/common/date-format';
import NotFound from '@/components/common/error/NotFound';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IUpcomingEvent } from '@/types';
import UpcomingEventActions from './UpcomingEventActions';

const UpcomingEventsTable = ({
  upcomingEvents,
}: {
  upcomingEvents: IUpcomingEvent[];
}) => {
  return (
    <Table>
      <TableHeader className="bg-muted">
        <TableRow>
          <TableHead>SI</TableHead>
          <TableHead>Photo</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {upcomingEvents?.length === 0 ? (
          <>
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                <NotFound />
              </TableCell>
            </TableRow>
          </>
        ) : (
          <>
            {upcomingEvents?.map((event, index: number) => (
              <TableRow key={event._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={event.photo} alt={event.title} />
                    <AvatarFallback>{event.title?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{event.title}</TableCell>
                <TableCell>
                  <DateFormat date={event.createdAt} />
                </TableCell>
                <TableCell>{event.time}</TableCell>
                <TableCell className="space-x-2">
                  <UpcomingEventActions event={event} />
                </TableCell>
              </TableRow>
            ))}
          </>
        )}
      </TableBody>
    </Table>
  );
};

export default UpcomingEventsTable;
