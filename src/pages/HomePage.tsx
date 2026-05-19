import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Topbar } from '../components/Topbar';
import { WorkList } from '../components/WorkList';
import { projects } from '../data/projects';
import {
  experiences,
  heroStats,
  marqueeItems,
  nowCard,
  profile,
  stack,
} from '../data/profile';
import { useReveal, usePageMeta } from '../lib/hooks';

function HomePage() {
  const location = useLocation();
  useReveal();
  usePageMeta(
    'Mritunjai Chauhan — Engineer · Hiring AI · Voice AI · SaaS',
    'Full-stack engineer building production AI products across hiring, real-time voice, and multi-tenant SaaS. Currently at Hirecentive.',
  );

  // Honor cross-page anchor scrolls (e.g. nav from a project detail page)
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const id = state.scrollTo;
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState({}, document.title);
      });
    }
  }, [location.state]);

  const featured = projects[0]; // PMS is the flagship

  return (
    <>
      <Topbar />

      {/* ─────────────────────────────── HERO ─────────────────────────────── */}
      <header className="hero shell" id="top">
        <div className="top reveal">
          <div className="eyebrow no-rule">
            <span className="num">01</span>
            <span>Index / Portfolio</span>
          </div>
          <div className="meta">
            {/* Name already in nav brand — hide on mobile to avoid duplication */}
            <div className="hide-sm">
              <b>{profile.name}</b>
            </div>
            <div>{profile.role}</div>
            <div>{profile.location}</div>
            <div>est. {profile.practiceSince}</div>
          </div>
        </div>

        <div className="title reveal">
          <div className="super">
            <span>★</span>
            <span>Engineer at Hirecentive</span>
          </div>
          <h1 className="h-display">
            <span className="hero-line">I build software that</span>
            <span className="hero-line indent">
              <em>ships</em> and stays shipped
              <span className="hero-arrow">↘</span>
            </span>
            <span className="hero-line">— real-time systems,</span>
            <span className="hero-line indent">multi-tenant SaaS.</span>
          </h1>
        </div>

        <div className="bottom reveal">
          {heroStats.map((s) => (
            <div key={s.k} className="stat">
              <div className="k">{s.k}</div>
              <div className="v" dangerouslySetInnerHTML={{ __html: s.v }} />
            </div>
          ))}
        </div>
      </header>

      {/* ─────────────────────────────── WORK ─────────────────────────────── */}
      <section className="section shell" id="work">
        <div className="work-head reveal">
          <div>
            <div className="eyebrow">
              <span className="num">02</span>
              <span>Selected Work</span>
            </div>
            <h2 className="h2" style={{ marginTop: 18 }}>
              Four products, <em>shipped at Hirecentive</em>
            </h2>
          </div>
          <div className="lede">
            Production AI SaaS across hiring, résumés, and <em>real-time voice</em> — schema to
            edge.
          </div>
        </div>

        <div className="reveal">
          <WorkList projects={projects} />
        </div>

        {/* Featured case study — flagship */}
        {featured && (
          <div className="feature reveal">
            <div className="ftext">
              <div className="pill">
                <span className="dot" />
                Featured · {featured.details.period ?? '2025'}
              </div>
              <h3 className="h2">
                {featured.title} —{' '}
                <em>{featured.variant ?? 'a multi-tenant placement OS'}</em>
              </h3>
              <p>{featured.details.overview}</p>
              <div className="stack">
                <div>
                  <div className="k">Role</div>
                  <div className="v">{featured.details.role?.split('—')[0]?.trim() ?? '—'}</div>
                </div>
                <div>
                  <div className="k">Live</div>
                  <div className="v">
                    {featured.details.demo?.replace(/^https?:\/\//, '') ?? '—'}
                  </div>
                </div>
                <div>
                  <div className="k">Backend</div>
                  <div className="v">Convex · 36 tables · 242 functions</div>
                </div>
                <div>
                  <div className="k">Voice</div>
                  <div className="v">Gemini Live · HMAC proxy</div>
                </div>
              </div>
            </div>
            <a
              href={featured.details.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="placeholder live-window"
              aria-label={`Open ${featured.title} live site in a new tab`}
              style={{ display: 'block', textDecoration: 'none', cursor: 'pointer' }}
            >
              <img
                className="live-window-img"
                src="/pms-preview.jpg"
                alt={`Live preview of ${featured.title}`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="tag">/pms · live</span>
              <span className="visit-cta">
                <span>Visit live</span>
                <span style={{ fontFamily: 'var(--mono)' }}>↗</span>
              </span>
              <span className="meta">
                pms.prepcv.com
                <br />
                Open ↗
              </span>
            </a>
          </div>
        )}

        {/* Marquee of stack keywords */}
        <div className="marquee" aria-hidden>
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((x, i) => (
              <span key={i}>{x}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── ABOUT ─────────────────────────────── */}
      <section className="section shell about" id="about">
        <div className="row">
          <div className="reveal">
            <div className="eyebrow">
              <span className="num">03</span>
              <span>About</span>
            </div>
            <h2 className="h2" style={{ marginTop: 18 }}>
              A note on <em>practice</em>
            </h2>
          </div>
          <div>
            <div className="about-body reveal">
              {profile.bio.map((p) => (
                <p key={p} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            <div className="now-card reveal" style={{ marginTop: 36 }}>
              <div className="head">
                <h4>Now</h4>
                <span className="when">{nowCard.updated}</span>
              </div>
              {nowCard.rows.map((r) => (
                <div key={r.k} className="row-k">
                  <div className="k">{r.k}</div>
                  <div className="v" dangerouslySetInnerHTML={{ __html: r.v }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── EXPERIENCE ─────────────────────────────── */}
      <section className="section shell" id="experience">
        <div className="row">
          <div className="reveal">
            <div className="eyebrow">
              <span className="num">04</span>
              <span>Experience</span>
            </div>
            <h2 className="h2" style={{ marginTop: 18 }}>
              Where I've <em>been</em>
            </h2>
          </div>
          <div className="reveal" style={{ borderTop: '1px solid var(--rule)' }}>
            {experiences.map((e) => (
              <div
                key={e.period}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr',
                  gap: 24,
                  padding: '22px 0',
                  borderBottom: '1px solid var(--rule)',
                  alignItems: 'baseline',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '0.08em',
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
                      fontSize: 24,
                      lineHeight: 1.15,
                      color: 'var(--ink)',
                    }}
                  >
                    {e.org}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11.5,
                      color: 'var(--ink-3)',
                      marginTop: 2,
                    }}
                  >
                    {e.title}
                  </div>
                  <p
                    style={{
                      margin: '10px 0 0',
                      fontSize: 15,
                      lineHeight: 1.6,
                      color: 'var(--ink-2)',
                      maxWidth: '52ch',
                    }}
                  >
                    {e.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── STACK ─────────────────────────────── */}
      <section className="section shell" id="stack">
        <div className="row">
          <div className="reveal">
            <div className="eyebrow">
              <span className="num">05</span>
              <span>Stack</span>
            </div>
            <h2 className="h2" style={{ marginTop: 18 }}>
              The <em>kit</em>
            </h2>
          </div>
          <div className="reveal" style={{ borderTop: '1px solid var(--rule)' }}>
            {stack.map((row) => (
              <div
                key={row.category}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr',
                  gap: 24,
                  padding: '14px 0',
                  borderBottom: '1px solid var(--rule)',
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
                    lineHeight: 1.7,
                  }}
                >
                  {row.items.join(' · ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── CONTACT ─────────────────────────────── */}
      <section className="section contact shell" id="contact">
        <div className="reveal">
          <div className="eyebrow">
            <span className="num">06</span>
            <span>Contact</span>
          </div>
          <h2 className="big" style={{ marginTop: 24 }}>
            Let's make
            <br />
            <em>something</em> good.
            <br />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </h2>
        </div>

        <div className="row2 reveal">
          <div className="blk">
            <h5>Currently</h5>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                color: 'var(--ink-2)',
                maxWidth: '36ch',
                lineHeight: 1.6,
              }}
            >
              At Hirecentive shipping four production AI SaaS. Open to new roles in
              founding-engineering, AI infra, or real-time systems. Full résumé linked.
            </p>
          </div>
          <div className="blk">
            <h5>Elsewhere</h5>
            <ul>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/resume">Résumé</a>
              </li>
            </ul>
          </div>
          <div className="blk">
            <h5>Direct</h5>
            <ul>
              <li>
                <a href={`mailto:${profile.email}`}>Email</a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </li>
              <li>
                <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer">
                  PDF Résumé
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="colophon">
          <span>© {profile.name}. Built in India.</span>
          <span>Set in Instrument Serif &amp; Inter Tight.</span>
        </div>
      </section>
    </>
  );
}

export default HomePage;
