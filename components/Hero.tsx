import Link from 'next/link';
import { firm } from '@/lib/site';

export function Hero() {
  return (
    <section className="bg-mist px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-content">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate">{firm.city}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          Strategic, Personal Legal Counsel for Life, Family, and Business Matters
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-charcoal">
          The Law Office of Terry J. Finkelstein provides trusted representation across New Jersey and New
          York with practical guidance, clear communication, and results-focused advocacy.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-md bg-navy px-6 py-3 text-center text-sm font-semibold text-white hover:bg-charcoal"
          >
            Schedule a Free Consultation
          </Link>
          <Link
            href={`tel:${firm.phone}`}
            className="rounded-md border border-navy px-6 py-3 text-center text-sm font-semibold text-navy hover:bg-white"
          >
            Call {firm.phone}
          </Link>
        </div>
      </div>
    </section>
  );
}
