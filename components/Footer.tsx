import Link from 'next/link';
import { firm, navLinks } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-navy px-4 py-10 text-sm text-slate-200 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-content gap-8 md:grid-cols-3">
        <div>
          <p className="text-base font-semibold text-white">{firm.name}</p>
          <p className="mt-3">{firm.office}</p>
          <p>{firm.city}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-3">Office: {firm.phone}</p>
          <p>Cell: {firm.cell}</p>
          <p className="mt-2">{firm.consultation}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-content border-t border-slate-700 pt-6 text-xs text-slate-300">
        © {new Date().getFullYear()} {firm.name}. All rights reserved.
      </div>
    </footer>
  );
}
