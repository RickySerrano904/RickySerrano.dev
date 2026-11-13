"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ShimmerImage(props: ImageProps) {
  const source = typeof props.src === "string"
    ? props.src
    : "default" in props.src ? props.src.default.src : props.src.src;

  return <LoadingImage key={source} {...props} />;
}

function LoadingImage({ onLoad, onError, ...props }: ImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <span
      style={{
        display: "block",
        overflow: "hidden",
        position: props.fill ? "absolute" : "relative",
        ...(props.fill ? { inset: 0 } : { width: "100%", height: "100%" }),
      }}
      data-loading={loading}
      aria-busy={loading}
    >
      <Image
        {...props}
        alt={props.alt}
        ref={(image) => {
          if (image?.complete && image.naturalWidth > 0) setLoading(false);
        }}
        onLoad={(event) => {
          setLoading(false);
          onLoad?.(event);
        }}
        onError={(event) => {
          setLoading(false);
          onError?.(event);
        }}
      />
      {loading && <ShimmerPlaceholder />}
    </span>
  );
}

function ShimmerPlaceholder() {
  const highlightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const highlight = highlightRef.current;
    if (!highlight) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation: Animation | undefined;
    const updateAnimation = () => {
      animation?.cancel();
      if (!reducedMotion.matches) {
        animation = highlight.animate(
          [{ transform: "translateX(-100%)" }, { transform: "translateX(100%)" }],
          { duration: 1500, easing: "ease-in-out", iterations: Infinity },
        );
      }
    };

    updateAnimation();
    reducedMotion.addEventListener("change", updateAnimation);
    return () => {
      animation?.cancel();
      reducedMotion.removeEventListener("change", updateAnimation);
    };
  }, []);

  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background: "var(--panel-strong)",
        overflow: "hidden",
      }}
    >
      <span
        ref={highlightRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(100deg, transparent 20%, var(--border) 50%, transparent 80%)",
        }}
      />
    </span>
  );
}
