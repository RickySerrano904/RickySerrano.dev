import ContactForm from "@/app/home/ContactForm";

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

        <ContactForm />
      </section>
    </section>
  );
}
