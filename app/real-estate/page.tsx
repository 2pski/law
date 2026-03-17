import { ServicePage } from '@/components/ServicePage';

export default function RealEstatePage() {
  return (
    <ServicePage
      title="Real Estate Law"
      intro="We provide experienced legal representation for residential and commercial real estate transactions in New Jersey and New York."
      points={[
        'Drafting and reviewing purchase and sale agreements.',
        'Negotiating terms to protect your financial and legal interests.',
        'Guidance through title, inspection, financing, and closing issues.',
        'Counsel for landlords, tenants, and property-related disputes.'
      ]}
    />
  );
}
