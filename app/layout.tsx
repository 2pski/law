import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { TopBar } from '@/components/TopBar';

export const metadata: Metadata = {
  title: 'Law Office of Terry J. Finkelstein | East Brunswick, NJ',
  description:
    'Experienced legal counsel in East Brunswick, New Jersey. Serving clients in New Jersey and New York in real estate, family law, estate planning, traffic matters, and business contracts.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-charcoal antialiased">
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
