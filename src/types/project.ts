export interface TowerInfo {
  id: string;
  number: number;
  name: string;
  tagline: string;
  unitType: string;
  loungeTheme: string;
  loungeName: string;
  description: string;
  loungeImage: string;
  activities: string[];
}

export interface ClubhouseFloor {
  id: string;
  level: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  image: string;
  amenities: string[];
}

export interface ResidencePlan {
  id: string;
  towerTab: string;
  title: string;
  facing: string;
  configuration: string;
  ceilingHeight: string;
  superBuiltUpArea: string;
  reraCarpetArea: string;
  balconyArea: string;
  elevators: string;
  image: string;
  features: string[];
}

export interface SpecificationItem {
  id: string;
  number: string;
  category: string;
  description: string;
  details?: string[];
  iconName: string;
}

export interface LocationCategory {
  id: string;
  category: string;
  items: string;
  iconName: string;
}
