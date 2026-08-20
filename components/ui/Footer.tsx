"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const section = root.current!;

      gsap.set(".footer-content", {
        opacity: 0,
        y: 60,
      });

      gsap.set(".footer-heading", {
        opacity: 0,
        y: 70,
      });

      gsap.set(".footer-links", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".footer-bottom", {
        opacity: 0,
        y: 20,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      timeline
        .to(".footer-content", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          ".footer-heading",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=.45",
        )
        .to(
          ".footer-links",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=.45",
        )
        .to(
          ".footer-bottom",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=.35",
        );

      gsap.to(".footer-glow", {
        x: 60,
        y: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".footer-ring", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });

      const button = section.querySelector<HTMLAnchorElement>(".back-top");

      if (button) {
        const move = (event: MouseEvent) => {
          const rect = button.getBoundingClientRect();

          const x = event.clientX - (rect.left + rect.width / 2);

          const y = event.clientY - (rect.top + rect.height / 2);

          gsap.to(button, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const reset = () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)",
          });
        };

        button.addEventListener("mousemove", move);
        button.addEventListener("mouseleave", reset);
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={root}
      className="relative overflow-hidden border-t border-white/[0.07] bg-black"
    >
      <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="footer-glow pointer-events-none absolute left-[35%] top-[15%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="footer-ring pointer-events-none absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full border border-purple-500/[0.07]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="footer-content relative py-28 text-center md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
            Have something in mind?
          </p>

          <h2 className="footer-heading mx-auto mt-6 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-8xl">
            Let&apos;s build
            <br />
            <span className="text-gradient">something great.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/35 md:text-base">
            From idea to interface, I enjoy turning ambitious concepts into
            fast, interactive and memorable digital experiences.
          </p>

          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_60px_rgba(120,70,255,.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_70px_rgba(120,70,255,.4)]"
          >
            Start a Conversation
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        <div className="h-px bg-white/[0.07]" />

        <div className="footer-links flex flex-col gap-10 py-10 lg:flex-row lg:items-center lg:justify-between">
          <a
            href="#home"
            className="text-xl font-black tracking-[-0.05em] text-white"
          >
            GAURAV
            <span className="text-purple-400">.</span>
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-xs uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white"
              >
                {link.label}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-purple-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href="https://github.com/tripathiashu080"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/40 transition-all hover:-translate-y-1 hover:border-purple-400/30 hover:text-white"
            >
              <Github size={17} />
            </a>

            <a
              href="https://linkedin.com/in/ashu-tripathi-122000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/40 transition-all hover:-translate-y-1 hover:border-purple-400/30 hover:text-white"
            >
              <Linkedin size={17} />
            </a>

            <a
              href="mailto:tripathiashu080@gmail.com"
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/40 transition-all hover:-translate-y-1 hover:border-purple-400/30 hover:text-white"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
        <div className="footer-bottom flex flex-col gap-5 border-t border-white/[0.07] py-7 text-xs text-white/20 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Gaurav Tripathi. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>Designed & built with React, Next.js & GSAP.</span>

            <a
              href="#home"
              className="back-top group grid h-10 w-10 place-items-center rounded-full border border-white/[0.08] bg-white/[0.025] text-white/40 transition-colors hover:border-purple-400/30 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp
                size={16}
                className="transition-transform group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
