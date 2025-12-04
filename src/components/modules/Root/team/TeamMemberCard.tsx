import { Card, CardContent } from '@/components/ui/card';
import { ITeamMember } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const TeamMemberCard = ({
  photo,
  name,
  shrlDesignation,
  designation,
  slug,
}: ITeamMember) => {
  // console.log(member);
  return (
    <div className="flex">
      <Card className="flex h-full w-full flex-col items-center rounded-xl bg-gradient-to-b from-cyan-50 to-blue-200 p-4 shadow-lg dark:from-slate-950 dark:to-slate-900">
        {/* Photo */}
        <div className="-mt-14 mb-4 flex justify-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-[#808BAF] bg-slate-100">
            <Image
              src={photo || '/default-avatar.png'}
              alt={name || 'Team member'}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <CardContent className="flex w-full flex-grow flex-col text-center">
          {/* Name */}
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="mt-1">{shrlDesignation}</p>
          {/* Designation */}
          {designation && (
            <div className="mt-4 mb-6 flex flex-grow flex-col">
              {designation?.map((d, i) => (
                <p key={i} className="text-sm text-gray-700 dark:text-gray-300">
                  {d}
                </p>
              ))}
            </div>
          )}
          {/* Portfolio Button at Bottom */}
          <div className="mt-auto">
            <Link
              href={`/team/${slug}`}
              className="block w-full rounded-lg px-4 py-2 text-center font-semibold text-blue-600 transition"
            >
              Portfolio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamMemberCard;
