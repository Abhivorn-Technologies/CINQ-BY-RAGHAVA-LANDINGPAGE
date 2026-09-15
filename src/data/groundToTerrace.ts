export interface FloorAmenityItem {
  name: string;
  image: string;
  tag: string;
}

export interface GroundToTerraceFloor {
  id: string;
  label: "T" | "5" | "4" | "3" | "2" | "1" | "G";
  levelNumber: number;
  title: string;
  shortAmenities: string[];
  tagline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  gallery: FloorAmenityItem[];
}

// Ordered strictly from top (Terrace) to bottom (Ground): T, 5, 4, 3, 2, 1, G
export const GROUND_TO_TERRACE_FLOORS: GroundToTerraceFloor[] = [
  {
    id: "terrace",
    label: "T",
    levelNumber: 6,
    title: "Terrace Floor",
    shortAmenities: ["Terrace Pool", "Party Area", "Sit-Out Area"],
    tagline: "Elevated Horizons & Sky Leisure",
    description:
      "Perched high above the city skyline, the Terrace Level creates an exclusive sanctuary where open skies meet luxury leisure—featuring a temperature-controlled terrace pool, celebratory party deck, and quiet sit-out viewing cabanas.",
    heroImage: "/assets/floors/Terrace Pool.png",
    heroImageAlt: "CINQ Terrace Floor Sky Deck and Swimming Pool",
    gallery: [
      {
        name: "Terrace Pool",
        image: "/assets/floors/Terrace Pool.png",
        tag: "Aquatics",
      },
      {
        name: "Party Area",
        image: "/assets/floors/Party Area.png",
        tag: "Celebration",
      },
      {
        name: "Sit-Out Area",
        image: "/assets/floors/Sit-Out Area.png",
        tag: "Observatory",
      },
    ],
  },
  {
    id: "floor-5",
    label: "5",
    levelNumber: 5,
    title: "5",
    shortAmenities: ["Gym HIIT", "Jacuzzi", "Salon", "Spa"],
    tagline: "High-Performance Fitness & Rejuvenation",
    description:
      "A dedicated wellness retreat combining intense cardiovascular and strength training studios with hydrotherapy thermal jacuzzis, restorative aromatherapy spas, and bespoke personal grooming suites.",
    heroImage: "/assets/floors/Salon.png",
    heroImageAlt: "CINQ Floor 5 Jacuzzi and Wellness Level",
    gallery: [
      {
        name: "Gym HIIT",
        image: "/assets/floors/Gym.png",
        tag: "Fitness",
      },
      {
        name: "Jacuzzi",
        image: "/assets/floors/5th.png",
        tag: "Hydrotherapy",
      },
      {
        name: "Salon",
        image: "/assets/floors/Salon.png",
        tag: "Grooming",
      },
      {
        name: "Spa",
        image: "/assets/floors/Spa.png",
        tag: "Wellness",
      },
    ],
  },
  {
    id: "floor-4",
    label: "4",
    levelNumber: 4,
    title: "4",
    shortAmenities: ["Sports Bar", "Bowling Alley", "Gym", "Gentlemen's Room"],
    tagline: "Sports Bar, Bowling & Gentlemen's Lounge",
    description:
      "The premier social entertainment destination within CINQ, uniting an artisanal sports bar, modern 2-lane bowling alley, comprehensive fitness gym, and an opulent private gentlemen's club lounge.",
    heroImage: "/assets/floors/Sports Bar.png",
    heroImageAlt: "CINQ Floor 4 Sports Bar and Gentlemen's Lounge",
    gallery: [
      {
        name: "Sports Bar",
        image: "/assets/floors/Sports Bar.png",
        tag: "Social",
      },
      {
        name: "Bowling Alley",
        image: "/assets/floors/Bowling Alley.png",
        tag: "Recreation",
      },
      {
        name: "Gym",
        image: "/assets/floors/Gym.png",
        tag: "Fitness",
      },
      {
        name: "Gentlemen's Room",
        image: "/assets/floors/Gentlemen's Room.png",
        tag: "Exclusive",
      },
    ],
  },
  {
    id: "floor-3",
    label: "3",
    levelNumber: 3,
    title: "3",
    shortAmenities: ["Guest Rooms"],
    tagline: "Bespoke Hospitality & Suites",
    description:
      "Crafted specifically for visiting family members, visiting dignitaries, and esteemed guests—these luxury private guest rooms deliver five-star hospitality, premium privacy, and meticulous attention to detail.",
    heroImage: "/assets/floors/3rd.png",
    heroImageAlt: "CINQ Floor 3 Luxury Guest Rooms",
    gallery: [
      {
        name: "Guest Rooms",
        image: "/assets/floors/3rd.png",
        tag: "Hospitality",
      },
    ],
  },
  {
    id: "floor-2",
    label: "2",
    levelNumber: 2,
    title: "2",
    shortAmenities: ["Badminton Court", "Indoor Games", "Squash Court", "VR"],
    tagline: "Championship Racquets & Virtual Reality",
    description:
      "A dynamic multi-sport sports haven outfitted with BWF-standard wooden badminton courts, glass-backed squash arenas, virtual reality simulators, and comprehensive indoor recreation tables.",
    heroImage: "/assets/floors/Badminton Court.png",
    heroImageAlt: "CINQ Floor 2 Badminton and Squash Courts",
    gallery: [
      {
        name: "Badminton Court",
        image: "/assets/floors/Badminton Court.png",
        tag: "Racquets",
      },
      {
        name: "Squash Court",
        image: "/assets/floors/Squash Court.png",
        tag: "Court Sports",
      },
      {
        name: "VR",
        image: "/assets/floors/vr.png",
        tag: "Immersive VR",
      },
      {
        name: "Indoor Games",
        image: "/assets/floors/2nd.png",
        tag: "Recreation",
      },
    ],
  },
  {
    id: "floor-1",
    label: "1",
    levelNumber: 1,
    title: "1",
    shortAmenities: ["Co-working Space", "Mini Theater"],
    tagline: "Focus Workspaces & Private Cinema",
    description:
      "Where high-speed enterprise productivity meets world-class entertainment. Featuring quiet focus pods, meeting tables, and an acoustically calibrated private Dolby Atmos mini theater for family screenings.",
    heroImage: "/assets/floors/1st.png",
    heroImageAlt: "CINQ Floor 1 Co-working Space and Mini Theater",
    gallery: [
      {
        name: "Co-working Space",
        image: "/assets/floors/1st.png",
        tag: "Productivity",
      },
      {
        name: "Mini Theater",
        image: "/assets/floors/minitheater.png",
        tag: "Entertainment",
      },
    ],
  },
  {
    id: "ground",
    label: "G",
    levelNumber: 0,
    title: "Ground Floor",
    shortAmenities: [
      "Reception",
      "Cafe",
      "Pre-Function",
      "Banquet Hall",
      "Creche",
    ],
    tagline: "Grand Welcomes & Celebratory Atriums",
    description:
      "A grand welcome that sets the tone for an extraordinary life at CINQ. Soaring triple-height arrival atriums lead directly into artisanal cafes, expansive celebratory banquet halls, and dedicated toddler daycare centers.",
    heroImage: "/assets/floors/ground.png",
    heroImageAlt: "CINQ Ground Floor Grand Arrival and Reception",
    gallery: [
      {
        name: "Reception",
        image: "/assets/floors/ground.png",
        tag: "Arrival",
      },
      {
        name: "Cafe",
        image: "/assets/floors/cafe.png",
        tag: "Dining",
      },
      {
        name: "Pre-Function",
        image: "/assets/floors/Pre-Function.png",
        tag: "Pre-Function",
      },
      {
        name: "Banquet Hall",
        image: "/assets/floors/banquet hall.png",
        tag: "Celebrations",
      },
      {
        name: "Creche",
        image: "/assets/floors/creche.png",
        tag: "Childcare",
      },
    ],
  },
];
