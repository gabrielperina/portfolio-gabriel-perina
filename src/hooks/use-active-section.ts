import { useEffect, useState } from "react";

/**
 * Tracks which section is under the navbar "reading line".
 * Uses a thin observation band (rootMargin) so adjacent sections never flicker.
 */
export function useActiveSection(ids: readonly string[], enabled: boolean) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (!enabled || !("IntersectionObserver" in window)) {
      setActive("");
      return;
    }
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));
    if (!elements.length) return;

    const visible = new Set<string>();
    const pick = () => {
      // The last section in document order that crosses the band wins.
      const current = ids.filter((id) => visible.has(id)).pop();
      if (current) setActive(current);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        pick();
      },
      { rootMargin: "-88px 0px -55% 0px", threshold: 0 },
    );
    elements.forEach((element) => observer.observe(element));

    const onScroll = () => {
      // At the very bottom, the last section (contact) should be active.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive(ids[ids.length - 1] ?? "");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids, enabled]);

  return [active, setActive] as const;
}
