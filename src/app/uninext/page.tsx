"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  TrendingUp,
  LayoutGrid,
  Moon,
  Bell,
  Apple,
  Mail,
  ChevronRight,
  Shield,
  FileText,
} from "lucide-react";
import { FaGithub, FaAppStoreIos } from "react-icons/fa";

import AnimatedContent from "@/components/ui/animated-content";
import { AuroraText } from "@/components/ui/aurora-text";

const BLUE_COLORS = ["#1d6feb", "#3b9eff", "#0a4fcf"];

const features = [
  {
    icon: GraduationCap,
    title: "Degree Planning",
    desc: "Build your personalized degree plan term by term. Set credit targets, define requirement categories, and track your path to graduation.",
    screen: "/uninext/degree-setup.png",
    screenAlt: "Degree Setup screen",
  },
  {
    icon: BookOpen,
    title: "Course Tracking",
    desc: "Track completed, in-progress, and upcoming courses in one place. Filter by status, category, or term at a glance.",
    screen: "/uninext/courses.png",
    screenAlt: "Courses screen",
  },
  {
    icon: TrendingUp,
    title: "GPA Monitoring",
    desc: "Monitor your cumulative GPA across your entire degree as you add and complete courses, always up to date.",
    screen: "/uninext/dashboard.png",
    screenAlt: "Dashboard screen",
  },
  {
    icon: LayoutGrid,
    title: "Term Planner",
    desc: "Organize every course into academic terms. See exactly how many credits you're taking each semester.",
    screen: "/uninext/planner.png",
    screenAlt: "Planner screen",
  },
  {
    icon: Bell,
    title: "Registration Reminders",
    desc: "Set reminders for course registration windows so you never miss your enrollment date.",
    screen: "/uninext/reminder.png",
    screenAlt: "Reminder screen",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    desc: "Clean, minimal interface built for late-night study sessions. Adjust GPA scale and preferences from the Profile tab.",
    screen: "/uninext/settings.png",
    screenAlt: "Settings screen",
  },
];

const stats = [
  { value: "Free", label: "No cost, no ads" },
  { value: "iOS", label: "iPhone & iPad" },
  { value: "Offline", label: "Works without internet" },
  { value: "Secure", label: "Cloud-backed sync" },
];

export default function UniNextPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="size-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        </div>
        {/* Grid lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <AnimatedContent distance={40} duration={0.7} animateOpacity initialOpacity={0} threshold={0.1}>
          <div className="relative size-20 md:size-24 mx-auto mb-6">
            <Image src="/uninext.png" alt="UniNext" fill className="rounded-3xl object-cover shadow-2xl shadow-blue-900/40" />
          </div>
        </AnimatedContent>

        <AnimatedContent distance={30} duration={0.8} delay={0.1} animateOpacity initialOpacity={0} threshold={0.1}>
          <p className="text-white/40 text-sm uppercase tracking-[0.25em] mb-4">UniNext</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-2">
            Plan Your Degree,
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            <AuroraText colors={BLUE_COLORS}>Your Way</AuroraText>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
            UniNext helps university students plan their entire degree from start to finish, all in one place.
          </p>
        </AnimatedContent>

        <AnimatedContent distance={20} duration={0.7} delay={0.25} animateOpacity initialOpacity={0} threshold={0.1}>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/uninext/id6767950128"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-black font-semibold px-6 py-3.5 rounded-2xl hover:bg-white/90 transition-all shadow-lg shadow-white/10 text-sm"
            >
              <FaAppStoreIos size={20} />
              Download on the App Store
            </a>
            <span className="text-white/30 text-sm">Free · No ads</span>
          </div>
        </AnimatedContent>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* ── Hero screenshot ── */}
      <section className="flex justify-center px-6 -mt-10 mb-24">
        <AnimatedContent distance={60} duration={0.9} animateOpacity initialOpacity={0} threshold={0.1}>
          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-blue-500/20 blur-3xl scale-95" />
            <div className="relative w-60 md:w-72 aspect-[9/19.5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <Image
                src="/uninext/dashboard.png"
                alt="UniNext Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* ── Stats strip ── */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label }) => (
            <AnimatedContent key={value} distance={20} duration={0.6} animateOpacity initialOpacity={0} threshold={0.2}>
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 text-center hover:bg-white/[0.07] transition-colors">
                <p className="text-2xl font-bold text-white mb-1">{value}</p>
                <p className="text-white/50 text-sm">{label}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <AnimatedContent distance={30} duration={0.7} animateOpacity initialOpacity={0} threshold={0.2}>
          <div className="text-center mb-16">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything you need,{" "}
              <AuroraText colors={BLUE_COLORS}>nothing you don&apos;t.</AuroraText>
            </h2>
          </div>
        </AnimatedContent>

        <div className="space-y-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isEven = i % 2 === 0;
            return (
              <AnimatedContent
                key={f.title}
                distance={40}
                direction="horizontal"
                reverse={!isEven}
                duration={0.75}
                animateOpacity
                initialOpacity={0}
                threshold={0.15}
              >
                <div className={`flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} items-center gap-8 md:gap-16 bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/[0.05] transition-colors`}>
                  {/* Text */}
                  <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center justify-center size-12 rounded-2xl bg-blue-500/15 border border-blue-500/20">
                      <Icon size={22} className="text-blue-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{f.title}</h3>
                    <p className="text-white/60 leading-relaxed">{f.desc}</p>
                  </div>
                  {/* Screenshot */}
                  <div className="shrink-0 relative">
                    <div className="absolute inset-0 rounded-[2rem] bg-blue-500/15 blur-2xl scale-90" />
                    <div className="relative w-44 md:w-52 aspect-[9/19.5] rounded-[2rem] overflow-hidden border border-white/10 shadow-xl">
                      <Image src={f.screen} alt={f.screenAlt} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            );
          })}
        </div>
      </section>

      {/* ── Tech / trust ── */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <AnimatedContent distance={30} duration={0.7} animateOpacity initialOpacity={0} threshold={0.2}>
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-6">Built with care</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Framework", value: "React Native (Expo)" },
                { label: "Storage", value: "Google Firebase Firestore" },
                { label: "Auth", value: "Google Firebase Authentication" },
                { label: "Platform", value: "iPhone & iPad (iOS)" },
                { label: "Sync", value: "Cross-device via account login" },
                { label: "Offline", value: "AsyncStorage, works without internet" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="size-1.5 rounded-full bg-blue-400 shrink-0 mt-2" />
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-white/80 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* ── CTA ── */}
      <section className="relative px-6 mb-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="size-[500px] rounded-full bg-blue-700/10 blur-[100px]" />
        </div>
        <AnimatedContent distance={30} duration={0.8} animateOpacity initialOpacity={0} threshold={0.2}>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Your entire degree.{" "}
              <AuroraText colors={BLUE_COLORS}>One app.</AuroraText>
            </h2>
            <p className="text-white/50 text-lg">Free to use. No ads. Just your degree, organized.</p>
            <a
              href="https://apps.apple.com/us/app/uninext/id6767950128"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-blue-900/30 text-sm"
            >
              <FaAppStoreIos size={20} />
              Download on the App Store
              <ChevronRight size={16} className="opacity-70" />
            </a>
          </div>
        </AnimatedContent>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative size-9 shrink-0">
              <Image src="/uninext.png" alt="UniNext" fill className="rounded-xl object-cover" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">UniNext</p>
              <p className="text-white/40 text-xs">Plan Your Degree, Your Way</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/50">
            <Link href="/uninext/privacy-policy" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Shield size={13} />Privacy Policy
            </Link>
            <Link href="/uninext/terms-of-use" className="hover:text-white transition-colors flex items-center gap-1.5">
              <FileText size={13} />Terms of Use
            </Link>
            <a
              href="https://github.com/montasirmoyen/uninext-support"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FaGithub size={13} />Support
            </a>
            <a
              href="mailto:uninextsupport@gmail.com"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail size={13} />Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/75">
          <p>© 2026 UniNext. All rights reserved.</p>
          <a
            href="https://montasirmoyen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group hover:text-white transition-colors"
          >
            <div className="relative size-5 shrink-0">
              <Image src="/mm-logo.png" alt="Montasir Moyen" fill className="rounded object-cover" unoptimized />
            </div>
            <span>montasirmoyen.com</span>
          </a>
          <p>Not affiliated with any university or institution.</p>
        </div>
      </footer>
    </div>
  );
}
