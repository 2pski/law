import { ServicePage } from '@/components/ServicePage';

export default function FamilyLawPage() {
  return (
    <ServicePage
      title="Family Law"
      intro="Family legal matters require both strong advocacy and steady guidance. We help clients pursue fair, workable outcomes."
      points={[
        'Divorce representation, including contested and uncontested matters.',
        'Child custody, parenting time, and support arrangements.',
        'Spousal support and equitable distribution analysis.',
        'Post-judgment modifications and enforcement issues.'
      ]}
    />
  );
}
