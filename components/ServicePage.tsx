import { ContactCta } from './ContactCta';
import { InternalHero } from './InternalHero';
import { Section } from './Section';

type ServicePageProps = {
  title: string;
  intro: string;
  points: string[];
};

export function ServicePage({ title, intro, points }: ServicePageProps) {
  return (
    <>
      <InternalHero title={title} intro={intro} />
      <Section title={`How We Help: ${title}`}>
        <ul className="space-y-3">
          {points.map((point) => (
            <li key={point} className="rounded-lg border border-slate-200 p-4 text-sm leading-6 text-charcoal">
              {point}
            </li>
          ))}
        </ul>
      </Section>
      <ContactCta />
    </>
  );
}
