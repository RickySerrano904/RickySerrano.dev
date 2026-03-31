export default function ContactPage() {
  return (
    <main className="page-intro mx-auto w-full max-w-4xl px-6 pb-24 pt-32">
      <header className="max-w-2xl">
        {/* <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
          Contact
        </p> */}
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          Let's connect! Fill out the form below to get in contact with me. I typically
          respond within two business days.
        </p>
      </header>

      <section className="stagger mt-10 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-6 shadow-[0_30px_70px_-55px_rgba(10,12,16,0.75)] sm:p-8">
        <h2 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
          Send a message
        </h2>
        <p className="mt-2 text-sm text-[color:var(--muted)]">
          Fill out the form below and I will get back to you as soon as
          possible.
        </p>

        <form className="mt-6 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-[color:var(--fg)]">
              Name
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="h-11 w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] focus-visible:border-[color:var(--accent)] focus-visible:outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[color:var(--fg)]">
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="h-11 w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] focus-visible:border-[color:var(--accent)] focus-visible:outline-none"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-[color:var(--fg)]">
            Message
            <textarea
              name="message"
              rows={6}
              placeholder="Enter your message"
              className="w-full resize-none rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] focus-visible:border-[color:var(--accent)] focus-visible:outline-none"
            />
          </label>

          <button
            type="submit"
            className="h-12 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--nav-active)] text-sm font-semibold text-[color:var(--fg)] transition hover:-translate-y-0.5 hover:border-[color:var(--accent)]"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
