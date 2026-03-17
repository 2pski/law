import Link from 'next/link';
import { practiceAreas } from '@/lib/site';
import { Section } from './Section';

export function PracticeCards() {
  return (
    <Section
      title="Practice Areas"
      subtitle="Focused legal services tailored to your goals, risks, and long-term peace of mind."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {practiceAreas.map((area) => (
          <article key={area.href} className="rounded-lg border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-navy">{area.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate">{area.summary}</p>
            <Link href={area.href} className="mt-5 inline-block text-sm font-semibold text-navy hover:underline">
              Learn more →
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
