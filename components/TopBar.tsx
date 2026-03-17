import Link from 'next/link';
import { firm } from '@/lib/site';

export function TopBar() {
  return (
    <div className="bg-navy px-4 py-2 text-sm text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-content flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <p>{firm.consultation}</p>
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <Link href={`tel:${firm.phone}`} className="font-medium hover:underline">
            Office: {firm.phone}
          </Link>
          <Link href={`tel:${firm.cell}`} className="font-medium hover:underline">
            Cell: {firm.cell}
          </Link>
        </div>
      </div>
    </div>
  );
}
