"use client";

import Image from "next/image";
import Link from "next/link";

import { ExternalLink, Star } from "lucide-react";
import { FaGithub, FaAppStoreIos } from "react-icons/fa";

import { projects } from "@/lib/projects";

import TechStack from "@/components/ui/tech-stack";
import AvailableForRoles from "@/components/ui/available-for-roles"
import TopBarBackground from "@/components/ui/topbar-bg";
import { TextAnimate } from "@/components/ui/text-animate"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Separator } from "@/components/ui/separator";
import TitleMark from "@/components/ui/title-mark";

export default function ProjectsPage() {
  return (
    <div className="pt-32 px-4 md:px-6">
      <TopBarBackground transparency={50} imageUrl="dark-wapper.jpg" />
      <div className="max-w-7xl mx-auto mb-24">
        {/* Header */}
        <div className="mb-2">
          <p className="text-sm text-white/50 uppercase mb-2">
            FEATURED PROJECTS
          </p>
          <div className="flex flex-col items-start">
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="text-5xl md:text-6xl font-bold font-hero"
            >
              Curated project
            </TextAnimate>

            <TextAnimate
              animation="slideLeft"
              once
              by="character"
              className="text-5xl md:text-6xl font-bold font-hero 
               bg-gradient-to-r from-blue-500 to-purple-500 
               bg-clip-text text-transparent animate-gradient 
               bg-[length:200%_auto]">
              showcases
            </TextAnimate>
          </div>
        </div>

        {/* Projects List */}
        <div className="mt-12 space-y-10 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image - Left Side */}
              <BackgroundGradient colors={project.colors}>
                <Link href={`/projects/${project.slug}`}
                  className="group">
                  <div className="aspect-video overflow-hidden transition-all">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-3xl object-cover"
                      unoptimized
                    />
                  </div>
                </Link>
              </BackgroundGradient>

              {/* Content - Right Side */}
              <div className="space-y-4 leading-loose">
                <div>
                  <p className="text-sm text-gray-400 uppercase mb-2">
                    {project.category}
                  </p>
                  <div className="flex items-center gap-3">
                    <TitleMark
                      logo={project.logo}
                      title={project.title}
                      icon={project.icon}
                      iconClassName={project.iconClassName}
                      size="card"
                    />
                    <h2 className="text-4xl md:text-5xl font-hero font-bold">
                      {project.title}
                    </h2>
                  </div>
                  <Separator className="my-4 bg-white/20" />
                  <p className="text-gray-300">
                    {project.description}
                  </p>
                </div>

                {/* Bullet Points 
                <ul className="space-y-2">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span
                        style={{ color: project.colors ? project.colors[1] : "#fff" }}
                        className="font-bold">❖</span>
                      <span className="text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>*/}

                {/* Technologies */}
                <div className="gap-2 pt-2">
                  <TechStack technologies={project.technologies} hover={false} />
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      Visit Live Demo
                    </Link>
                  )}
                  {project.appStoreUrl && (
                    <Link
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <FaAppStoreIos size={16} />
                      Download on App Store
                    </Link>
                  )}
                  {project.promotionalUrl && (
                    <Link
                      href={project.promotionalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <Star size={16} fill="currentColor" />
                      View Promotional Page
                    </Link>
                  )}
                  {project.gameUrl && (
                    <Link
                      href={project.gameUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Game
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      <FaGithub size={16} />
                      View Source Code
                    </Link>
                  )}
                </div>

                {/* Date */}
                <p className="text-xs text-gray-500 pt-2">
                  {project.date}
                  {project.status === "in-progress" && (
                    <span className="ml-2 px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-500">
                      Work In Progress
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AvailableForRoles />
    </div>
  );
}