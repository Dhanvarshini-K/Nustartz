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