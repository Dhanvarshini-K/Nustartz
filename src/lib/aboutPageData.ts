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
}

export const boardMembersData: BoardMembersDataType[] = [
    {
        name: "Ben John",
        role: "Vice President Microsoft AI, Former CTO Xandr",
        image: `${IMAGES.boardMember1}`,
    },
    {
        name: "Sumer Jabri",
        role: "CTO, Crafter CMS Former CEO, Rivet Logic (acquired by Capgemini)",
        image: `${IMAGES.boardMember2}`,
    },
    {
        name: "Igor Shindel",
        role: "Former CIO, Appnexus CTO Coach for Tech Leaders",
        image: `${IMAGES.boardMember3}`,
    },
];

export const foundersData: BoardMembersDataType[] = [
    {
        name: "Siva",
        role: "Founder",
        image: `${IMAGES.founder1}`,
    },
    {
        name: "Steve",
        role: "COO & Co Founder",
        image: `${IMAGES.founder2}`,
    }
]

export const leadersData: BoardMembersDataType[] = [
    {
        name: "Nagaraj",
        role: "Director of Operations",
        image: `${IMAGES.leader1}`,
    },
    {
        name: "Sujith",
        role: "Business Development Manager",
        image: `${IMAGES.leader2}`,
    },
    {
        name: "Arun Balakrishnan",
        role: "Global Technical Head",
        image: `${IMAGES.leader3}`,
    },
    {
        name: "Michael Barnabas",
        role: "Brand Manager",
        image: `${IMAGES.leader4}`,
    }
];