import { ContactCta } from '@/components/ContactCta';
import { InternalHero } from '@/components/InternalHero';
import { Section } from '@/components/Section';

export default function AboutPage() {
  return (
    <>
      <InternalHero
        title="About the Firm"
        intro="The Law Office of Terry J. Finkelstein is committed to practical legal guidance, responsive communication, and thoughtful advocacy for individuals, families, and business clients."
      />
      <Section title="Established Counsel in East Brunswick">
        <div className="space-y-4 text-sm leading-7 text-charcoal">
          <p>
            From our East Brunswick office, we assist clients across New Jersey and New York with legal matters that
            impact their homes, families, businesses, and long-term plans.
          </p>
          <p>
            Our firm is built on personalized service. Every matter receives direct attorney attention and strategies
            tailored to each client’s goals and circumstances.
          </p>
        </div>
      </Section>
      <ContactCta />
    </>
  );
}
