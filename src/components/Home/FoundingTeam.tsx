import foundingTeam from "@/lib/constant/foundingTeam";
import { Card, CardContent } from "../ui/card";
import { IFoundingTeam } from "@/lib/types/types";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";

const FoundingTeam = () => {
  return (
    <Container>
      <SectionHeading
        title="Founding Team"
        description="Our team is the driving force with the mission to lead healthcare with UTLC for women and children. Our success is built on the passion, expertise, and dedication of healthcare professionals, researchers, and innovators who share a common goal—making healthcare accessible, compassionate, and impactful. Meet the people who are making a difference every day."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20">
        {foundingTeam.map((team: IFoundingTeam) => {
          const { id, photo, name, position, about_shrl } = team;
          return (
            <Card
              key={id}
              className="relative flex items-center w-full h-full px-3 py-6 lg:p-6 rounded-xl shadow-lg bg-gradient-to-b from-cyan-50 to-blue-200"
            >
              <div className="absolute -top-14 -left-1">
                <Image
                  src={photo}
                  alt={name}
                  width={112}
                  height={112}
                  className="rounded-full border-4 border-[#808BAF] bg-slate-100"
                />
              </div>

              <CardContent className="mt-14 md:text-justify">
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="font-semibold">{position}</p>
                <br />
                <p>{about_shrl}</p>
                <br />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default FoundingTeam;
