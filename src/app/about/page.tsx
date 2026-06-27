"use client";

import { useState } from "react";
import Link from "next/link";

import TopBarBackground from "@/components/ui/topbar-bg"
import TiltedCard from "@/components/ui/titled-card"
import CircularGallery from '@/components/ui/circular-gallery'
import CardFlip from "@/components/ui/card-flip"
import AvailableForRoles from "@/components/ui/available-for-roles"
import SOTM, { pastSongs } from "@/components/ui/sotm";
import { LiquidButton } from "@/components/ui/liquid-button";
import { TextAnimate } from "@/components/ui/text-animate"
import { SocialLinks } from "@/components/ui/social-links";
import Image from "next/image";

function SOTMSection() {
  const [showPast, setShowPast] = useState(false);

  return (
    <section className="my-16 flex flex-col items-center gap-6 px-4">
      <SOTM />
      <LiquidButton
        className="scale-75 font-bold text-xl"
        onClick={() => setShowPast((v) => !v)}
      >
        {showPast ? "Hide Past" : "View Past"}
      </LiquidButton>
      {showPast && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {pastSongs.map((song: typeof pastSongs[number]) => (
            <a
              key={song.month}
              href={song.spotifyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/25 bg-black hover:bg-white/25 transition-all shadow-xl h-28 flex items-center gap-4 px-4"
            >
              <Image
                src={song.albumCover}
                alt="Album cover"
                className="absolute inset-0 h-full w-full object-cover opacity-40 blur-sm"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-background/60" />
              <div className="relative z-10 flex items-center gap-4">
                <Image
                  src={song.albumCover}
                  alt={song.title}
                  className="rounded-md object-cover shadow-lg flex-shrink-0"
                  width={64}
                  height={64}
                />
                <div className="min-w-0">
                  <p className="text-xs text-white/50 uppercase tracking-wide">{song.month}</p>
                  <p className="font-semibold text-sm truncate">{song.title}</p>
                  <p className="text-xs text-white/75 truncate">{song.artist}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

export default function About() {
  return (
    <main className="relative pt-48 overflow-visible">
      <TopBarBackground imageUrl="/sea-wave.jpg" transparency={50} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6 items-center">
          {/* Headshot */}
          <div className="mx-auto">
            <TiltedCard
              imageSrc="/mm-outside.png"
              altText="Author"
              containerHeight="250px"
              containerWidth="250px"
              imageHeight="250px"
              imageWidth="250px"
              rotateAmplitude={10}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
              overlayContent={
                <p className="mt-64 ml-41 bg-black/50 p-2 shadow-lg rounded">
                  Montasir Moyen
                </p>
              }
            />
          </div>

          {/* Text Content */}
          <div className="mx-auto">
            <p className="text-sm text-white/50 uppercase md:px-8 sm:px-4 px-4">
              WHO AM I?
            </p>

            <div className="mt-2 flex flex-col items-start md:px-8 sm:px-4 px-4">
              <TextAnimate
                animation="blurInUp"
                by="character"
                className="text-3xl md:text-4xl lg:text-4xl font-bold font-hero"
              >
                I'm Montasir, a
              </TextAnimate>

              <TextAnimate
                animation="slideLeft"
                by="character"
                once
                className="text-3xl md:text-4xl lg:text-4xl font-bold font-hero 
               bg-gradient-to-r from-blue-500 to-purple-500 
               bg-clip-text text-transparent animate-gradient 
               bg-[length:200%_auto]">
                software engineer
              </TextAnimate>
            </div>

            {/* Paragraphs */}
            <div className="mt-2 space-y-4 text-base md:text-lg text-gray px-4 md:px-8 leading-relaxed">
              <p>
                You may also know me as Monty, I'm a Computer Science student at Suffolk University in Boston, MA.
              </p>
              <p>
                My journey into tech started in early middle school with my first computer, and I've been captivated ever since, continuing my knowledge into high school and university.
              </p>
              <p>
                In my free time, I channel my passion into creating software.
                Each project fuels my curiosity about the underlying technologies.
                Because of the constant skills involved in developing software, I never find myself growing tired or bored of it.
              </p>
              <p>
                Beyond coding, you'll find me playing fútbol or basketball or listening to music.
                I strive to learn & grow as a developer and am open to collaborations and new challenges.
              </p>
              <p>
                Thanks for reading!
                There is much more I share on here, so feel free to explore.
              </p>
              <p className="text-sm text-white/75">
                Let's connect:
              </p>
            </div>

            <SocialLinks className="mt-4 mb-2 justify-left items-left px-4 md:px-8 sm:px-4" iconClassName="hover:text-white/50" />

            <Link href="/blog"
              className="text-xl"
            >
              <LiquidButton className="scale-75 font-bold text-xl">
                Read my blogs
              </LiquidButton>
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-white/50 uppercase">
        Beyond the code
      </p>
      <p className="text-center text-3xl uppercase font-bold">
        Interests
      </p>

      <section className="overflow-visible w-full h-64 md:h-80 lg:h-96">
        <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </section>

      <SOTMSection />

      <p className="mt-10 text-center text-sm text-white/50 uppercase">
        The journey so far
      </p>
      <p className="text-center text-3xl uppercase font-bold">
        Experience
      </p>

      <section className="gap-10 flex flex-col md:flex-row justify-center items-center py-12 px-4">
        <CardFlip
          title="SWE Intern @ Cambridge Associates"
          subtitle="Jun 2026 - Aug 2026"
          description="Boston, MA, USA - Hybrid - Software Engineering Intern"
          features={[
            "TBD!"
          ]}
          image="/ca.webp"
        />

        <CardFlip
          title="SWE Intern @ Boston Airport Cab"
          subtitle="Dec 2025 - Jan 2026"
          description="Boston, MA, USA - Hybrid - Software Engineering Intern"
          features={[
            "Programmed and assisted in the full-stack development of their new and upcoming website",
            "Consulted internal software improvements to support web traffic from Boston Airport Cab’s 5M+ annual riders",
            "Conducted quality assurance testing to minimize bugs across 50+ daily reservation requests"
          ]}
          image="/bac.png"
        />

        <CardFlip
          title="SWE Intern @ CollegiateX"
          subtitle="Sep 2025 - Nov 2025"
          description="Boston, MA, USA - Hybrid - Software Engineering Intern"
          features={[
            "Built the mobile app version of CollegiateX’s platform for NCAA D1, D2 & D3 athletes and enterprise sponsors",
            "Implemented backend systems for user authentication, database architecture, and secure payment processing",
            "Collaborated on frontend development of the athlete and brand portals, including login/signup flows",
            "Conducted QA testing across the stack to ensure performance, security, and usability for high-traffic cases"
          ]}
          image="/cx.png"
        />
      </section>

      <section className="gap-10 flex flex-col md:flex-row justify-center items-center py-12 px-4">
        <CardFlip
          title="Vice President @ SPARC"
          subtitle="Aug 2026 - Present"
          description="Boston, MA, USA - Vice President"
          features={[
            "Project lead managing the development of software projects for the club",
          ]}
          image="/sparc-linkedin.png"
        />

        <CardFlip
          title="Research Assistant @ Suffolk University"
          subtitle="Jun 2026 - Aug 2026"
          description="Boston, MA, USA - Hybrid - Research Assistant"
          features={[
            "Engineering an AI agent that tutors students taking Probability & Statistics"
          ]}
          image="/su.png"
        />
      </section>

      <p className="mt-2 text-center text-sm text-white/50 uppercase">
        The building blocks
      </p>
      <p className="text-center text-3xl uppercase font-bold">
        Education
      </p>

      <section className="gap-10 flex flex-col md:flex-row justify-center items-center py-12 px-4">
        <CardFlip
          title="Suffolk University"
          subtitle="Aug 2023 - Anticipated May 2027"
          description="Boston, MA, USA"
          features={[
            "Relevant Coursework:",
            "Data Structures & Algorithms",
            "Object Oriented Programming",
            "Architecture of Computer Systems",
            "Operating Systems"
          ]}
          image="/su.png"
        />

        <CardFlip
          title="Medford High School"
          subtitle="Aug 2019 - May 2023"
          description="Medford, MA, USA"
          features={[
            "Relevant Coursework:",
            "AP Computer Science Principles",
            "AP Computer Science (Java)",
            "CMU CS Academy (Python)"
          ]}
          image="/mhs.png"
        />
      </section>

      <AvailableForRoles />
    </main>
  );
}

