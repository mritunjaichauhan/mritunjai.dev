import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Topbar } from '../components/Topbar';
import { projects } from '../data/projects';
import { usePageMeta, useReveal } from '../lib/hooks';

function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = projects.findIndex((p) => p.id === id);
  const project = index >= 0 ? projects[index] : undefined;
  const total = projects.length;
  const next = index >= 0 ? projects[(index + 1) % total] : undefined;

  useReveal();
  usePageMeta(
    project ? `${project.title} — Mritunjai Chauhan` : 'Not found — Mritunjai Chauhan',
    project?.description,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <>
        <Topbar />
        <main className="shell" style={{ paddingTop: 160 }}>
          <h1 className="h-display">Not found.</h1>
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              marginTop: 16,
              background: 'transparent',
              border: 0,
              color: 'var(--ink-2)',
              fontFamily: 'var(--mono)',
              fontSize: 12,
              cursor: 'pointer',
            }}
          >
            ← Index
          </button>
        </main>
      </>
    );
  }

  const { details } = project;

  return (
    <>
      <Topbar />

      <main className="shell" style={{ paddingTop: 'clamp(48px, 8vw, 96px)', paddingBottom: 96 }}>
        {/* Header bar */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            borderBottom: '1px solid var(--rule)',
            paddingBottom: 12,
            marginBottom: 'clamp(36px, 6vw, 64px)',
          }}
        >
          <button
            type="button"
            onClick={() => navigate('/', { state: { scrollTo: 'work' } })}
            style={{
              background: 'transparent',
              border: 0,
              color: 'var(--ink-2)',
              fontFamily: 'var(--mono)',
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            ← Index
          </button>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
            }}
          >
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        {/* Title + meta */}
        <section
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '7fr 5fr',
            gap: 'clamp(28px, 5vw, 80px)',
            alignItems: 'end',
          }}
        >
          <div>
            <div className="eyebrow no-rule" style={{ marginBottom: 18 }}>
              <span className="num">{project.n ?? '—'}</span>
              <span>{project.type}</span>
            </div>
            <h1 className="h-display" style={{ fontSize: 'clamp(48px, 8vw, 108px)' }}>
              {project.title}
              {project.variant && (
                <>
                  {' '}
                  <em>— {project.variant}</em>
                </>
              )}
            </h1>
            <p
              className="lede"
              style={{ marginTop: 28, maxWidth: '44ch' }}
            >
              {project.description}
            </p>
          </div>

          <dl
            className="detail-meta"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 18,
              borderTop: '1px solid var(--rule)',
              paddingTop: 18,
            }}
          >
            {details.role && (
              <div>
                <dt>Role</dt>
                <dd>{details.role}</dd>
              </div>
            )}
            {details.period && (
              <div>
                <dt>Period</dt>
                <dd style={{ fontFamily: 'var(--mono)' }}>{details.period}</dd>
              </div>
            )}
            {details.demo && (
              <div>
                <dt>Live</dt>
                <dd>
                  <a
                    href={details.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 13 }}
                  >
                    {details.demo.replace(/^https?:\/\//, '')} ↗
                  </a>
                </dd>
              </div>
            )}
            {details.github && (
              <div>
                <dt>Source</dt>
                <dd>
                  <a
                    href={details.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent)', fontFamily: 'var(--mono)', fontSize: 13 }}
                  >
                    GitHub ↗
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </section>

        {/* Metric strip */}
        {details.metrics && details.metrics.length > 0 && (
          <section className="reveal metric-strip" style={{ marginTop: 'clamp(48px, 7vw, 88px)' }}>
            {details.metrics.map((m) => (
              <div key={m.label} className="cell">
                <div className="val">{m.value}</div>
                <div className="lab">{m.label}</div>
              </div>
            ))}
          </section>
        )}

        {/* Overview */}
        <section
          className="reveal row"
          style={{ marginTop: 'clamp(60px, 9vw, 96px)' }}
        >
          <div className="eyebrow" style={{ alignSelf: 'flex-start' }}>
            <span>Overview</span>
          </div>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(20px, 2vw, 28px)',
              lineHeight: 1.45,
              color: 'var(--ink)',
              margin: 0,
              maxWidth: '52ch',
            }}
          >
            {details.overview}
          </p>
        </section>

        {/* Case study marquee */}
        {details.caseStudy && details.caseStudy.length > 0 && (
          <section
            className="reveal"
            style={{
              marginTop: 'clamp(72px, 10vw, 120px)',
              borderTop: '1px solid var(--rule)',
              paddingTop: 'clamp(36px, 6vw, 64px)',
            }}
          >
            <div className="work-head" style={{ marginBottom: 'clamp(32px, 5vw, 56px)' }}>
              <div>
                <div className="eyebrow">
                  <span>Selected engineering</span>
                </div>
                <h2 className="h2" style={{ marginTop: 18 }}>
                  Deep <em>dives</em>
                </h2>
              </div>
              <div className="lede" style={{ maxWidth: '28ch' }}>
                The parts that took <em>judgment</em>, not just plumbing.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(44px, 6vw, 72px)' }}>
              {details.caseStudy.map((c, i) => (
                <article key={c.title} className="row">
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-3)',
                      }}
                    >
                      <span style={{ color: 'var(--accent)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>{' '}
                      / Engineering
                    </div>
                  </div>
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: 'var(--serif)',
                        fontSize: 'clamp(26px, 3vw, 38px)',
                        lineHeight: 1.15,
                        color: 'var(--ink)',
                        letterSpacing: '-0.012em',
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        margin: '14px 0 0',
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: 'var(--ink-2)',
                        maxWidth: '60ch',
                      }}
                    >
                      {c.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Impact / Features / Architecture / Stack */}
        {(['impact', 'features', 'architecture'] as const).map((field) => {
          const items =
            field === 'impact'
              ? details.impact
              : field === 'features'
                ? details.features
                : details.architecture;
          if (!items || items.length === 0) return null;
          const label = field.charAt(0).toUpperCase() + field.slice(1);
          return (
            <section
              key={field}
              className="reveal row"
              style={{
                marginTop: 'clamp(56px, 8vw, 96px)',
                borderTop: '1px solid var(--rule)',
                paddingTop: 'clamp(32px, 5vw, 56px)',
              }}
            >
              <div className="eyebrow" style={{ alignSelf: 'flex-start' }}>
                <span>{label}</span>
              </div>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {items.map((item, i) => (
                  <li
                    key={item}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '56px 1fr',
                      gap: 16,
                      padding: '16px 0',
                      borderBottom: '1px solid var(--rule)',
                      alignItems: 'baseline',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        color: 'var(--ink-3)',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      style={{
                        fontSize: 16,
                        lineHeight: 1.65,
                        color: 'var(--ink-2)',
                        maxWidth: '64ch',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          );
        })}

        {/* Stack */}
        {details.stack && details.stack.length > 0 && (
          <section
            className="reveal row"
            style={{
              marginTop: 'clamp(56px, 8vw, 96px)',
              borderTop: '1px solid var(--rule)',
              paddingTop: 'clamp(32px, 5vw, 56px)',
            }}
          >
            <div className="eyebrow" style={{ alignSelf: 'flex-start' }}>
              <span>Stack</span>
            </div>
            <div style={{ borderTop: '1px solid var(--rule)' }}>
              {details.stack.map((row) => (
                <div
                  key={row.category}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '140px 1fr',
                    gap: 16,
                    padding: '14px 0',
                    borderBottom: '1px solid var(--rule)',
                    alignItems: 'baseline',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
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
                      fontSize: 13,
                      color: 'var(--ink)',
                    }}
                  >
                    {row.items.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Next project */}
        {next && (
          <section
            style={{
              marginTop: 'clamp(72px, 10vw, 120px)',
              borderTop: '2px solid var(--ink)',
              paddingTop: 'clamp(32px, 5vw, 56px)',
            }}
          >
            <div
              className="eyebrow"
              style={{ marginBottom: 12 }}
            >
              <span>Next</span>
            </div>
            <Link
              to={`/project/${next.id}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: 24,
                transition: 'color .3s ease',
              }}
            >
              <h3
                className="h-display"
                style={{ fontSize: 'clamp(40px, 6vw, 80px)', margin: 0 }}
              >
                {next.title}
                {next.variant && <em> — {next.variant}</em>}
              </h3>
              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 14,
                  color: 'var(--accent)',
                }}
              >
                View →
              </span>
            </Link>
            <p
              style={{
                marginTop: 12,
                fontSize: 15,
                color: 'var(--ink-2)',
                maxWidth: '60ch',
              }}
            >
              {next.description}
            </p>
          </section>
        )}
      </main>
    </>
  );
}

export default ProjectPage;
