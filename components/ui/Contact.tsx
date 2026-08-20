"use client";

import { FormEvent, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Check,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [sent, setSent] = useState(false);

  useLayoutEffect(() => {
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const section = root.current!;

      gsap.set(".contact-label", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".contact-title", {
        opacity: 0,
        y: 70,
      });

      gsap.set(".contact-copy", {
        opacity: 0,
        y: 30,
      });

      gsap.set(".contact-form", {
        opacity: 0,
        x: 70,
      });

      gsap.set(".contact-info", {
        opacity: 0,
        x: -50,
      });

      gsap.set(".contact-social", {
        opacity: 0,
        y: 25,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      timeline
        .to(".contact-label", {
          opacity: 1,
          y: 0,
          duration: 0.6,
        })
        .to(
          ".contact-title",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=.3",
        )
        .to(
          ".contact-copy",
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=.5",
        )
        .to(
          ".contact-info",
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=.3",
        )
        .to(
          ".contact-form",
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=.6",
        )
        .to(
          ".contact-social",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=.4",
        );
      gsap.to(".contact-glow", {
        x: 50,
        y: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".contact-ring", {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      const button = buttonRef.current;

      if (button) {
        const moveButton = (event: MouseEvent) => {
          const rect = button.getBoundingClientRect();

          const x = event.clientX - (rect.left + rect.width / 2);

          const y = event.clientY - (rect.top + rect.height / 2);

          gsap.to(button, {
            x: x * 0.18,
            y: y * 0.18,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const resetButton = () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)",
          });
        };

        button.addEventListener("mousemove", moveButton);

        button.addEventListener("mouseleave", resetButton);
      }
    }, root);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:tripathiashu080@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
  };

  return (
    <section
      ref={root}
      id="contact"
      className="relative overflow-hidden py-32 md:py-40"
    >
      <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="contact-glow pointer-events-none absolute left-[-150px] top-[25%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="contact-ring pointer-events-none absolute right-[-200px] top-[5%] h-[550px] w-[550px] rounded-full border border-purple-500/[0.07]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-4xl">
          <div className="contact-label mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-purple-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
              Contact
            </span>
          </div>

          <h2 className="contact-title text-4xl font-black leading-[1] tracking-[-0.05em] md:text-7xl">
            Have a project
            <br />
            <span className="text-gradient">in mind?</span>
          </h2>

          <p className="contact-copy mt-7 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
            Whether you have a project, an idea or just want to say hello,
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <div className="contact-info flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl md:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                Let&apos;s connect
              </p>

              <h3 className="mt-5 text-2xl font-bold text-white">
                Let&apos;s build something
                <span className="text-purple-300"> meaningful.</span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/40">
                I&apos;m always interested in working on exciting products,
                creative interfaces and challenging frontend problems.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              <a
                href="mailto:tripathiashu080@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-black/20 p-4 transition hover:border-purple-400/25"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-purple-500/10">
                  <Mail size={18} className="text-purple-300" />
                </span>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-white/65">
                    tripathiashu080@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto text-white/20 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300"
                />
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-black/20 p-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-purple-500/10">
                  <MapPin size={18} className="text-purple-300" />
                </span>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-white/65">Gurugram, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-green-400/10 bg-green-400/[0.03] p-4">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />

                  <span className="relative h-3 w-3 rounded-full bg-green-400" />
                </span>

                <span className="text-xs text-white/45">
                  Available for new opportunities
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="contact-form relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl md:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-600/10 blur-[80px]" />

            <div className="relative">
              <div className="group relative">
                <label
                  htmlFor="name"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-white/30 transition group-focus-within:text-purple-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full border-b border-white/[0.1] bg-transparent px-0 py-4 text-base text-white outline-none transition placeholder:text-white/15 focus:border-purple-400"
                />

                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="group relative mt-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-white/30 transition group-focus-within:text-purple-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full border-b border-white/[0.1] bg-transparent px-0 py-4 text-base text-white outline-none transition placeholder:text-white/15 focus:border-purple-400"
                />

                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="group relative mt-8">
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-white/30 transition group-focus-within:text-purple-300"
                >
                  Tell me about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about your idea..."
                  className="w-full resize-none border-b border-white/[0.1] bg-transparent px-0 py-4 text-base text-white outline-none transition placeholder:text-white/15 focus:border-purple-400"
                />

                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="mt-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                <p className="max-w-xs text-xs leading-5 text-white/25">
                  Your message will open your default email application.
                </p>

                <button
                  ref={buttonRef}
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_50px_rgba(120,70,255,.25)] transition-shadow hover:shadow-[0_15px_60px_rgba(120,70,255,.4)]"
                >
                  {sent ? (
                    <>
                      Message Ready
                      <Check size={17} />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="contact-social mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/[0.07] pt-8 md:flex-row">
          <p className="text-xs uppercase tracking-[0.25em] text-white/20">
            Find me online
          </p>

          <div className="flex gap-3">
            <a
              href="https://github.com/tripathiashu080"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/45 transition hover:-translate-y-1 hover:border-purple-400/30 hover:text-white"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/ashu-tripathi-122000"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/45 transition hover:-translate-y-1 hover:border-purple-400/30 hover:text-white"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="#"
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-white/45 transition hover:-translate-y-1 hover:border-purple-400/30 hover:text-white"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
