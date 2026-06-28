# Security Policy — Skaldris (www.skaldris.com)

The Skaldris site is a statically-exported Next.js 15 personal portfolio website
(no server runtime, no database, no user authentication, no sessions). Most of
the OWASP Top 10 either doesn't apply or is handled by the architecture itself.

This site has one concern beyond a typical brochure site:

- **One contact form** submitting to a single Formspree endpoint.

## Reporting a vulnerability

Email `security@skaldris.com`. Do not open a public issue for security concerns.

## OWASP Top 10 (2021) coverage

### A01 — Broken Access Control

Not applicable. Every page is public static HTML. There is no authentication, no
authorization, no user-specific content, and no admin interface — nothing to
bypass.

The only "write" path is the contact form, which submits directly to Formspree
(a third party). This application never receives, stores, or serves submitted
form data.

### A02 — Cryptographic Failures

No secrets, passwords, or sensitive personal data are stored or processed by this
application. Transport security (HTTPS) is enforced by the host's SSL certificate
and the `.htaccess` `RewriteRule` redirecting all HTTP traffic to HTTPS.

The Formspree form ID (`formspree.io/f/XXXXXXXX`) is visible in the client-side
JavaScript via `NEXT_PUBLIC_FORMSPREE_CONTACT_ID`. **This is expected and
harmless** — a form ID is a routing identifier, not a secret.

Because this is a static export, **there is no server to hold a secret on.**
Anything in a `NEXT_PUBLIC_*` variable ships to the browser. Never put a real
credential, private API key, or token in this repository or its environment and
expect it to stay private.

### A03 — Injection

No server-side code exists. No database. No template engine evaluating user
input. Injection has no vector.

- `ContactForm.tsx` submits `FormData` directly to Formspree via `fetch()`. This
  application never interpolates user input into HTML, SQL, or shell commands.
- Any component using `dangerouslySetInnerHTML` (only the JSON-LD injector,
  `components/seo/JsonLd`) must receive **only hardcoded, developer-controlled
  objects** built in `lib/jsonld.ts`. User input is never passed to it. This must
  not change without a security review.

### A04 — Insecure Design

Mitigations in place:

**No locale surface.** There is no `[locale]` route segment and no locale
parsing. Routes are a fixed, developer-defined set.

**Form input constraints.** All fields in the contact form have `maxLength`
attributes, correct `type` values (`email`, `text`, `textarea`), associated
labels, and a hidden **honeypot** field (`_gotcha`). Formspree applies
server-side spam filtering independently; enable it in the form's dashboard.

**No custom file upload.** The static form does not accept file uploads. Do not
build a custom uploader that accepts arbitrary binaries from anonymous visitors.

**Content Security Policy.** Split across two delivery mechanisms:

1. Most directives — `<meta http-equiv="Content-Security-Policy">` in
   `src/app/layout.tsx`. Because fonts are **self-hosted** and there are no
   Google Fonts calls, the policy is tight:
   ```
   default-src 'none';
   script-src 'self';
   style-src 'self' 'unsafe-inline';
   font-src 'self';
   connect-src 'self' https://formspree.io;
   img-src 'self' data:;
   base-uri 'self';
   form-action https://formspree.io;
   frame-src 'none';
   ```
   - If you embed any third-party widget (LinkedIn badge, GitHub stats, etc.),
     you must widen the relevant directives for its domain and document the exact
     added origins here in the same PR.
   - If privacy-respecting analytics (Plausible) is added, extend `script-src`
     and `connect-src` to its endpoint only, and disclose it in the privacy copy.
2. `frame-ancestors` plus `X-Frame-Options` — real HTTP headers in
   `public/.htaccess` via `mod_headers`:
   ```
   Header always set X-Frame-Options "DENY"
   Header always set Content-Security-Policy "frame-ancestors 'none'"
   Header always set Referrer-Policy "strict-origin-when-cross-origin"
   Header always set X-Content-Type-Options "nosniff"
   Header always set Permissions-Policy "geolocation=(), camera=(), microphone=()"
   ```

**Note on `'unsafe-inline'` for styles.** Required because Tailwind injects
critical styles inline in the static export. Scoped to `style-src` only; scripts
remain `'self'`.

### A05 — Security Misconfiguration

- `next.config.ts` uses `output: 'export'` — there is no Next.js server process
  in production to misconfigure.
- `public/.htaccess` sets `Options -Indexes` to disable directory listing.
  Without it, Apache would serve a browsable file listing for any directory
  lacking an `index.html`.
- `trailingSlash: true` means routes emit `index.html` files; confirm the host
  serves them and that `ErrorDocument` points at the exported `404.html`.
- No debug endpoints, server logs, or verbose error pages exist in the static
  output.
- Run `pnpm audit` before every deployment; resolve high and critical findings
  before going live.

### A06 — Vulnerable and Outdated Components

- Run `pnpm audit --audit-level=high` before every deployment.
- Consider GitHub Dependabot (`.github/dependabot.yml`) for weekly dependency PRs.
- Keep Next.js, React, and Tailwind on current stable majors. Commit the
  lockfile (`pnpm-lock.yaml`) so CI builds exactly what was reviewed.

### A07 — Identification and Authentication Failures

No login, no sessions, no credentials anywhere in this application. Nothing to
authenticate.

If a client area or admin panel is ever added, use an established provider
(Auth0, Clerk, Supabase Auth) and return here to write a real A07 answer before
shipping it.

### A08 — Software and Data Integrity Failures

- Commit `pnpm-lock.yaml` to pin exact versions and integrity hashes.
- If GitHub Actions deploys the site, pin actions to a SHA or major tag from
  official publishers (`actions/checkout@v4`, …).
- Deploy workflows trigger only on pushes to `main` by trusted contributors,
  never on pull requests from forks.
- `components/seo/JsonLd` is the one `dangerouslySetInnerHTML` site. The object
  passed to it must always be hardcoded in `lib/jsonld.ts` — never derived from
  props, URL parameters, or any external source.

### A09 — Security Logging and Monitoring Failures

No backend exists to generate logs. Form submissions appear in the Formspree
dashboard — Formspree handles logging, spam detection, and abuse alerts on their
side. The host provides basic access logs via its panel.

If analytics is added, use a privacy-respecting, cookieless tool (Plausible),
disclose it in the privacy copy, and update the CSP `connect-src` accordingly.

### A10 — Server-Side Request Forgery (SSRF)

Not applicable. There is no server making outbound requests. The only outbound
calls this application initiates are `fetch()`es from the visitor's browser to
the hardcoded Formspree endpoint in `ContactForm.tsx`. No URL is ever fetched
based on visitor-supplied input.

---

## Data Collected and Privacy

The contact form collects:

- Name and email address
- Subject / inquiry type
- Message

This data is transmitted directly from the visitor's browser to Formspree
(TLS-encrypted), forwarded to the site owner's inbox, and stored in the
Formspree dashboard (subject to Formspree's privacy policy). It is never
processed, stored, or logged by this application, and is never sold or shared
with third parties.

A plain-language privacy summary is published at `/privacy/` with
`robots: { index: false, follow: true }`.

---

## Pre-Launch Security Checklist

- [ ] Replace Formspree ID (`NEXT_PUBLIC_FORMSPREE_CONTACT_ID`) with the real value.
- [ ] Enable Formspree spam filtering (and optionally reCAPTCHA) on the contact form.
- [ ] Confirm the honeypot field renders and is hidden from sighted/keyboard users.
- [ ] Run `pnpm install`; commit `pnpm-lock.yaml`.
- [ ] Run `pnpm audit` — resolve all high and critical findings.
- [ ] Enable SSL on the production domain; confirm the HTTP→HTTPS `.htaccess` redirect is active.
- [ ] Confirm `Options -Indexes` works: visiting `/work/` directly returns 403, not a file listing.
- [ ] Confirm security headers are present in the live response
      (`X-Frame-Options`, CSP, `Referrer-Policy`, `X-Content-Type-Options`,
      `Permissions-Policy`).
- [ ] Review the CSP `<meta>` tag if any third-party script/embed was added in development.
- [ ] Confirm `/privacy/` carries `robots: { index: false, follow: true }`, and
      the `/thanks` page is `noindex`.
- [ ] Confirm `JsonLd` receives only hardcoded objects — no user input.
- [ ] If GitHub Actions deploys, confirm it triggers only on `main` pushes, not
      on fork PRs, with pinned action versions.
- [ ] Confirm no real secrets or private API keys exist in env vars or the repository.
