'use client';

import { useState, useRef, useEffect, type FormEvent, type FocusEvent } from 'react';
import { Honeypot } from '@/components/forms/Honeypot';
import { FieldError } from '@/components/forms/FieldError';
import { submitToFormspree } from '@/lib/formspree';
import { t } from '@/lib/messages';

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID ?? 'mykqjloa';

/* ── shared style primitives ──────────────────────────────────────────────── */
const labelCls =
  'mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-surface-700/50';

const inputBase =
  'w-full border-0 border-b bg-transparent px-0 py-3 text-[15px] text-surface-700 placeholder:text-surface-700/30 transition-colors duration-300 focus:outline-none';

function inputCls(hasError: boolean) {
  return `${inputBase} ${hasError ? 'border-accent' : 'border-surface-300 focus:border-accent'}`;
}

const textareaBase = `${inputBase} resize-none`;

function textareaCls(hasError: boolean) {
  return `${textareaBase} ${hasError ? 'border-accent' : 'border-surface-300 focus:border-accent'}`;
}

/* ── field validators ─────────────────────────────────────────────────────── */
function validateName(v: string): string {
  if (!v.trim()) return 'Name is required.';
  if (v.trim().length < 2) return 'Name must be at least 2 characters.';
  return '';
}

function validateEmail(v: string): string {
  if (!v.trim()) return 'Email address is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return 'Enter a valid email address.';
  return '';
}

function validateMessage(v: string): string {
  if (!v.trim()) return 'A message is required.';
  if (v.trim().length < 10) return 'Message must be at least 10 characters.';
  return '';
}

/* ── inquiry-type chip (radio) ────────────────────────────────────────────── */
function InquiryChip({
  name,
  value,
  defaultChecked,
}: {
  name: string;
  value: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="group relative cursor-pointer select-none">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        required
        className="peer sr-only"
      />
      <span className="block border border-surface-300 px-4 py-2 text-[13px] font-light text-surface-700/60 transition-all duration-200 peer-checked:border-accent peer-checked:bg-[rgba(255,0,82,0.05)] peer-checked:text-accent peer-checked:font-medium group-hover:border-accent/50">
        {value}
      </span>
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 peer-checked:w-full" />
    </label>
  );
}

/* ── field group with numbered eyebrow ───────────────────────────────────── */
function FieldGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-7">
      <div>
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
          {title}
        </p>
        <div className="mt-2 h-px w-12 bg-gradient-to-r from-accent to-transparent" />
      </div>
      {children}
    </div>
  );
}

/* ── success state ────────────────────────────────────────────────────────── */
function SuccessPanel() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-xl border border-teal/30 bg-[rgba(0,198,141,0.04)] px-8 py-14 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-teal/40 bg-[rgba(0,198,141,0.08)]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 12.5L9 17.5L20 7" stroke="var(--color-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="font-display text-xl font-bold text-surface-700">
          {t.contact.form.successHeading}
        </p>
        <p className="mt-2 text-sm text-surface-700/55">
          {t.contact.form.successBody}
        </p>
      </div>
    </div>
  );
}

/* ── main component ───────────────────────────────────────────────────────── */
export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const gotcha = formRef.current?.querySelector<HTMLInputElement>('input[name="_gotcha"]');
    if (gotcha) gotcha.value = '';
  }, []);

  /* validate on blur — only fields the user has touched */
  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    let msg = '';
    if (name === 'name')    msg = validateName(value);
    if (name === 'email')   msg = validateEmail(value);
    if (name === 'message') msg = validateMessage(value);
    setErrors((prev) => ({ ...prev, [name]: msg }));
  }

  /* clear individual field error on change once it has been touched */
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    if (!touched[name]) return;
    let msg = '';
    if (name === 'name')    msg = validateName(value);
    if (name === 'email')   msg = validateEmail(value);
    if (name === 'message') msg = validateMessage(value);
    setErrors((prev) => ({ ...prev, [name]: msg }));
  }

  function validateAll(fd: FormData): Record<string, string> {
    return {
      ...( validateName(String(fd.get('name') ?? ''))    ? { name:    validateName(String(fd.get('name') ?? ''))    } : {} ),
      ...( validateEmail(String(fd.get('email') ?? ''))   ? { email:   validateEmail(String(fd.get('email') ?? ''))   } : {} ),
      ...( validateMessage(String(fd.get('message') ?? '')) ? { message: validateMessage(String(fd.get('message') ?? '')) } : {} ),
    };
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    /* mark all required fields as touched so errors show */
    setTouched({ name: true, email: true, message: true });
    const errs = validateAll(fd);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      /* move focus to the first errored field */
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    setStatus('submitting');
    const result = await submitToFormspree(FORM_ID, fd);
    if (result.ok) {
      setStatus('success');
    } else {
      setErrorMsg(result.error ?? t.contact.form.errorMessage);
      setStatus('error');
    }
  }

  if (status === 'success') return <SuccessPanel />;

  const inquiryOptions = t.contact.form.inquiryType.options;
  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-10"
      aria-label="Contact form"
    >
      {/* Form header */}
      <div>
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
          {t.contact.form.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-surface-700 sm:text-3xl">
          {t.contact.form.heading}
        </h2>
        <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
      </div>

      {/* Live region — announces validation summary and submission errors to screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {errorCount > 0 && `${errorCount} field${errorCount > 1 ? 's need' : ' needs'} attention.`}
        {status === 'error' && errorMsg}
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="border-l-2 border-accent bg-[rgba(255,0,82,0.04)] py-3 pl-4 text-sm text-surface-700"
        >
          {errorMsg}
        </div>
      )}

      {/* 01 — Your details */}
      <FieldGroup title="01 — Your details">
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className={labelCls}>
              {t.contact.form.name.label} <span aria-hidden="true" className="text-accent">*</span>
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              placeholder={t.contact.form.name.placeholder}
              aria-describedby={errors.name ? 'cf-name-error' : undefined}
              aria-invalid={!!errors.name || undefined}
              aria-required="true"
              onBlur={handleBlur}
              onChange={handleChange}
              className={inputCls(!!errors.name)}
            />
            <FieldError id="cf-name-error" message={errors.name} />
          </div>
          <div>
            <label htmlFor="cf-email" className={labelCls}>
              {t.contact.form.email.label} <span aria-hidden="true" className="text-accent">*</span>
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              maxLength={100}
              autoComplete="email"
              placeholder={t.contact.form.email.placeholder}
              aria-describedby={errors.email ? 'cf-email-error' : undefined}
              aria-invalid={!!errors.email || undefined}
              aria-required="true"
              onBlur={handleBlur}
              onChange={handleChange}
              className={inputCls(!!errors.email)}
            />
            <FieldError id="cf-email-error" message={errors.email} />
          </div>
        </div>

        <div>
          <label htmlFor="cf-subject" className={labelCls}>
            {t.contact.form.subject.label}
          </label>
          <input
            id="cf-subject"
            name="subject"
            type="text"
            maxLength={150}
            placeholder={t.contact.form.subject.placeholder}
            className={inputCls(false)}
          />
        </div>
      </FieldGroup>

      {/* 02 — Inquiry type */}
      <FieldGroup title="02 — Inquiry type">
        <div>
          <p className={labelCls} id="cf-inquiry-label">
            {t.contact.form.inquiryType.label}
          </p>
          <div
            className="mt-3 flex flex-wrap gap-2.5"
            role="radiogroup"
            aria-labelledby="cf-inquiry-label"
          >
            {inquiryOptions.map((option, i) => (
              <InquiryChip
                key={option}
                name="inquiryType"
                value={option}
                defaultChecked={i === 0}
              />
            ))}
          </div>
        </div>
      </FieldGroup>

      {/* 03 — Message */}
      <FieldGroup title="03 — Message">
        <div>
          <label htmlFor="cf-message" className={labelCls}>
            {t.contact.form.message.label} <span aria-hidden="true" className="text-accent">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            maxLength={2000}
            rows={5}
            placeholder={t.contact.form.message.placeholder}
            aria-describedby={errors.message ? 'cf-message-error' : undefined}
            aria-invalid={!!errors.message || undefined}
            aria-required="true"
            onBlur={handleBlur}
            onChange={handleChange}
            className={textareaCls(!!errors.message)}
          />
          <FieldError id="cf-message-error" message={errors.message} />
        </div>
      </FieldGroup>

      <Honeypot />

      {/* Submit row */}
      <div className="flex flex-wrap items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex items-center gap-3 rounded-full bg-accent py-1.5 pl-7 pr-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_0_28px_rgba(255,0,82,0.28)] transition-all duration-200 hover:brightness-110 disabled:opacity-60 btn-primary"
        >
          {status === 'submitting' ? t.contact.form.submitting : t.contact.form.submit}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-void-950 text-white transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        <p className="text-xs font-light text-surface-700/40">
          {t.contact.form.privacy}
        </p>
      </div>
    </form>
  );
}
