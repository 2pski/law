const trustItems = [
  '25+ Years of Experience',
  'Serving New Jersey and New York',
  'Free Initial Consultation',
  'Personalized Attorney Attention'
];

export function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-content gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <p key={item} className="rounded-md bg-mist px-4 py-3 text-center text-sm font-medium text-charcoal">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
