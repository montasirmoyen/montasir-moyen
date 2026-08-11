import React from "react";
import type { ProjectStatus } from "./types";

export type SharedProjectSummary = {
  title: string;
  logo?: string;
  primaryColor?: string;
  icon?: React.ElementType;
  iconClassName?: string;
  category: string;
  date: string;
  description: string;
  technologies: string[];
  status?: ProjectStatus;
  blogUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  gameUrl?: string;
  projectUrl?: string;
  appStoreUrl?: string;
  promotionalUrl?: string;
};

export const projectSummaries: Record<string, SharedProjectSummary> = {
  engba: {
    title: "EnGBA",
    logo: "/engba-logo-4.png",
    primaryColor: "#1dbbff",
    category: "Emulator Development",
    date: "April 2026",
    description: "A C++ Game Boy Advance emulator focusing on accurate emulation and modern architecture.",
    technologies: ["C++", "C", "Python", "Bash", "CMake", "SDL2", "FFmpeg"],
    status: "in-progress",
    blogUrl: "https://montasirmoyen.com/blog/engba",
    githubUrl: "https://github.com/montasirmoyen/engba"
  },
  ramai: {
    title: "RamAI",
    logo: "/ramai-logo.png",
    primaryColor: "#533cff",
    category: "AI & Full-Stack Development",
    date: "January 2026",
    description:
      "A specialized AI-powered assistant designed to provide Suffolk University students with grounded academic guidance and comparisons of professors based on data and review evidence.",
    technologies: ["TypeScript", "Python", "JSON", "Data Engineering", "AI Integration", "Auditing"],
    status: "completed",
    blogUrl: "https://montasirmoyen.com/blog/ramai",
    liveUrl: "https://ram-ai.xyz/",
    projectUrl: "https://montasirmoyen.com/projects/ramai",
  },
  mps: {
    title: "MPS",
    logo: "/mps-logo.png",
    primaryColor: "#ffffff",
    category: "Game Development",
    date: "August 2021 — December 2023",
    description: "A fast-paced multiplayer soccer game with 50+ real life teams.",
    technologies: ["Lua", "JavaScript", "JSON", "RBLX Studio", "Entrepreneurship"],
    status: "completed",
    gameUrl: "https://www.roblox.com/games/13436905139/MPS-4-a-side",
  },
  infinitecode: {
    title: "InfiniteCode",
    primaryColor: "#fc0037",
    logo: "/ic-logo.png",
    category: "AI & Full-Stack Development",
    date: "February 2026",
    description: "An application providing endless coding practice powered by curated challenges and unprecedented AI-generated problems.",
    technologies: ["TypeScript", "Python", "PostgreSQL", "Supabase", "AI Integration"],
    status: "completed",
    blogUrl: "https://montasirmoyen.com/blog/infinitecode",
    liveUrl: "https://infinitecodex.xyz",
  },
  resumexp: {
    title: "ResumeXP",
    logo: "/rxp-logo.png",
    iconClassName: "text-green-400",
    primaryColor: "#1ee25c",
    category: "AI & Full-Stack Development",
    date: "January 2026",
    description: "An AI-powered application to help users maximize their resume potential in seconds.",
    technologies: ["TypeScript", "React", "Next", "Firebase", "AI Integration"],
    status: "completed",
    blogUrl: "https://montasirmoyen.com/blog/resumexp",
    liveUrl: "https://resumexp.xyz/",
    githubUrl: "https://github.com/montasirmoyen/resumexp",
    projectUrl: "https://montasirmoyen.com/projects/resumexp",
  },
  scentdex: {
    title: "ScentDex",
    logo: "/sd-logo.png",
    iconClassName: "text-white",
    primaryColor: "#ffffff",
    category: "AI & Full-Stack Development",
    date: "September 2025",
    description: "Browse, study and filter the most popular fragrances from the most luxurious brands.",
    technologies: ["TypeScript", "React", "Next", "Node.js", "JSON", "AI Integration"],
    status: "completed",
    liveUrl: "https://scentdex.vercel.app",
    githubUrl: "https://github.com/montasirmoyen/scentdex/",
  },
  uninext: {
    title: "UniNext",
    logo: "/uninext.png",
    primaryColor: "#00c8ff",
    category: "iOS Development",
    date: "May 2026",
    description: "An iOS app designed to help students plan their academic journey with a structured, data-driven approach to course selection and scheduling.",
    technologies: ["TypeScript"],
    status: "completed",
    appStoreUrl: "https://apps.apple.com/us/app/uninext/id6767950128",
    promotionalUrl: "https://montasirmoyen.com/uninext"
  },
  chess: {
    title: "Chess",
    category: "Web Development",
    date: "March 25, 2026",
    description: "A classic chess game in Next.js featuring a sleek design and smooth gameplay.",
    technologies: ["TypeScript", "React", "Next"],
    status: "in-progress",
    githubUrl: "https://github.com/montasirmoyen/chess",
  },
  "domain-expansion": {
    title: "Domain Expansion",
    category: "Computer Vision/ML Development",
    date: "March 15, 2026",
    description: "A real-time computer vision application using hand tracking to identify Jujutsu Kaisen \"Domain Expansion\" gestures via webcam and trigger on-screen overlays.",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    status: "in-progress",
    githubUrl: "https://github.com/montasirmoyen/domain-expansion",
    liveUrl: "https://domain-expansion-jjk.vercel.app/",
  },
  "ask-cli": {
    title: "Ask CLI",
    category: "CLI Development",
    date: "March 21, 2026",
    description: "A CLI tool that lets you ask questions about your code directly from the terminal.",
    technologies: ["Rust"],
    status: "in-progress",
    githubUrl: "https://github.com/montasirmoyen/ask-cli",
  },
  aiflash: {
    title: "AIFlash",
    category: "Full-Stack Cloud Development",
    date: "Mar 18, 2026",
    description:
      "Serverless app utilizing generative AI to transform raw study notes into interactive flashcards. Built with an Angular frontend and a scalable AWS backend, it features 3D card animations and real time AI processing via OpenRouter.",
    technologies: ["Angular", "AWS", "Amplify", "Lambda", "Node.js", "S3", "AI Integration"],
    status: "completed",
    liveUrl: "https://staging.d1gk5r8nqlxue7.amplifyapp.com/",
    githubUrl: "https://github.com/montasirmoyen/aiflash",
  },
  crawler: {
    title: "Crawler",
    category: "Systems Development",
    date: "March 13, 2026",
    description:
      "A high-performance application designed to recursively traverse the web by leveraging a multi-threaded architecture and robust synchronization primitives for concurrency and resource management.",
    technologies: ["C++", "CMake"],
    status: "completed",
    githubUrl: "https://github.com/montasirmoyen/crawler",
  },
  urb: {
    title: "URB",
    category: "Backend Development",
    date: "February 26, 2026",
    description: "Universal Room Booker: a scalable backend system for managing reservable rooms with safe and concurrent booking logic.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Maven", "Docker"],
    status: "completed",
    githubUrl: "https://github.com/montasirmoyen/urb",
  },
  "summer-2026": {
    title: "Summer 2026",
    category: "Personal",
    date: "April 2026",
    description: "Looking forward to my summer.",
    technologies: [],
  },
};
