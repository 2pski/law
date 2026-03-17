import { ServicePage } from '@/components/ServicePage';

export default function EstatePlanningPage() {
  return (
    <ServicePage
      title="Estate Planning"
      intro="Protect your family and your legacy with a clear estate plan built around your goals and current laws."
      points={[
        'Wills, living wills, and powers of attorney tailored to your needs.',
        'Guidance on beneficiary planning and asset distribution decisions.',
        'Probate and estate administration support for families and fiduciaries.',
        'Planning updates as your family, finances, and priorities change.'
      ]}
    />
  );
}
