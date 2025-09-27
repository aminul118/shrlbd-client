import AddPreviousEvent from '@/components/modules/events/AddPreviousEvent';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = {
  title: 'Add Event | SHRL',
};
// >> SEO End

const AddPreviousEventPage = () => {
  return <AddPreviousEvent />;
};

export default AddPreviousEventPage;
