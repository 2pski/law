import Link from 'next/link';
import { InternalHero } from '@/components/InternalHero';
import { Section } from '@/components/Section';
import { firm } from '@/lib/site';

export default function ContactPage() {
  return (
    <>
      <InternalHero
        title="Contact Us"
        intro="Schedule your free consultation with the Law Office of Terry J. Finkelstein. Call now or submit a request and we’ll follow up promptly."
      />
      <Section title="Office Information and Consultation Requests">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3 text-sm text-charcoal">
            <p className="font-semibold text-navy">{firm.name}</p>
            <p>{firm.office}</p>
            <p>{firm.city}</p>
            <p>
              Office: <Link href={`tel:${firm.phone}`} className="font-medium text-navy hover:underline">{firm.phone}</Link>
            </p>
            <p>
              Cell: <Link href={`tel:${firm.cell}`} className="font-medium text-navy hover:underline">{firm.cell}</Link>
            </p>
            <p>{firm.serviceArea}</p>
          </div>
          <form className="space-y-4 rounded-lg border border-slate-200 p-5">
            <label className="block text-sm">
              Name
              <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" type="text" name="name" />
            </label>
            <label className="block text-sm">
              Phone
              <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" type="tel" name="phone" />
            </label>
            <label className="block text-sm">
              Email
              <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" type="email" name="email" />
            </label>
            <label className="block text-sm">
              How can we help?
              <textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" rows={4} name="message" />
            </label>
            <button type="button" className="rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white">
              Submit Request
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
