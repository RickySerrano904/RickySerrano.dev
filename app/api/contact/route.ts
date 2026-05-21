import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function hasControlChars(value: string) {
  return /[\r\n\0]/.test(value);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "";

  return req.headers.get("x-real-ip") || "";
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return {
      ok: false,
      error: "Server not configured (missing Turnstile secret).",
    };
  }

  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: form,
    },
  );

  const data = (await response.json()) as { success: boolean };

  if (!data.success) {
    return { ok: false, error: "Verification failed. Please try again." };
  }

  return { ok: true as const };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const website = String(body.website ?? "").trim();
    if (website) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const turnstileToken = String(body.turnstileToken ?? "").trim();

    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Please complete the verification." },
        { status: 400 },
      );
    }

    if (
      hasControlChars(name) ||
      hasControlChars(email) ||
      hasControlChars(message)
    ) {
      return NextResponse.json(
        { error: "Invalid characters." },
        { status: 400 },
      );
    }

    if (name.length < 2 || name.length > 80) {
      return NextResponse.json({ error: "Name is invalid." }, { status: 400 });
    }

    if (!isValidEmail(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Email looks invalid." },
        { status: 400 },
      );
    }

    if (message.length < 20 || message.length > 2000) {
      return NextResponse.json(
        { error: "Message is invalid." },
        { status: 400 },
      );
    }

    const turnstile = await verifyTurnstile(turnstileToken, getClientIp(req));
    if (!turnstile.ok) {
      return NextResponse.json(
        { error: turnstile.error },
        { status: 403 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!to || !from || !resendApiKey) {
      return NextResponse.json(
        { error: "Server not configured (missing email env vars)." },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
    });

    if (error) {
      console.error("Resend email send failed", error);

      return NextResponse.json(
        { error: "Message could not be sent. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
