"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
};

export function TypeWriter({
  words,
  className,
  speed = 85,
  deleteSpeed = 40,
  pauseTime = 1900
}: Props) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), pauseTime);
          }
        } else {
          setText(current.slice(0, Math.max(0, text.length - 1)));
          if (text.length - 1 <= 0) {
            setDeleting(false);
            setWordIndex((i) => i + 1);
          }
        }
      },
      deleting ? deleteSpeed : speed
    );
    return () => clearTimeout(t);
  }, [text, wordIndex, deleting, words, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[2px] animate-pulse bg-current align-middle" />
    </span>
  );
}
