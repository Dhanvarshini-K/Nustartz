import IMAGES from "../themes";

export enum AboutPageSectionEnums {
  boardAdvisors = "Board of Advisors",
  founders = "Our Founders",
  leaders = "Our Leaders",
}

export type BoardMembersDataType = {
  name?: string;
  role?: string;
  image?: string;
  linkedInUrl?: string;
  description?: string;
};

export const boardMembersData: BoardMembersDataType[] = [
  {
    name: "Ben John",
    role: "Vice President Microsoft AI | Former CTO Xandr",
    image: `${IMAGES.boardMember1}`,
    linkedInUrl: "https://www.linkedin.com/in/benjohnlink/",
    description:
      "I'm proud to be part of NuStartz’s journey toward a vibrant startup ecosystem. I’m committed to driving growth and sparking innovation, leveraging our business model to unlock opportunities and create a transformative impact on the industry.",
  },
  {
    name: "Sumer Jabri",
    role: "CTO Crafter CMS | Former CEO Rivet Logic (acquired by Capgemini)",
    image: `${IMAGES.boardMember2}`,
    linkedInUrl: "https://www.linkedin.com/in/sjabri/",
    description:
      "I'm committed to guiding NuStartz's leadership with strategic insights that fuel growth and innovation. Together, we empower startups to transform their bold visions into impactful realities, building tomorrow's success stories.",
  },
  {
    name: "Igor Shindel",
    role: "Former CIO Appnexus | CTO Coach for Tech Leaders",
    image: `${IMAGES.boardMember3}`,
    linkedInUrl: "https://www.linkedin.com/in/igorshindel/",
    description:
      "We aim to create a set of capabilities tailor-made for startups: exceptionally motivated, agile, and adaptable teams that deliver high-quality software in collaboration with startup founders. Teams that internalize founders' aspirations and culture and deliver results. Teams that leverage Al, ML, and other cutting-edge technologies and evolve to achieve ever-changing founders' goals.",
  },
];

export const foundersData: BoardMembersDataType[] = [
  {
    name: "Siva Periasamy",
    role: "Founder & President",
    image: `${IMAGES.founder1}`,
    linkedInUrl: "https://www.linkedin.com/in/sivaperiasamy/",
  },
  {
    name: "Steve Bakther",
    role: "COO & Co Founder",
    image: `${IMAGES.founder2}`,
    linkedInUrl: "https://www.linkedin.com/in/steve-bakther-46a134168/",
  },
];

export const leadersData: BoardMembersDataType[] = [
  {
    name: "Nagaraj",
    role: "Director of Operations, India",
    image: `${IMAGES.leader1}`,
  },
  {
    name: "Sujith",
    role: "Global Operations Manager",
    image: `${IMAGES.leader2}`,
  },
  {
    name: "Arun Balakrishnan",
    role: "Global Technical Head",
    image: `${IMAGES.leader3}`,
  },
  {
    name: "Michael Barnabas",
    role: "Global Brand Manager",
    image: `${IMAGES.leader4}`,
  },
  {
    name: "Raghavi Sriramamurthy",
    role: "Global Human Resources Manager",
    image: `${IMAGES.leader5}`,
  },
];
