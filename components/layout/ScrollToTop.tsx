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
        "fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-ink text-white shadow-[0_12px_30px_-10px_rgba(10,20,38,0.55)] transition-all duration-300 hover:bg-ink-soft hover:-translate-y-0.5",
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      ].join(" ")}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
