import { Section } from './Section';

export function Credibility() {
  return (
    <Section title="Credibility and Client Confidence" className="bg-mist">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6">
          <p className="text-3xl font-bold text-navy">25+</p>
          <p className="mt-2 text-sm text-charcoal">Years serving clients in New Jersey and New York.</p>
        </div>
        <div className="rounded-lg bg-white p-6">
          <p className="text-3xl font-bold text-navy">Client-Focused</p>
          <p className="mt-2 text-sm text-charcoal">Tailored legal strategy and direct attorney communication.</p>
        </div>
        <div className="rounded-lg bg-white p-6">
          <p className="text-3xl font-bold text-navy">Broad Practice</p>
          <p className="mt-2 text-sm text-charcoal">Comprehensive support across key personal and business legal needs.</p>
        </div>
      </div>
    </Section>
  );
}
