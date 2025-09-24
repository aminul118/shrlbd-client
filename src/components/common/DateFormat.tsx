import { format } from 'date-fns';

const DateFormat = ({ date }: { date: string }) => {
  return <span>{format(new Date(date), 'dd MMM yyyy')}</span>;
};

export default DateFormat;
