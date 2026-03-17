import { ServicePage } from '@/components/ServicePage';

export default function TrafficViolationsPage() {
  return (
    <ServicePage
      title="Traffic Violations"
      intro="A traffic charge can have lasting financial and licensing consequences. We help you respond strategically."
      points={[
        'Representation in municipal court for moving and non-moving violations.',
        'Defense strategies aimed at reducing points and penalties.',
        'Guidance on license suspension and restoration concerns.',
        'Clear advice on plea options and long-term record impact.'
      ]}
    />
  );
}
