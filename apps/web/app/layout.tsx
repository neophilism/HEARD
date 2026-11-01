import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { copy } from '../lib/copy';
import './styles.css';

export const metadata: Metadata = {
  title: {
    default: 'HEARD — Your rights. Your voice. Your next step.',
    template: '%s | HEARD',
  },
  description: copy.brand.shortDescription,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="preview" role="note">
          Engineering preview: information, support and submission services are
          not available yet. Do not share personal or sensitive information.
        </div>
        <header className="site-header">
          <Link className="wordmark" href="/" aria-label="HEARD home">
            HEARD<span aria-hidden="true">.</span>
          </Link>
          <nav aria-label="Primary navigation">
            {copy.navigation.primary.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <p className="wordmark">
            HEARD<span aria-hidden="true">.</span>
          </p>
          <p>{copy.brand.attribution}</p>
          <p>{copy.footer.disclaimer}</p>
          <nav aria-label="Footer navigation">
            {copy.footer.links.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </footer>
      </body>
    </html>
  );
}
