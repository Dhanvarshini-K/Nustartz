import IMAGES from "../themes";

export enum InsightTabsEnum {
  blogs = "Blogs",
  news = "News",
  events = "Events",
}

export const insightsTabData = {
    blogsTabTitle: "Nustartz Blog Posts",
    blogsCTATitle: "Signup to our News Letter",
    newsTabTitle: "News",
    newsTabSubTitle1: "NuStartz News",
    newsTabSubTitle2: "Startup News",
    eventsTabTitle: "Events",
}

type BlogPostsDataType = {
    id?: number,
    title?: string,
    description?: string,
    bgColor?: string,
}

export const blogPostsData: BlogPostsDataType[] = [
    {
        id: 1,
        title: "Blog 1",
        description: "There are many variaties of passages of engineer",
        bgColor: "bg-[#92e3a9]",
    },
    {
        id: 2,
        title: "Blog 2",
        description: "There are many variaties of passages of engineer",
        bgColor: "bg-[#bcf9f8]",
    },
    {
        id: 3,
        title: "Blog 3",
        description: "There are many variaties of passages of engineer",
        bgColor: "bg-[#f7d1d1]",
    },
    {
        id: 4,
        title: "Blog 4",
        description: "There are many variaties of passages of engineer",
        bgColor: "bg-[#92e3a9]",
    },
    {
        id: 5,
        title: "Blog 5",
        description: "There are many variaties of passages of engineer",
        bgColor: "bg-[#bcf9f8]",
    },
];

type InsightsEventDataType = {
    id?: number,
    title?: string,
    description?: string,
    image?: string,
}

export const insightsEventsData: InsightsEventDataType[]= [
    {
        id: 1,
        title: "Event 1",
        description: "There are many variaties of passages of engineer",
        image: `${IMAGES.eventImage1}`,
    },
    {
        id: 2,
        title: "Event 2",
        description: "There are many variaties of passages of engineer",
        image: `${IMAGES.eventImage2}`,
    },
    {
        id: 3,
        title: "Event 3",
        description: "There are many variaties of passages of engineer",
        image: `${IMAGES.eventImage3}`,
    },
    {
        id: 4,
        title: "Event 4",
        description: "There are many variaties of passages of engineer",
        image: `${IMAGES.eventImage1}`,
    }
];

type InsightsNewsDataType = {
    id?: number,
    date?: string,
    title?: string,
    image?: string,
}

export const insightsNewsData: InsightsNewsDataType[] = [
    {
        id: 1,
        date: "Wednesday, 09 - Oct 2024",
        title: "NuStartz at IndiaFirst Startup Expo & Conclave 2024",
        image: `${IMAGES.nustartzNewsImage1}`, 
    },
    {
        id: 2,
        date: "Wednesday, 09 - Oct 2024",
        title: "NuStartz Wins Best Startup Knowledge Provider Award",
        image: `${IMAGES.nustartzNewsImage2}`,
    },
    {
        id: 3,
        date: "Wednesday, 09 - Oct 2024",
        title: "NuStartz Shines at the NY Tech Meetup",
        image: `${IMAGES.nustartzNewsImage3}`,
    }
];

type InsightsStartupNewsDataType = {
    date?: string,
    title?: string,
    description?: string,
}

export const insightsStartupNewsData: InsightsStartupNewsDataType[] = [
    {
        date: "Wednesday, 09 - Oct 2024",
        title: "Work Culture",
        description:
            "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing",
    },
    {
        date: "Wednesday, 09 - Oct 2024",
        title: "News Headline",
        description:
            "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing",
    },
    {
        date: "Wednesday, 09 - Oct 2024",
        title: "News Headline",
        description:
            "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing",
    },
];