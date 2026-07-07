"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  BarChart,
  BarChart3,
  Calendar,
  Cpu,
  Globe2,
  Layers3,
  Trophy,
  Users2,
  Zap,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiRoblox } from "react-icons/si";

const PRIMARY = "#1c3aff";
const SECONDARY = "#e41869";

function useCountUp(target: number, durationMs = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setValue(Math.floor(eased * target));

          if (progress < 1) requestAnimationFrame(tick);
          else setValue(target);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { value, ref };
}

const SCALE_STATS = [
  {
    icon: Globe2,
    value: "100M+",
    label: "Total Ecosystem Visits",
  },
  {
    icon: Users2,
    value: "1.5M+",
    label: "Monthly Active Players",
  },
  {
    icon: Zap,
    value: "7,500+",
    label: "Peak Concurrent Users",
  },
  {
    icon: Trophy,
    value: "800K+",
    label: "Favorites",
  },
  {
    icon: Layers3,
    value: "237K+",
    label: "Community Members",
  },
  {
    icon: Cpu,
    value: "6-Figure",
    label: "Gross Revenue",
  },
];

const MOMENTS = [
  {
    value: "880K+",
    label: "New users gained in 24 hours",
    detail: "Pure Soccer · July 3, 2026",
  },
  {
    value: "40,000+",
    label: "Hours played in one day",
    detail: "Pure Soccer · July 4, 2026",
  },
  {
    value: "55K+",
    label: "Robux spent in one day (~300$ DevEx US 18+)",
    detail: "Pure Soccer · Dec 25, 2025",
  },
  {
    value: "100+",
    label: "Game creations influenced from the pioneering of 'Ro-Soccer'",
    detail: "MPS · Sep 1, 2021",
  },
];

const COMPARISON = [
  {
    label: "Total Visits",
    pureSoccer: 32,
    mps: 37,
    suffix: "M+",
  },
  {
    label: "Favorites",
    pureSoccer: 500,
    mps: 300,
    suffix: "K+",
  },
  {
    label: "Community",
    pureSoccer: 70,
    mps: 167,
    suffix: "K+",
  },
  {
    label: "Peak CCU",
    pureSoccer: 4000,
    mps: 3500,
    suffix: "+",
  },
];

const GAMES = [
  {
    name: "Pure Soccer",
    eyebrow: "5v5 Arcade Soccer",
    icon: "/ps.png",
    href: "https://www.roblox.com/games/88920112778598/Pure-Soccer",
    description:
      "Pure Soccer is an arcade-style 5v5 soccer experience featuring fast-paced gameplay and comprehensive cross-platform controls that deliver high-energy matches with frequent scoring opportunities.",
  },
  {
    name: "MPS",
    eyebrow: "Realistic 4v4 Soccer",
    icon: "/mps.png",
    href: "https://www.roblox.com/games/13436905139/MPS-4-a-side",
    caseStudyHref: "/projects/mps",
    description:
      "Experience modern fast-paced soccer like never before in MPS 4-a-side. Build your career through diverse game modes that realistically simulate different league structures, with responsive controls that empower creative playstyles.",
  },
];

export default function GamesPage() {
  const visits = useCountUp(100);

  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative px-6 pt-28 pb-20 sm:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#5B4FE033,transparent_35%),radial-gradient(circle_at_80%_20%,#8F7FFF22,transparent_30%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/55">
              <Calendar size={13} />
              Est. 2021
            </p>

            <a
              href="https://www.linkedin.com/company/montasirmoyen"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/55 transition hover:border-white/20 hover:text-white"
            >
              <FaLinkedin size={13} />
              LinkedIn
            </a>
          </div>

          <div className="mt-6 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-6xl font-hero tracking-tight flex items-center gap-4">
                <Image
                  src="/mm-logo.png"
                  alt="MM logo"
                  width={124}
                  height={124}
                />
                <span>Dev</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
                An independent digital production studio engineering massive multiplayer sports experiences on the Roblox platform.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                Ecosystem Reach
              </p>

              <div className="mt-5 flex items-end gap-2">
                <span
                  ref={visits.ref}
                  className="text-6xl font-semibold tabular-nums tracking-tight"
                >
                  {visits.value}
                </span>
                <span className="pb-2 text-3xl font-semibold text-white/80">
                  M+
                </span>
              </div>

              <p className="mt-3 text-sm text-white/45">
                Cumulative player visits across the catalog.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                Catalog
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Game Lineup
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {GAMES.map((game) => (
              <article
                key={game.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
              >
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="relative aspect-square w-24 h-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Image
                      src={game.icon}
                      alt={`${game.name} game icon`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-1">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/42">
                      {game.eyebrow}
                    </p>

                    <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                      {game.name}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-white/48">
                      {game.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={game.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/65 transition hover:border-white/20 hover:text-white"
                      >
                        <SiRoblox size={14} />
                        View Game
                        <ArrowUpRight size={14} />
                      </a>

                      {game.caseStudyHref && (
                        <a
                          href={game.caseStudyHref}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/65 transition hover:border-white/20 hover:text-white"
                        >
                          Case Study
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 mb-25">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                Scale
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                The Stats
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SCALE_STATS.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
                >
                  <Icon className="text-white/40" size={20} />
                  <div className="mt-5 text-3xl font-semibold tracking-tight">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/42">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <BarChart3 size={18} className="text-white/45" />
                <h2 className="text-2xl font-semibold tracking-tight">
                  As It Stands
                </h2>
              </div>

              <div className="mt-8 space-y-7">
                {COMPARISON.map((row) => {
                  const max = Math.max(row.pureSoccer, row.mps);

                  return (
                    <div key={row.label}>
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <p className="text-xs uppercase tracking-[0.14em] text-white/45">
                          {row.label}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <BarRow
                          name="Pure Soccer"
                          value={`${row.pureSoccer.toLocaleString()}${row.suffix}`}
                          width={(row.pureSoccer / max) * 100}
                          color={PRIMARY}
                        />
                        <BarRow
                          name="MPS"
                          value={`${row.mps.toLocaleString()}${row.suffix}`}
                          width={(row.mps / max) * 100}
                          color={SECONDARY}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <BarChart size={18} className="text-white/45" />
                <h2 className="text-2xl font-semibold tracking-tight">
                  Peak Moments
                </h2>
              </div>

              <div className="mt-8 space-y-6">
                {MOMENTS.map((moment) => (
                  <div
                    key={moment.label}
                    className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
                  >
                    <div className="text-3xl font-semibold tracking-tight">
                      {moment.value}
                    </div>
                    <p className="mt-2 text-sm text-white/65">
                      {moment.label}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.13em] text-white/35">
                      {moment.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-white/50">All stats verified and sourced from create.roblox.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function BarRow({
  name,
  value,
  width,
  color,
}: {
  name: string;
  value: string;
  width: number;
  color: string;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-4 text-xs">
        <span className="text-white">{name}</span>
        <span className="tabular-nums text-white">{value}</span>
      </div>

      <div className="h-2.5 overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full"
          style={{
            width: `${width}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}