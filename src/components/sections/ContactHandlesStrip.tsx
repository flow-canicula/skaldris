import Image from 'next/image';
import { t } from '@/lib/messages';
import { CONTACT, SOCIAL } from '@/content/site';

const githubIcon = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M14 2C7.37 2 2 7.37 2 14c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.01-2.03-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.31-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.28-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.86.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.82.58C22.56 23.79 26 19.31 26 14 26 7.37 20.63 2 14 2Z"
      fill="currentColor"
    />
  </svg>
);

type Handle = {
  key: string;
  label: string;
  value: string;
  sub: string;
  href: string | null;
  accent: string;
  motif: string | null;
  icon: React.ReactNode | null;
};

const handles: Handle[] = [
  {
    key: 'email',
    label: t.contact.handles.email.label,
    value: t.contact.handles.email.value,
    sub: t.contact.handles.email.sub,
    href: `mailto:${CONTACT.email}`,
    accent: 'var(--color-teal)',
    motif: '/motifs/contact-mail.svg',
    icon: null,
  },
  {
    key: 'github',
    label: t.contact.handles.github.label,
    value: `@${t.contact.handles.github.value}`,
    sub: t.contact.handles.github.sub,
    href: SOCIAL.githubPrimary,
    accent: 'var(--color-blue)',
    motif: null,
    icon: githubIcon,
  },
  {
    key: 'github2',
    label: t.contact.handles.github2.label,
    value: `@${t.contact.handles.github2.value}`,
    sub: t.contact.handles.github2.sub,
    href: SOCIAL.githubSecondary,
    accent: 'var(--color-gold)',
    motif: null,
    icon: githubIcon,
  },
  {
    key: 'location',
    label: t.contact.handles.location.label,
    value: t.contact.handles.location.value,
    sub: t.contact.handles.location.sub,
    href: null,
    accent: 'var(--color-accent)',
    motif: '/motifs/contact-address.svg',
    icon: null,
  },
];

export function ContactHandlesStrip() {
  return (
    <div
      className="flex overflow-x-auto"
      style={{ borderTop: '1px solid var(--color-line)', borderBottom: '1px solid var(--color-line)' }}
    >
      {handles.map((handle, i) => {
        const isLast = i === handles.length - 1;
        const inner = (
          <>
            {/* Colour swatch bar top */}
            <div
              className="h-[3px] w-full transition-all duration-500 group-hover:h-[5px]"
              style={{ background: handle.accent }}
              aria-hidden="true"
            />

            {/* Body */}
            <div className="flex flex-col justify-between flex-1 p-6 md:p-8">
              {/* Icon — motif image or inline SVG */}
              <span
                className="mb-6 block transition-transform duration-500 group-hover:scale-110"
                style={{ color: handle.accent }}
              >
                {handle.motif ? (
                  <Image src={handle.motif} alt={handle.label} width={40} height={40} />
                ) : (
                  handle.icon
                )}
              </span>

              {/* Text */}
              <div>
                <p
                  className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] mb-2"
                  style={{ color: 'var(--color-surface-700)', opacity: 0.45 }}
                >
                  {handle.label}
                </p>
                <p
                  className="font-display text-lg font-bold leading-tight transition-colors duration-300"
                  style={{ color: 'var(--color-surface-700)' }}
                >
                  {handle.value}
                </p>
                <p
                  className="mt-1.5 text-[12px] leading-snug"
                  style={{ color: 'var(--color-surface-700)', opacity: 0.45 }}
                >
                  {handle.sub}
                </p>
              </div>
            </div>
          </>
        );

        const cardCls = [
          'group relative min-w-[180px] flex-1 flex flex-col bg-surface-50',
          'transition-all duration-300 hover:bg-surface-100',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
          !isLast ? 'border-r border-surface-200' : '',
        ].join(' ');

        return handle.href ? (
          <a
            key={handle.key}
            href={handle.href}
            target={handle.href.startsWith('http') ? '_blank' : undefined}
            rel={handle.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={cardCls}
            aria-label={`${handle.label}: ${handle.value}`}
          >
            {inner}
          </a>
        ) : (
          <div
            key={handle.key}
            className={cardCls}
            aria-label={`${handle.label}: ${handle.value}`}
          >
            {inner}
          </div>
        );
      })}
    </div>
  );
}
