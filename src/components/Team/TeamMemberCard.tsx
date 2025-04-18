import { Card, CardContent } from "@/components/ui/card";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { MemberProps } from "@/lib/types/types";

const TeamMemberCard: FC<MemberProps> = ({ member }) => {
  const { _id, name, designation, short_about, phone, email, photo } = member;

  return (
    <Card
      data-aos="fade-up"
      className="shadow-lg rounded-xl p-4 flex flex-col items-center bg-gradient-to-b from-cyan-50 to-blue-200 dark:from-slate-950 dark:to-slate-900"
    >
      {/* Photo */}
      <div className="flex justify-center -mt-14 mb-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#808BAF] bg-slate-100">
          <Image
            src={photo}
            alt={`${name}'s photo`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <CardContent className="text-center w-full flex flex-col justify-between h-full">
        {/* Name and Designation */}
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
          <h2 className="text-lg font-semibold">{designation}</h2>
        </div>

        {/* Short About */}
        <p className="mt-4">{short_about}</p>

        {/* Contact Info */}
        <div className="mt-3 text-sm">
          {email && <p>Email: {email}</p>}
          {phone && <p>Cell: {phone}</p>}
        </div>

        {/* Portfolio Link */}
        <div className="mt-4">
          <Link
            href={`/team/${_id}`}
            className="underline text-blue-600 font-semibold"
          >
            Portfolio
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
