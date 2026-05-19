import { Link, useLocation } from 'react-router-dom';
import { Topbar } from '../components/Topbar';
import { usePageMeta } from '../lib/hooks';

function NotFoundPage() {
  const location = useLocation();
  usePageMeta('404 — Mritunjai Chauhan');

  return (
    <>
      <Topbar />
      <main className="shell" style={{ paddingTop: 'clamp(120px, 18vw, 200px)', paddingBottom: 96 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 14,
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'var(--accent)',
              boxShadow: '0 0 0 4px color-mix(in oklab, var(--accent) 18%, transparent)',
              display: 'inline-block',
            }}
          />
          <span style={{ color: 'var(--accent)' }}>404</span>
          <span>Page not found</span>
        </div>

        <h1
          className="h-display"
          style={{ fontSize: 'clamp(56px, 10vw, 160px)', margin: 0 }}
        >
          A wrong
          <br />
          <em style={{ color: 'var(--accent)' }}>turn.</em>
        </h1>

        <p
          className="lede"
          style={{ marginTop: 32, maxWidth: '36ch' }}
        >
          The page <code style={{ fontFamily: 'var(--mono)', fontSize: '0.7em', color: 'var(--ink)' }}>
            {location.pathname}
          </code>{' '}
          doesn't exist — likely a mistyped URL or a moved page.
        </p>

        <div
          style={{
            marginTop: 48,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            alignItems: 'baseline',
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-2)',
          }}
        >
          <Link to="/" className="link-underline">← Back to portfolio</Link>
          <Link to="/resume" className="link-underline">View résumé</Link>
        </div>
      </main>
    </>
  );
}

export default NotFoundPage;
