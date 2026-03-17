import Link from 'next/link';

type InternalHeroProps = {
  title: string;
  intro: string;
};

export function InternalHero({ title, intro }: InternalHeroProps) {
  return (
    <section className="bg-mist px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-content">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Law Office of Terry J. Finkelstein</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-charcoal">{intro}</p>
        <Link href="/contact" className="mt-6 inline-block rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white">
          Request a Consultation
        </Link>
      </div>
    </section>
  );
}
