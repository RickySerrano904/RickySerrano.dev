import ContactForm from "@/app/home/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Contact
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          Let&apos;s connect. Fill out the form below to contact me, and I
          typically respond within two business days.
        </p>
      </header>

      <section className="stagger mt-8 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-4 shadow-[0_30px_70px_-55px_rgba(10,12,16,0.75)] sm:mt-10 sm:rounded-3xl sm:p-8">
        <h3 className="font-display text-xl font-semibold text-[color:var(--fg)] sm:text-2xl">
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
