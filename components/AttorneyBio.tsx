import { Section } from './Section';

export function AttorneyBio() {
  return (
    <Section title="Meet Terry J. Finkelstein" className="bg-white">
      <div className="grid gap-8 rounded-lg border border-slate-200 p-6 md:grid-cols-[1fr_2fr] md:p-8">
        <div className="flex items-center justify-center rounded-md bg-mist p-8 text-center text-sm font-semibold text-slate">
          Attorney Profile
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate">Counsel You Can Trust</p>
          <p className="mt-4 text-base leading-7 text-charcoal">
            With more than 25 years of legal experience, Terry J. Finkelstein provides strategic counsel with a
            personal approach. Clients value responsive service, practical guidance, and strong advocacy throughout
            negotiations, court proceedings, and transactional matters.
          </p>
          <p className="mt-4 text-base leading-7 text-charcoal">
            Every case is handled with attention to detail and a commitment to helping clients make confident legal
            decisions.
          </p>
        </div>
      </div>
    </Section>
  );
}
