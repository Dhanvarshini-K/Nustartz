import IMAGES from "../themes";
interface HeroDataType {
  title?: string;
  description?: string;
  buttonText?: string;
  heroImageUrl?: string;
}

export enum HomePageSectionsEnum {
  howWeDeliver = "How we deliver",
  whoWeAre = "Who we are",
  testimonials = "Testimonials",
  startupPortFolio = "Our Startup Portfolio",
  partners = "Our Partners",
}

export const heroSectionData: HeroDataType = {
  title: "Crafting the future of Startups.",
  description: `At NuStartz, we are your comprehensive partner in building and
                scaling your tech startup from the ground up—all the way to your
                Initial Public Offering (IPO). Our full suite of services is
                designed to support every aspect of your business, helping you
                transform your ideas into a thriving enterprise.`,
  buttonText: "GET IN TOUCH",
  heroImageUrl: `${IMAGES.craftingImage}`,
};

export const whoWeAreSectionData = {
  description: `At NuStartz, we're not just a team—we're your growth partners. From
              tech and branding to marketing and beyond, we deliver solutions that
              drive measurable results, empowering startups to scale and succeed.
              Discover how we fuel your journey!`,
  buttonText: "Learn More",
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
];
export const ourPartners: string[] = [
  IMAGES.microsoftLogo,
  IMAGES.koreAILogo,
  IMAGES.snapLogicLogo,
];
