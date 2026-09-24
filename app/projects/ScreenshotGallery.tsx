"use client";

import { useState } from "react";
import Image from "next/image";

type Screenshot = {
  title: string;
  src: string;
  darkSrc?: string;
  alt: string;
};

type ScreenshotGalleryProps = {
  items: Screenshot[];
};

export default function ScreenshotGallery({ items }: ScreenshotGalleryProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const hasThemePairs = items.some((item) => item.darkSrc);

  return (
    <div>
      {hasThemePairs ? (
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-[color:var(--fg)]">Screenshot appearance</span>
          <div role="group" aria-label="Screenshot appearance" className="inline-flex gap-1 rounded-xl border border-[color:var(--border)] bg-[color:var(--panel)] p-1">
            {(["light", "dark"] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={mode === value}
                onClick={() => setMode(value)}
                className="min-h-11 rounded-lg px-4 py-2 text-sm font-semibold text-[color:var(--fg)] transition-colors hover:bg-[color:var(--panel-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)] aria-pressed:bg-[color:var(--accent)] aria-pressed:text-[color:var(--bg)]"
              >
                {value === "light" ? "Light" : "Dark"}
              </button>
            ))}
          </div>
        </div>
      ) : null}
      <div className="mt-4 grid grid-cols-1 gap-4">
        {items.map((item) => (
          <figure
            key={item.src}
            className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]"
          >
            <div className="relative aspect-[16/10] bg-[color:var(--panel)]">
              <Image
                src={mode === "dark" && item.darkSrc ? item.darkSrc : item.src}
                alt={item.darkSrc ? `${item.alt} in ${mode} mode` : item.alt}
                fill
                sizes="(min-width: 896px) 796px, (min-width: 640px) calc(100vw - 100px), calc(100vw - 76px)"
                className="object-contain"
              />
            </div>
            <figcaption className="border-t border-[color:var(--border)] px-3 py-2 text-sm font-medium text-[color:var(--fg)]">
              {item.title}
              {item.darkSrc ? `: ${mode === "light" ? "Light" : "Dark"} Mode` : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
