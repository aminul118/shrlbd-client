import AddBlog from '@/components/modules/Admin/blogs/AddBlog';
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
