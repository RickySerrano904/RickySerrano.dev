export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="max-w-2xl">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Contact
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          Let&apos;s connect. Fill out the form below to contact me, and I
          typically respond within two business days.
        </p>
      </header>

      <section className="stagger mt-10 rounded-3xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-6 shadow-[0_30px_70px_-55px_rgba(10,12,16,0.75)] sm:p-8">
        <h3 className="font-display text-2xl font-semibold text-[color:var(--fg)]">
          Send a message
        </h3>
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
                autoComplete="name"
                required
                minLength={2}
                maxLength={80}
                placeholder="Enter your name"
                className="h-11 w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] focus-visible:border-[color:var(--accent)] focus-visible:outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[color:var(--fg)]">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                required
                maxLength={254}
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
              required
              minLength={20}
              maxLength={2000}
              placeholder="Enter your message"
              className="w-full resize-none rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] focus-visible:border-[color:var(--accent)] focus-visible:outline-none"
            />
            <span className="text-xs font-normal text-[color:var(--muted)]">
              Message must be between 20 and 2000 characters.
            </span>
          </label>

          <button
            type="submit"
            className="h-12 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--nav-active)] text-sm font-semibold text-[color:var(--fg)] transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[color:var(--bg)] hover:shadow-[0_0_0_1px_var(--accent),0_0_26px_-5px_var(--accent)] focus-visible:border-[color:var(--accent)] focus-visible:bg-[color:var(--accent)] focus-visible:text-[color:var(--bg)] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--bg),0_0_26px_-4px_var(--accent)]"
          >
            Send Message
          </button>
        </form>
      </section>
    </section>
  );
}
