export interface Project {
  name: string;
  description: string;
  url: string;
  tech: string[];
  isPublic?: boolean;
}

export const projects: Project[] = [
  {
    name: "next-blog",
    description: "A blog platform built with Next.js 15.",
    url: "https://github.com/wugxxx/next-blog",
    tech: ["Next.js", "TypeScript"],
    isPublic: true
  },
  {
    name: "nextjs-dashboard",
    description: "The example for the Next.js Learn Course",
    url: "https://github.com/wugxxx/nextjs-dashboard",
    tech: ["Next.js", "Tailwind CSS"],
    isPublic: true
  }
]; 