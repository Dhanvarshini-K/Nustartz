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
};

export type BlogPostsDataType = {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
};

export const blogPostsData: BlogPostsDataType[] = [
  {
    id: 1,
    title: "Blog 1",
    description:
      "The Significance of Building a Robust Team to Elevate Your Tech Startup's Value",
    image: `${IMAGES.blogImage1}`,
  },
  {
    id: 2,
    title: "Blog 2",
    description: "Elevate Your Startup Pitch with These Three Key Strategies",
    image: `${IMAGES.blogImage2}`,
  },
  {
    id: 3,
    title: "Blog 3",
    description: "Elevate Your Tech Startup's Idea with Services",
    image: `${IMAGES.blogImage3}`,
  },
];

export type InsightsEventDataType = {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
};

export const insightsEventsData: InsightsEventDataType[] = [
  {
    id: 1,
    title: "Event 1",
    description: "Announcing Our New Office at Spazeone Arima Wakefield",
    image: `${IMAGES.eventImage1}`,
  },
  {
    id: 2,
    title: "Event 2",
    description: "New NuStartz Office at Coimbatore",
    image: `${IMAGES.eventImage2}`,
  },
  {
    id: 3,
    title: "Event 3",
    description: "Team Building & Fun at NuStartz Office",
    image: `${IMAGES.eventImage3}`,
  },
];

export type InsightsNewsDataType = {
  id?: number;
  date?: string;
  title?: string;
  image?: string;
};

export const insightsNewsData: InsightsNewsDataType[] = [
  {
    id: 1,
    date: "30 April, 2025",
    title: "Newsletter - Spring 2025",
    image: `${IMAGES.newsletterImage}`,
  },
  {
    id: 2,
    date: "Sunday, 30 - June 2024",
    title: "NuStartz at IndiaFirst Startup Expo & Conclave 2024",
    image: `${IMAGES.nustartzNewsImage1}`,
  },
  {
    id: 3,
    date: "Sunday, 30 - June 2024",
    title: "NuStartz Wins Best Startup Knowledge Provider Award",
    image: `${IMAGES.nustartzNewsImage2}`,
  },
  {
    id: 4,
    date: "Friday, 10 - May 2024",
    title: "NuStartz Shines at the NY Tech Meetup",
    image: `${IMAGES.nustartzNewsImage3}`,
  },
];

export type InsightsStartupNewsDataType = {
  date?: string;
  title?: string;
  image?: string;
  description?: string;
};

export const insightsStartupNewsData: InsightsStartupNewsDataType[] = [
  {
    date: "Wednesday, 09 - Oct 2024",
    title: "DeepSeek's Cybersecurity Challenge",
    image: `${IMAGES.startupNewsImage1}`,
    description:
      "Chinese AI startup DeepSeek has temporarily paused new user registrations due to a cyberattack.",
  },
  {
    date: "Wednesday, 09 - Oct 2024",
    title: "Anthropic Secures $4B Investment from Amazon",
    image: `${IMAGES.startupNewsImage2}`,
    description:
      "In a major development, AI safety and research startup Anthropic has raised an additional $4 billion from Amazon.",
  },
  {
    date: "Wednesday, 09 - Oct 2024",
    title: "Salva Health Wins Startup Battlefield",
    image: `${IMAGES.startupNewsImage3}`,
    description:
      "Congratulations to Salva Health, the winner of Startup Battlefield at Disrupt 2024! Salva Health impressed the judges.",
  },
];
