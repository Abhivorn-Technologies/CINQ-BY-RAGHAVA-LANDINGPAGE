export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  numericValue: number;
  decimals?: number;
  suffix?: string;
  label: string;
  sublabel?: string;
}

export interface AmenityHighlight {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}
