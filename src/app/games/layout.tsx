import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Games - Montasir Moyen",
  },
  description:
    "Learn about my personal brand and the games I've worked on.",
  alternates: {
    canonical: "/games",
  },
};

export default function GamesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
