"use client";

import { notFound } from "next/navigation";
import Link from "next/link";

import { use } from "react";

import { ArrowLeft, ArrowRight, ExternalLink, Notebook, Star } from "lucide-react";
import { FaGithub, FaAppStoreIos } from "react-icons/fa";

import { getProjectBySlug, projects, getBlogBySlug } from "@/lib/projects";

import TopBarBackground from "@/components/ui/topbar-bg"
import AvailableForRoles from "@/components/ui/available-for-roles"
import TechStack from "@/components/ui/tech-stack";
import { ContentNavigator } from "@/components/ui/content-navigator";
import TitleMark from "@/components/ui/title-mark";
import { MotionCarousel } from '@/components/animate-ui/components/community/motion-carousel';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/animate-ui/components/radix/accordion';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <ProjectDetailContent
      project={project}
      previousProject={previousProject}
      nextProject={nextProject}
    />
  );
}

function ProjectDetailContent({
  project,
  previousProject,
  nextProject,
}: {
  project: any;
  previousProject: any | null;
  nextProject: any | null;
}) {
  const blogSlug = project.blogUrl?.split('/').pop();
  const relatedBlog = blogSlug ? getBlogBySlug(blogSlug) : undefined;
  const firstPost = relatedBlog?.blogPosts?.[0];

  const getBlogPath = (url: string): string => {
    try { return new URL(url).pathname; } catch { return url; }
  };

  return (
    <div className="pt-32 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <TopBarBackground transparency={25} imageUrl={project.image} />

        <div className="mb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 bg-black/40 text-sm text-gray-200 hover:text-white hover:border-white/35 hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <TitleMark
                  logo={project.logo}
                  title={project.title}
                  icon={project.icon}
                  iconClassName={project.iconClassName}
                  size="detail"
                />
                <h1 className="text-4xl md:text-5xl font-bold font-hero">
                  {project.title}
                </h1>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>
            {(project.liveUrl || project.gameUrl) && (
              <Link
                href={project.liveUrl || project.gameUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
              >
                Visit {project.liveUrl ? "Live Demo" : "Game"}
                <ExternalLink size={16} />
              </Link>
            )}
          </div>

          {/* Date and Links */}
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-sm text-gray-500">{project.date}</p>
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub size={16} />
                Source Code
              </Link>
            )}
            {project.blogUrl && (
              <Link
                href={project.blogUrl}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Notebook size={16} />
                Dev Blog
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
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
          </div>
        </div>

        {/* Tech Stack Tags */}
        <section id="tech-stack" className="mb-12 scroll-mt-32">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <TechStack technologies={project.technologies} />
        </section>

        {/* Project Image */}
        {project.carouselImages && project.carouselImages.length > 0 && (
          <section className="mb-16">
            <MotionCarousel
              slides={project.carouselImages}
              options={{ loop: true }}
            />
          </section>
        )}

        <div className="flex gap-8 relative">
          {/* Main Content */}
          <div className="flex-1 space-y-12 min-w-0">
            {project.problemItSolves && (
              <section id="problem" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-4">Problem</h2>
                <p className="text-gray-300 leading-relaxed">{project.problemItSolves}</p>
              </section>
            )}

            {project.overview && (
              <section id="overview" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-300 leading-relaxed">{project.overview}</p>
              </section>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
              <section id="key-features" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <Accordion type="multiple">
                  {project.keyFeatures.map((feature: any, index: number) => (
                    <AccordionItem
                      key={index}
                      value={`feature-${index}`}
                      className="border-b border-white/10 overflow-hidden"
                    >
                      <AccordionTrigger
                        className="w-full flex items-center
                           justify-between p-4 
                        hover:bg-white/5 transition-colors text-left">
                        <h3 className="font-semibold text-white">{feature.title}</h3>
                      </AccordionTrigger>
                      <AccordionContent className="p-4 border-t border-white/10">
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            {/* Challenges */}
            {project.challenges && (
              <section id="challenges" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-6">Challenges</h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge: any, index: number) => (
                    <div key={index} className="border-l-2 border-yellow-500 pl-4">
                      <h3 className="font-semibold text-white mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tradeoffs */}
            {project.tradeoffs && (
              <section id="tradeoffs" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-6">Tradeoffs</h2>
                <div className="space-y-6">
                  {project.tradeoffs.map((tradeoff: any, index: number) => (
                    <div key={index} className="border-l-2 border-teal-500 pl-4">
                      <h3 className="font-semibold text-white mb-2">
                        {tradeoff.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {tradeoff.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Outcome */}
            {project.outcome && (
              <section id="outcome" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-4">Outcome</h2>
                <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
              </section>
            )}

            {/* Dev Blog Preview */}
            {firstPost && (
              <section id="dev-blog-preview" className="scroll-mt-32">
                <h2 className="text-2xl font-bold mb-4">Dev Blog</h2>
                <div className="rounded-xl border border-white/10 bg-white/2 overflow-hidden">
                  <div
                    className="border-l-2 px-6 pt-6 pb-0"
                    style={{ borderLeftColor: firstPost.borderColor }}
                  >
                    <p className="text-xs text-gray-500 mb-1">{firstPost.date}</p>
                    <h3 className="text-lg font-semibold text-white mb-4">{firstPost.title}</h3>
                    <div className="relative max-h-44 overflow-hidden">
                      <div className="space-y-3">
                        {firstPost.content
                          .filter((c: any) => c.type === 'paragraph')
                          .map((c: any, i: number) => (
                            <p key={i} className="text-gray-300 leading-relaxed text-sm">
                              {c.content.trim()}
                            </p>
                          ))
                        }
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black to-transparent pointer-events-none" />
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <Link
                      href={getBlogPath(project.blogUrl)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-sm text-gray-200 hover:text-white hover:border-white/40 hover:bg-white/10 transition-colors"
                    >
                      <Notebook size={16} />
                      Read Dev Blog
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Table of Contents */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-32">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">On this project</h3>
              <nav className="space-y-2">
                <a href="#tech-stack" className="block text-sm text-gray-400 hover:text-white transition-colors py-1">Tech Stack</a>
                {project.problemItSolves && (
                  <a href="#problem" className="block text-sm text-gray-400 hover:text-white transition-colors py-1">Problem</a>
                )}
                {project.overview && (
                  <a href="#overview" className="block text-sm text-gray-400 hover:text-white transition-colors py-1">Overview</a>
                )}
                {project.keyFeatures && (
                  <a href="#key-features" className="block text-sm text-gray-400 hover:text-white transition-colors py-1">Key Features</a>
                )}
                {project.challenges && (
                  <a href="#challenges" className="block text-sm text-gray-400 hover:text-white transition-colors py-1">Challenges</a>
                )}
                {project.tradeoffs && (
                  <a href="#tradeoffs" className="block text-sm text-gray-400 hover:text-white transition-colors py-1">Tradeoffs</a>
                )}
                {project.outcome && (
                  <a href="#outcome" className="block text-sm text-gray-400 hover:text-white transition-colors py-1">Outcome</a>
                )}
                {firstPost && (
                  <a href="#dev-blog-preview" className="block text-sm text-gray-400 hover:text-white transition-colors py-1">Dev Blog</a>
                )}
                {(previousProject || nextProject) && (
                  <a href="#more" className="block text-sm text-gray-400 hover:text-white transition-colors py-1">More Projects</a>
                )}
              </nav>
            </div>
          </aside>
        </div>

        <p className="text-sm text-white/50 italic py-6">
          — Montasir
        </p>

        <section id="more" className="scroll-mt-32 mb-18">
          <ContentNavigator
            previous={previousProject}
            next={nextProject}
            basePath="/projects"
            itemLabel="project"
            nextLabelColor="text-emerald-300/90"
          />
        </section>
      </div>

      <AvailableForRoles />
    </div>
  );
}