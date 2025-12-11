import DateFormat from '@/components/common/date-format';
import FetchError from '@/components/common/error/FetchError';
import NotFound from '@/components/common/error/NotFound';
import Container from '@/components/ui/Container';
import GradientTitle from '@/components/ui/gradientTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getScrollingText } from '@/services/scrolling-text/scrolling-text';
import AddScrollingTextModal from './AddScrollingTextModal';
import ScrollingTextActions from './ScrollingTextActions';

const ScrollingTextTable = async () => {
  const { data, statusCode } = await getScrollingText();

  if (!data || statusCode !== 200) {
    return (
      <div className="container mx-auto">
        <FetchError />
      </div>
    );
  }

  return (
    <Container className="container mx-auto overflow-x-auto">
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="Scrolling Texts" />
        <AddScrollingTextModal />
      </div>

      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="w-16 text-center">SI</TableHead>
            <TableHead className="text-left">Text</TableHead>
            <TableHead className="text-left">Date & Time</TableHead>
            <TableHead className="w-32 text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.length === 0 ? (
            <>
              <TableRow className="hover:bg-muted/30 text-center transition">
                <TableCell colSpan={4} className="text-center">
                  <NotFound />
                </TableCell>
              </TableRow>
            </>
          ) : (
            <>
              {data.map((text, index) => (
                <TableRow
                  key={text._id}
                  className="hover:bg-muted/30 text-center transition"
                >
                  <TableCell className="text-center">{index + 1}</TableCell>
                  <TableCell className="text-left">
                    {text.text.length > 80
                      ? `${text.text.slice(0, 80)}...`
                      : text.text}
                  </TableCell>
                  <TableCell className="text-left">
                    <DateFormat date={text.createdAt} />
                  </TableCell>
                  <TableCell className="text-center">
                    <ScrollingTextActions text={text} />
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ScrollingTextTable;
