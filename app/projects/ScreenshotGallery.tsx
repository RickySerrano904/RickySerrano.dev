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
    <div className="mt-4 grid grid-cols-1 gap-4">
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
              sizes="(min-width: 896px) 796px, (min-width: 640px) calc(100vw - 100px), calc(100vw - 76px)"
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
