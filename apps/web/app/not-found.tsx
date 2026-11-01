import Link from 'next/link';

export default function NotFound() {
  return <section className="reading"><h1>Page not found.</h1><p>This page is not available in the HEARD preview.</p><Link href="/">Return to HEARD</Link></section>;
}
