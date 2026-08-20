"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Instagram,
  Code2,
  Sparkles,
  Braces,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  ["3+", "Years Experience"],
  ["20+", "Projects Completed"],
  ["10+", "Technologies"],
  ["100%", "Client Satisfaction"],
];

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  const visualRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mainOrbitRef = useRef<HTMLDivElement>(null);
  const secondaryOrbitRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const techCardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-kicker", {
        y: 30,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-title span",
          {
            y: 90,
            opacity: 0,
            rotateX: -45,
            stagger: 0.08,
            duration: 0.9,
          },
          "-=.25",
        )
        .from(
          ".hero-role",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=.45",
        )
        .from(
          ".hero-copy",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=.4",
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=.4",
        )
        .from(
          ".hero-social",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=.35",
        )
        .from(
          ".hero-visual",
          {
            scale: 0.7,
            opacity: 0,
            duration: 1.1,
          },
          "-=.8",
        )
        .from(
          ".hero-stats",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=.5",
        );

      gsap.to(".orbit-main", {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-secondary", {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      gsap.utils
        .toArray<HTMLElement>(".floating-particle")
        .forEach((particle, index) => {
          gsap.to(particle, {
            y: index % 2 === 0 ? -20 : 20,
            x: index % 2 === 0 ? 10 : -10,
            duration: 2 + index * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      gsap.utils.toArray<HTMLElement>(".tech-card").forEach((card, index) => {
        gsap.to(card, {
          y: index % 2 === 0 ? -12 : 12,
          duration: 2.5 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });

      gsap.to(".core-glow", {
        scale: 1.12,
        opacity: 0.7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".code-symbol", {
        rotateY: 360,
        duration: 6,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-dot-1", {
        rotation: 360,
        duration: 7,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-dot-2", {
        rotation: -360,
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      const visual = visualRef.current;
      const glow = glowRef.current;
      const mainOrbit = mainOrbitRef.current;
      const secondaryOrbit = secondaryOrbitRef.current;
      const core = coreRef.current;

      if (visual && glow && mainOrbit && secondaryOrbit && core) {
        const visualX = gsap.quickTo(visual, "x", {
          duration: 0.8,
          ease: "power3.out",
        });

        const visualY = gsap.quickTo(visual, "y", {
          duration: 0.8,
          ease: "power3.out",
        });

        const glowX = gsap.quickTo(glow, "x", {
          duration: 1.2,
          ease: "power3.out",
        });

        const glowY = gsap.quickTo(glow, "y", {
          duration: 1.2,
          ease: "power3.out",
        });

        const mainOrbitX = gsap.quickTo(mainOrbit, "x", {
          duration: 1,
          ease: "power3.out",
        });

        const mainOrbitY = gsap.quickTo(mainOrbit, "y", {
          duration: 1,
          ease: "power3.out",
        });

        const secondaryOrbitX = gsap.quickTo(secondaryOrbit, "x", {
          duration: 1.1,
          ease: "power3.out",
        });

        const secondaryOrbitY = gsap.quickTo(secondaryOrbit, "y", {
          duration: 1.1,
          ease: "power3.out",
        });

        const coreX = gsap.quickTo(core, "x", {
          duration: 0.65,
          ease: "power3.out",
        });

        const coreY = gsap.quickTo(core, "y", {
          duration: 0.65,
          ease: "power3.out",
        });

        const handleMouseMove = (event: MouseEvent) => {
          if (window.matchMedia("(pointer: coarse)").matches) {
            return;
          }

          const mouseX = event.clientX / window.innerWidth - 0.5;

          const mouseY = event.clientY / window.innerHeight - 0.5;

          visualX(mouseX * 18);
          visualY(mouseY * 14);

          glowX(mouseX * 45);
          glowY(mouseY * 35);

          mainOrbitX(mouseX * -25);
          mainOrbitY(mouseY * -20);

          secondaryOrbitX(mouseX * 35);
          secondaryOrbitY(mouseY * 25);

          coreX(mouseX * 8);
          coreY(mouseY * 6);

          particlesRef.current.forEach((particle, index) => {
            if (!particle) return;

            gsap.to(particle, {
              x: mouseX * (index % 2 === 0 ? 25 : -20),
              y: mouseY * (index % 2 === 0 ? 20 : -25),
              duration: 1.2,
              ease: "power3.out",
              overwrite: "auto",
            });
          });

          techCardsRef.current.forEach((card, index) => {
            if (!card) return;

            const strength = 20 + index * 5;

            gsap.to(card, {
              x: mouseX * (index % 2 === 0 ? strength : -strength),
              y: mouseY * (index % 2 === 0 ? strength : -strength),
              duration: 1,
              ease: "power3.out",
              overwrite: "auto",
            });
          });
        };

        window.addEventListener("mousemove", handleMouseMove, {
          passive: true,
        });

        const handleMouseLeave = () => {
          visualX(0);
          visualY(0);

          glowX(0);
          glowY(0);

          mainOrbitX(0);
          mainOrbitY(0);

          secondaryOrbitX(0);
          secondaryOrbitY(0);

          coreX(0);
          coreY(0);

          particlesRef.current.forEach((particle) => {
            if (!particle) return;

            gsap.to(particle, {
              x: 0,
              y: 0,
              duration: 1,
              ease: "power3.out",
            });
          });

          techCardsRef.current.forEach((card) => {
            if (!card) return;

            gsap.to(card, {
              x: 0,
              y: 0,
              duration: 1,
              ease: "power3.out",
            });
          });
        };

        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);

          document.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={root}
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >
      <div className="portfolio-grid pointer-events-none absolute inset-0" />

      <div
        ref={glowRef}
        className="
          glow
          pointer-events-none
          absolute
          left-[42%]
          top-[18%]
          h-[600px]
          w-[600px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-700/10
          blur-[140px]
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          px-5
          pb-8
          pt-32
          md:px-10
          md:pt-40
        "
      >
        <div
          className="
            grid
            flex-1
            items-center
            gap-12
            lg:grid-cols-[.9fr_1.1fr]
          "
        >
          <section className="relative z-10">
            <p
              className="
                hero-kicker
                mb-5
                text-sm
                tracking-[.25em]
                text-white/55
              "
            >
              HI, I&apos;M 👋
            </p>

            <h1
              className="
                hero-title
                max-w-3xl
                overflow-hidden
                text-6xl
                font-black
                leading-[.9]
                tracking-[-.055em]
                md:text-8xl
              "
            >
              <span className="block">Gaurav</span>

              <span className="text-gradient block">Tripathi</span>
            </h1>

            <p
              className="
                hero-role
                mt-7
                text-sm
                font-bold
                tracking-[.35em]
                text-purple-300
                md:text-base
              "
            >
              FRONTEND DEVELOPER
            </p>

            <p
              className="
                hero-copy
                mt-6
                max-w-xl
                text-base
                leading-7
                text-white/55
                md:text-lg
              "
            >
              I build fast, interactive and scalable web experiences with React,
              Next.js and modern frontend technologies.
            </p>

            <div
              className="
                hero-actions
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              <Button
                className="
                  group
                  bg-gradient-to-r
                  from-purple-600
                  to-blue-500
                  text-white
                  shadow-[0_10px_40px_rgba(120,70,255,.3)]
                  transition-transform
                  hover:scale-[1.03]
                "
              >
                View My Work
                <ArrowUpRight
                  className="
                    ml-2
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                  size={17}
                />
              </Button>

              <a
  href="/Gaurav_Tripathiii.pdf"
  download="Gaurav_Tripathiii.pdf"
  className="
    inline-flex
    h-10
    items-center
    justify-center
    rounded-md
    border
    border-white/15
    bg-white/[.03]
    px-4
    text-sm
    font-medium
    text-white
    transition-all
    duration-300
    hover:bg-white/[.07]
    hover:border-purple-400/30
    hover:-translate-y-0.5
  "
>
  Download CV
  <Download className="ml-2" size={17} />
</a>
            </div>

            <div
              className="
                hero-social
                mt-9
                flex
                items-center
                gap-3
              "
            >
              {[Github, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#contact"
                  className="
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[.03]
                    text-white/65
                    transition
                    hover:-translate-y-1
                    hover:border-purple-400/50
                    hover:text-white
                  "
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </section>

          <section
            ref={visualRef}
            className="
              hero-visual
              relative
              mx-auto
              h-[500px]
              w-full
              max-w-[620px]
              will-change-transform
              md:h-[600px]
            "
          >
            <div
              ref={glowRef}
              className="
                core-glow
                absolute
                left-1/2
                top-1/2
                h-[280px]
                w-[280px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-purple-600/20
                blur-[80px]
                md:h-[380px]
                md:w-[380px]
              "
            />

            <div
              ref={mainOrbitRef}
              className="
                orbit-main
                absolute
                left-1/2
                top-1/2
                h-[330px]
                w-[330px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-purple-400/30
                will-change-transform
                md:h-[450px]
                md:w-[450px]
              "
            >
              <div
                className="
                  absolute
                  -left-2
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_30px_rgba(168,85,247,.9)]
                "
              />
            </div>

            <div
              ref={secondaryOrbitRef}
              className="
                orbit-secondary
                absolute
                left-1/2
                top-1/2
                h-[260px]
                w-[400px]
                -translate-x-1/2
                -translate-y-1/2
                rotate-[25deg]
                rounded-[50%]
                border
                border-blue-400/20
                will-change-transform
                md:h-[340px]
                md:w-[520px]
              "
            >
              <div
                className="
                  absolute
                  right-0
                  top-1/2
                  h-3
                  w-3
                  -translate-y-1/2
                  rounded-full
                  bg-blue-400
                  shadow-[0_0_25px_rgba(96,165,250,.9)]
                "
              />
            </div>

            <div
              ref={coreRef}
              className="
                absolute
                left-1/2
                top-1/2
                h-[190px]
                w-[190px]
                -translate-x-1/2
                -translate-y-1/2
                will-change-transform
                md:h-[250px]
                md:w-[250px]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-br
                  from-purple-600
                  via-purple-800
                  to-blue-900
                  opacity-80
                  blur-[1px]
                "
              />

              <div
                className="
                  absolute
                  inset-[8px]
                  grid
                  place-items-center
                  rounded-full
                  border
                  border-purple-300/20
                  bg-black/70
                  shadow-[inset_0_0_80px_rgba(124,58,237,.35),0_0_80px_rgba(124,58,237,.25)]
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    code-symbol
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <div
                    className="
                      mb-3
                      grid
                      h-20
                      w-20
                      place-items-center
                      rounded-2xl
                      border
                      border-purple-400/30
                      bg-purple-500/10
                      shadow-[0_0_35px_rgba(168,85,247,.25)]
                      md:h-24
                      md:w-24
                    "
                  >
                    <Code2 size={42} className="text-purple-300" />
                  </div>

                  <p
                    className="
                      font-mono
                      text-sm
                      tracking-[.25em]
                      text-purple-200
                    "
                  >
                    {"< CODE />"}
                  </p>

                  <p
                    className="
                      mt-2
                      text-xs
                      text-white/40
                    "
                  >
                    BUILD • CREATE • SHIP
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={(el) => {
                if (el) {
                  particlesRef.current[0] = el;
                }
              }}
              className="
                floating-particle
                absolute
                left-[12%]
                top-[18%]
                will-change-transform
              "
            >
              <div
                className="
                  h-5
                  w-5
                  rounded-full
                  bg-purple-400
                  shadow-[0_0_35px_rgba(168,85,247,.9)]
                "
              />
            </div>

            <div
              ref={(el) => {
                if (el) {
                  particlesRef.current[1] = el;
                }
              }}
              className="
                floating-particle
                absolute
                right-[10%]
                top-[27%]
                will-change-transform
              "
            >
              <div
                className="
                  h-4
                  w-4
                  rounded-full
                  bg-blue-400
                  shadow-[0_0_30px_rgba(96,165,250,.9)]
                "
              />
            </div>

            <div
              ref={(el) => {
                if (el) {
                  particlesRef.current[2] = el;
                }
              }}
              className="
                floating-particle
                absolute
                bottom-[25%]
                left-[15%]
                will-change-transform
              "
            >
              <div
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-fuchsia-400
                  shadow-[0_0_25px_rgba(217,70,239,.9)]
                "
              />
            </div>
            <div
              ref={(el) => {
                if (el) {
                  techCardsRef.current[0] = el;
                }
              }}
              className="
                tech-card
                absolute
                left-[5%]
                top-[38%]
                will-change-transform
                rounded-xl
                border
                border-white/10
                bg-black/60
                px-4
                py-3
                shadow-xl
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">⚛</span>

                <span className="text-xs font-semibold text-white/80">
                  React
                </span>
              </div>
            </div>

            <div
              ref={(el) => {
                if (el) {
                  techCardsRef.current[1] = el;
                }
              }}
              className="
                tech-card
                absolute
                right-[2%]
                top-[43%]
                will-change-transform
                rounded-xl
                border
                border-white/10
                bg-black/60
                px-4
                py-3
                shadow-xl
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-2">
                <Braces size={18} className="text-purple-300" />

                <span className="text-xs font-semibold text-white/80">
                  JavaScript
                </span>
              </div>
            </div>

            <div
              ref={(el) => {
                if (el) {
                  techCardsRef.current[2] = el;
                }
              }}
              className="
                tech-card
                absolute
                bottom-[20%]
                left-[8%]
                will-change-transform
                rounded-xl
                border
                border-white/10
                bg-black/60
                px-4
                py-3
                shadow-xl
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-2">
                <Cpu size={18} className="text-blue-300" />

                <span className="text-xs font-semibold text-white/80">
                  Next.js
                </span>
              </div>
            </div>

            <div
              ref={(el) => {
                if (el) {
                  techCardsRef.current[3] = el;
                }
              }}
              className="
                tech-card
                absolute
                bottom-[16%]
                right-[8%]
                will-change-transform
                rounded-xl
                border
                border-white/10
                bg-black/60
                px-4
                py-3
                shadow-xl
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-fuchsia-300" />

                <span className="text-xs font-semibold text-white/80">
                  GSAP
                </span>
              </div>
            </div>
            <div
              className="
                absolute
                left-1/2
                top-[7%]
                -translate-x-1/2
                font-mono
                text-xs
                tracking-[.3em]
                text-white/20
              "
            >
              {"{ FRONTEND_ENGINEER }"}
            </div>

            <div
              className="
                absolute
                bottom-[7%]
                left-1/2
                -translate-x-1/2
                font-mono
                text-xs
                tracking-[.25em]
                text-purple-300/30
              "
            >
              {"010101 • REACT • NEXT • GSAP"}
            </div>
          </section>

          <div
            className="
              hero-stats
              glass
              absolute
              bottom-20
              left-1/2
              w-[92%]
              max-w-[600px]
              -translate-x-1/2
              rounded-2xl
              p-4
              md:p-5
              lg:left-auto
              lg:right-[5%]
              lg:w-[520px]
              lg:translate-x-0
            "
          >
            <div
              className="
                grid
                grid-cols-2
                gap-3
                md:grid-cols-4
              "
            >
              {stats.map(([value, label]) => (
                <div key={label} className="text-center">
                  <p
                    className="
                        text-2xl
                        font-black
                        text-purple-300
                        md:text-3xl
                      "
                  >
                    {value}
                  </p>

                  <p
                    className="
                        mt-1
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-white/45
                        md:text-xs
                      "
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="
            mx-auto
            mt-6
            flex
            items-center
            gap-3
            text-xs
            uppercase
            tracking-[.3em]
            text-white/35
            transition
            hover:text-white/70
          "
        >
          <span
            className="
              grid
              h-9
              w-6
              place-items-center
              rounded-full
              border
              border-white/20
            "
          >
            <ArrowDown size={13} />
          </span>
          Scroll Down
        </a>
      </div>
    </main>
  );
}
