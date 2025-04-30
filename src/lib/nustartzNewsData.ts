import IMAGES from "../themes";

type NuStartzNewsContentsType = {
  title: string;
  subTitle?: string;
  image1: string;
  imageDescriptions1: string[];
  image2: string;
  imageDescriptions2: string[];
  news?: {
    newsTitle?: string;
    newsDescriptions?: string[];
  }[];
};

export const nustartzNewsContents: NuStartzNewsContentsType[] = [
  {
    title:
      "NuStartz at IndiaFirst Startup Expo & Conclave 2024 – A Transformative Experience",
    subTitle:
      "We had an unforgettable experience at the IndiaFirst Startup Expo & Conclave 2024, held in New Delhi from June 28 to 30! This prestigious event brought together some of the brightest minds in the startup ecosystem, offering a platform for groundbreaking innovations, insightful discussions, and unparalleled networking opportunities.",
    image1: `${IMAGES.nustartzNewsImage1}`,
    imageDescriptions1: [
      "As proud exhibitors at this dynamic expo, NuStartz, a part of Numentica Consulting Group, showcased our unwavering commitment to empowering startups, fostering innovation, and driving global business success. Our presence at the event reinforced our mission to help early-stage ventures scale efficiently, leverage cutting-edge technology, and navigate the challenges of expansion.",
      "One of the most exciting highlights of our participation was the inspiring keynote by our founder, Siva Periasamy, on Scaling and Globalization of Startups. His session captivated a diverse audience of entrepreneurs, investors, industry leaders, and aspiring business owners, sparking engaging discussions on the future of startups and global expansion.",
    ],
    image2: `${IMAGES.newsArticleImage1}`,
    imageDescriptions2: [
      "Beyond the keynote, the expo was a melting pot of creativity, collaboration, and inspiration. Our booth buzzed with activity as we engaged in thought-provoking discussions, product showcases, and meaningful exchanges with entrepreneurs from various industries. It was truly inspiring to witness the passion, vision, and innovation that Indian startups bring to the global stage.",
      "A heartfelt THANK YOU to everyone who visited our booth, interacted with our team, and contributed to insightful conversations. Your enthusiasm fuels our commitment to shaping the future of startups through mentorship, cutting-edge solutions, and global networking opportunities.",
      "At NuStartz, we believe that every startup has the potential to achieve remarkable success with the right support, strategy, and mindset. Events like IndiaFirst Startup Expo & Conclave reinforce our dedication to nurturing a thriving entrepreneurial ecosystem where ideas turn into reality.",
    ],
  },
  {
    title:
      "NuStartz Wins ‘Best Startup Knowledge Provider’ Award at IndiaFirst Startup Expo & Conclave 2024!",
    image1: `${IMAGES.nustartzNewsImage2}`,
    imageDescriptions1: [
      "We are beyond thrilled to share an incredible milestone—NuStartz, a part of Numentica Consulting Group, has been honored with the prestigious ‘Best Startup Knowledge Provider’ award at the IndiaFirst Startup Expo & Conclave 2024!",
      "This recognition is a testament to our unwavering commitment to empowering startups with expert guidance, mentorship, and the essential resources they need to scale, innovate, and succeed in today's competitive business landscape.",
    ],
    image2: `${IMAGES.newsArticleImage2}`,
    imageDescriptions2: [
      "A heartfelt thank you to everyone who stopped by, listened to our founder’s talk, and shared your thoughts. Your energy and passion are what drive us to continue our journey of crafting the future of startups.",
      "Stay connected for more updates and join us as we build a world of limitless opportunities for startups!",
    ],
    news: [
      {
        newsTitle: "A Recognition of Our Mission",
        newsDescriptions: [
          "At NuStartz, we have always believed that knowledge is the foundation of success, and this award reaffirms our dedication to supporting startups at every stage of their journey. From incubation and mentorship programs to strategic growth planning and global market expansion, we have worked tirelessly to provide startups with actionable insights, industry expertise, and hands-on support to transform their ideas into thriving businesses.",
          "Winning this award at such a prestigious event, surrounded by visionary entrepreneurs, investors, and industry leaders, is both an honor and a motivation for us to push the boundaries even further. The IndiaFirst Startup Expo & Conclave was a melting pot of innovation, and we were privileged to engage with some of the brightest minds driving India's startup revolution.",
        ],
      },
      {
        newsTitle: "A Heartfelt Thank You",
        newsDescriptions: [
          "This achievement wouldn’t have been possible without the trust and collaboration of:",
          "The incredible startups that have partnered with us and entrusted us with their growth. Your success stories fuel our passion.",
          "The event organizers for creating a powerful platform that celebrates and supports entrepreneurship in India.",
          "Our dedicated team at NuStartz, whose expertise, hard work, and vision make all of this possible. Your commitment to innovation and knowledge-sharing is truly inspiring.",
        ],
      },
      {
        newsTitle: "The Journey Ahead",
        newsDescriptions: [
          "This award marks a new chapter in our journey as we continue our mission to redefine startup success, bridge the gap between ideas and impactful execution, and create a global community of innovators.",
          "Stay tuned as we expand our initiatives, introduce new mentorship opportunities, and continue to empower startups with the tools and knowledge they need to thrive!",
          "Once again, thank you to everyone who has been part of our story. This is just the beginning—here’s to many more milestones ahead!",
        ],
      },
    ],
  },
  {
    title:
      "NuStartz Shines at NY Tech Meetup 2024 – Connecting, Innovating & Inspiring",
    image1: `${IMAGES.nustartzNewsImage3}`,
    imageDescriptions1: [
      "We are proud to share that NuStartz (a part of Numentica Consulting Group) made its mark at the NY Tech Meetup, held at Civic Hall, Union Square, NYC",
      "This prestigious event brought together innovators, entrepreneurs, and tech enthusiasts to celebrate groundbreaking ideas and foster meaningful collaborations.",
      `Our COO, Steve, represented NuStartz and showcased our vision of empowering startups through innovation and tailored solutions. The event was an incredible platform for us to connect with global leaders, share insights, and highlight our contributions to the dynamic startup ecosystem.`,
    ],
    image2: `${IMAGES.newsArticleImage3}`,
    imageDescriptions2: [
      "Being part of such a renowned tech community reinforces our mission to help startups scale, innovate, and succeed in a competitive world. A big thank you to the organizers and all those who engaged with us at the event.",
      "Stay tuned as we continue crafting impactful journeys for startups worldwide!",
    ],
    news: [
      {
        newsTitle: "A Platform for Global Innovation",
        newsDescriptions: [
          "As one of the most renowned tech networking events in New York City, the NY Tech Meetup has long been a hub for visionaries shaping the future of technology and entrepreneurship. This year, it was an honor to be a part of the discussions and showcase how NuStartz is redefining the startup support landscape with tailored solutions, strategic mentorship, and innovative growth opportunities.",
          "Our COO, Steve, represented NuStartz at the event, engaging in thought-provoking conversations with some of the brightest minds in the industry. He highlighted our vision for empowering startups—helping them scale, innovate, and thrive in a rapidly evolving digital world.",
        ],
      },
      {
        newsTitle: "Building Meaningful Connections",
        newsDescriptions: [
          "The event was a fantastic opportunity to:",
          "Network with global tech leaders, investors, and entrepreneurs eager to shape the future of startups.",
          "Share insights on the evolving startup landscape, including challenges and opportunities for emerging businesses.",
          "Showcase our innovative approach to startup support, from incubation programs to tailored growth strategies.",
          "Strengthen our presence in the NYC tech community, reinforcing our role as a key enabler of startup success.",
        ],
      },
      {
        newsTitle: "A Commitment to Startup Growth",
        newsDescriptions: [
          "At NuStartz, we believe that the right support, knowledge, and connections can accelerate startup success. Being part of such an influential gathering reinforced our mission to provide startups with the resources, guidance, and industry partnerships they need to break barriers and achieve sustainable growth.",
          "We extend our heartfelt gratitude to:",
          "The event organizers for curating such an insightful and impactful event.",
          "The visionary entrepreneurs, investors, and tech enthusiasts we had the pleasure of connecting with.",
          "Our team at NuStartz, whose dedication to innovation and startup empowerment continues to drive our success.",
        ],
      },
      {
        newsTitle: "The Journey Continues",
        newsDescriptions: [
          "This is just the beginning! We are excited to leverage the momentum from NY Tech Meetup 2024 as we continue crafting impactful journeys for startups worldwide.",
          "Stay tuned for more updates, collaborations, and exciting opportunities as we push the boundaries of startup innovation!",
        ],
      },
    ],
  },
  {
    title: "Newsletter - Spring 2025",
    image1: `${IMAGES.newsletterImage}`,
    image2: "",
    imageDescriptions1: [],
    imageDescriptions2: [],
  },
];

interface NewNustartzArticleDataType {
  title: string;
  subTitle1: string;
  image1: string;
  description1: string;
  contents: {
    contentImage: string;
    contentDescription: string[];
    moralContent?: string;
    contentLink?: string;
  }[];
}

export const newNustartzNewsArticleData: NewNustartzArticleDataType = {
  title: "Newsletter - Spring 2025",
  subTitle1:
    "The season of renewal is here - and so is the next chapter for innovators. NuStartz kicks off spring with our spring seasonal newsletter, celebrating new beginnings and big visions.",
  image1: `${IMAGES.mainImage}`,
  description1:
    "This spring, we’re focused on helping startups grow - through team building, product development, and branding to unlock their full potential.",
  contents: [
    {
      contentImage: `${IMAGES.newsImage2}`,
      contentDescription: [
        "Matthew Vann, Founder of Greenlight Grocery, faced unexpected development challenges. NuStartz stepped in to revitalize the project, delivering a scalable and efficient platform that revolutionizes procurement for restaurants.",
        "In his own words, Matthew shares how the NuStartz team helped accelerate the journey from concept to market-ready product proving what’s possible with the right support and strategic approach.",
      ],
      contentLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7314717232066883586",
    },
    {
      contentImage: `${IMAGES.newsImage7}`,
      contentDescription: [
        "The startup landscape has dramatically shifted over the past ten years. From technological advancements to changing market dynamics, we explore these transformations and what they mean for the future.",
        "Understanding where we’ve been helps you build where you’re going.",
      ],
      moralContent:
        "This timeline is packed with founder-first insights to help you stay ahead of the curve.",
      contentLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7316786174700703744",
    },
    {
      contentImage: `${IMAGES.newsImage3}`,
      contentDescription: [
        "Passion isn't always enough. We delve into common pitfalls that startups encounter from lacking a clear problem-solution fit to inadequate go-to-market strategies and how to navigate them.",
        "Avoiding these five traps could be your startup’s greatest advantage.",
      ],
      moralContent:
        "We’ve broken it down so you can course-correct early and scale smarter.",
      contentLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7316111582873223169",
    },
    {
      contentImage: `${IMAGES.newsImage4}`,
      contentDescription: [
        "Turning an idea into a Minimum Viable Product (MVP) swiftly is crucial. NuStartz offers a structured 4-week program to bring your vision to life, covering research, design, development, and deployment.",
        "Speed matters, get feedback fast and evolve smarter.",
      ],
      moralContent:
        "It’s not just about launching fast, it's about launching right.",
      contentLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7311477541041577984",
    },
    {
      contentImage: `${IMAGES.newsImage5}`,
      contentDescription: [
        "In this featured perspective from our cofounder Steve, we explore why building beats brainstorming and how focus, speed, and accountability turn concepts into companies.",
        "At NuStartz, we help founders move from vision to velocity supporting your journey with the right strategy, structure, and team to make real progress, fast.",
      ],
      moralContent: `This one’s for the doers: it’s time to move from “thinking about it” to “getting it done.”`,
      contentLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:7313078931039862784",
    },
    {
      contentImage: `${IMAGES.newsImage6}`,
      contentDescription: [
        "Neo is reshaping the startup landscape by focusing on exceptional talent even before companies are founded. With a founder-first approach, Neo blends mentorship, hands-on technical assessments, and initiatives like the Neo Scholars program, which offers students a $20,000 gap semester grant. Their patient model has led to investments in breakthrough companies like Anysphere, Cognition, and Pika Labs, with some already valued in the billions. It's proof that long-term success comes from backing the right people, not just polished pitch decks.",
        "As we move through the spring season we're reminded that while ideas spark the journey , its execution, insight, and adaptability that shape success. From MVP launches to decoding startup failures and celebrating real client wins, our focus stays grounded in helping founders build better, faster, and smarter. Let the takeaways fuel your next move. We're right here to help you make it count.",
      ],
    },
  ],
};
