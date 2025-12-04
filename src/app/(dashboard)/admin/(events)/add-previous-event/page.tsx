import AddPreviousEvent from '@/components/modules/Admin/events/AddPreviousEvent';
import { Metadata } from 'next';

const AddPreviousEventPage = () => {
  return <AddPreviousEvent />;
};

export default AddPreviousEventPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Add Event | SHRL',
};
// >> SEO End
