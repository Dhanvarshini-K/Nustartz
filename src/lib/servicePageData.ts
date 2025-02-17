export enum ServicePageSectionsEnum {
  heroTitle = "Your one stop shop for success",
  services = "Our Services",
  techStartup = "Everything a Tech Startup Needs",
  techFusion = "Tech Fusion Hub",
  techFusionSubTitle = "We focus on providing the right tool for product innovation and digital communication.",
  caseStudies = "Case Studies",
  triggeredAccordionText = `We help you assemble a world-class team that aligns with your startup's mission and values.
    Our recruitment experts identify top talent, ensuring your team is equipped with the skills and motivation needed to
    drive your business forward. Plus, we offer leadership training and team-building activities to foster a culture of innovation and collaboration`,
  techStartupDescription = `"Experience a workspace that feels like home for your brand. At
                NuStartz, we offer fully-branded, exclusive office spaces
                tailored to your team's unique needs—blending professionalism,
                focus, and collaboration. Ready to create a seamless extension of your company's identity?"`,
  techStartupContent = `Ready to elevate your startup? Contact us today!`,
}

type ServiceSectionType = {
  title: string;
  description: string;
}

export const serviceSectionData: ServiceSectionType[] = [
  {
    title: "Team Development",
    description:
      "We help you build a world-class team aligned with your startup’s mission. Our recruitment experts find top talent, and we provide leadership training to foster innovation and collaboration.",
  },
  {
    title: "Dedicated Office Space",
    description:
      "We offer flexible office solutions, from co-working spaces to private suites, tailored to your startup’s needs, and scalable as your business grows.",
  },
  {
    title: "Transparent Pricing Structure",
    description:
      "Our clear, upfront pricing ensures you know your expenses from day one, helping you plan confidently without hidden fees.",
  },
  {
    title: "Product Development",
    description:
      "From concept to launch, we transform your ideas into market-ready products. Our agile approach ensures rapid development and alignment with your target audience.",
  },
  {
    title: "IT Support",
    description:
      "Our 24/7 IT support covers system setup, network security, and troubleshooting, ensuring smooth operations while you focus on growing your business.",
  },
  {
    title: "Marketing",
    description:
      "We create data-driven marketing strategies to increase brand visibility, from social media and SEO to content marketing, driving engagement and growth.",
  },
  {
    title: "Sales",
    description:
      "Our sales strategies boost revenue through lead generation, CRM integration, and ongoing sales training to close deals efficiently.",
  },
  {
    title: "Branding",
    description:
      "We develop compelling branding that reflects your startup’s identity, from design to messaging, ensuring your brand leaves a lasting impression.",
  },
  {
    title: "From Ideas to IPO",
    description:
      "We support you from startup to scale-up, providing guidance for funding, growth, and preparing for an IPO, ensuring long-term success.",
  }
];

interface TechFusionDataType {
  category: string;
  number: string;
  items: string[];
}

export const techFusionHubSectionData: TechFusionDataType[] = [
  {
    category: "Technology",
    number: "01",
    items: [
      "Web and Mobile - Design/Development",
      "UI/UX Design",
      "Logistics",
      "Technology Consulting",
      "Cybersecurity",
      "Technical Support",
      "CRM",
    ],
  },
  {
    category: "Digital Marketing",
    number: "02",
    items: [
      "Social Media",
      "Campaign Strategy",
      "Campaign Management",
      "Content Strategy",
      "Marketing Automation",
      "Marketing Insights and Analytics",
      "Brand Kit",
    ],
  },
  {
    category: "Content Marketing",
    number: "03",
    items: [
      "Graphic Design",
      "Copywriting",
      "Animation",
      "Photography",
      "Video Production",
    ],
  },
  {
    category: "HR Recruitment",
    number: "04",
    items: ["Recruitment", "Workforce Assessment", "Staff Augmentation"],
  },
];

interface CaseStudySectionDataType {
  number: string;
  description: string;
}

export const caseStudiesSectionData: CaseStudySectionDataType[] = [
  {
    number: "01",
    description:
      "BeyondMedia - Revolutionizing Enterprise Search for Beyond Media Solutions with NuStartz",
  },
  {
    number: "02",
    description:
      "CareerJourney - Bridging the Gap Between Aspiration and Achievement",
  },
];
