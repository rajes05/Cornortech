export interface Feature {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export interface Tool {
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Template {
  id: string;
  title: string;
  image: string;
  category: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavigationItem {
  title: string;
  link?: string;
  children?: NavigationItem[];
}

export interface FooterSection {
  title: string;
  links: { title: string; link: string }[];
}