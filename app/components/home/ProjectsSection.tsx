"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import { useEffect, useRef, useState } from "react";
import type { Project } from "./content";

type ProjectsSectionProps = {
  projects: Project[];
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const hasProjects = projects.length > 0;
  const [isCarouselMoving, setIsCarouselMoving] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);
  const isDragGestureRef = useRef(false);
  const resetDragTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetDragTimerRef.current !== null) {
        window.clearTimeout(resetDragTimerRef.current);
      }
    };
  }, []);

  const handlePointerDown = (clientX: number, clientY: number) => {
    dragStartRef.current = { x: clientX, y: clientY };
    isDragGestureRef.current = false;
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!dragStartRef.current) {
      return;
    }

    const deltaX = Math.abs(clientX - dragStartRef.current.x);
    const deltaY = Math.abs(clientY - dragStartRef.current.y);

    if (deltaX > 8 || deltaY > 8) {
      isDragGestureRef.current = true;
    }
  };

  const handlePointerEnd = () => {
    dragStartRef.current = null;

    if (resetDragTimerRef.current !== null) {
      window.clearTimeout(resetDragTimerRef.current);
    }

    resetDragTimerRef.current = window.setTimeout(() => {
      isDragGestureRef.current = false;
    }, 0);
  };

  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="max-w-3xl">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Projects
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          A mix of projects and builds to showcase my work.
        </p>
      </header>

      {hasProjects ? (
        <div className="mt-8">
          <Carousel
            responsive={responsive}
            ssr
            keyBoardControl
            showDots
            renderDotsOutside
            arrows={projects.length > 1}
            draggable={projects.length > 1}
            swipeable={projects.length > 1}
            minimumTouchDrag={24}
            beforeChange={() => setIsCarouselMoving(true)}
            afterChange={() => setIsCarouselMoving(false)}
            containerClass="project-carousel"
            sliderClass="pb-2"
            itemClass="px-2 pt-2"
            dotListClass="project-carousel-dots"
          >
            {projects.map((project) => (
              <div key={project.slug} className="h-full">
                <Link
                  href={`/projects/${project.slug}`}
                  scroll={true}
                  draggable={false}
                  onPointerDown={(event) =>
                    handlePointerDown(event.clientX, event.clientY)
                  }
                  onPointerMove={(event) =>
                    handlePointerMove(event.clientX, event.clientY)
                  }
                  onPointerUp={handlePointerEnd}
                  onPointerCancel={handlePointerEnd}
                  onClickCapture={(event) => {
                    if (isCarouselMoving || isDragGestureRef.current) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }}
                  className="group flex h-full select-none flex-col rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-3 shadow-[0_24px_60px_-40px_rgba(10,12,16,0.6)] backdrop-blur transition hover:-translate-y-1 hover:border-[color:var(--accent)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)]">
                    {project.thumbnailSrc ? (
                      <Image
                        src={project.thumbnailSrc}
                        alt={project.thumbnailAlt ?? `${project.title} project thumbnail`}
                        fill
                        draggable={false}
                        sizes="(min-width: 1280px) 500px, (min-width: 768px) 72vw, 88vw"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="post-thumb h-full w-full" />
                    )}
                  </div>
                  <article className="p-3">
                    <h3 className="mt-3 font-display text-2xl font-semibold text-[color:var(--fg)] transition group-hover:text-[color:var(--accent)]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--fg)] transition-colors duration-200 group-hover:text-[color:var(--accent)]">
                      View project <span aria-hidden="true">-&gt;</span>
                    </span>
                  </article>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <div className="mt-8 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel)] p-6 text-[color:var(--muted)]">
          Projects will be added here soon.
        </div>
      )}
    </section>
  );
}
