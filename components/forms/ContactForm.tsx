"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type Values = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const services = [
  "Hajj & Umrah",
  "Air Ticketing",
  "Visa Processing",
  "Tour Packages",
  "Hotel Booking",
  "Manpower (Shahi Air)",
  "Village Housing (Chandina)",
  "Food / Trading (Abibil)",
  "General enquiry"
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Values>();

  const onSubmit = async (values: Values) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input
            {...register("name", { required: "Please tell us your name" })}
            placeholder="e.g. Md. Rezaul Karim"
            className={inputCls(!!errors.name)}
            autoComplete="name"
          />
        </Field>
        <Field label="Phone number" error={errors.phone?.message}>
          <input
            type="tel"
            {...register("phone", {
              required: "We need a phone number to reach you",
              pattern: { value: /^[+\d\s-]{7,}$/, message: "Please enter a valid phone number" }
            })}
            placeholder="+880 17XX-XXXXXX"
            className={inputCls(!!errors.phone)}
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field label="Email address" error={errors.email?.message}>
        <input
          type="email"
          {...register("email", {
            required: "Please share your email",
            pattern: { value: /\S+@\S+\.\S+/, message: "Please enter a valid email" }
          })}
          placeholder="you@example.com"
          className={inputCls(!!errors.email)}
          autoComplete="email"
        />
      </Field>

      <Field label="Which desk should we route you to?" error={errors.service?.message}>
        <select
          {...register("service", { required: "Pick a desk so we route you correctly" })}
          defaultValue=""
          className={inputCls(!!errors.service)}
        >
          <option value="" disabled>
            Choose a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us a bit more" error={errors.message?.message}>
        <textarea
          rows={5}
          {...register("message", { required: "Even one line helps us prepare a useful reply" })}
          placeholder="Travel dates, family size, budget range, or just say hello and we will pick it up from there."
          className={inputCls(!!errors.message)}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(31,114,227,0.55)] hover:bg-sky-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
        <Send className="size-4" />
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800 ring-1 ring-inset ring-emerald-200">
          <CheckCircle2 className="size-4" />
          Jazak Allah khair. Your enquiry has reached our desk — we will reply within one working day.
        </p>
      )}

      {status === "error" && (
        <p className="flex items-center gap-2 rounded-xl bg-saffron-50 px-4 py-3 text-sm text-saffron-800 ring-1 ring-inset ring-saffron-200">
          <AlertCircle className="size-4" />
          Something went wrong. Please WhatsApp us at <strong>+880 1743-656066</strong> and we will pick it up immediately.
        </p>
      )}
    </form>
  );
}

const inputCls = (hasError: boolean) =>
  cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-subtle outline-none transition-colors",
    hasError
      ? "border-saffron-500 ring-saffron-200 focus:ring-2 focus:ring-saffron-300"
      : "border-border focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
  );

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-muted">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs font-medium text-saffron-700">{error}</span>}
    </label>
  );
}
