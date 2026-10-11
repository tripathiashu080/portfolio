"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Rocket,
  MapPin,
  CalendarDays,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: "2025 — PRESENT",
    company: "Droom Technology PVT LTD",
    role: "Senior Software Developer",
    location: "Gurugram, India",
    description:
      "Working on scalable frontend experiences across multiple Droom products, building reusable React and Next.js components, integrating REST APIs and improving performance, SEO and responsive UI.",
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "SSR",
      "SEO",
    ],
    icon: Rocket,
    current: true,
  },
  {
    year: "2024 — 2025",
    company: "Droom Technology PVT LTD",
    role: "Software Developer",
    location: "Gurugram, India",
    description:
      "Developed reusable frontend components for product experiences, implemented REST API integrations, optimized Next.js applications and created responsive interfaces across multiple domains.",
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Material UI",
    ],
    icon: Code2,
    current: false,
  },
  {
    year: "2023 — 2024",
    company: "SES IT Global Solutions",
    role: "Software Developer",
    location: "India",
    description:
      "Designed and developed responsive websites for different business domains with a strong focus on UI quality, cross-browser compatibility, responsive layouts and frontend performance.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Responsive UI",
      "SEO",
    ],
    icon: BriefcaseBusiness,
    current: false,
  },
];

export function Experience() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const section = root.current!;

      gsap.set(".experience-label", {
        opacity: 0,
        y: 25,
      });

      gsap.set(".experience-title", {
        opacity: 0,
        y: 60,
      });

      gsap.set(".experience-copy", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".experience-item", {
        opacity: 0,
        y: 70,
      });

      gsap.set(".timeline-dot", {
        scale: 0,
      });

      gsap.set(".timeline-progress", {
        scaleY: 0,
        transformOrigin: "top center",
      });

      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      intro
        .to(".experience-label", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .to(
          ".experience-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=.3",
        )
        .to(
          ".experience-copy",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=.5",
        );

      gsap.to(".timeline-dot", {
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top 75%",
          once: true,
        },
      });

      gsap.to(".experience-item", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top 70%",
          once: true,
        },
      });

      gsap.fromTo(
        ".experience-tech",
        {
          opacity: 0,
          y: 12,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-wrapper",
            start: "top 60%",
            once: true,
          },
        },
      );

      gsap.to(".timeline-progress", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-wrapper",
          start: "top 60%",
          end: "bottom 70%",
          scrub: 1,
        },
      });

      gsap.to(".experience-glow", {
        x: 45,
        y: -35,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".experience-glow-2", {
        x: -35,
        y: 30,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const cards = section.querySelectorAll<HTMLElement>(".experience-card");

      cards.forEach((card) => {
        const enter = () => {
          gsap.to(card, {
            y: -5,
            duration: 0.35,
            ease: "power3.out",
          });

          gsap.to(card.querySelector(".experience-icon"), {
            scale: 1.08,
            rotate: 4,
            duration: 0.35,
            ease: "back.out(2)",
          });

          gsap.to(card.querySelector(".experience-glow-card"), {
            opacity: 1,
            scale: 1.2,
            duration: 0.45,
            ease: "power3.out",
          });
        };

        const leave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(card.querySelector(".experience-icon"), {
            scale: 1,
            rotate: 0,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(card.querySelector(".experience-glow-card"), {
            opacity: 0,
            scale: 1,
            duration: 0.4,
          });
        };

        card.addEventListener("mouseenter", enter);

        card.addEventListener("mouseleave", leave);
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
      id="experience"
      className="
        relative
        overflow-hidden
        py-32
        md:py-40
      "
    >
      <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-25" />

      <div
        className="
          experience-glow
          pointer-events-none
          absolute
          right-[-180px]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-600/10
          blur-[140px]
        "
      />

      <div
        className="
          experience-glow-2
          pointer-events-none
          absolute
          bottom-[5%]
          left-[-180px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-600/[0.07]
          blur-[140px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          md:px-10
        "
      >
        <div className="max-w-4xl">
          <div
            className="
              experience-label
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
              Experience
            </span>
          </div>

          <h2
            className="
              experience-title
              text-4xl
              font-black
              leading-[1]
              tracking-[-0.05em]
              md:text-7xl
            "
          >
            A journey of{" "}
            <span className="text-gradient">building & learning.</span>
          </h2>

          <p
            className="
              experience-copy
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-white/40
              md:text-lg
            "
          >
            Over the years, I&apos;ve worked across different frontend
            environments, building responsive products and solving real-world
            engineering problems.
          </p>
        </div>

        <div
          className="
            timeline-wrapper
            relative
            mt-24
          "
        >
          <div
            className="
              absolute
              bottom-0
              left-[18px]
              top-0
              w-px
              bg-white/[0.08]
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div
            className="
              timeline-progress
              absolute
              left-[18px]
              top-0
              h-full
              w-px
              bg-gradient-to-b
              from-purple-500
              via-fuchsia-500
              to-blue-500
              shadow-[0_0_12px_rgba(168,85,247,.4)]
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-20 md:space-y-28">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isRight = index % 2 === 1;

              return (
                <div
                  key={`${experience.company}-${experience.role}`}
                  className="
                      experience-item
                      relative
                      grid
                      md:grid-cols-2
                      md:gap-20
                    "
                >
                  <div
                    className="
                        timeline-dot
                        absolute
                        left-[9px]
                        top-8
                        z-20
                        grid
                        h-[19px]
                        w-[19px]
                        place-items-center
                        rounded-full
                        border
                        border-purple-400/40
                        bg-black
                        shadow-[0_0_20px_rgba(168,85,247,.15)]
                        md:left-1/2
                        md:-translate-x-1/2
                      "
                  >
                    <div
                      className={`
                          h-2
                          w-2
                          rounded-full
                          ${
                            experience.current
                              ? `
                                animate-pulse
                                bg-green-400
                                shadow-[0_0_15px_rgba(74,222,128,.9)]
                              `
                              : `
                                bg-purple-400
                                shadow-[0_0_15px_rgba(168,85,247,.8)]
                              `
                          }
                        `}
                    />
                  </div>

                  <div
                    className={`
                        absolute
                        left-12
                        top-0
                        md:static
                        md:flex
                        md:items-start
                        ${
                          isRight
                            ? "md:col-start-1 md:justify-end md:pr-10"
                            : "md:col-start-2 md:row-start-1 md:justify-start md:pl-10"
                        }
                      `}
                  >
                    <div
                      className={`
                          ${isRight ? "md:text-right" : "md:text-left"}
                        `}
                    >
                      <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-purple-300
                          "
                      >
                        <CalendarDays size={13} />

                        <span
                          className="
                              font-mono
                              text-xs
                              tracking-[0.18em]
                            "
                        >
                          {experience.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`
                        ${
                          isRight
                            ? "md:col-start-2"
                            : "md:col-start-1 md:row-start-1"
                        }
                        pl-12
                        pt-12
                        md:pl-0
                        md:pt-0
                        ${!isRight ? "md:pr-10" : "md:pl-10"}
                      `}
                  >
                    <div
                      className={`
                          experience-card
                          group
                          relative
                          overflow-hidden
                          rounded-3xl
                          border
                          p-7
                          backdrop-blur-xl
                          transition-colors
                          duration-500
                          md:p-8
                          ${
                            experience.current
                              ? `
                                border-purple-400/20
                                bg-purple-500/[0.045]
                              `
                              : `
                                border-white/[0.08]
                                bg-white/[0.025]
                              `
                          }
                          hover:border-purple-400/30
                        `}
                    >
                      <div
                        className="
                            experience-glow-card
                            pointer-events-none
                            absolute
                            -right-20
                            -top-20
                            h-48
                            w-48
                            scale-100
                            rounded-full
                            bg-purple-500/15
                            opacity-0
                            blur-[70px]
                          "
                      />

                      <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-purple-500/[0.03]
                            via-transparent
                            to-blue-500/[0.02]
                          "
                      />

                      <div className="relative">
                        <div
                          className="
                              flex
                              items-start
                              justify-between
                              gap-4
                            "
                        >
                          <div>
                            <div
                              className="
                                  flex
                                  flex-wrap
                                  items-center
                                  gap-3
                                "
                            >
                              <h3
                                className="
                                    text-xl
                                    font-bold
                                    text-white
                                    md:text-2xl
                                  "
                              >
                                {experience.role}
                              </h3>

                              {experience.current && (
                                <span
                                  className="
                                      rounded-full
                                      border
                                      border-green-400/20
                                      bg-green-400/10
                                      px-2.5
                                      py-1
                                      text-[9px]
                                      font-semibold
                                      uppercase
                                      tracking-[0.15em]
                                      text-green-400
                                    "
                                >
                                  Current
                                </span>
                              )}
                            </div>

                            <p
                              className="
                                  mt-2
                                  text-sm
                                  font-semibold
                                  text-purple-300/80
                                "
                            >
                              {experience.company}
                            </p>
                          </div>

                          <div
                            className="
                                experience-icon
                                grid
                                h-12
                                w-12
                                shrink-0
                                place-items-center
                                rounded-xl
                                border
                                border-purple-400/15
                                bg-purple-500/10
                                transition-all
                              "
                          >
                            <Icon size={21} className="text-purple-300" />
                          </div>
                        </div>

                        <div
                          className="
                              mt-5
                              flex
                              items-center
                              gap-2
                              text-xs
                              uppercase
                              tracking-[0.15em]
                              text-white/25
                            "
                        >
                          <MapPin size={12} />

                          {experience.location}
                        </div>

                        <p
                          className="
                              mt-5
                              max-w-2xl
                              text-sm
                              leading-7
                              text-white/40
                            "
                        >
                          {experience.description}
                        </p>

                        <div
                          className="
                              mt-6
                              flex
                              flex-wrap
                              gap-2
                            "
                        >
                          {experience.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="
                                    experience-tech
                                    rounded-full
                                    border
                                    border-white/[0.07]
                                    bg-black/20
                                    px-3
                                    py-1.5
                                    text-[10px]
                                    text-white/40
                                    transition-all
                                    duration-300
                                    hover:border-purple-400/25
                                    hover:bg-purple-500/10
                                    hover:text-purple-200
                                  "
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        <div
                          className="
                              mt-7
                              flex
                              items-center
                              justify-between
                            "
                        >
                          <span
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.2em]
                                text-white/20
                              "
                          >
                            Frontend Engineering
                          </span>

                          <ArrowUpRight
                            size={18}
                            className="
                                text-white/20
                                transition-all
                                duration-300
                                group-hover:-translate-y-1
                                group-hover:translate-x-1
                                group-hover:text-purple-300
                              "
                          />
                        </div>
                      </div>

                      <div
                        className="
                            absolute
                            bottom-0
                            left-0
                            h-[2px]
                            w-0
                            bg-gradient-to-r
                            from-purple-500
                            via-fuchsia-500
                            to-blue-400
                            transition-all
                            duration-500
                            group-hover:w-full
                          "
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="
            mt-24
            flex
            flex-col
            justify-between
            gap-6
            rounded-3xl
            border
            border-white/[0.07]
            bg-white/[0.02]
            p-6
            md:flex-row
            md:items-center
            md:p-8
          "
        >
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/25
              "
            >
              Career so far
            </p>

            <p
              className="
                mt-2
                text-lg
                font-semibold
                text-white/80
              "
            >
              Building interfaces. Solving problems. Growing every day.
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-green-400/10
              bg-green-400/[0.03]
              px-5
              py-3
            "
          >
            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-green-400
                shadow-[0_0_12px_rgba(74,222,128,.8)]
              "
            />

            <span
              className="
                text-xs
                text-white/45
              "
            >
              Open to interesting opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
