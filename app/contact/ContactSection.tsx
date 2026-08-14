import ContactForm from "@/app/contact/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
          Contact
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
           Fill out the form below to get in touch.
        </p>
      </header>

      <section className="stagger mt-8 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel-strong)] p-4 shadow-[0_30px_70px_-55px_rgba(10,12,16,0.75)] sm:mt-10 sm:rounded-3xl sm:p-8">
        <ContactForm />
      </section>
    </section>
  );
}
