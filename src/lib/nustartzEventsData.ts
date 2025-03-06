import IMAGES from "../themes";

type NuStartzEventsDataType = {
  title?: string;
  videoUrl?: string;
  image?: string;
  content?: string;
  eventTitle?: string;
  eventImages?: string[];
  description?: string[];
};

export const nuStartzEventsData: NuStartzEventsDataType[] = [
  {
    title: "Announcing Our New Office at Spazeone Arima Wakefield",
    videoUrl: "https://www.youtube.com/embed/52ZYMetT7mg?si=HiZCVnv9-OLtyDJX",
    image: `${IMAGES.eventImage1}`,
    content:
      "We’re thrilled to announce the opening of our latest NuStartz office at Spazeone Arima Wakefield, Coimbatore, an exclusive office designed to cater to multiple client teams with dedicated spaces that reflect their unique brands. Each workspace is fully customizable, enabling clients to incorporate their own logos and branding, making it a true extension of their own company.",
    description: [
      "NuStartz offers more than just a workspace. The facility includes a modern cafeteria, spacious lounge areas, and collaborative zones, providing the perfect balance of productivity and relaxation for teams of varied capacities. With private offices, brand-friendly spaces, and premium amenities, our new office is ideal for startups and scaling businesses looking for a professional yet inspiring environment that’s truly their own.",
      "This new NuStartz facility reaffirms our commitment to offering exclusive, client-centered office solutions that empower teams to grow, collaborate, and succeed in comfort and style.",
    ],
    eventTitle: "Moments",
    eventImages: [
      `${IMAGES.eventImage1}`,
      `${IMAGES.nustartzEvent1Image1}`,
      `${IMAGES.nustartzEvent1Image2}`,
      `${IMAGES.nustartzEvent1Image3}`,
    ],
  },
  {
    title: "New NuStartz Office at Coimbatore",
    image: `${IMAGES.eventImage2}`,
    eventTitle: "Moments",
    eventImages: [
      `${IMAGES.eventImage2}`,
      `${IMAGES.nustartzEvent2Image1}`,
      `${IMAGES.nustartzEvent2Image2}`,
    ],
    content:
      "We’re excited to announce the opening of our latest office at Karunya Institute of Technology and Sciences in Coimbatore! This new space is dedicated to delivering world-class IT product development and support while also nurturing the next generation of tech talent. At NuStartz, we believe in fostering growth from within, offering a transformative experience where students evolve into full-fledged developers, equipped with the skills and mindset needed for a successful career in tech.",
    description: [
      "Through our immersive mentorship and hands-on training programs, interns gain invaluable experience, learning from and working alongside our seasoned development team. This collaborative environment not only builds technical expertise but also instills a strong team culture, preparing students for the professional world. Our new office at Karunya serves as both a high-performing development center and a launchpad for aspiring developers ready to make their mark.",
    ],
  },
  {
    title: "Team Building & Fun at NuStartz Office",
    eventTitle: "Moments",
    eventImages: [`${IMAGES.eventImage3}`],
    image: `${IMAGES.eventImage3}`,
    content:
      "At our NuStartz office in Karunya, we know that strong teams are built on camaraderie and shared experiences. That’s why we organize regular team-building activities and fun events that bring our team members closer together, creating a vibrant and collaborative workplace. From skill-building workshops and creative games to outdoor adventures and friendly competitions, each activity is crafted to inspire teamwork, spark creativity, and uplift team morale.",
    description: [
      "These events give our team—including interns—a chance to bond beyond their daily tasks, fostering trust and building lasting connections. By creating a lively, supportive environment at our Karunya office, we ensure that everyone at NuStartz feels engaged, motivated, and ready to tackle challenges together.",
    ],
  },
];
