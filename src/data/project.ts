import { LocationCategory } from "@/types/project";
import { NavItem, Pillar, StatItem } from "@/types/common";

export const PROJECT_INFO = {
  name: "CINQ",
  developer: "RAGHAVA",
  tagline: "EVERY LEVEL. DESIGNED AROUND YOUR LIFESTYLE.",
  description: "A landmark luxury residential address in Hyderabad's Financial District.",
  longDescription:
    "CINQ by Raghava is an ultra-luxury residential landmark in the heart of Hyderabad's Financial District. Five soaring towers, world-class multi-level amenities and meticulously engineered residences come together to craft an unmatched lifestyle for every generation.",
  address: {
    line1: "Road No. 2, Financial District",
    line2: "Nanakramguda",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500032",
    full: "Road No. 2, Financial District, Nanakramguda, Hyderabad, Telangana – 500032",
  },
  contact: {
    phonePrimary: "+91 62812 45149",
    phoneSecondary: "+91 62812 45149",
  },
  rera: {
    number: "P02400007890",
    website: "rera.telangana.gov.in",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Club House", href: "#club-house" },
  { label: "Gallery", href: "#gallery" },
  { label: "Specifications", href: "#specifications" },
  { label: "Contact", href: "#contact" },
];

export const PROJECT_STATS: StatItem[] = [
  {
    value: "7.19",
    numericValue: 7.19,
    decimals: 2,
    suffix: " ACRES",
    label: "TOTAL LAND PARCEL",
    sublabel: "Expansive podium zoning with curated green buffer.",
  },
  {
    value: "5",
    numericValue: 5,
    decimals: 0,
    suffix: " TOWERS",
    label: "MASTER ARCHITECTURE",
    sublabel: "Independently articulated luxury residential spires.",
  },
  {
    value: "61",
    numericValue: 61,
    decimals: 0,
    suffix: " FLOORS",
    label: "VERTICAL SCALE",
    sublabel: "Panoramic skyline vantage over the Financial District.",
  },
  {
    value: "4",
    numericValue: 4,
    decimals: 0,
    suffix: " HOMES / FLOOR",
    label: "TRUE EXCLUSIVITY",
    sublabel: "Per floor density with dedicated private elevator cores.",
  },
];

export const PROJECT_PILLARS: Pillar[] = [
  {
    id: "luxury",
    title: "Luxury",
    subtitle: "Residences",
    iconName: "Home",
  },
  {
    id: "family",
    title: "Family Oriented",
    subtitle: "Spaces",
    iconName: "Users",
  },
  {
    id: "wellness",
    title: "Wellness",
    subtitle: "& Recreation",
    iconName: "HeartPulse",
  },
  {
    id: "community",
    title: "Vibrant",
    subtitle: "Community",
    iconName: "Globe",
  },
];

export const LOCATION_CATEGORIES: LocationCategory[] = [
  {
    id: "hospitals",
    category: "Hospitals & Healthcare",
    items: "Continental Hospital (4 mins), Care Hospitals (12 mins), Citizens Hospital (15 mins)",
    iconName: "Hospital",
  },
  {
    id: "education",
    category: "Education",
    items: "Oakridge International, The Gaudium, Keystone International, CHIREC (6–10 mins)",
    iconName: "GraduationCap",
  },
  {
    id: "business",
    category: "Business & Institutions",
    items: "Wipro Circle, Google HQ, Amazon Campus, Microsoft, US Consulate (3–8 mins)",
    iconName: "Briefcase",
  },
  {
    id: "entertainment",
    category: "Entertainment & Retail",
    items: "Inorbit Mall, Sarath City Capital Mall, Boulder Hills Golf Course (10–15 mins)",
    iconName: "Film",
  },
  {
    id: "connectivity",
    category: "Efficient Connectivity",
    items: "Direct access to Outer Ring Road (ORR) & Rajiv Gandhi Int'l Airport (25 mins)",
    iconName: "Compass",
  },
];

export const PROJECT_HIGHLIGHTS = [
  {
    id: "residence-type",
    title: "4BHK + STAFF ROOM",
    subtitle: "3600 SQ. FT.",
    iconName: "BedDouble",
  },
  {
    id: "scale",
    title: "5 TOWERS",
    subtitle: "61 FLOORS",
    iconName: "Building2",
  },
  {
    id: "amenities-area",
    title: "3.46+ LAKH SQ. FT.",
    subtitle: "OF AMENITIES",
    iconName: "Sparkles",
  },
  {
    id: "clubhouse-area",
    title: "55,000 SQ. FT.",
    subtitle: "CLUBHOUSE",
    iconName: "Crown",
  },
];



export const GRAND_ARRIVAL_FEATURES = [
  {
    title: "Vehicle Drop-Off",
    description: "Dedicated arrival porch and porte-cochère for every tower",
    iconName: "Car",
  },
  {
    title: "Water Feature",
    description: "Cascading reflective arrival pools with ambient night illumination",
    iconName: "Droplets",
  },
  {
    title: "Grand Entrance",
    description: "Bronze and stone architectural portals with security concierge",
    iconName: "DoorClosed",
  },
  {
    title: "Waiting Lounge",
    description: "Double-height climate-controlled luxury foyer for guests",
    iconName: "Armchair",
  },
];

