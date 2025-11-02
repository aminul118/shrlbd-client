import AddBlog from '@/components/modules/Blogs/AddBlog';
import { Metadata } from 'next';

const AddBlogPage = () => {
  return (
    <>
      <AddBlog />
    </>
  );
};

export default AddBlogPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Add Blog | SHRL',
};
// >> SEO End
