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

export const serviceSectionData: string[] = [
  "Team Development",
  "Dedicated Office Spaces",
  "Transparent Pricing Structure",
  "Product Development",
  "IT Support",
  "Marketing",
  "From Ideas to IPO",
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
      "At NuStartz, we understand that starting and scaling a tech business requires the right resources, guidance, and support. That's why we offer additional services, including financial management, legal consulting, business strategy, customer support solutions, and more",
  },
  {
    number: "02",
    description:
      "At NuStartz, we understand that starting and scaling a tech business requires the right resources, guidance, and support. That's why we offer additional services, including financial management, legal consulting, business strategy, customer support solutions, and more",
  },
];
