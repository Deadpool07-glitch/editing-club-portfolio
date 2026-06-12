export interface Project {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  image: string;
  video?: string;
  tags: string[];
}

export interface ShortContent {
  id: string;
  title: string;
  views: string;
  category: string;
  image: string;
  duration: string;
}

export interface ServiceBlock {
  id: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
}

export interface ExperienceStat {
  id: string;
  metric: string;
  label: string;
  description: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  handle: string;
  url: string;
}
