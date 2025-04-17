/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/ui/Container";
import getTeamMembersById from "@/lib/data/getTeamMembersById";
import { TeamMember, TParams } from "@/lib/types/types";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({ params }: TParams): Promise<Metadata> {
  const { id } = await params;
  const member = await getTeamMembersById(id);

  if (!member) {
    return {
      title: "Team Member Not Found",
      description: "No team member found with this ID.",
    };
  }

  return {
    title: `${member.name} | SHRL Team`,
    description:
      member.details_about?.[0] ||
      `Learn more about ${member.name}, our ${member.designation}.`,
    openGraph: {
      title: `${member.name} | SHRL Team`,
      description:
        member.details_about?.[0] || `Learn more about ${member.name}.`,
      images: [
        {
          url: member.photo,
          alt: member.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${member.name} | Our Team`,
      description:
        member.details_about?.[0] || `Learn more about ${member.name}.`,
      images: [member.photo],
    },
  };
}

const MemberDetailsPage = async ({ params }: TParams) => {
  const { id } = await params;
  const details: TeamMember = await getTeamMembersById(id);

  const {
    name,
    designation,
    details_about,
    social,
    photo,
    heading_1,
    work_1,
    heading_2,
    work_2,
    heading_3,
    work_3,
  } = details;

  return (
    <Container>
      <div className="text-center">
        <div className="group relative mx-auto rounded-full overflow-hidden border-2 w-36 h-36 shadow-lg transition-all duration-300 ease-in-out hover:w-48 hover:h-48 hover:shadow-2xl hover:bg-slate-500">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 hover:cursor-pointer"
            sizes="(min-width: 768px) 192px, 144px"
            priority
          />
        </div>

        <div className="mt-8 md:px-2 text-center mx-auto">
          <h1 className="text-xl font-bold">{name}</h1>
          <p>{designation}</p>
          <div className="mt-4 max-w-2xl mx-auto">
            {details_about && (
              <div>
                {details_about.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            )}
          </div>
        </div>

        {social && social.length > 0 && (
          <div className="mt-4">
            {social.map((link, i: number) => (
              <div key={i}>
                {link.research_gate && (
                  <a
                    href={link.research_gate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 text-blue-600"
                  >
                    Research Gate
                  </a>
                )}
                {link.linkedin && (
                  <a
                    href={link.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 text-blue-600"
                  >
                    LinkedIn
                  </a>
                )}
                {link.github && (
                  <a
                    href={link.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 text-blue-600"
                  >
                    GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className="mt-12 md:border shadow-2xl shadow-slate-600 rounded-lg px-8 md:p-12 md:mt-4 mx-auto lg:w-9/12 pb-10"
        data-aos="fade-right"
      >
        {heading_1 && <h1 className="text-2xl font-semibold">{heading_1}</h1>}
        <div className="space-y-3 mt-4">
          {work_1?.map((item, i: number) => (
            <div key={i} className="flex gap-3">
              <p>{i + 1}.</p>
              <p>{item}</p>
            </div>
          ))}
        </div>

        {heading_2 && (
          <h1 className="text-2xl font-semibold mt-4">{heading_2}</h1>
        )}
        <div className="space-y-3 mt-4">
          {work_2?.map((item, i: number) => (
            <div key={i} className="flex gap-3">
              <p>{i + 1}.</p>
              <p>{item}</p>
            </div>
          ))}
        </div>

        {heading_3 && (
          <h1 className="text-2xl font-semibold mt-4">{heading_3}</h1>
        )}
        <div className="space-y-3 mt-4">
          {work_3?.map((item, i) => (
            <div key={i} className="flex gap-3">
              <p>{i + 1}.</p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MemberDetailsPage;
