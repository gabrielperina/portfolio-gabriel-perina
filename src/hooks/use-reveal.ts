import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.setAttribute("data-visible", "true"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.setAttribute("data-visible", "true"));
      return;
    }

    // First mark content already on screen; only later sections enter from below.
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.88) {
        element.setAttribute("data-visible", "true");
      }
    });
    document.documentElement.classList.add("reveal-enabled");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -8% 0px" },
    );
    elements.forEach((element) => {
      if (element.getAttribute("data-visible") !== "true") observer.observe(element);
    });
    return () => {
      observer.disconnect();
    };
  }, []);
}