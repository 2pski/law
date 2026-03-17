import { AttorneyBio } from '@/components/AttorneyBio';
import { ContactCta } from '@/components/ContactCta';
import { Credibility } from '@/components/Credibility';
import { FaqSection } from '@/components/FaqSection';
import { Hero } from '@/components/Hero';
import { PracticeCards } from '@/components/PracticeCards';
import { TrustStrip } from '@/components/TrustStrip';
import { WhyChooseFirm } from '@/components/WhyChooseFirm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <PracticeCards />
      <WhyChooseFirm />
      <AttorneyBio />
      <Credibility />
      <FaqSection />
      <ContactCta />
    </>
  );
}
