import {
  AccessibilityIcon,
  CommunityIcon,
  CurriculumIcon,
  InstructorIcon,
  LearningIcon,
  SupportIcon,
} from "./assets/icons";
import {
  Avatar1Image,
  Avatar2Image,
  Avatar3Image,
  Card1Image,
  Card2Image,
  Card3Image,
} from "./assets/images";

export interface Link {
  id: number;
  link: string;
  to: string;
}

export interface BootCamp {
  image: string;
  title: string;
  body: string;
}

export interface ScholarBenefit {
  title: string;
  description: string;
  icon: string;
}

interface Review {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

interface Faq {
  question: string;
  answer: string;
}

export const links: Link[] = [
  {
    id: 1,
    link: "Home",
    to: ".",
  },
  {
    id: 2,
    link: "About Us",
    to: "about",
  },
  {
    id: 3,
    link: "Our Bootcamps",
    to: "bootcamps",
  },
];

export const bootCamps: BootCamp[] = [
  {
    image: Card1Image,
    title: "Project Management",
    body: "We Made Distance Learning More Easy. Our only concern is your education. For your career. Build your future right here.",
  },
  {
    image: Card2Image,
    title: "Content Writing",
    body: "We Made Distance Learning More Easy. Our only concern is your education. For your career. Build your future right here.",
  },
  {
    image: Card3Image,
    title: "Business Analysis",
    body: "We Made Distance Learning More Easy. Our only concern is your education. For your career. Build your future right here.",
  },
];

export const scholarBenefits: ScholarBenefit[] = [
  {
    title: "Comprehensive Curriculum",
    description:
      "Dive into a world of skills and knowledge essential for thriving in diverse industries",
    icon: CurriculumIcon,
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from seasoned professionals with a minimum of 3 years of field experience, ensuring top-notch education",
    icon: InstructorIcon,
  },
  {
    title: "Interactive Learning",
    description:
      "Get hands-on with real-world projects, applying your knowledge for practical mastery",
    icon: LearningIcon,
  },
  {
    title: "Community and Networking",
    description:
      "Join a vibrant community of learners and professionals to expand your network and share insights",
    icon: CommunityIcon,
  },
  {
    title: "⁠Comprehensive Support",
    description:
      "Benefit from dedicated mentors committed to your success, guiding you towards your goals",
    icon: SupportIcon,
  },
  {
    title: "Flexibility and Accessibility",
    description:
      " Access quality education from anywhere, at any time, with our fully online platform",
    icon: AccessibilityIcon,
  },
];

export const reviews: Review[] = [
  {
    name: "Awwal",
    role: "Student",
    feedback:
      "I have found the teachings and previous works helpful at almost every time I needed it. I am proud of everything I learnt from my tutor, from the consistency to the need to always improve. Thank you very much for your mentorship.",
    image: Avatar1Image,
  },
  {
    name: "Peter",
    role: "Student",
    feedback:
      "My experience with the mentorship program was life changing and I will definitely be recommending the program to my friends",
    image: Avatar2Image,
  },
  {
    name: "Pelumi",
    role: "Student",
    feedback:
      "The most valuable experience I had during the program was gaining a comprehensive understanding of Product Management. The Facilitator’s guidance helped me effectively balance user needs with business objectives, prioritize features, and make data-driven decisions.",
    image: Avatar3Image,
  },
];

export const faqs: Faq[] = [
  {
    question: "How do I enroll in a course or bootcamp?",
    answer:
      "Our learning method is currently live class bootcamps. To enroll, simply browse our bootcamp catalog, select the bootcamp you're interested in, and follow the enrollment instructions.",
  },
  {
    question: "Is Enrollment Free?",
    answer:
      "To reset your password, go to the login page and click on 'Forgot Password.' Follow the instructions sent to your email to create a new password.",
  },
  {
    question: "Who are the Instructors at FUSE Varsity??",
    answer:
      "We offer a 30-day money-back guarantee on all purchases. If you're not satisfied with your product within 30 days of purchase, contact our support team to request a refund.",
  },
  {
    question: "Will I Receive a Certificate after Completing a Bootcamp?",
    answer:
      "Yes, you can change your subscription plan at any time by going to your account settings and selecting 'Manage Subscription.' Choose the new plan you wish to switch to and confirm your changes.",
  },
  {
    question: "Are the Bootcamps Self-paced or Scheduled?",
    answer:
      "Yes, we offer discounts for bulk purchases. Please contact our sales team for more information on bulk pricing and to get a personalized quote based on your needs.",
  },
];
