"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
  BrainCircuit,
  Database,
  Globe2,
  FileJson,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    type: "LATEST PROJECT",
    title: "Interview AI",
    subtitle: "AI-powered interview preparation platform",
    description:
      "A modern interview preparation platform for practicing technical interviews with AI, getting instant feedback, analyzing resumes and tracking interview performance.",
    tags: ["Next.js", "React", "AI", "TypeScript"],
    icon: BrainCircuit,
    live: "https://ai-interview-tool-rho.vercel.app/",
    github: null,
    featured: true,
  },
  {
    number: "02",
    type: "WEB APPLICATION",
    title: "Annotation Console",
    subtitle: "Real-time task management interface",
    description:
      "A responsive annotation console with task management, search, filtering, sorting, pagination, live WebSocket updates, streaming summaries and IndexedDB caching.",
    tags: ["Next.js", "React", "TypeScript", "Redux", "WebSocket"],
    icon: Database,
    live: null,
    github: "https://github.com/GauravFrontendDev/annotation-console",
    featured: true,
  },
  {
    number: "03",
    type: "CORPORATE WEBSITE",
    title: "Diamond Star",
    subtitle: "Industrial recycling & trading website",
    description:
      "A corporate website for Diamond Star Group showcasing recycling, scrap trading, industrial dismantling, waste paper and plastic services.",
    tags: ["Next.js", "React", "UI/UX", "Responsive"],
    icon: Globe2,
    live: "https://diamondstargrp.com/en/",
    github: null,
    featured: false,
  },
  {
    number: "04",
    type: "DEVELOPER TOOL",
    title: "PDF → JSON",
    subtitle: "PDF conversion utility",
    description:
      "A developer-focused PDF-to-JSON conversion project designed to transform PDF content into structured JSON data.",
    tags: ["JavaScript", "PDF", "JSON", "Tool"],
    icon: FileJson,
    live: null,
    github: "https://github.com/tripathiashu080/PDF-to-JSON-Converter",
    featured: false,
  },
];

export function Projects() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current || !track.current) return;

    const ctx = gsap.context(() => {
      const section = root.current!;
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      gsap.fromTo(
        ".projects-label",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".projects-title",
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".projects-copy",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.25,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        },
      );

      const getDistance = () => {
        if (!track.current) return 0;

        return Math.max(0, track.current.scrollWidth - window.innerWidth);
      };

      const horizontalTween = gsap.to(track.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance() + window.innerHeight * 0.9}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            scale: 0.94,
            opacity: 1,
          },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 100%",
              end: "left 35%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );

        const content = card.querySelector(".project-content");

        if (content) {
          gsap.fromTo(
            content,
            {
              y: 35,
              opacity: 0.75,
            },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: "left 100%",
                end: "left 45%",
                scrub: true,
                invalidateOnRefresh: true,
              },
            },
          );
        }
        const number = card.querySelector(".project-number");

        if (number) {
          gsap.fromTo(
            number,
            {
              y: 25,
              opacity: 0.4,
            },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: "left 100%",
                end: "left 45%",
                scrub: true,
                invalidateOnRefresh: true,
              },
            },
          );
        }
      });

      gsap.utils
        .toArray<HTMLElement>(".project-floating")
        .forEach((item, index) => {
          gsap.to(item, {
            y: index % 2 === 0 ? -14 : 14,
            duration: 2.3 + index * 0.25,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      cards.forEach((card) => {
        const handleMove = (event: MouseEvent) => {
          if (window.matchMedia("(pointer: coarse)").matches) {
            return;
          }

          const rect = card.getBoundingClientRect();

          const x = (event.clientX - rect.left) / rect.width - 0.5;

          const y = (event.clientY - rect.top) / rect.height - 0.5;

          gsap.to(card, {
            rotateY: x * 6,
            rotateX: -y * 6,
            transformPerspective: 1200,
            duration: 0.35,
            ease: "power3.out",
            overwrite: true,
          });
          const glow = card.querySelector(".card-mouse-glow");

          if (glow) {
            gsap.to(glow, {
              x: x * 120,
              y: y * 100,
              opacity: 0.7,
              duration: 0.5,
              ease: "power3.out",
            });
          }
        };

        const handleLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.6,
            ease: "power3.out",
          });

          const glow = card.querySelector(".card-mouse-glow");

          if (glow) {
            gsap.to(glow, {
              x: 0,
              y: 0,
              opacity: 0.25,
              duration: 0.5,
              ease: "power3.out",
            });
          }
        };

        card.addEventListener("mousemove", handleMove);

        card.addEventListener("mouseleave", handleLeave);
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="projects"
      className="
        relative
        overflow-hidden
        bg-black
      "
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="portfolio-grid absolute inset-0 opacity-30" />

        <div
          className="
            absolute
            left-[20%]
            top-[20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-600/[0.06]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            right-[10%]
            top-[50%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-600/[0.05]
            blur-[130px]
          "
        />
      </div>

      <div
        className="
          relative
          z-20
          mx-auto
          max-w-7xl
          px-5
          pb-20
          pt-32
          md:px-10
          md:pt-40
        "
      >
        <div className="max-w-4xl">
          <div
            className="
              projects-label
              mb-5
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-10
                bg-gradient-to-r
                from-purple-400
                to-blue-400
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-purple-300
              "
            >
              Selected Work
            </span>
          </div>

          <h2
            className="
              projects-title
              text-4xl
              font-black
              leading-[1]
              tracking-[-0.05em]
              md:text-7xl
            "
          >
            Things I&apos;ve{" "}
            <span className="text-gradient">built & shipped.</span>
          </h2>

          <p
            className="
              projects-copy
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-white/40
              md:text-lg
            "
          >
            A selection of applications, products and websites focused on
            frontend engineering, interaction design and real-world problem
            solving.
          </p>
        </div>
      </div>

      <div
        ref={track}
        className="
          flex
          w-max
          gap-8
          px-5
          pb-32
          md:gap-12
          md:px-10
        "
      >
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <article
              key={project.title}
              data-cursor="view"
              className={`
                  project-card
                  group
                  relative
                  h-[570px]
                  w-[88vw]
                  max-w-[1100px]
                  shrink-0
                  overflow-hidden
                  rounded-[2rem]
                  border
                  bg-gradient-to-br
                  from-white/[0.05]
                  to-white/[0.015]
                  p-7
                  shadow-2xl
                  backdrop-blur-xl
                  transition-[border-color]
                  duration-500
                  md:h-[610px]
                  md:p-10
                  ${
                    project.featured
                      ? "border-purple-400/20 hover:border-purple-400/40"
                      : "border-white/[0.09] hover:border-white/[0.16]"
                  }
                `}
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="
                    card-mouse-glow
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-72
                    w-72
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-purple-500/20
                    opacity-25
                    blur-[90px]
                  "
              />

              <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32
                    h-96
                    w-96
                    rounded-full
                    bg-purple-600/10
                    blur-[100px]
                    transition-all
                    duration-700
                    group-hover:bg-purple-600/20
                  "
              />

              <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    -left-32
                    h-96
                    w-96
                    rounded-full
                    bg-blue-600/[0.06]
                    blur-[100px]
                  "
              />

              <div
                className="
                    project-number
                    pointer-events-none
                    absolute
                    right-8
                    top-7
                    font-mono
                    text-7xl
                    font-black
                    text-white/[0.035]
                    md:right-10
                    md:top-8
                    md:text-9xl
                  "
              >
                {project.number}
              </div>

              <div
                className="
                    project-content
                    relative
                    z-10
                    grid
                    h-full
                    gap-8
                    md:grid-cols-[.8fr_1.2fr]
                    md:items-center
                  "
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="
                            rounded-full
                            border
                            border-purple-400/20
                            bg-purple-500/10
                            px-3
                            py-1.5
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-purple-300
                          "
                      >
                        {project.type}
                      </span>

                      {project.featured && (
                        <span
                          className="
                              flex
                              items-center
                              gap-2
                              text-[10px]
                              uppercase
                              tracking-[0.2em]
                              text-green-400
                            "
                        >
                          <span
                            className="
                                h-1.5
                                w-1.5
                                animate-pulse
                                rounded-full
                                bg-green-400
                                shadow-[0_0_10px_rgba(74,222,128,.8)]
                              "
                          />
                          Recent
                        </span>
                      )}
                    </div>

                    <h3
                      className="
                          mt-7
                          text-4xl
                          font-black
                          tracking-[-0.04em]
                          transition-transform
                          duration-500
                          group-hover:translate-x-1
                          md:text-6xl
                        "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                          mt-3
                          text-lg
                          text-purple-200/70
                        "
                    >
                      {project.subtitle}
                    </p>

                    <p
                      className="
                          mt-6
                          max-w-xl
                          text-sm
                          leading-7
                          text-white/40
                          md:text-base
                        "
                    >
                      {project.description}
                    </p>

                    <div
                      className="
                          mt-7
                          flex
                          flex-wrap
                          gap-2
                        "
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                                rounded-full
                                border
                                border-white/[0.08]
                                bg-white/[0.025]
                                px-3
                                py-1.5
                                text-xs
                                text-white/45
                                transition-all
                                duration-300
                                group-hover:border-purple-400/20
                                group-hover:text-white/60
                              "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    className="
                        flex
                        flex-wrap
                        gap-3
                        pt-8
                      "
                  >
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="view"
                        className="
                            group/link
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-gradient-to-r
                            from-purple-600
                            to-blue-500
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            shadow-[0_10px_40px_rgba(120,70,255,.2)]
                            transition-all
                            duration-300
                            hover:scale-[1.03]
                            hover:shadow-[0_15px_50px_rgba(120,70,255,.35)]
                          "
                      >
                        Live Project
                        <ExternalLink
                          size={15}
                          className="
                              transition-transform
                              group-hover/link:translate-x-1
                              group-hover/link:-translate-y-1
                            "
                        />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="view"
                        className="
                            group/code
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.03]
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-white/70
                            transition-all
                            duration-300
                            hover:border-purple-400/30
                            hover:bg-purple-500/[0.05]
                            hover:text-white
                          "
                      >
                        <Github size={16} />
                        Source Code
                        <ArrowUpRight
                          size={14}
                          className="
                              opacity-0
                              transition-all
                              group-hover/code:translate-x-0.5
                              group-hover/code:-translate-y-0.5
                              group-hover/code:opacity-100
                            "
                        />
                      </a>
                    )}
                  </div>
                </div>

                <div
                  className="
                      relative
                      flex
                      h-full
                      min-h-[250px]
                      items-center
                      justify-center
                    "
                >
                  <div
                    className="
                        relative
                        h-[260px]
                        w-[90%]
                        max-w-[500px]
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/60
                        shadow-[0_30px_100px_rgba(0,0,0,.5)]
                        transition-all
                        duration-500
                        group-hover:border-purple-400/20
                        group-hover:shadow-[0_30px_100px_rgba(124,58,237,.15)]
                        md:h-[360px]
                      "
                  >
                    <div
                      className="
                          absolute
                          inset-0
                          bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]
                          bg-[size:35px_35px]
                        "
                    />

                    <div
                      className="
                          project-scan-line
  pointer-events-none
  absolute
  left-0
  top-0
  h-px
  w-full
  bg-gradient-to-r
  from-transparent
  via-purple-400/60
  to-transparent
                        "
                    />

                    <div
                      className="
                          absolute
                          left-1/2
                          top-1/2
                          h-44
                          w-44
                          -translate-x-1/2
                          -translate-y-1/2
                          rounded-full
                          bg-purple-600/20
                          blur-[70px]
                          transition-all
                          duration-700
                          group-hover:h-60
                          group-hover:w-60
                          group-hover:bg-purple-500/30
                        "
                    />

                    <div
                      className="
                          project-floating
                          absolute
                          left-1/2
                          top-1/2
                          grid
                          h-28
                          w-28
                          -translate-x-1/2
                          -translate-y-1/2
                          place-items-center
                          rounded-3xl
                          border
                          border-purple-400/20
                          bg-purple-500/10
                          shadow-[0_0_60px_rgba(124,58,237,.2)]
                          backdrop-blur-xl
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:rotate-3
                        "
                    >
                      <Icon
                        size={52}
                        className="
                            text-purple-300
                            transition-transform
                            duration-500
                            group-hover:scale-110
                          "
                      />
                    </div>

                    <div
                      className="
                          project-floating
                          absolute
                          left-8
                          top-8
                          rounded-lg
                          border
                          border-white/10
                          bg-black/70
                          px-3
                          py-2
                          font-mono
                          text-[10px]
                          text-purple-300
                          backdrop-blur-xl
                        "
                    >
                      {"<project />"}
                    </div>

                    <div
                      className="
                          project-floating
                          absolute
                          bottom-8
                          right-8
                          rounded-lg
                          border
                          border-white/10
                          bg-black/70
                          px-3
                          py-2
                          font-mono
                          text-[10px]
                          text-blue-300
                          backdrop-blur-xl
                        "
                    >
                      BUILD • SHIP • SCALE
                    </div>

                    <span
                      className="
                          absolute
                          bottom-8
                          left-8
                          h-2
                          w-2
                          animate-pulse
                          rounded-full
                          bg-purple-400
                          shadow-[0_0_15px_rgba(168,85,247,.9)]
                        "
                    />

                    <span
                      className="
                          absolute
                          right-8
                          top-8
                          h-2
                          w-2
                          animate-pulse
                          rounded-full
                          bg-blue-400
                          shadow-[0_0_15px_rgba(96,165,250,.9)]
                        "
                    />
                  </div>
                </div>
              </div>

              <div
                className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-white/[0.04]
                  "
              >
                <div
                  className="
                      h-full
                      w-1/4
                      bg-gradient-to-r
                      from-purple-500
                      to-blue-400
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                />
              </div>
            </article>
          );
        })}

        <div
          className="
            flex
            h-[570px]
            w-[80vw]
            max-w-[600px]
            shrink-0
            items-center
            justify-center
            md:h-[610px]
          "
        >
          <a
            href="https://github.com/tripathiashu080"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="view"
            className="group text-center"
          >
            <div
              className="
                mx-auto
                grid
                h-24
                w-24
                place-items-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:border-purple-400/30
                group-hover:bg-purple-500/10
                group-hover:shadow-[0_0_60px_rgba(124,58,237,.15)]
              "
            >
              <Github
                size={35}
                className="
                  text-white/50
                  transition-colors
                  group-hover:text-purple-300
                "
              />
            </div>

            <p
              className="
                mt-7
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              More Projects
            </p>

            <h3
              className="
                mt-3
                text-2xl
                font-bold
                text-white
              "
            >
              Explore my GitHub
              <ArrowUpRight
                className="
                  ml-2
                  inline
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
                size={20}
              />
            </h3>
          </a>
        </div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-10
          left-1/2
          z-20
          -translate-x-1/2
          text-center
        "
      >
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/20
          "
        >
          Scroll to explore
        </p>
      </div>
    </section>
  );
}
