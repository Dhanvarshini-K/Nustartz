import IMAGES from "../themes"

export enum ReviewPageSectionsEnum {
  whoWeAre = "Who we are",
  solutions = "Solutions",
  clientReviews = "ClientReviews",
}


export const  reviewDescription = `At NuStartz, we are your comprehensive partner in building and
scaling your tech startup from the ground up—all the way to your
Initial Public Offering (IPO). Our full suite of services is
designed to support every aspect of your business, helping you
transform your ideas into a thriving enterprise.`

type SolutionSectionDataType = {
    title: string;
    description: string;
    image: string;
}

export const solutionSectionData: SolutionSectionDataType[] = [
    {
        title: "Problem faced in Salesforce",
        description: reviewDescription,
        image: `${IMAGES.solutionImage1}`
    },
    {
        title: "Problem faced in Salesforce",
        description: reviewDescription,
        image: `${IMAGES.solutionImage2}`
    },
    {
        title: "Problem faced in Salesforce",
        description: reviewDescription,
        image: `${IMAGES.solutionImage3}`
    }
];


export const clientReviewData = [
    {
        clientName: "Name of the client",
        clientRole: "CEO, Company Name",
        clientInfo: "We envision a world where technology and substainability go hand in hand, creating impactful solutions for a better future. Our dedication to reducing food waste and promoting eco-friendly practices is exemplified through our groundbreaking product, Nutricycle",
        profileImageURL: ""
    },
    {
        clientName: "Name of the client",
        clientRole: "CEO, Company Name",
        clientInfo: "We envision a world where technology and substainability go hand in hand, creating impactful solutions for a better future. Our dedication to reducing food waste and promoting eco-friendly practices is exemplified through our groundbreaking product, Nutricycle",
        profileImageURL: ""
    }
]