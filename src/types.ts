export interface Project {
  id: string;
  category: "Web apps" | "Developer tools" | "Mobile";
  featured: boolean;
  role: string;
  delivery: string;
  liveLabel?: string;
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  tags: string[];
  highlights: string[];
  github?: string;
  live?: string;
  status: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  highlights: string[];
}
