import Link from 'next/link';
import { copy } from '../lib/copy';

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="headline">
        <p className="eyebrow">{copy.home.eyebrow}</p>
        <h1 id="headline">{copy.home.headline}</h1>
        <p className="intro">{copy.home.introduction}</p>
        <div className="actions">
          <Link className="button" href={copy.home.primaryAction.href}>{copy.home.primaryAction.label}</Link>
          <Link className="secondary" href={copy.home.secondaryAction.href}>{copy.home.secondaryAction.label} <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="pathways" aria-labelledby="pathways">
        <p className="eyebrow">A place to begin</p>
        <h2 id="pathways">{copy.home.sectionTitle}</h2>
        <div className="grid">
          {copy.home.cards.map((card, index) => (
            <article key={card.id}>
              <span className="number" aria-hidden="true">0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <Link href={card.href}>{card.action} <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>
      <section className="principle" aria-labelledby="privacy">
        <p className="eyebrow">Clarity and care</p>
        <h2 id="privacy">{copy.home.privacyTitle}</h2>
        <p>{copy.home.privacyBody}</p>
        <Link href="/privacy">{copy.home.privacyAction} <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
