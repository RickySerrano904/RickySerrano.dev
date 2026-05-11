import { Children, type CSSProperties, type ReactNode } from "react";
import styles from "./Marquee.module.css";

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
      className={[styles.root, className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
      style={style}
    >
      <div className={styles.track}>
        {items.map((item, index) => (
          <div key={`item-${index}`} className={styles.item}>
            {item}
          </div>
        ))}

        {items.map((item, index) => (
          <div
            key={`duplicate-${index}`}
            className={[styles.item, styles.duplicate].join(" ")}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
