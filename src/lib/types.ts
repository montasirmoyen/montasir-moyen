import { type ElementType } from "react";

export type ProjectStatus = "completed" | "in-progress";

export interface Project {
  slug: string;
  title: string;
  logo?: string;
  primaryColor?: string;
  icon?: ElementType;
  iconClassName?: string;
  colors?: [string, string];
  category: string;
  image: string;
  carouselImages?: string[];
  date: string;
  status?: ProjectStatus;
  description: string;
  bullets?: string[];
  technologies: string[];
  githubUrl?: string;
  blogUrl?: string;
  liveUrl?: string;
  gameUrl?: string;
  promotionalUrl?: string;
  appStoreUrl?: string;
  overview?: string;
  problemItSolves?: string;
  keyFeatures?: {
    title: string;
    description: string;
  }[];
  challenges?: {
    title: string;
    description: string;
  }[];
  tradeoffs?: {
    title: string;
    description: string;
  }[];
  outcome?: string;
}

export interface Blog {
  slug: string;
  title: string;
  logo?: string;
  primaryColor?: string;
  icon?: ElementType;
  iconClassName?: string;
  heroBlog?: boolean;
  challenge?: boolean;
  collab?: boolean;
  collaborators?: {
    name: string;
    avatarImgUrl?: string;
  }[];
  mini?: boolean;
  writingType?: "devlog" | "personal";
  tags?: string[];
  category: string;
  image: string;
  date: string;
  status?: ProjectStatus;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  gameUrl?: string;
  projectUrl?: string;
  appStoreUrl?: string;
  promotionalUrl?: string;
  blogPosts: {
    date?: string;
    title: string;
    borderColor: string;
    content: ({
      type: "paragraph";
      content: string;
      link?: string;
      marginBottom?: number;
    } | {
      type: "bulletpoints";
      content: string[];
      marginBottom?: number;
    } | {
      type: "code";
      content: string[];
      marginBottom?: number;
    } | {
      type: "image";
      content: string[];
      scale?: number;
      marginBottom?: number;
    })[];
  }[];
  keyFeatures?: {
    title: string;
    description: string;
  }[];
  challenges?: {
    title: string;
    description: string;
  }[];
  outcome?: string;
}
