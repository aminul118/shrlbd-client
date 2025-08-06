import HtmlContent from "@/components/ui/HtmlContent";
import { getSingleTeamMember } from "@/lib/data/getTeam";
import Image from "next/image";

const TeamDetailsCard = async ({ slug }: { slug: string }) => {
  const { data: team } = await getSingleTeamMember(slug);
  return (
    <div className="py-16">
      {/* Profile Photo */}
      <div className="group relative mx-auto rounded-full overflow-hidden border-2 w-36 h-36 shadow-lg transition-all duration-300 ease-in-out hover:w-48 hover:h-48 hover:shadow-2xl hover:bg-slate-500 ">
        <Image
          src={team.photo}
          alt={team.name}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 hover:cursor-pointer"
          sizes="(min-width: 768px) 192px, 144px"
          priority
        />
      </div>

      {/* Basic Info */}
      <div className="text-center mt-4 dark:text-whi">
        <h2 className="text-xl font-bold">{team.name}</h2>
        <h2 className="font-semibold">{team.shrlDesignation}</h2>
        {team?.email && <p className="text-sm text-gray-600">{team.email}</p>}
        {team?.phone && <p className="text-sm text-gray-600">{team.phone}</p>}
      </div>

      {/* Designations */}
      <div className="mt-2 text-center text-gray-700 max-w-xl mx-auto">
        {team.designation?.map((d, index) => (
          <p key={index}>{d}</p>
        ))}
      </div>

      {/* Render HTML Content */}
      <HtmlContent
        className="mt-16 prose md:border shadow-2xl shadow-slate-600 rounded-lg px-8 md:p-12 md:mt-4 mx-auto lg:w-9/12 pb-10"
        content={team.content}
      />
    </div>
  );
};

export default TeamDetailsCard;
