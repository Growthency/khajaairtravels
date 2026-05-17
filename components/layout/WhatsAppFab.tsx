"use client";

import { useEffect, useState } from "react";
import { WA } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

export function WhatsAppFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href={WA.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={[
        "pulse-ring fixed bottom-5 left-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.7)] transition-all duration-300 hover:bg-[#128C7E]",
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      ].join(" ")}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
