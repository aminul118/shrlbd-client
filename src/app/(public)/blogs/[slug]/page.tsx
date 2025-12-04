import { IParams } from '@/types';

const BlogDetailsPage = async ({ params }: IParams) => {
  const { slug } = await params;
  console.log(slug);
  return <div></div>;
};

export default BlogDetailsPage;
