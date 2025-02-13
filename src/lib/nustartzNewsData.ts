import IMAGES from "../themes";

type NustartzNewsDataType = {
  title: string;
  subtitle: string;
  image1: string;
  imageDescription1: string;
  imageDescription2?: string;
  image2: string;
  description2: string;
};

export const nuStartzNewsData: NustartzNewsDataType[] = [
  {
    title: "NuStartz at IndiaFirst Startup Expo & Conclave 2024",
    subtitle:"An incredible experience at the IndiaFirst Startup Expo & Conclave 2024, held in New Delhi from June 28 to 30.",
    image1: `${IMAGES.nustartzNewsImage1}`,
    imageDescription1: `As proud exhibitors at this vibrant event, NuStartz showcased our commitment to empowering startups and driving innovation. Our founder, Siva Periasamy, delivered a compelling talk on Scaling and Globalization of Startups, inspiring both budding entrepreneurs and seasoned professionals with actionable insights and transformative ideas.`,
    imageDescription2:"The expo was a melting pot of creativity, innovation, and collaboration. We were thrilled to connect with so many enthusiastic visitors at our booth, exchanging ideas and building relationships within India’s thriving startup ecosystem.",
    image2: `${IMAGES.newsArticleImage1}`,
    description2: `
        A heartfelt thank you to everyone who stopped by, listened to our founder’s talk, and shared your thoughts. Your energy and passion are what drive us to continue our journey of crafting the future of startups.
        Stay connected for more updates and join us as we build a world of limitless opportunities for startups!`,
  },
  {
    title:
      "NuStartz Wins Best Startup Knowledge Provider Award at IndiaFirst Startup Expo & Conclave 2024",
    subtitle:
      "An incredible experience at the IndiaFirst Startup Expo & Conclave 2024, held in New Delhi from June 28 to 30.",
    image1: `${IMAGES.nustartzNewsImage2}`,
    imageDescription1: `As proud exhibitors at this vibrant event, NuStartz showcased our commitment to empowering startups and driving innovation. Our founder, Siva Periasamy, delivered a compelling talk on Scaling and Globalization of Startups, inspiring both budding entrepreneurs and seasoned professionals with actionable insights and transformative ideas.`,
    imageDescription2: `The expo was a melting pot of creativity, innovation, and collaboration. We were thrilled to connect with so many enthusiastic visitors at our booth, exchanging ideas and building relationships within India’s thriving startup ecosystem.`,
    image2:`${IMAGES.newsArticleImage2}`,
    description2: `
    A heartfelt thank you to everyone who stopped by, listened to our founder’s talk, and shared your thoughts. Your energy and passion are what drive us to continue our journey of crafting the future of startups.
    Stay connected for more updates and join us as we build a world of limitless opportunities for startups!`,
  },
  {
    title: "NuStartz Shines at the NY Tech Meetup",
    subtitle: "We are proud to share that NuStartz (a part of Numentica Consulting Group) made its mark at the NY Tech Meetup, held at Civic Hall, Union Square, NYC",
    image1: `${IMAGES.nustartzNewsImage3}`,
    imageDescription1: "This prestigious event brought together innovators, entrepreneurs, and tech enthusiasts to celebrate groundbreaking ideas and foster meaningful collaborations.",
    imageDescription2: `Our COO, Steve, represented NuStartz and showcased our vision of empowering startups through innovation and tailored solutions. The event was an incredible platform for us to connect with global leaders, share insights, and highlight our contributions to the dynamic startup ecosystem.`,
    image2: `${IMAGES.newsArticleImage3}`,
    description2: `
    Being part of such a renowned tech community reinforces our mission to help startups scale, innovate, and succeed in a competitive world. A big thank you to the organizers and all those who engaged with us at the event.
    Stay tuned as we continue crafting impactful journeys for startups worldwide!`,
  },
];
