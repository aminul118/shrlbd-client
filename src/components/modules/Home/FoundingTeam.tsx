import { foundingTeam } from '@/constants/foundingTeam';
import Image from 'next/image';
import { Card, CardContent } from '../../ui/card';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';

const FoundingTeam = () => {
  return (
    <Container>
      <SectionHeading
        title="Founding Team"
        description="Our team is the driving force with the mission to lead healthcare with UTLC for women and children. Our success is built on the passion, expertise, and dedication of healthcare professionals, researchers, and innovators who share a common goal—making healthcare accessible, compassionate, and impactful. Meet the people who are making a difference every day."
      />
      <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
        {foundingTeam.map((team) => {
          const { id, photo, name, position, about_shrl } = team;
          return (
            <Card
              data-aos="fade-up"
              key={id}
              className="relative flex h-full w-full items-center rounded-xl bg-gradient-to-b from-cyan-50 to-blue-200 px-3 py-6 shadow-lg lg:p-6 dark:from-slate-950 dark:to-slate-900"
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
