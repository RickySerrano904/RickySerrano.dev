"use client";

import { useMemo, useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

type SendState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [sendState, setSendState] = useState<SendState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  const canSubmit = useMemo(() => {
    return (
      sendState !== "sending" &&
      name.trim().length >= 2 &&
      email.trim().includes("@") &&
      message.trim().length >= 20 &&
      !!turnstileToken
    );
  }, [email, message, name, sendState, turnstileToken]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendState("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          website,
          turnstileToken,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        setSendState("error");
        setStatusMessage(data.error ?? "Failed to send message.");
        setTurnstileToken("");
        turnstileRef.current?.reset();
        return;
      }

      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
      setTurnstileToken("");
      turnstileRef.current?.reset();
      setSendState("sent");
      setStatusMessage("Message sent. I will get back to you soon.");
    } catch {
      setTurnstileToken("");
      turnstileRef.current?.reset();
      setSendState("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
      <input
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

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
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Enter your message"
          className="w-full resize-none rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted)] focus-visible:border-[color:var(--accent)] focus-visible:outline-none"
        />
        <span className="text-xs font-normal text-[color:var(--muted)]">
          Message must be between 20 and 2000 characters.
        </span>
      </label>

      <div className="grid gap-2">
        <div className="relative isolate rounded-2xl border border-[color:var(--border)] bg-transparent p-3">
          <div className="max-w-full overflow-x-auto">
            <div className="flex justify-center">
              <Turnstile
                ref={turnstileRef}
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onSuccess={(token) => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken("")}
                onError={() => setTurnstileToken("")}
                options={{ theme: "auto" }}
              />
            </div>
          </div>
        </div>
        <span className="text-xs font-normal text-[color:var(--muted)]">
          {turnstileToken
            ? "Human verification complete."
            : "Complete the verification to enable sending."}
        </span>
      </div>

      {statusMessage && (
        <p
          className={`rounded-2xl border px-4 py-3 text-sm ${
            sendState === "sent"
              ? "border-[color:var(--accent)] text-[color:var(--fg)]"
              : "border-red-500/45 text-red-600 dark:text-red-300"
          }`}
          role="status"
        >
          {statusMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={!canSubmit}
        className="h-12 w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--nav-active)] text-sm font-semibold text-[color:var(--fg)] transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[color:var(--bg)] hover:shadow-[0_0_0_1px_var(--accent),0_0_26px_-5px_var(--accent)] focus-visible:border-[color:var(--accent)] focus-visible:bg-[color:var(--accent)] focus-visible:text-[color:var(--bg)] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--bg),0_0_26px_-4px_var(--accent)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:border-[color:var(--border)] disabled:hover:bg-[color:var(--nav-active)] disabled:hover:text-[color:var(--fg)] disabled:hover:shadow-none"
      >
        {sendState === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
