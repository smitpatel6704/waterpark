"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CircleAlert,
  CircleCheck,
  Clock3,
  Mail,
  MapPin,
  Navigation2,
  Phone,
  Send,
  ShieldCheck,
  LoaderCircle,
  Waves,
  X,
} from "lucide-react";

const fieldClass =
  "w-full rounded-2xl border border-ocean-900/10 bg-slate-50 px-4 py-3.5 text-ocean-950 outline-none transition placeholder:text-ocean-900/30 hover:border-aqua-500/40 focus:border-aqua-500 focus:bg-white focus:ring-4 focus:ring-aqua-500/10";

export default function Contact() {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    if (submitState !== "success" && submitState !== "error") return;

    const timeout = window.setTimeout(() => {
      setSubmitState("idle");
      setSubmitMessage("");
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [submitState]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState("submitting");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }

      form.reset();
      setSubmitState("success");
      setSubmitMessage(result.message || "Thanks! Your message has been sent.");
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
      );
    }
  }

  return (
    <section
      className="relative isolate overflow-hidden bg-[#f6fbfd] py-16 sm:py-20 md:py-32"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-aqua-400/15 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-coral-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,51,77,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,77,0.035)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <div className="container section-shell">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-aqua-500/20 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-ocean-800 shadow-sm"
          >
            <Waves className="h-4 w-4 text-aqua-500" />
            Plan your visit
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-balance text-3xl sm:text-4xl font-black tracking-tight text-ocean-950 md:text-6xl"
          >
            Your next adventure
            <span className="block text-gradient">starts right here.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl text-base font-medium leading-relaxed text-ocean-800/65 md:text-lg"
          >
            Find your way to Aquatown or send us a message. Our team is ready
            to help you plan a perfect day on the water.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl sm:rounded-[2rem] border border-white/80 bg-white shadow-[0_30px_90px_rgba(0,51,77,0.14)] lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative isolate min-h-[500px] overflow-hidden bg-ocean-950 p-5 sm:p-7 text-white md:p-10 lg:min-h-full"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(51,214,255,0.3),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(255,92,51,0.18),transparent_30%)]" />
            <div className="absolute -right-28 top-28 -z-10 h-72 w-72 rounded-full border border-aqua-400/15" />
            <div className="absolute -right-16 top-40 -z-10 h-48 w-48 rounded-full border border-aqua-400/15" />

            <div className="flex h-full flex-col">
              <div>
                <div className="mb-6 sm:mb-8 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-aqua-100 backdrop-blur">
                    Aquatown, Gujarat
                  </span>
                  <Waves className="h-7 w-7 text-aqua-400" />
                </div>

                <h3 className="max-w-sm text-2xl sm:text-3xl font-black leading-tight md:text-4xl">
                  Make a splash,
                  <span className="block text-aqua-400">find us in Kalol.</span>
                </h3>
                <p className="mt-4 max-w-md text-sm font-medium leading-6 text-white/60 md:text-base">
                  Easy to reach, impossible to forget. Tap below for a direct
                  route to the park.
                </p>
              </div>

              <div className="relative my-8 min-h-52 flex-1 overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-inner">
                <iframe
                  title="Aquatown location map"
                  src="https://www.google.com/maps?q=Aquatown%2C%20Survay%20392%2C%20Khatraj%20Kalol%20Rd%2C%20beside%20sherisa%2C%20canal%2C%20Kalol%2C%20Sherisa%2C%20Gujarat%20382725&z=15&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-ocean-950/45 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-ocean-950/35 to-transparent" />
              </div>

              <div>
                <div className="mb-6 flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-aqua-400/15 text-aqua-400">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                      Park address
                    </p>
                    <address className="mt-1 text-sm font-semibold not-italic leading-6 text-white/85">
                      Survay 392, Khatraj Kalol Rd,
                      <br />
                      beside sherisa, canal,
                      <br />
                      Kalol, Sherisa, Gujarat 382725
                    </address>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Aquatown%2C%20Survay%20392%2C%20Khatraj%20Kalol%20Rd%2C%20beside%20sherisa%2C%20canal%2C%20Kalol%2C%20Sherisa%2C%20Gujarat%20382725"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 font-black text-ocean-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-aqua-50"
                >
                  <span className="flex items-center gap-3">
                    <Navigation2 className="h-5 w-5 text-aqua-500" />
                    Get directions
                  </span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="p-5 sm:p-7 md:p-10 lg:p-12"
          >
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-aqua-600">
                  We&apos;re here to help
                </p>
                <h3 className="text-2xl sm:text-3xl font-black text-ocean-950">
                  Send us a message
                </h3>
              </div>
              <div className="flex gap-2">
                <a
                  href="tel:+916355918057"
                  aria-label="Call Aquatown"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ocean-900/10 text-ocean-800 transition hover:border-aqua-500 hover:bg-aqua-50 hover:text-aqua-600"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href="mailto:info@aquatown.in"
                  aria-label="Email Aquatown"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ocean-900/10 text-ocean-800 transition hover:border-aqua-500 hover:bg-aqua-50 hover:text-aqua-600"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-bold text-ocean-900"
                  htmlFor="contact-name"
                >
                  Full name
                </label>
                <input
                  className={fieldClass}
                  id="contact-name"
                  name="name"
                  placeholder="Your name"
                  required
                  type="text"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-ocean-900"
                    htmlFor="contact-phone"
                  >
                    Phone number
                  </label>
                <input
                  className={fieldClass}
                  id="contact-phone"
                  inputMode="numeric"
                  maxLength={10}
                  minLength={10}
                  name="phone"
                  pattern="[0-9]{10}"
                  placeholder="9876543210"
                  required
                  title="Enter a 10-digit mobile number"
                  type="tel"
                />
                </div>
                <div>
                  <label
                    className="mb-2 block text-sm font-bold text-ocean-900"
                    htmlFor="contact-email"
                  >
                    Email address
                  </label>
                  <input
                    className={fieldClass}
                    id="contact-email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-bold text-ocean-900"
                  htmlFor="contact-message"
                >
                  How can we help?{" "}
                  <span className="font-medium text-ocean-900/40">
                    (optional)
                  </span>
                </label>
                <textarea
                  className={`${fieldClass} min-h-32 resize-y`}
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your visit, group size, or question..."
                  rows={4}
                />
              </div>

              <button
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-aqua-500 to-ocean-800 px-6 py-4 text-base font-black text-white shadow-[0_14px_30px_rgba(0,163,204,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(0,163,204,0.35)] focus:outline-none focus:ring-4 focus:ring-aqua-500/25 disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
                type="submit"
                disabled={submitState === "submitting"}
              >
                {submitState === "submitting" ? (
                  <>
                    Sending...
                    <LoaderCircle className="h-5 w-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

            </form>

            <div className="mt-7 grid gap-3 border-t border-ocean-900/10 pt-6 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-ocean-800/65">
                <Clock3 className="h-5 w-5 shrink-0 text-aqua-500" />
                Replies within 24 hours
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-ocean-800/65">
                <ShieldCheck className="h-5 w-5 shrink-0 text-aqua-500" />
                Your details stay private
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {(submitState === "success" || submitState === "error") && (
          <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          role={submitState === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`fixed left-4 right-4 top-20 z-[100] mx-auto flex max-w-md items-start gap-3 rounded-2xl border p-4 shadow-2xl backdrop-blur-xl sm:left-auto sm:right-6 sm:top-24 ${
            submitState === "success"
              ? "border-green-200 bg-white/95 text-green-950 shadow-green-900/15"
              : "border-red-200 bg-white/95 text-red-950 shadow-red-900/15"
          }`}
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
              submitState === "success"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {submitState === "success" ? (
              <CircleCheck className="h-6 w-6" />
            ) : (
              <CircleAlert className="h-6 w-6" />
            )}
          </span>
          <div className="min-w-0 flex-1 pt-0.5">
            <p className="font-black">
              {submitState === "success" ? "Message sent!" : "Unable to send"}
            </p>
            <p className="mt-0.5 text-sm font-medium opacity-70">
              {submitMessage}
            </p>
          </div>
          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={() => {
              setSubmitState("idle");
              setSubmitMessage("");
            }}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg opacity-50 transition hover:bg-black/5 hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
