import { Params } from '@/types';

const BlogDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  console.log(slug);
  return <div></div>;
};

export default BlogDetailsPage;
