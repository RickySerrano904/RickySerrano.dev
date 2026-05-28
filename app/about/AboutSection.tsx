type AboutSectionProps = {
  paragraphs: string[];
};

export default function AboutSection({ paragraphs }: AboutSectionProps) {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <header className="w-full">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          About
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          {paragraphs.map((paragraph, index) => (
            <span key={paragraph}>
              {paragraph}
              {index < paragraphs.length - 1 ? (
                <>
                  <br />
                  <br />
                </>
              ) : null}
            </span>
          ))}
        </p>
      </header>
    </section>
  );
}
