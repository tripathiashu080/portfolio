"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const glow = glowRef.current;

    if (!cursor || !dot || !glow) return;

    document.body.classList.add("custom-cursor-active");

    const moveX = gsap.quickTo(cursor, "x", {
      duration: 0.18,
      ease: "power3.out",
    });

    const moveY = gsap.quickTo(cursor, "y", {
      duration: 0.18,
      ease: "power3.out",
    });

    const dotX = gsap.quickTo(dot, "x", {
      duration: 0.08,
      ease: "power2.out",
    });

    const dotY = gsap.quickTo(dot, "y", {
      duration: 0.08,
      ease: "power2.out",
    });

    const glowX = gsap.quickTo(glow, "x", {
      duration: 0.6,
      ease: "power3.out",
    });

    const glowY = gsap.quickTo(glow, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      moveX(clientX);
      moveY(clientY);

      dotX(clientX);
      dotY(clientY);

      glowX(clientX);
      glowY(clientY);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const interactive = target.closest(
        "a, button, input, textarea, select, [data-cursor]",
      );

      if (interactive) {
        const cursorType = interactive.getAttribute("data-cursor");

        if (cursorType === "view") {
          setViewMode();
        } else {
          setHoverMode();
        }

        return;
      }

      setNormalMode();
    };

    const setNormalMode = () => {
      gsap.to(cursor, {
        width: 32,
        height: 32,
        borderRadius: "50%",
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(dot, {
        scale: 1,
        opacity: 1,
        duration: 0.25,
      });

      gsap.to(glow, {
        scale: 1,
        opacity: 0.35,
        duration: 0.35,
      });
    };

    const setHoverMode = () => {
      gsap.to(cursor, {
        width: 52,
        height: 52,
        borderRadius: "50%",
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(dot, {
        scale: 0.6,
        opacity: 0.8,
        duration: 0.25,
      });

      gsap.to(glow, {
        scale: 1.35,
        opacity: 0.55,
        duration: 0.35,
      });
    };

    const setViewMode = () => {
      gsap.to(cursor, {
        width: 76,
        height: 76,
        borderRadius: "50%",
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(dot, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
      });

      gsap.to(glow, {
        scale: 1.6,
        opacity: 0.65,
        duration: 0.35,
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, dot, glow], {
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, dot, glow], {
        opacity: 0,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    document.addEventListener("mouseover", handleMouseOver);

    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.classList.remove("custom-cursor-active");

      window.removeEventListener("mousemove", handleMouseMove);

      document.removeEventListener("mouseover", handleMouseOver);

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9997]
          h-32
          w-32
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/20
          blur-3xl
          opacity-0
        "
      />

      <div
        ref={cursorRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          h-8
          w-8
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-purple-300/60
          bg-purple-400/[0.05]
          opacity-0
        "
      />

      <div
        ref={dotRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          h-1.5
          w-1.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          shadow-[0_0_12px_rgba(168,85,247,.9)]
          opacity-0
        "
      />
    </>
  );
}
