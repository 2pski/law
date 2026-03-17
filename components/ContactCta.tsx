import Link from 'next/link';
import { firm } from '@/lib/site';
import { Section } from './Section';

export function ContactCta() {
  return (
    <Section className="bg-navy">
      <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Speak With an Experienced Attorney Today
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200">
            Contact the Law Office of Terry J. Finkelstein for a free consultation. We’ll review your legal matter,
            explain your options, and help you move forward with confidence.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href={`tel:${firm.phone}`} className="rounded-md bg-white px-5 py-3 text-center font-semibold text-navy">
              Call {firm.phone}
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-white px-5 py-3 text-center font-semibold text-white"
            >
              Request Consultation
            </Link>
          </div>
        </div>
        <div className="rounded-lg bg-white/10 p-5 text-sm text-slate-100">
          <p>{firm.office}</p>
          <p className="mt-2">Office: {firm.phone}</p>
          <p>Cell: {firm.cell}</p>
        </div>
      </div>
    </Section>
  );
}
