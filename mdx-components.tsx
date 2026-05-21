import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="font-display text-3xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-8 font-display text-xl font-semibold tracking-tight text-[color:var(--fg)] sm:mt-10 sm:text-2xl"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-8 font-display text-xl font-semibold tracking-tight text-[color:var(--fg)]"
        {...props}
      />
    ),
    p: (props) => (
      <p className="mt-4 text-base leading-7 text-[color:var(--muted)]" {...props} />
    ),
    a: (props) => (
      <a
        className="font-medium text-[color:var(--fg)] underline decoration-[color:var(--accent)] decoration-2 underline-offset-4 transition hover:text-[color:var(--accent)]"
        {...props}
      />
    ),
    ul: (props) => (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[color:var(--muted)]" {...props} />
    ),
    li: (props) => <li className="pl-1" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mt-6 border-l-2 border-[color:var(--accent)] pl-4 italic text-[color:var(--muted)]"
        {...props}
      />
    ),
    ...components,
  };
}
