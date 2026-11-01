import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isPublicPath, routes } from '../../lib/copy';

type Props = { params: Promise<{ path: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(routes).map(path => ({ path }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params;
  return { title: isPublicPath(path) ? routes[path].title : 'Page not found' };
}
export default async function PublicPage({ params }: Props) {
  const { path } = await params;
  if (!isPublicPath(path)) notFound();
  const page = routes[path];
  return (
    <section className="reading">
      <p className="eyebrow">HEARD · Preview</p>
      <h1>{page.title}</h1>
      <p className="intro">{page.intro}</p>
      <aside className="availability" aria-labelledby="availability">
        <h2 id="availability">This service is being built.</h2>
        <p>This preview has no intake forms, uploads, accounts, referrals or published case records. Please do not submit personal or sensitive information.</p>
        {path === 'rights' ? <p>Jurisdiction-specific guides, sources and review dates are not available here yet. This preview provides no legal advice.</p> : null}
        {path === 'privacy' ? <p>No submission protection, anonymity or end-to-end encryption is claimed by this preview. Infrastructure providers may observe ordinary web request metadata.</p> : null}
      </aside>
      <Link href="/">Return to HEARD <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
