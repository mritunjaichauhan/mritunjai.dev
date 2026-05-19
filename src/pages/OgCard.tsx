import photo from '../components/photu.jpeg';
import { profile } from '../data/profile';
import { heroMetricsForOg } from '../data/og';

/**
 * /og — pixel-fixed 1200×630 social-share card.
 *
 * HOW TO EXPORT
 * 1. `pnpm dev` and visit /og
 * 2. Open Chrome DevTools (⌘⌥I)
 * 3. Find the <div id="og-canvas"> element in the Elements panel
 * 4. Cmd+Shift+P → type "Capture node screenshot" → Enter
 * 5. Save the resulting 1200×630 PNG to `public/og.png`
 *
 * Background is intentionally rendered at exact pixel size — the screenshot
 * will be 1200×630 regardless of your monitor or zoom.
 */
function OgCard() {
  // /og?raw=1 → strip the wrapper for headless-chrome capture at 1200×630
  const raw =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('raw') === '1';

  return (
    <div
      style={
        raw
          ? {
              minHeight: 630,
              background: 'transparent',
              display: 'block',
              padding: 0,
              margin: 0,
            }
          : {
              minHeight: '100vh',
              background: '#22201c',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 24,
              padding: 32,
            }
      }
    >
      {!raw && (
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgba(245,241,232,0.65)',
            textAlign: 'center',
            maxWidth: 720,
            lineHeight: 1.7,
          }}
        >
          OG preview · 1200 × 630 · DevTools → Elements → select{' '}
          <code style={{ color: '#e07856' }}>#og-canvas</code> → ⌘⇧P "Capture node screenshot" →
          save as <code style={{ color: '#e07856' }}>public/og.png</code>
        </div>
      )}

      {/* THE CANVAS — exact 1200×630, flex column so each band claims its own row */}
      <div
        id="og-canvas"
        style={{
          width: 1200,
          height: 630,
          background: '#f4f1ea',
          color: '#1b1a17',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: '"Inter Tight", system-ui, sans-serif',
          boxShadow: raw ? 'none' : '0 30px 80px -20px rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          padding: '52px 72px',
        }}
      >
        {/* Diagonal-hatch paper texture (very subtle) */}
        <svg
          width="1200"
          height="630"
          style={{ position: 'absolute', inset: 0, opacity: 0.025, pointerEvents: 'none' }}
          aria-hidden
        >
          <defs>
            <pattern id="bg-hatch" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0" stroke="#1b1a17" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1200" height="630" fill="url(#bg-hatch)" />
        </svg>

        {/* Eyebrow row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 13,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#8a857a',
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: 'oklch(0.62 0.13 45)',
                boxShadow: '0 0 0 4px rgba(194,65,12,0.18)',
                display: 'inline-block',
              }}
            />
            <span style={{ color: 'oklch(0.62 0.13 45)', fontWeight: 500 }}>01</span>
            <span>Engineer · Hirecentive</span>
          </div>
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 13,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#8a857a',
            }}
          >
            {profile.domain}
          </div>
        </div>

        {/* Middle row — grows to fill remaining height */}
        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: 'grid',
            gridTemplateColumns: '1fr 320px',
            gap: 56,
            alignItems: 'center',
            paddingTop: 8,
            paddingBottom: 24,
          }}
        >
          <div style={{ minWidth: 0 }}>
            <h1
              style={{
                margin: 0,
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontWeight: 400,
                fontSize: 108,
                lineHeight: 0.94,
                letterSpacing: '-0.025em',
                color: '#1b1a17',
              }}
            >
              Mritunjai
              <br />
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'oklch(0.62 0.13 45)',
                }}
              >
                Chauhan
              </em>
            </h1>
            <p
              style={{
                margin: '22px 0 0',
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: 26,
                lineHeight: 1.25,
                color: '#3a3833',
                maxWidth: '28ch',
              }}
            >
              Building production AI products across{' '}
              <em style={{ fontStyle: 'italic' }}>hiring</em>, voice, and SaaS.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div
              style={{
                position: 'relative',
                width: 320,
                height: 380,
                border: '1px solid rgba(27,26,23,0.14)',
                borderRadius: 4,
                overflow: 'hidden',
                background: '#ebe6db',
              }}
            >
              <img
                src={photo}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'saturate(0.94) contrast(1.02)',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  padding: '5px 9px',
                  background: '#f4f1ea',
                  border: '1px solid rgba(27,26,23,0.14)',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#3a3833',
                }}
              >
                /portrait · 01
              </span>
            </div>
          </div>
        </div>

        {/* Bottom strip — metrics, in normal flow at the bottom of the column */}
        <div
          style={{
            flexShrink: 0,
            paddingTop: 22,
            borderTop: '1px solid rgba(27,26,23,0.14)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <div style={{ display: 'flex', gap: 60 }}>
            {heroMetricsForOg.map((m) => (
              <div key={m.label}>
                <div
                  style={{
                    fontFamily: '"Instrument Serif", Georgia, serif',
                    fontSize: 36,
                    lineHeight: 1,
                    color: '#1b1a17',
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#8a857a',
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#8a857a',
              textAlign: 'right',
            }}
          >
            Hirecentive
            <br />
            Feb 2025 →
          </div>
        </div>
      </div>
    </div>
  );
}

export default OgCard;
