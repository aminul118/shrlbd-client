import AddTeamMember from '@/components/modules/Admin/teamMembers/AddTeamMember';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = {
  title: 'Add Team Member | SHRL',
};
// >> SEO End

const AddTeamMemberPage = () => {
  return (
    <div>
      <AddTeamMember />
    </div>
  );
};

export default AddTeamMemberPage;
