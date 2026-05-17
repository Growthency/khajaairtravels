"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-24 right-5 z-40 grid size-11 place-items-center rounded-full bg-ink text-white shadow-lg transition-all duration-300 hover:bg-ink-soft",
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      ].join(" ")}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
