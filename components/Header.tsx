import Link from 'next/link';
import { navLinks } from '@/lib/site';

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-navy sm:text-xl">
          Law Office of Terry J. Finkelstein
        </Link>
        <nav>
          <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-charcoal sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-navy">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
