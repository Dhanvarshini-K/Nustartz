import IMAGES from "../themes";
interface HeroDataType {
  title?: string;
  titleText?: string[];
  description?: string;
  buttonText?: string;
  heroImageUrl?: string;
  imageStand?: string;
  className?: string;
}

export enum HomePageSectionsEnum {
  howWeDeliver = "How we deliver",
  whoWeAre = "Who we are",
  testimonials = "Testimonials",
  startupPortFolio = "Our Startup Portfolio",
  partners = "Our Partners",
}

export const heroSectionCarouselData: HeroDataType[] = [
  {
    // title: `${IMAGES.heroTitle1}`,
    title: "Crafting the future of Startups.",
    titleText: ["Crafting the", "future of", "Startups."],
    description: `At NuStartz, we turn your startup vision into reality. From building high-performing teams to developing market-ready products, we provide the resources and expertise you need to grow and succeed. Let’s craft your success story together.`,
    buttonText: "GET IN TOUCH",
    heroImageUrl: `${IMAGES.craftingImage}`,
  },
  {
    // title: `${IMAGES.heroTitle2}`,
    title: "From Vision to Reality - Build Scale, Succeed with NuStartz",
    titleText: [
      "From Vision to",
      "Reality - Build,",
      "Scale, Succeed",
      "with NuStartz",
    ],
    description:
      "Your ideas deserve more than just a plan—they need execution. At NuStartz, we empower startups with expert-driven product development, IT support, marketing, and strategic growth solutions. Whether you're launching, scaling, or optimizing, we’re here to turn your vision into a thriving reality.",
    buttonText: "GET IN TOUCH",
    heroImageUrl: `${IMAGES.startupAward}`,
    imageStand: `${IMAGES.startupAwardStand}`,
    className: "w-[300px] sm:w-[371px] lg:w-[400px] mb-20",
  },
];

export const heroSectionData: HeroDataType = {
  title: "Crafting the future of Startups.",
  description: `At NuStartz, we turn your startup vision into reality. From building high-performing teams to developing market-ready products, we provide the resources and expertise you need to grow and succeed. Let’s craft your success story together.`,
  buttonText: "GET IN TOUCH",
  heroImageUrl: `${IMAGES.craftingImage}`,
};

export const whoWeAreSectionData = {
  description: `NuStartz is your one-stop partner for startup success. We’re a committed, resilient team dedicated to meeting every need of your growing business—from development and tech support to marketing, branding, and beyond. Our mission is to provide startups with the expertise, resources, and hands-on support they need to thrive at every stage. By integrating seamlessly into your vision, we empower you to focus on what you do best: innovating and scaling your ideas. At NuStartz, we’re here to fuel your journey from launch to lasting impact.`,
  buttonText: "WATCH VIDEO",
};

type CompanyDeliveryStepDataType = {
  titleImage?: string;
  description?: string;
  image?: string;
};

export const companyDeliveryStepsData: CompanyDeliveryStepDataType[] = [
  {
    titleImage: `${IMAGES.buildTextImage}`,
    description:
      "We kickstart your growth by building dedicated teams tailored to your product, technology, and marketing needs. From assembling skilled developers and tech support to strategizing your branding, we handle team setup, product development, and infrastructure—all aligned with your vision to set a strong foundation for success.",
    image: `${IMAGES.constructionCrane}`,
  },
  {
    titleImage: `${IMAGES.operateTextImage}`,
    description:
      "With your team and projects in place, we manage day-to-day operations, ensuring seamless coordination across development, tech support, and marketing. Our expert oversight optimizes team performance and project outcomes, so you can focus on strategic decisions while we handle the execution and drive your vision forward.",
    image: `${IMAGES.company}`,
  },
  {
    titleImage: `${IMAGES.transferTextImage}`,
    description:
      "When your startup is ready to take full control, we seamlessly transfer the team, knowledge, and processes to you. Our comprehensive handover, including training and ongoing support, ensures that your team can confidently manage and scale operations independently as your own.",
    image: `${IMAGES.port}`,
  },
];

type TestimonialsDataType = {
  name?: string;
  projectName?: string;
  description?: string;
  image?: string;
};

export const testimonialsData: TestimonialsDataType[] = [
  {
    name: "Melvin Christopher,",
    projectName: "MYNA Inc.",
    description:
      "Working with NuStartz has been a game-changer for our business. Their team's attention to detail and commitment to delivering quality outcomes were evident in every step of our collaboration. They not only fixed critical issues swiftly but also enhanced the overall functionality of our platform. NuStartz is a partner we trust for all our digital transformation needs",
    image: `${IMAGES.testimonialImage}`,
  },
  {
    name: "Neha,",
    projectName: "Beyond Media.",
    description:
      "NuStartz brought fresh ideas and technical expertise to our AI-driven project. Their proactive approach and dedication to understanding our requirements made a significant impact on the final outcome. The team's professionalism and ability to adapt to challenges set them apart. I look forward to collaborating with them again in the future!",
    image: `${IMAGES.testimonialImage}`,
  },
];

type AboutSectionType = {
  image?: string;
  title?: string;
};

export const aboutSectionData: AboutSectionType[] = [
  {
    image: `${IMAGES.creativity}`,
    title: "Innovate",
  },
  {
    image: `${IMAGES.strength}`,
    title: "Empower",
  },
  {
    image: `${IMAGES.progress}`,
    title: "Thrive",
  },
];
export const startupPortfolioData: string[] = [
  IMAGES.mynaLogo,
  IMAGES.beyondMediaLogo,
  IMAGES.teledoctorLogo,
  IMAGES.glgLogo,
  IMAGES.chatFinLogo,
  IMAGES.intentXLogo,
  IMAGES.careerJourneyLogo,
  IMAGES.mamentaLogo,
  IMAGES.yottaasysLogo,
];
export const ourPartners: string[] = [
  IMAGES.microsoftLogo,
  IMAGES.koreAILogo,
  IMAGES.snapLogicLogo,
  IMAGES.techDayLogo,
  IMAGES.pulseLogo,
];
