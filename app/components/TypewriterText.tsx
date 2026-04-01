"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterTextProps = {
  words: string[];
  typingDelayMs?: number;
  deletingDelayMs?: number;
  holdDelayMs?: number;
  className?: string;
};

export default function TypewriterText({
  words,
  typingDelayMs = 95,
  deletingDelayMs = 55,
  holdDelayMs = 1200,
  className,
}: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const safeWords = useMemo(() => words.filter(Boolean), [words]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mediaQuery.matches);

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || safeWords.length <= 1) {
      return;
    }

    const currentWord = safeWords[wordIndex] ?? "";

    const timeout = window.setTimeout(() => {
      if (!isDeleting && charCount < currentWord.length) {
        setCharCount((count) => count + 1);
        return;
      }

      if (!isDeleting && charCount === currentWord.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && charCount > 0) {
        setCharCount((count) => count - 1);
        return;
      }

      setIsDeleting(false);
      setWordIndex((index) => (index + 1) % safeWords.length);
    }, !isDeleting && charCount === currentWord.length ? holdDelayMs : isDeleting ? deletingDelayMs : typingDelayMs);

    return () => window.clearTimeout(timeout);
  }, [
    charCount,
    deletingDelayMs,
    holdDelayMs,
    isDeleting,
    reduceMotion,
    safeWords,
    typingDelayMs,
    wordIndex,
  ]);

  if (safeWords.length === 0) {
    return null;
  }

  const currentWord = safeWords[wordIndex] ?? safeWords[0];
  const text = reduceMotion ? safeWords[0] : currentWord.slice(0, charCount);
  const widestWordLength = safeWords.reduce((max, word) => Math.max(max, word.length), 0);

  return (
    <span
      className={className}
      style={{ minWidth: `${widestWordLength}ch` }}
      aria-label={currentWord}
    >
      {text}
      <span
        aria-hidden="true"
        className={`typewriter-cursor${reduceMotion ? " typewriter-cursor-static" : ""}`}
      />
    </span>
  );
}
