"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        ".nav-shell",
        {
          y: -30,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
        },
      ).fromTo(
        ".nav-logo",
        {
          x: -15,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.45,
        },
        "-=.3",
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // If we're at the very top, no nav item should
      // incorrectly remain selected.
      if (scrollPosition < 150) {
        setActive("about");
        ticking = false;
        return;
      }

      let currentSection = "about";
      let closestDistance = Infinity;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href) as HTMLElement | null;

        if (!section) return;

        const rect = section.getBoundingClientRect();

        // Position of the section relative to the
        // viewport, adjusted for navbar.
        const sectionTop = rect.top + window.scrollY;

        const distance = Math.abs(scrollPosition + 120 - sectionTop);

        if (
          sectionTop <= scrollPosition + viewportHeight * 0.35 &&
          distance < closestDistance
        ) {
          closestDistance = distance;
          currentSection = section.id;
        }
      });

      setActive(currentSection);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);

        ticking = true;
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const navigateTo = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    const offset = 100;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false);

    window.history.replaceState(null, "", href);
  };

  useEffect(() => {
    const menu = mobileMenuRef.current;

    if (!menu) return;

    if (menuOpen) {
      gsap.set(menu, {
        display: "block",
      });

      gsap.fromTo(
        menu,
        {
          opacity: 0,
          y: -15,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        ".mobile-item",
        {
          opacity: 0,
          x: -15,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          stagger: 0.05,
          delay: 0.1,
          ease: "power3.out",
        },
      );
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: -15,
        scale: 0.98,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(menu, {
            display: "none",
          });
        },
      });
    }
  }, [menuOpen]);

  return (
    <header
      ref={navRef}
      className="
        fixed
        left-0
        right-0
        top-0
        z-[100]
        px-4
        pt-5
        md:px-6
      "
    >
      <div
        className={`
          nav-shell
          mx-auto
          max-w-6xl
          transition-all
          duration-500
          ${scrolled ? "-translate-y-1" : ""}
        `}
      >
        <nav
          className={`
            relative
            flex
            h-[62px]
            items-center
            justify-between
            rounded-full
            border
            px-3
            transition-all
            duration-500
            md:px-4
            ${
              scrolled
                ? `
                  border-white/[0.12]
                  bg-black/75
                  shadow-[0_15px_60px_rgba(0,0,0,.45)]
                  backdrop-blur-2xl
                `
                : `
                  border-white/[0.08]
                  bg-black/45
                  backdrop-blur-xl
                `
            }
          `}
        >
          <a
            href="#home"
            onClick={(event) => navigateTo(event, "#home")}
            className="
              nav-logo
              group
              flex
              items-center
              gap-2.5
              px-2
            "
          >
            <span
              className="
                grid
                h-9
                w-9
                place-items-center
                rounded-full
                bg-gradient-to-br
                from-purple-500
                to-blue-500
                text-sm
                font-black
                text-white
                shadow-[0_0_25px_rgba(124,58,237,.35)]
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:rotate-6
              "
            >
              G
            </span>

            <span
              className="
                hidden
                text-sm
                font-bold
                tracking-[-0.02em]
                text-white
                sm:block
              "
            >
              GAURAV
              <span className="text-purple-400">.</span>
            </span>
          </a>

          <div
            className="
              hidden
              items-center
              gap-1
              md:flex
            "
          >
            {navItems.map((item) => {
              const id = item.href.replace("#", "");

              const isActive = active === id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => navigateTo(event, item.href)}
                  className={`
                    nav-item
                    relative
                    rounded-full
                    px-4
                    py-2.5
                    text-[12px]
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }
                  `}
                >
                  {isActive && (
                    <span
                      className="
                        absolute
                        inset-0
                        -z-10
                        rounded-full
                        border
                        border-purple-400/20
                        bg-purple-500/[0.10]
                        shadow-[0_0_20px_rgba(124,58,237,.08)]
                      "
                    />
                  )}

                  {item.label}
                </a>
              );
            })}
          </div>

          <div
            className="
              nav-actions
              hidden
              items-center
              gap-2
              md:flex
            "
          >
            <a
              href="/gaurav-resume.pdf"
              download="gaurav-resume.pdf"
              className="
    group
    flex
    items-center
    gap-2
    rounded-full
    border
    border-white/[0.08]
    bg-white/[0.025]
    px-4
    py-2.5
    text-[11px]
    font-medium
    text-white/60
    transition-all
    duration-300
    hover:border-white/15
    hover:bg-white/[0.06]
    hover:text-white
  "
            >
              CV
              <Download
                size={13}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>

            <a
              href="#contact"
              onClick={(event) => navigateTo(event, "#contact")}
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-purple-600
                to-blue-500
                px-5
                py-2.5
                text-[11px]
                font-semibold
                text-white
                shadow-[0_8px_30px_rgba(120,70,255,.25)]
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-[0_10px_40px_rgba(120,70,255,.4)]
              "
            >
              Let&apos;s Talk
              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="
              relative
              z-20
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.04]
              text-white
              transition-all
              hover:bg-white/[0.08]
              md:hidden
            "
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        <div
          ref={mobileMenuRef}
          className="
            mt-2
            hidden
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.08]
            bg-[#050505]/95
            p-3
            shadow-[0_20px_80px_rgba(0,0,0,.5)]
            backdrop-blur-2xl
          "
        >
          <div className="space-y-1">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");

              const isActive = active === id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => navigateTo(event, item.href)}
                  className={`
                    mobile-item
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-4
                    py-3.5
                    text-sm
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-purple-500/10 text-purple-200"
                        : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                    }
                  `}
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-purple-400
                        shadow-[0_0_12px_rgba(168,85,247,.8)]
                      "
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div
            className="
              mt-3
              grid
              grid-cols-2
              gap-2
              border-t
              border-white/[0.07]
              pt-3
            "
          >
            <a
              href="./Gaurav_Tripathiii.pdf"
              download
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-white/[0.08]
                py-3
                text-xs
                text-white/60
                transition
                hover:bg-white/[0.04]
                hover:text-white
              "
            >
              <Download size={14} />
              CV
            </a>

            <a
              href="#contact"
              onClick={(event) => navigateTo(event, "#contact")}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-purple-600
                to-blue-500
                py-3
                text-xs
                font-semibold
                text-white
              "
            >
              Let&apos;s Talk
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
