import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`px-4 py-14 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-content">
        {title ? <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">{title}</h2> : null}
        {subtitle ? <p className="mt-3 max-w-3xl text-base text-slate">{subtitle}</p> : null}
        <div className={title ? 'mt-8' : ''}>{children}</div>
      </div>
    </section>
  );
}
