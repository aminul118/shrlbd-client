import UsersTable from '@/components/modules/Admin/users/UsersTable';
import Container from '@/components/ui/Container';
import GradientTitle from '@/components/ui/gradientTitle';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const UsersPage = async ({ searchParams }: SearchParams) => {
  const resolvedSearchparams = await searchParams;
  return (
    <>
      <Container>
        <div className="mb-4 flex items-center justify-between">
          <GradientTitle title="All Registered Users" />
        </div>
        <UsersTable props={resolvedSearchparams} />
      </Container>
    </>
  );
};

export default UsersPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Registered Users | SHRL',
};
// >> SEO End
