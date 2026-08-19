import { Children, type CSSProperties, type ReactNode } from "react";

type MarqueeStyle = CSSProperties & {
  "--marquee-duration"?: string;
  "--marquee-gap"?: string;
  "--marquee-item-width"?: string;
};

type MarqueeProps = {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  duration?: string;
  gap?: string;
  itemWidth?: string;
};

export default function Marquee({
  ariaLabel,
  children,
  className,
  duration = "38s",
  gap = "1.5rem",
  itemWidth = "min(82vw, 20rem)",
}: MarqueeProps) {
  const items = Children.toArray(children).filter(Boolean);

  if (items.length === 0) {
    return null;
  }

  const style: MarqueeStyle = {
    "--marquee-duration": duration,
    "--marquee-gap": gap,
    "--marquee-item-width": itemWidth,
  };

  return (
    <div
      className={["marquee", className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
      style={style}
    >
      <div className="marquee-track">
        {items.map((item, index) => (
          <div key={`item-${index}`} className="marquee-item">
            {item}
          </div>
        ))}

        {items.map((item, index) => (
          <div
            key={`duplicate-${index}`}
            className="marquee-item marquee-duplicate"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
