import { Card, CardContent } from "@/components/ui/card";
import { ITeamMember } from "@/lib/data/getTeam";
import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  member: ITeamMember;
}

const TeamMembersCard = ({ member }: TeamCardProps) => {
  console.log(member);
  return (
    <div className="flex ">
      <Card className="shadow-lg rounded-xl p-4 flex flex-col items-center w-full bg-gradient-to-b from-cyan-50 to-blue-200 dark:from-slate-950 dark:to-slate-900 h-full">
        {/* Photo */}
        <div className="flex justify-center -mt-14 mb-4">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#808BAF] bg-slate-100">
            <Image
              src={member.photo || "/default-avatar.png"}
              alt={member.name || "Team member"}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <CardContent className="text-center w-full flex flex-col flex-grow">
          {/* Name */}
          <h1 className="text-xl font-bold">{member.name}</h1>
          <p className="mt-1">{member.shrlDesignation}</p>
          {/* Designation */}
          {member.designation && (
            <div className="flex flex-col mt-4 mb-6 flex-grow">
              {member?.designation?.map((d, i) => (
                <p key={i} className="text-sm text-gray-700 dark:text-gray-300">
                  {d}
                </p>
              ))}
            </div>
          )}
          {/* Portfolio Button at Bottom */}
          <div className="mt-auto">
            <Link
              href={`/team/${member.slug}`}
              className="block w-full text-center py-2 px-4  text-blue-600 rounded-lg font-semibold transition"
            >
              Portfolio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamMembersCard;
