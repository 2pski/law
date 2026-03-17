import { ServicePage } from '@/components/ServicePage';

export default function BusinessContractsPage() {
  return (
    <ServicePage
      title="Business and Contracts"
      intro="We help business owners and professionals establish strong legal foundations and well-structured agreements."
      points={[
        'Business formation support and legal structure guidance.',
        'Drafting, reviewing, and negotiating contracts.',
        'Risk mitigation language and dispute-prevention strategy.',
        'General counsel support for routine and growth-stage legal needs.'
      ]}
    />
  );
}
