import IMAGES from "../themes";

export enum AboutPageSectionEnums {
    boardAdvisors = "Board of Advisors",
    founders = "Our Founders",
    leaders = "Our Leaders",
}

type BoardMembersDataType = {
    name?: string;
    role?: string;
    image?: string;
    linkedInUrl?: string;
}

export const boardMembersData: BoardMembersDataType[] = [
    {
        name: "Ben John",
        role: "Vice President Microsoft AI | Former CTO Xandr",
        image: `${IMAGES.boardMember1}`,
        linkedInUrl: "https://www.linkedin.com/in/benjohnlink/",
    },
    {
        name: "Sumer Jabri",
        role: "CTO Crafter CMS | Former CEO Rivet Logic (acquired by Capgemini)",
        image: `${IMAGES.boardMember2}`,
        linkedInUrl: "https://www.linkedin.com/in/sjabri/",
    },
    {
        name: "Igor Shindel",
        role: "Former CIO Appnexus | CTO Coach for Tech Leaders",
        image: `${IMAGES.boardMember3}`,
        linkedInUrl: "https://www.linkedin.com/in/igorshindel/",
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
    }
]

export const leadersData: BoardMembersDataType[] = [
    {
        name: "Nagaraj",
        role: "Global Director of Operations",
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
    }
];