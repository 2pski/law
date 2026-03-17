import { ContactCta } from '@/components/ContactCta';
import { InternalHero } from '@/components/InternalHero';
import { PracticeCards } from '@/components/PracticeCards';

export default function PracticeAreasPage() {
  return (
    <>
      <InternalHero
        title="Practice Areas"
        intro="Comprehensive legal services for real estate, family law, estate planning, traffic matters, and business contracts."
      />
      <PracticeCards />
      <ContactCta />
    </>
  );
}
