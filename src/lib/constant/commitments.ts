import { ICommitments } from "../types/types";
import {
  FaPersonBreastfeeding,
  FaEarthAfrica,
  FaToolbox,
  FaFileShield,
  FaBookBible,
} from "react-icons/fa6";
import { FaFirstAid } from "react-icons/fa";

const commitments: ICommitments[] = [
  {
    id: 1,
    title: "Specialized Focus on Women and Children",
    icon: FaPersonBreastfeeding,
    strengths: [
      "Tailored healthcare solutions for women and children",
      "Expert care for maternal and child health issues",
      "Compassionate, patient-centered approach",
    ],
  },
  {
    id: 2,
    title: "Evidence-Based Healthcare",
    icon: FaFirstAid,
    strengths: [
      "Services built on scientific research and clinical evidence",
      "Continuous updates to stay in line with healthcare advancements",
      "Commitment to high-quality, reliable care",
    ],
  },
  {
    id: 3,
    title: "Global Expertise, Local Understanding",
    icon: FaEarthAfrica,
    strengths: [
      "International standards of healthcare delivery",
      "Customized solutions for local needs and challenges",
      "Global partnerships with local impact",
    ],
  },
  {
    id: 4,
    title: "Comprehensive Health Tracking Tools",
    icon: FaToolbox,
    strengths: [
      "Mobile apps for tracking maternal and child health milestones",
      "Personalized health insights and recommendations",
      "User-friendly interface for seamless healthcare management",
    ],
  },
  {
    id: 5,
    title: "Commitment to Privacy and Security",
    icon: FaFileShield,
    strengths: [
      "Advanced data protection and encryption",
      "Strict privacy policies for consultations and records",
      "Secure platforms for telemedicine and health tracking",
    ],
  },
  {
    id: 6,
    title: "Continuous Learning and Adaptation",
    icon: FaBookBible,
    strengths: [
      "Ongoing research to stay ahead of healthcare trends",
      "Investment in new technologies and methodologies",
      "Adaptation to the evolving needs of healthcare",
    ],
  },
];

export default commitments;
