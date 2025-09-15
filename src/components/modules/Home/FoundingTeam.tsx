import images from '@/constants/images';
import Image from 'next/image';
import { Card, CardContent } from '../../ui/card';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';

const foundingTeam = [
  {
    id: 1,
    photo: images.founding_team.fatema,
    name: 'Prof. Dr. Fatema Ashraf',
    position: 'Chairman, SHRL',
    about_shrl:
      'Smart Health Care and Research LTD (SHRL) is dedicated to advancing health research and clinical services with a focus on maternal, child, adolescent health. Committed to deliver highest standard of clinical care with empathy and an unwavering commitment, we have pioneered a path towards patient empowerment for effective management of gestational diabetes (GDM). A key part of our mission is to build research and innovation capacity to drive the development of a healthier Bangladesh. We are focused on identifying local challenges and crafting scientifically grounded, self- sustaining solutions to meet the unique health needs of our nation.',
  },
  {
    id: 2,
    photo: images.founding_team.sharmeen,
    name: 'Prof. Dr. Sharmeen Yasmeen',
    position: 'Managing Director, SHRL',
    about_shrl:
      'SHRL strives to provide uncountable tender, loving care with a balance of heart, brain and expertise, supported by digital technologies, to ensure quality healthcare for all—regardless of financial means, social standing, or geographical location. We are also aiming to empower patients in diverse health situations. Additionally, our young professionals from different disciplines can use this platform for scientific and other innovations. Channeling the innovations through advocacy, marketing and related events are also included.',
  },
  {
    id: 3,
    photo: images.founding_team.moomtahina,
    name: 'Dr. Moomtahina Fatima',
    position: 'Director, SHRL',
    about_shrl:
      'SHRL is a dream project of a group of passionate professionals to ensure quality healthcare. We want to create a platform for all the stakeholders of the healthcare system in effective and meaningful ways utilizing evidence based research and digital technologies. Professionals will get the opportunity of certified research training and networking. Patients will have the scope of understanding their own health and ways to a healthy lifestyle. We welcome you all to the journey of empowerment.',
  },
  {
    id: 4,
    photo: images.founding_team.furkan,
    name: 'Furkan Hossain',
    position: 'Director of Research & Development, SHRL',
    about_shrl:
      'SHRL is founded to keep pace with the emerging demand of quality health care always and everywhere. To meet up the demand by large digital technology is adopted to transform health care in different meaningful way, increasing access to medical services, enhancing patient’s engagement, reducing costs, improving decision-making accuracy, accelerating information sharing, and advancing public health research. We are glad to invite new innovations, technologies, AI tools to empower the patient to ensure their health and well-being.',
  },
];

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
