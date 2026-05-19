import { Link } from 'react-router-dom';
import { Topbar } from '../components/Topbar';
import { projects } from '../data/projects';
import { experiences, profile, stack } from '../data/profile';
import { usePageMeta } from '../lib/hooks';

function ResumePage() {
  usePageMeta(
    'Résumé — Mritunjai Chauhan',
    'Résumé of Mritunjai Chauhan — engineer at Hirecentive shipping production AI SaaS across hiring, real-time voice, and multi-tenant systems.',
  );
  const handlePrint = () => window.print();

  return (
    <>
      <Topbar />

      {/* Floating screen-only actions */}
      <div
        data-print-hide
        style={{
          position: 'fixed',
          right: 16,
          top: 96,
          zIndex: 30,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <button
          type="button"
          onClick={handlePrint}
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '8px 12px',
            background: 'var(--bg)',
            color: 'var(--ink-2)',
            border: '1px solid var(--rule)',
            cursor: 'pointer',
          }}
        >
          Print / Save PDF
        </button>
        <a
          href={profile.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '8px 12px',
            background: 'var(--bg)',
            color: 'var(--ink-2)',
            border: '1px solid var(--rule)',
            textAlign: 'center',
          }}
        >
          Download PDF
        </a>
      </div>

      {/* Document — A4 proportioned */}
      <main
        className="print-page"
        style={{
          maxWidth: '210mm',
          margin: '0 auto',
          padding: 'clamp(48px, 8vw, 80px) clamp(28px, 5vw, 56px)',
        }}
      >
        <Link
          to="/"
          data-print-hide
          style={{
            display: 'inline-block',
            marginBottom: 40,
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
          }}
        >
          ← Back to portfolio
        </Link>

        {/* Header */}
        <header
          style={{
            borderBottom: '2px solid var(--ink)',
            paddingBottom: 18,
          }}
        >
          <h1
            className="h-display"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)', margin: 0 }}
          >
            {profile.name}
          </h1>
          <p
            style={{
              margin: '8px 0 0',
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(18px, 1.8vw, 22px)',
              color: 'var(--ink-2)',
            }}
          >
            Full-stack engineer · Hiring AI · Voice AI · Multi-tenant SaaS
          </p>
          <div
            style={{
              marginTop: 14,
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 12,
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.06em',
              color: 'var(--ink)',
            }}
          >
            <div>{profile.email}</div>
            <div>{profile.phone}</div>
            <div>{profile.location}</div>
            <div>{profile.domain}</div>
          </div>
        </header>

        {/* Summary */}
        <section style={{ marginTop: 28 }} className="avoid-break">
          <h2
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
              margin: '0 0 10px',
            }}
          >
            Summary
          </h2>
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--serif)',
              fontSize: 15,
              lineHeight: 1.55,
              color: 'var(--ink)',
            }}
          >
            Engineer at Hirecentive shipping four production AI SaaS products in 13 months —
            placement management, AI résumé optimization, real-time voice interview prep, and
            enterprise interview prep. Ownership across Convex schema design, real-time AI
            (Gemini Live, Amazon Nova Sonic), payment idempotency, and edge deployment on
            Cloudflare Workers.
          </p>
        </section>

        {/* Experience */}
        <section style={{ marginTop: 28 }}>
          <h2
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
              margin: '0 0 14px',
              paddingBottom: 6,
              borderBottom: '1px solid var(--rule)',
            }}
          >
            Experience
          </h2>
          {experiences.map((e) => (
            <article
              key={e.period}
              className="avoid-break"
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: 16,
                padding: '10px 0',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)',
                }}
              >
                {e.period}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 18,
                    lineHeight: 1.15,
                    color: 'var(--ink)',
                  }}
                >
                  {e.org}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    color: 'var(--ink-3)',
                  }}
                >
                  {e.title}
                </div>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: 'var(--ink-2)',
                  }}
                >
                  {e.body}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Selected work */}
        <section style={{ marginTop: 28 }}>
          <h2
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
              margin: '0 0 14px',
              paddingBottom: 6,
              borderBottom: '1px solid var(--rule)',
            }}
          >
            Selected Work
          </h2>
          {projects.map((p) => (
            <article
              key={p.id}
              className="avoid-break"
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: 16,
                padding: '10px 0',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)',
                }}
              >
                {p.details.period ?? '—'}
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 18,
                      lineHeight: 1.15,
                      color: 'var(--ink)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 10,
                        color: 'var(--ink-3)',
                        marginRight: 6,
                      }}
                    >
                      {p.n}
                    </span>
                    {p.title}
                    {p.variant && (
                      <em style={{ color: 'var(--ink-2)', fontStyle: 'italic' }}>
                        {' '}
                        — {p.variant}
                      </em>
                    )}
                  </span>
                  {p.details.demo && (
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 10,
                        color: 'var(--ink-3)',
                      }}
                    >
                      {p.details.demo.replace(/^https?:\/\//, '')}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: 'var(--ink-2)',
                  }}
                >
                  {p.description}
                </p>
                {p.details.metrics && (
                  <div
                    style={{
                      marginTop: 6,
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '4px 14px',
                      fontFamily: 'var(--mono)',
                      fontSize: 10.5,
                    }}
                  >
                    {p.details.metrics.map((m) => (
                      <span key={m.label}>
                        <span style={{ color: 'var(--ink)' }}>{m.value}</span>{' '}
                        <span style={{ color: 'var(--ink-3)' }}>{m.label}</span>
                      </span>
                    ))}
                  </div>
                )}
                <div
                  style={{
                    marginTop: 6,
                    fontFamily: 'var(--mono)',
                    fontSize: 10.5,
                    color: 'var(--ink-2)',
                    lineHeight: 1.5,
                  }}
                >
                  {p.details.technologies.slice(0, 10).join(' · ')}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Stack */}
        <section style={{ marginTop: 28 }}>
          <h2
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
              margin: '0 0 14px',
              paddingBottom: 6,
              borderBottom: '1px solid var(--rule)',
            }}
          >
            Technical Stack
          </h2>
          {stack.map((row) => (
            <div
              key={row.category}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: 16,
                padding: '6px 0',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)',
                }}
              >
                {row.category}
              </div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 12,
                  color: 'var(--ink)',
                }}
              >
                {row.items.join(' · ')}
              </div>
            </div>
          ))}
        </section>

        {/* Education + Links */}
        <section
          style={{
            marginTop: 28,
            display: 'grid',
            gridTemplateColumns: '140px 1fr',
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
            }}
          >
            Education
          </div>
          <div style={{ fontSize: 13, color: 'var(--ink)' }}>
            B.Tech, Computer Science Engineering · Bennett University · 2022 — present
          </div>
        </section>

        <section
          style={{
            marginTop: 12,
            display: 'grid',
            gridTemplateColumns: '140px 1fr',
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
            }}
          >
            Links
          </div>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              color: 'var(--ink)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 14,
            }}
          >
            <a href={profile.github}>github.com/mritunjaichauhan</a>
            <a href={profile.linkedin}>linkedin.com/in/mritunjai-chauhan</a>
            <span>{profile.domain}</span>
          </div>
        </section>

        <footer
          style={{
            marginTop: 36,
            paddingTop: 12,
            borderTop: '1px solid var(--rule)',
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '0.06em',
            color: 'var(--ink-3)',
          }}
        >
          Set in Instrument Serif, Inter Tight, JetBrains Mono
        </footer>
      </main>
    </>
  );
}

export default ResumePage;
