import Image from "next/image";

type Screenshot = {
  title: string;
  src: string;
  alt: string;
};

type ScreenshotGalleryProps = {
  items: Screenshot[];
};

export default function ScreenshotGallery({ items }: ScreenshotGalleryProps) {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <figure
          key={item.src}
          className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]"
        >
          <div className="relative aspect-[16/10] bg-[color:var(--panel)]">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 768px) 432px, 100vw"
              className="object-contain"
            />
          </div>
          <figcaption className="border-t border-[color:var(--border)] px-3 py-2 text-sm font-medium text-[color:var(--fg)]">
            {item.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
