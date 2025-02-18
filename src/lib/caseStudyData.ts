type CaseStudyType = {
  title?: string;
  sections?: {
    heading?: string;
    subHeading1?: string;
    contents?: {
      headingDescription?: string;
      contentTitle?: string;
      contentDescription?: string;
      headingConclusion?: string;
    }[];
    subHeading2?: string;
    subContents?: {
      contentTitle?: string;
      contentDescription?: string;
    }[];
  }[];
};

export const caseStudyData1: CaseStudyType = {
  title:
    "Revolutionizing Enterprise Search for Beyond Media Solutions with NuStartz",
  sections: [
    {
      heading: "Executive Summary",
      contents: [
        {
          headingDescription:
            "Beyond Media Solutions faced challenges with fragmented data retrieval across multiple platforms. To address this, the 'Enterprise Search Assistant' was developed—an advanced AI-powered search platform and chat assistant designed to unify search capabilities and improve user interaction. This solution greatly enhanced search efficiency and the overall user experience across diverse organizational data sources.",
        },
      ],
    },
    {
      heading: "The Challenge",
      subHeading1: "Fragmented Data Retrieval",
      contents: [
        {
          contentTitle: "Disparate Sources:",
          contentDescription:
            "Users struggled to retrieve relevant information from scattered websites and databases.",
        },
        {
          contentTitle: "Search Efficiency:",
          contentDescription:
            "Finding key data quickly was difficult due to inadequate search tools.",
        },
        {
          contentTitle: "User Experience:",
          contentDescription:
            "Ineffective user interfaces slowed productivity and lowered satisfaction.",
        },
        {
          contentTitle: "Integration Issues:",
          contentDescription:
            "Seamless integration with internal tools was lacking.",
        },
      ],
    },
    {
      heading: "The Solution",
      subHeading1: "Integrated Search Platform",
      contents: [
        {
          contentTitle: "Enterprise Search Assistant:",
          contentDescription:
            "A unified, AI-powered search solution was created to enhance data search efficiency.",
        },
        {
          contentTitle: "Enhanced User Interaction:",
          contentDescription:
            "A generative AI-powered chat assistant provided a conversational interface for natural language interaction, customizable for various contexts.",
        },
      ],
    },
    {
      heading: "Implementation",
      contents: [
        {
          contentTitle: "Frontend:",
          contentDescription:
            "Built using React.js for a dynamic UI, styled with Tailwind CSS.",
        },
        {
          contentTitle: "State Management:",
          contentDescription: "Leveraged Redux for efficient state handling.",
        },
        {
          contentTitle: "Backend:",
          contentDescription:
            "Python Flask endpoints managed data requests and interactions.",
        },
        {
          contentTitle: "Process:",
          contentDescription:
            "Developed and tested frontend and backend components for robustness, with smooth deployment via cloud run services.",
        },
      ],
    },
    {
      heading: "Results",
      contents: [
        {
          contentTitle: "Search Efficiency:",
          contentDescription: "Drastically improved search speed and accuracy.",
        },
        {
          contentTitle: "User Experience:",
          contentDescription:
            "A more intuitive and user-friendly interface increased satisfaction.",
        },
        {
          contentTitle: "Unified Access:",
          contentDescription:
            "Simplified data retrieval from multiple sources, streamlining workflows and improving productivity.",
        },
      ],
    },
    {
      heading: "Conclusion",
      contents: [
        {
          headingDescription:
            "The collaboration with Beyond Media Solutions led to a successful deployment of a state-of-the-art Enterprise Search Assistant, significantly improving search capabilities, user interaction, and productivity across the organization.",
        },
      ],
    },
  ],
};

export const caseStudyData2: CaseStudyType = {
  title: "CareerJourney - Bridging the Gap Between Aspiration and Achievement",
  sections: [
    {
      heading: "Executive Summary",
      contents: [
        {
          headingDescription:
            "CareerJourney needed a complete platform revamp to overcome the limitations of its legacy system, which hindered usability, real-time communication, and user satisfaction. Within a two-month timeframe, CareerJourney was transformed into a dynamic platform that integrates new plan management, chat, video calls, and meeting features. Additionally, it involved migrating from Angular version 11 to 17 and transitioning the backend from PHP to NestJS. This revamp provided a robust ecosystem for connecting users with mentors and streamlining task management and skill development.",
        },
      ],
    },
    {
      heading: "The Challenge",
      subHeading1: "Legacy Platform Limitations:",
      contents: [
        {
          contentTitle: "User Experience:",
          contentDescription:
            "The outdated interface and limited features created usability issues.",
        },
        {
          contentTitle: "Real-time Communication:",
          contentDescription:
            "There were no chat or video call services in place.",
        },
        {
          contentTitle: "Complex Architecture:",
          contentDescription:
            "The system for managing content feeds was overly complicated.",
        },
        {
          contentTitle: "User Satisfaction:",
          contentDescription:
            "Mentors and mentees required a simplified task-tracking system that had not been previously implemented.",
        },
      ],
      subHeading2: "Specific Challenges:",
      subContents: [
        {
          contentDescription:
            "Tight two-month deadline to revamp the platform and implement new features.",
        },
        { contentDescription: "Angular version migration from 11 to 17." },
        {
          contentDescription:
            "Migration of existing PHP code to a NestJS backend.",
        },
      ],
    },
    {
      heading: "The Solution",
      contents: [
        {
          headingDescription:
            "CareerJourney emerged as a comprehensive platform that addressed these challenges, combining a robust social network with advanced technology to create an ecosystem where users could connect, learn, and grow. The platform was successfully developed and migrated within the two-month timeline, implementing new features and a complete backend transition.",
        },
      ],
    },
    {
      heading: "Key Features",
      contents: [
        {
          contentTitle: "Personalized Feed:",
          contentDescription:
            "Curated content showcasing relevant posts from followed users and mentors.",
        },
        {
          contentTitle: "Mentorship and Guidance:",
          contentDescription:
            "A structured program that enables plan creation, task assignment, progress tracking, and one-on-one interactions.",
        },
        {
          contentTitle: "Real-time Communication:",
          contentDescription:
            "Integrated chat and video call functionalities for immediate communication between users.",
        },
        {
          contentTitle: "Skill Development:",
          contentDescription:
            "Access to resources, workshops, and courses for personal growth.",
        },
        {
          contentTitle: "Job Placement Assistance:",
          contentDescription:
            "Integrated job boards to help users find jobs and internships.",
        },
      ],
    },
    {
      heading: "Technology Stack",
      contents: [
        {
          contentTitle: "Frontend:",
          contentDescription:
            "Angular with Angular Material for a responsive and modern interface.",
        },
        {
          contentTitle: "Backend:",
          contentDescription: "NestJS for scalable API development.",
        },
        {
          contentTitle: "Database:",
          contentDescription: "PostgreSQL for efficient data management.",
        },
        {
          contentTitle: "Real-time Communication:",
          contentDescription:
            "Azure Communication Services for chat and video calls.",
        },
        {
          contentTitle: "DevOps:",
          contentDescription: "Azure for cloud infrastructure and deployment.",
        },
        {
          contentTitle: "Architecture:",
          contentDescription:
            "NX monorepo for streamlined development management.",
        },
        {
          contentTitle: "Mobile App:",
          contentDescription: "Flutter for cross-platform mobile development.",
        },
      ],
    },
    {
      heading: "Impact and Results",
      contents: [
        {
          headingDescription:
            "CareerJourney successfully addressed the challenges faced by students and professionals, achieving the following:",
        },
        {
          contentTitle: "Thriving Community:",
          contentDescription:
            " Fostered collaboration and belonging among users.",
        },
        {
          contentTitle: "Empowered Individuals:",
          contentDescription:
            " Provided tools and support for career advancement.",
        },
        {
          contentTitle: "Improved Career Outcomes:",
          contentDescription:
            " Helped users secure jobs, internships, and opportunities.",
        },
        {
          contentTitle: "Increased Engagement:",
          contentDescription:
            " Higher user retention and engagement rates, signaling strong product-market fit.",
        },
        {
          contentTitle: "Data-driven Insights:",
          contentDescription:
            " Leveraged platform data to continuously enhance user experience.",
        },
        {
          headingConclusion:
            "By merging user-centric design with cutting-edge technology, CareerJourney has become a preferred platform for individuals seeking to accelerate their career growth.",
        },
      ],
    },
  ],
};
