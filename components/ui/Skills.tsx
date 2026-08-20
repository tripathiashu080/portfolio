"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Braces, Code2, Layers3, Sparkles, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: "React.js",
    level: 92,
    category: "Frontend",
    icon: "⚛",
  },
  {
    name: "Next.js",
    level: 90,
    category: "Framework",
    icon: "N",
  },
  {
    name: "JavaScript",
    level: 94,
    category: "Language",
    icon: "JS",
  },
  {
    name: "TypeScript",
    level: 82,
    category: "Language",
    icon: "TS",
  },
  {
    name: "Tailwind CSS",
    level: 91,
    category: "Styling",
    icon: "TW",
  },
  {
    name: "GSAP",
    level: 84,
    category: "Animation",
    icon: "G",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    description:
      "Reusable components, scalable structures and maintainable React applications.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Code splitting, lazy loading, caching and performance-focused development.",
  },
  {
    icon: Layers3,
    title: "Responsive UI",
    description:
      "Pixel-focused interfaces that work smoothly across devices and screen sizes.",
  },
  {
    icon: Sparkles,
    title: "Motion & Interaction",
    description:
      "GSAP and Framer Motion animations that make interfaces feel alive.",
  },
];

export function Skills() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const section = root.current!;

      gsap.set(".skills-label", {
        opacity: 0,
        y: 25,
      });

      gsap.set(".skills-title-line", {
        opacity: 0,
        y: 70,
      });

      gsap.set(".skills-description", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".skill-card", {
        opacity: 0,
        y: 60,
        scale: 0.92,
      });

      gsap.set(".skill-progress", {
        width: "0%",
      });

      gsap.set(".capability-card", {
        opacity: 0,
        y: 50,
      });

      gsap.set(".skill-badge", {
        opacity: 0,
        scale: 0,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      timeline
        .to(".skills-label", {
          opacity: 1,
          y: 0,
          duration: 0.5,
        })
        .to(
          ".skills-title-line",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=.25",
        )
        .to(
          ".skills-description",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=.45",
        )
        .to(
          ".skill-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: "back.out(1.4)",
          },
          "-=.25",
        )
        .to(
          ".skill-progress",
          {
            width: (index) => `${skills[index].level}%`,
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=.5",
        )
        .to(
          ".capability-card",
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=.5",
        )
        .to(
          ".skill-badge",
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.8)",
          },
          "-=.4",
        );

      gsap.to(".skills-glow", {
        x: 50,
        y: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".skills-ring", {
        rotate: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      gsap.utils
        .toArray<HTMLElement>(".skill-badge")
        .forEach((badge, index) => {
          gsap.to(badge, {
            y: index % 2 === 0 ? -12 : 12,
            duration: 2.5 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      const cards = section.querySelectorAll<HTMLElement>(".skill-card");

      cards.forEach((card) => {
        const enter = () => {
          gsap.to(card, {
            y: -8,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="skills"
      className="relative overflow-hidden py-32 md:py-40"
    >
      <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="skills-glow pointer-events-none absolute left-[-150px] top-[20%] h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="skills-ring pointer-events-none absolute left-[-220px] top-[5%] h-[500px] w-[500px] rounded-full border border-purple-500/[0.07]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-4xl">
          <div className="skills-label mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-purple-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
              Skills & Expertise
            </span>
          </div>

          <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-7xl">
            <span className="skills-title-line block">Tools I use to</span>

            <span className="skills-title-line text-gradient block">
              build better products.
            </span>
          </h2>

          <p className="skills-description mt-7 max-w-2xl text-base leading-8 text-white/45 md:text-lg">
            My core stack revolves around React, Next.js and JavaScript,
            combined with modern styling and animation tools to create fast and
            engaging interfaces.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-card group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-purple-400/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/[0.08] bg-black/30 font-bold text-purple-300">
                      {skill.icon}
                    </div>

                    <div>
                      <h3 className="font-bold text-white">{skill.name}</h3>

                      <p className="mt-1 text-xs text-white/30">
                        {skill.category}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-sm text-purple-300">
                    {skill.level}%
                  </span>
                </div>

                <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="skill-progress h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-400 shadow-[0_0_15px_rgba(168,85,247,.6)]" />
                </div>

                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-500/10 opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-purple-500/[0.08] via-black/20 to-blue-500/[0.04]">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[90px]" />

            <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-purple-400/20 bg-black/60 shadow-[0_0_70px_rgba(124,58,237,.25)] backdrop-blur-xl">
              <Braces size={48} className="text-purple-300" />
            </div>

            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/10" />

            <div className="absolute left-1/2 top-1/2 h-[220px] w-[360px] -translate-x-1/2 -translate-y-1/2 rotate-[-20deg] rounded-[50%] border border-blue-400/10" />

            <div className="skill-badge absolute left-[10%] top-[15%] rounded-xl border border-white/10 bg-black/60 px-4 py-3 font-mono text-xs text-purple-200 shadow-xl backdrop-blur-xl">
              React
            </div>

            <div className="skill-badge absolute right-[10%] top-[20%] rounded-xl border border-white/10 bg-black/60 px-4 py-3 font-mono text-xs text-blue-200 shadow-xl backdrop-blur-xl">
              Next.js
            </div>

            <div className="skill-badge absolute bottom-[20%] left-[12%] rounded-xl border border-white/10 bg-black/60 px-4 py-3 font-mono text-xs text-yellow-200 shadow-xl backdrop-blur-xl">
              JavaScript
            </div>

            <div className="skill-badge absolute bottom-[15%] right-[10%] rounded-xl border border-white/10 bg-black/60 px-4 py-3 font-mono text-xs text-purple-200 shadow-xl backdrop-blur-xl">
              GSAP
            </div>

            <div className="skill-badge absolute left-1/2 top-[10%] -translate-x-1/2 rounded-xl border border-white/10 bg-black/60 px-4 py-3 font-mono text-xs text-white/60 shadow-xl backdrop-blur-xl">
              TypeScript
            </div>

            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white/25">
                Frontend Stack
              </p>

              <p className="mt-2 text-sm text-white/40">
                React • Next.js • JavaScript • TypeScript • GSAP
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-7 flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-white/30">
              What I do
            </span>

            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="capability-card group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/25 hover:bg-purple-500/[0.04]"
                >
                  <Icon
                    size={22}
                    className="text-purple-300 transition-transform duration-300 group-hover:scale-110"
                  />

                  <h3 className="mt-6 text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/35">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
