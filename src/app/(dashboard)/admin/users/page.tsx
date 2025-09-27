import UsersTable from '@/components/modules/registedUser/UsersTable';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = {
  title: 'Registered Users | SHRL',
};
// >> SEO End

const UsersPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;
  return <UsersTable props={resolvedSearchparams} />;
};

export default UsersPage;
