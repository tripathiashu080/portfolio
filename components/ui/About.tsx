"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Code2, Gauge, Layers3, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Reusable, maintainable and scalable frontend architecture.",
    number: "01",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Focused on fast loading, smooth interactions and Core Web Vitals.",
    number: "02",
  },
  {
    icon: Layers3,
    title: "Scalable UI",
    description: "Building reusable components that scale across products.",
    number: "03",
  },
  {
    icon: Sparkles,
    title: "Modern UX",
    description: "Creating polished interfaces with thoughtful interactions.",
    number: "04",
  },
];

const technologies = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Material UI",
];

export function About() {
  const root = useRef<HTMLTableSectionElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const section = root.current!;

      gsap.set(".about-label", {
        opacity: 0,
        y: 25,
      });

      gsap.set(".about-title-line", {
        opacity: 0,
        y: 80,
      });

      gsap.set(".about-copy", {
        opacity: 0,
        y: 35,
      });

      gsap.set(".about-card", {
        opacity: 0,
        y: 80,
      });

      gsap.set(".about-approach", {
        opacity: 0,
        x: 80,
      });

      gsap.set(".tech-pill", {
        opacity: 0,
        y: 25,
        scale: 0.8,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      timeline
        .to(".about-label", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        })

        .to(
          ".about-title-line",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=.3",
        )

        .to(
          ".about-copy",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=.45",
        )

        .to(
          ".about-card",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=.35",
        )

        .to(
          ".about-approach",
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=.6",
        )

        .to(
          ".tech-pill",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "back.out(1.7)",
          },
          "-=.4",
        );

      gsap.to(".about-floating-orb", {
        y: -30,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".about-ring", {
        rotate: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      const cards = section.querySelectorAll<HTMLElement>(".about-card");

      cards.forEach((card) => {
        const glow = card.querySelector<HTMLElement>(".card-glow");

        const enter = () => {
          gsap.to(card, {
            y: -8,
            duration: 0.35,
            ease: "power2.out",
          });

          gsap.to(glow, {
            opacity: 1,
            scale: 1.2,
            duration: 0.4,
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(glow, {
            opacity: 0,
            scale: 1,
            duration: 0.4,
          });
        };

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        return () => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        };
      });

      const handleMouseMove = (event: MouseEvent) => {
        const rect = section.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        gsap.to(".about-spotlight", {
          x,
          y,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      section.addEventListener("mousemove", handleMouseMove);

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="about"
      className="relative overflow-hidden py-32 md:py-40"
    >
      <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="about-spotlight pointer-events-none absolute left-0 top-0 z-0 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="about-floating-orb pointer-events-none absolute right-[8%] top-[20%] h-24 w-24 rounded-full bg-purple-600/10 blur-[50px]" />

      <div className="about-ring pointer-events-none absolute right-[-180px] top-[10%] h-[500px] w-[500px] rounded-full border border-purple-500/[0.08]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="about-label mb-5 flex items-center gap-4">
          <span className="h-px w-10 bg-purple-400" />

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
            About Me
          </span>
        </div>

        <div className="max-w-4xl overflow-hidden">
          <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-7xl">
            <span className="about-title-line block">I turn ideas into</span>

            <span className="about-title-line text-gradient block">
              digital experiences.
            </span>
          </h2>
        </div>

        <div className="mt-8 max-w-3xl">
          <p className="about-copy text-base leading-8 text-white/55 md:text-lg">
            I&apos;m a frontend developer with 3+ years of experience building
            responsive, high-performance web applications using React.js,
            Next.js and modern frontend technologies.
          </p>

          <p className="about-copy mt-4 text-base leading-8 text-white/35">
            I enjoy solving frontend problems, creating reusable components and
            turning designs into smooth, intuitive user experiences.
          </p>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="about-card group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl"
                >
                  <div className="card-glow pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/20 opacity-0 blur-[50px]" />

                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-xs text-purple-400/60">
                      {item.number}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300"
                    />
                  </div>

                  <div className="relative mt-8 grid h-12 w-12 place-items-center rounded-xl border border-purple-400/20 bg-purple-500/10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={22} className="text-purple-300" />
                  </div>

                  <h3 className="relative mt-6 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-white/40">
                    {item.description}
                  </p>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>

          <div className="about-card about-approach relative overflow-hidden rounded-2xl border border-purple-400/10 bg-gradient-to-br from-purple-500/[0.09] via-white/[0.02] to-blue-500/[0.04] p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-600/20 blur-[80px]" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                My Approach
              </p>

              <h3 className="mt-5 text-3xl font-black leading-tight">
                Build it right.
                <br />
                <span className="text-gradient">Make it memorable.</span>
              </h3>

              <p className="mt-6 text-sm leading-7 text-white/45">
                My focus is not just making interfaces work. I care about
                performance, accessibility, responsive behavior and the small
                interactions that make a product feel polished.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                <div className="group rounded-xl border border-white/[0.07] bg-black/20 p-5 transition hover:border-purple-400/30">
                  <p className="text-3xl font-black text-purple-300">3+</p>

                  <p className="mt-2 text-xs text-white/35">Years Experience</p>
                </div>

                <div className="group rounded-xl border border-white/[0.07] bg-black/20 p-5 transition hover:border-purple-400/30">
                  <p className="text-3xl font-black text-purple-300">20+</p>

                  <p className="mt-2 text-xs text-white/35">Projects</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-black/20 p-4">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
                </span>

                <span className="text-xs text-white/45">
                  Available for new opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-white/30">
              Technologies I work with
            </span>

            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <div
                key={technology}
                className="tech-pill cursor-default rounded-full border border-white/[0.08] bg-white/[0.025] px-5 py-3 text-sm text-white/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-200"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
