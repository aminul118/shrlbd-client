import spinner from '@/assets/gif/loading-spinner.gif';
import auth from '@/assets/images/auth.jpg';
import heroBanner from '@/assets/images/banner/hero-banner.png';
import faq from '@/assets/images/faq.png';
import fatema from '@/assets/images/fatema.png';
import furkan from '@/assets/images/furkan.png';
import moomtahina from '@/assets/images/moomtahina.png';
import notFound from '@/assets/images/not-found.svg';
import community from '@/assets/images/services/community.png';
import doctor_patient from '@/assets/images/services/doctor-patient.png';
import medical_research from '@/assets/images/services/medical-research.png';
import patient_education from '@/assets/images/services/patient-education.png';
import research from '@/assets/images/services/research.png';
import training_program from '@/assets/images/services/training-program.png';
import sharmeen from '@/assets/images/sharmin.png';

const images = {
  founding_team: {
    fatema,
    sharmeen,
    moomtahina,
    furkan,
  },
  services: {
    doctor_patient,
    medical_research,
    training_program,
    patient_education,
    community,
    research,
  },
  banner: {
    heroBanner,
  },
  notFound,
  faq,
  auth,
  gif: {
    spinner,
  },
};

export default images;
