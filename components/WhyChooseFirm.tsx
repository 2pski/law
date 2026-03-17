import { Section } from './Section';

const points = [
  {
    title: 'Established Local Knowledge',
    text: 'Deep familiarity with local courts, transactions, and legal procedures in East Brunswick and surrounding communities.'
  },
  {
    title: 'Direct Attorney Access',
    text: 'You work directly with an experienced attorney who prioritizes clear communication and practical legal strategy.'
  },
  {
    title: 'Multi-Practice Insight',
    text: 'Coordinated support across real estate, family, estate, traffic, and business matters when issues overlap.'
  }
];

export function WhyChooseFirm() {
  return (
    <Section title="Why Clients Choose Our Firm">
      <div className="grid gap-4 md:grid-cols-3">
        {points.map((point) => (
          <article key={point.title} className="rounded-lg bg-mist p-6">
            <h3 className="text-lg font-semibold text-navy">{point.title}</h3>
            <p className="mt-3 text-sm leading-6 text-charcoal">{point.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
