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
} from "./assets/images";
import { BlogResponse } from "./models/blog";

export interface Link {
  id: number;
  link: string;
  to: string;
}

export interface BootCamp {
  id: string;
  image: string;
  title: string;
  content: string;
  period: number;
  price: number;
  isTrending?: boolean;
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
  {
    id: 4,
    link: "Blogs",
    to: "blog",
  },
];

export const bootCamps: BootCamp[] = [
  {
    id: "1",
    image: Card1Image,
    title: "Product Management",
    content:
      "Plan, execute, and deliver projects on time and within budget. Kickstart your project management career now.",
    period: 8,
    price: 35000,
    isTrending: true,
  },
  {
    id: "2",
    image: Card1Image,
    title: "Content Writing",
    content:
      "Learn to create clear, engaging content that captivates your audience and drives results. Build your writing career here.",
    period: 8,
    price: 25000,
  },
  {
    id: "3",
    image: Card1Image,
    title: "Project Management",
    content:
      "Master the skills to develop and manage successful products from idea to launch. Build your future in product here.",
    period: 8,
    price: 30000,
  },
  {
    id: "4",
    image: Card1Image,
    title: "Data Analysis (Excel)",
    content:
      "Analyze and visualize data using Excel. Unlock data insights and enhance your decision-making skills.",
    period: 8,
    price: 35000,
    isTrending: true,
  },
  {
    id: "5",
    image: Card1Image,
    title: "Virtual Assistance",
    content:
      "Learn the skills to manage tasks remotely and support teams effectively. Launch your VA career here.",
    period: 8,
    price: 30000,
    isTrending: true,
  },
  {
    id: "6",
    image: Card1Image,
    title: "Digital Marketing & SEO",
    content:
      "Boost brands online with proven digital marketing and SEO strategies. Elevate your digital skills here.",
    period: 8,
    price: 35000,
  },
  {
    id: "7",
    image: Card1Image,
    title: "Business Development Management",
    content:
      "Identify opportunities, build strategies, and drive growth. Start your journey in business development today.",
    period: 8,
    price: 35000,
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
      "Learn from seasoned professionals with a minimum of 3 years of field experience, ensuring top-notch education",
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

export const blogs: BlogResponse[] = [
  {
    id: "1",
    category: "Project Management",
    date: "30 Sep",
    title: "Common Pitfalls in Product Development and How to Avoid Them",
    description:
      "You will be warned about common mistakes in product development, such as scope creep, lack of user feedback, and poor communication.",
    author: "Doyin Sarah",
    imageUrl: Card1Image,
  },
  {
    id: "2",
    category: "Tech",
    date: "5 Oct",
    title: "The Future of Artificial Intelligence in Business",
    description:
      "An in-depth look at how AI is shaping the future of business operations and customer engagement.",
    author: "John Doe",
    imageUrl: Card1Image,
  },
  {
    id: "3",
    category: "Business",
    date: "10 Oct",
    title: "Strategies for Successful Digital Transformation",
    description:
      "Exploring the key strategies to implement digital transformation in your business.",
    author: "Jane Smith",
    imageUrl: Card1Image,
  },
  {
    id: "4",
    category: "Creativity",
    date: "15 Oct",
    title: "Design Thinking for Innovators",
    description:
      "Learn how design thinking can lead to breakthrough innovations in business.",
    author: "Alex Lee",
    imageUrl: Card1Image,
  },
  {
    id: "5",
    category: "Personal Development",
    date: "20 Oct",
    title: "Building Habits for Success",
    description:
      "Tips and techniques for developing productive habits that lead to personal growth.",
    author: "Maria Garcia",
    imageUrl: Card1Image,
  },
  {
    id: "6",
    category: "Tech",
    date: "25 Oct",
    title: "Understanding Blockchain Technology",
    description:
      "A beginner's guide to understanding blockchain technology and its potential applications.",
    author: "Samuel Jackson",
    imageUrl: Card1Image,
  },
  {
    id: "7",
    category: "Business",
    date: "30 Oct",
    title: "How to Scale Your Startup",
    description:
      "Effective strategies for scaling your startup and taking it to the next level.",
    author: "Emily Davis",
    imageUrl: Card1Image,
  },
  {
    id: "8",
    category: "Creativity",
    date: "2 Nov",
    title: "The Power of Visual Storytelling",
    description:
      "Discover how visual storytelling can transform your marketing and branding efforts.",
    author: "Chris Martin",
    imageUrl: Card1Image,
  },
  {
    id: "9",
    category: "Project Management",
    date: "7 Nov",
    title: "Agile vs Waterfall: Choosing the Right Methodology",
    description:
      "A comprehensive comparison of Agile and Waterfall methodologies for project management.",
    author: "Rachel Green",
    imageUrl: Card1Image,
  },
  {
    id: "10",
    category: "Personal Development",
    date: "12 Nov",
    title: "Mastering Time Management",
    description:
      "Learn the best practices for managing your time effectively to maximize productivity.",
    author: "David Wilson",
    imageUrl: Card1Image,
  },
];
