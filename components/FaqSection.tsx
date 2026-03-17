import { Section } from './Section';

const faqs = [
  {
    question: 'Do you offer a free consultation?',
    answer: 'Yes. We offer a free initial consultation so you can understand your options before moving forward.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'Our office is based in East Brunswick and serves clients in New Jersey and New York.'
  },
  {
    question: 'What legal matters do you handle?',
    answer:
      'We focus on real estate, family law, estate planning, wills and probate, traffic violations, and business/contract matters.'
  }
];

export function FaqSection() {
  return (
    <Section title="Frequently Asked Questions">
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-lg border border-slate-200 p-5">
            <summary className="cursor-pointer list-none font-semibold text-navy">{faq.question}</summary>
            <p className="mt-3 text-sm leading-6 text-charcoal">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
